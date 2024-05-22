let bookingRequest={
    userId:null,
    chargingSlotId:null,
    timeSlotId:null,
    date:null
}
let charginStationId;
let timeslotsByData;

function getCurrentDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}


async function chargeStationPage(chargingStation) {
  charginStationId=chargingStation.stationId;
  
  const ChargingStationPage = document.querySelector('.main_content');
  ChargingStationPage.innerHTML = " ";
  bookingRequest.chargingSlotId=chargingStation.chargingSlots[0].slotId;
  bookingRequest.date=new Date()
  firsttime();
  
  const BookingFormDiv = document.createElement('div');
  BookingFormDiv.className = 'BookingFormDiv';
  ChargingStationPage.appendChild(BookingFormDiv)
  
  const header = document.createElement("div");
  header.className = "chargestationheader";
  BookingFormDiv.appendChild(header);

  const h3 =document.createElement('h3');
  h3.textContent = chargingStation.name;

  const span = document.createElement('span');
  span.className = 'stationAddress';
  getAddress(chargingStation.latitude, chargingStation.longitude).then(address => span.textContent = address);

  header.appendChild(h3);
  header.appendChild(span);

  const chargingstaionBooking = document.createElement('div');
  chargingstaionBooking.className = 'chargingstaionBooking';
  BookingFormDiv.appendChild(chargingstaionBooking);

  const SlotDiv = document.createElement('div');
  SlotDiv.className = 'SlotDiv';
  const SlotLabel = document.createElement('label');
  SlotLabel.className = 'SlotLabel';
  SlotLabel.textContent = 'Charging Slot : ';
  SlotDiv.appendChild(SlotLabel);

  const datepickerDiv = document.createElement('div');
  datepickerDiv.className = 'datepickerDiv';
  const datepickerLabel = document.createElement('label');
  datepickerLabel.className = 'datepickerLabel';
  datepickerLabel.textContent = ' Date : ';
  datepickerDiv.appendChild(datepickerLabel);

  const timeslotDiv = document.createElement('div');
  timeslotDiv.className = 'timeslotDiv';
 

  const BookingButtons = document.createElement('div');
  BookingButtons.className = 'BookingButtons';

  const bookingbtn = document.createElement('button');
  bookingbtn.className = 'bookingbtn';
  bookingbtn.textContent = 'BOOK SLOT';
  bookingbtn.onclick = (e) =>{
    e.preventDefault();
    bookSlot();
  
  }
  const cancelBtn = document.createElement('button');
  cancelBtn.className = 'cancelBtn';
  cancelBtn.textContent = 'CANCEL';

  cancelBtn.onclick = (e) =>{
    e.preventDefault();
    UserLandingPage();
    
  }

  BookingButtons.appendChild(bookingbtn);
  BookingButtons.appendChild(cancelBtn);



  chargingstaionBooking.appendChild(SlotDiv);
  chargingstaionBooking.appendChild(datepickerDiv);
  chargingstaionBooking.appendChild(timeslotDiv);
  chargingstaionBooking.appendChild(BookingButtons);

  const slots = await getAllChargingStationSlotsById(chargingStation.stationId)
    console.log(slots);
  if (slots && slots.length > 0){
    const slotSelect = createSlotDropdown(slots);
    SlotDiv.appendChild(slotSelect);
  
    const datePicker = createDatepicker();
    datepickerDiv.appendChild(datePicker);
  

    populateTimeSlotsDropdown(datePicker.value, chargingStation.openTime, chargingStation.closeTime);
  }else {
    console.error('No slots available for this station.');
  }

  
 
}

// Function to create and populate the slot dropdown list
function createSlotDropdown(slots) {
  const slotSelect = document.createElement('select');
  slotSelect.id = 'slot-select';
  slotSelect.onchange=(e)=>{
    updateBookingRequest();
  }

  slots.forEach(slot => {
      const option = document.createElement('option');
      option.value = slot.slotId;
      option.textContent = `Slot : ${slot.slotId} Price : ₹${slot.pricePerHour}`;
      slotSelect.appendChild(option);
  });
  return slotSelect;
}

function createDatepicker(openTime,closeTime) {
  const datePicker = document.createElement('input');
  datePicker.type = 'date';
  datePicker.id = 'date-picker';
  const todaydate = getCurrentDate();
  datePicker.min = todaydate; 
  datePicker.value = todaydate; 
  datePicker.onchange = (event) =>{
    const selectedDate = event.target.value;
    updateBookingRequest();
    populateTimeSlotsDropdown(selectedDate);
  }
  return datePicker;
}

function populateTimeSlotsDropdown(selectedDate) {
  const timeSlotsSelect = createTimeSlotsDropdown(selectedDate);
  const timsloddiv=document.querySelector('.timeslotDiv');
  timsloddiv.innerHTML='';
  const timeslotLabel = document.createElement('label');
  timeslotLabel.className = 'timeslotLabel';
  timeslotLabel.textContent = 'Time Slot : ';
  timsloddiv.appendChild(timeslotLabel);
  timsloddiv.appendChild(timeSlotsSelect);
}

function createTimeSlotsDropdown(selectedDate) {
  const timeSlotsSelect = document.createElement('select');
  timeSlotsSelect.id = 'time-slots-select';
  timeSlotsSelect.onchange=(e)=>{
    updateBookingRequest();
  }
  if(timeslotsByData){
    console.log(timeslotsByData);
    timeslotsByData.map(item=>{
      const option = document.createElement('option');
            option.value = item.timeSlotId;
            option.textContent = `${item.startTime}:00 - ${item.endTime}:00`;
            timeSlotsSelect.appendChild(option);
    })
  }

  return timeSlotsSelect;
}


function bookSlot() {
  const slotId = document.getElementById('slot-select').value;
  const date = document.getElementById('date-picker').value;
  const timeSlot = document.getElementById('time-slots-select').value;
  const token=sessionStorage.getItem('web-vb-token');
  if(token){
    const decodedtoken = decodeJwtToken(token);
    const userId = decodedtoken.sub;
    const data={
      date: new Date(date),
      chargingSlotId: Number(slotId),
      stationId: Number(charginStationId),
      userId:Number(userId),
      timeSlotId:Number(timeSlot)
    }

    createBooking(data).then(res=>{
      createSucessPopUpBox("thank you for using our service")
    })
  } else {
    createPOPUP("user")
  }
 
}


function updateBookingRequest() {
  const slotId = document.getElementById('slot-select').value;
  const date = document.getElementById('date-picker').value;
  const timeSlot = document.getElementById('time-slots-select').value;
  bookingRequest.chargingSlotId = slotId;
  bookingRequest.date = date;
  bookingRequest.timeSlotId = timeSlot;
  const data={
        date: new Date(date),
        chargingSlotId: Number(slotId),
        stationId: Number(charginStationId)
  }
  getSlotAvailblity(data).then(res=>{
    timeslotsByData=res;
  })
}
function firsttime(){
  const data={
    date: new Date(bookingRequest.date),
    chargingSlotId: Number(bookingRequest.chargingSlotId),
    stationId: Number(charginStationId)
}
  getSlotAvailblity(data).then(res=>{
  timeslotsByData=res;
})
}
