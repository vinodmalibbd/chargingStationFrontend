const bookingRequest={
    userId:null,
    chargingSlotId:null,
    timeSlotId:null,
    date:null
}

function chargeStationPage(chargepoint) {
  const ChargingStationPage = document.querySelector('.main_content');
  ChargingStationPage.innerHTML = " ";

  const BookingFormDiv = document.createElement('div');
  BookingFormDiv.className = 'BookingFormDiv';
  
  const header = document.createElement("div");
  header.className = "chargestationheader";
  BookingFormDiv.appendChild(header);
  const h3 =document.createElement('h3');
  h3.textContent = chargepoint.name;
  const span = document.createElement('span');
  span.className = 'stationAddress';
  getAddress(chargepoint.latitude, chargepoint.longitude).then(address => span.textContent = address);
  header.appendChild(h3);
  header.appendChild(span);
  const chargingstaionBooking = document.createElement('div');
  chargingstaionBooking.className = 'chargingstaionBooking';
  const chargingSlotDropdownList = document.createElement('select');
  chargingSlotDropdownList.className = 'chargingSlotDropdownList';
  const chargingSlotDropdownListLabel = document.createElement('label');
  chargingSlotDropdownListLabel.textContent = 'Select Slot : ';
  chargingstaionBooking.appendChild(chargingSlotDropdownListLabel);
  chargingstaionBooking.appendChild(chargingSlotDropdownList);
  BookingFormDiv.appendChild(chargingstaionBooking);
  ChargingStationPage.appendChild(BookingFormDiv);


  const tempdiv =document.createElement('div');


  getAllChargingStationSlotsById(chargepoint.stationId).then((data) => {
    const chargingslotDropdown = document.getElementsByClassName("chargingSlotDropdownList")[0];
    
    if (chargingslotDropdown) {
      console.log('Dropdown found');
      chargingslotDropdown.innerHTML = '<option value="">Select a timeslot</option>';
      
      data.forEach((item) => {
        const listelement = document.createElement('option');
        listelement.value = item.slotId;
        listelement.text = `ID : ${item.slotId}  Price : ₹${item.pricePerHour}`;
        chargingslotDropdown.appendChild(listelement);
       
      });
      
    } else {
      console.error("No element found with the class 'chargingSlotDropdownList'");
    }
  });
  getAllChargingStationSlotsById(chargepoint.stationId).then((data) => {
    data.forEach((item) =>{

      renderDatepicker(tempdiv, item.slotId, chargepoint.stationId);

    });
  });
  chargingstaionBooking.appendChild(tempdiv);
}

function renderDatepicker(datePickerSection, selectedSlotid, stationId) {
  let selectedDate;
  datePickerSection.innerHTML = "";

  const datepickerTitle = document.createElement("span");
  datepickerTitle.textContent = "Select Date:";

  const datePickerInput = document.createElement("input");
  datePickerInput.type = "date";
  datePickerInput.id = "date";
  datePickerInput.value = getCurrentDate();
  console.log(datePickerInput.value);
  datePickerInput.name = "date";
  datePickerInput.min = getCurrentDate();
  selectedDate = datePickerInput.value;
  bookingRequest.date=selectedDate;
  const requestBody = {
    chargingSlotId: selectedSlotid,
    date: selectedDate,
    stationId,
  };
  getSlotAvailblity(requestBody).then((data) => {
    renderTimeSlots(data);
  })
  datePickerInput.onchange = (e) => {
    selectedDate = e.target.value;
    bookingRequest.date=selectedDate;
    const requestBody = {
      chargingSlotId: selectedSlotid,
      date: selectedDate,
      stationId,
    };
    getSlotAvailblity(requestBody).then((data) => {
      renderTimeSlots(data);
    });
  };
  datePickerSection.appendChild(datepickerTitle);
  datePickerSection.appendChild(datePickerInput);

  const timeslotContainer = document.createElement("div");
  timeslotContainer.id = "timeslot";
  timeslotContainer.classList.add("timeslot");

  // datePickerSection.appendChild(timeslotContainer);
  const timeslotDropdown = document.createElement('div');
  timeslotDropdown.className = 'timeslotDropdown';
  const labeltimeslot = document.createElement('label');
  labeltimeslot.className = 'labeltimeslot';
  labeltimeslot.textContent = 'Available Time Slots :  ';
  const droplist = document.createElement('select');
  droplist.id="timeSlotsDrop";
  timeslotDropdown.appendChild(labeltimeslot);
  timeslotDropdown.appendChild(droplist);
  datePickerSection.appendChild(timeslotDropdown);
 
}

//chatgpt function
function renderTimeSlots(timeslots) {
  const datepicker = document.getElementById("date");
  const selectedDate = new Date(datepicker.value);
  const currentDate = new Date();
  const timeslotDropdown = document.getElementById("timeSlotsDrop");
  timeslotDropdown.innerHTML = '<option value="">Select a timeslot</option>';

  if (selectedDate.toDateString() === currentDate.toDateString()) {
      const currentHour = currentDate.getHours();
      const currentMinute = currentDate.getMinutes();

      const futureTimeSlots = timeslots.filter((slot) => {
          return (
              slot.startTime > currentHour ||
              (slot.startTime === currentHour && slot.endTime > currentMinute)
          );
      });

      futureTimeSlots.forEach((data) => {
          const option = document.createElement("option");
          option.value = data.timeSlotId;
          option.text = `${data.startTime}:00 To ${data.endTime}:00`;
          timeslotDropdown.appendChild(option);
      });
  } else if (selectedDate > currentDate) {
      timeslots.forEach((data) => {
          const option = document.createElement("option");
          option.value = data.timeSlotId;
          option.text = `${data.startTime}:00 To ${data.endTime}:00`;
          timeslotDropdown.appendChild(option);
      });
  } else {
      alert("Please don't select an old date");
  }
}


function bookSlot() {
    if(bookingRequest.chargingSlotId!==null ||bookingRequest.date !==null ||bookingRequest.timeSlotId !==null){
        const token = sessionStorage.getItem("web-vb-token");
        if (token) {
          const decodedtoken = decodeJwtToken(token);
          const userId = decodedtoken.sub;
          if(userId){
              bookingRequest.userId=userId;
              createBooking(bookingRequest)
              createSucessPopUpBox("Booking confirmed...","/user")
          }
        } else{
          createPOPUP("user");
        }
    }
}
function getCurrentDateFormatted() {
  let date = new Date();
  let year = date.getUTCFullYear();
  let month = String(date.getUTCMonth() + 1).padStart(2, '0');
  let day = String(date.getUTCDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}
function getCurrentDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}