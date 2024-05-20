const bookingRequest={
    userId:null,
    chargingSlotId:null,
    timeSlotId:null,
    date:null
}

function chargeStationPage(chargepoint) {
  const chargeStationPage = document.querySelector(".main_content");
  chargeStationPage.innerHTML = "";
  const BookingFormDiv = document.createElement('div');
  BookingFormDiv.className = 'BookingFormDiv';

  const header = document.createElement("div");
  header.className = "chargestationheader";
  BookingFormDiv.appendChild(header);

  const stationName = document.createElement("span");
  stationName.textContent = chargepoint.name;
  header.appendChild(stationName);

  const selectSlot = document.createElement("span");
  selectSlot.className = "selectslottip";
  selectSlot.textContent = "select available charging slot and choose date";
  header.appendChild(selectSlot);

  const chargingslotsContainer = document.createElement("div");
  chargingslotsContainer.classList.add("chargeslotscontainer");
  const chargingslotdropdownlist = document.createElement('select');
  chargingslotdropdownlist.className = 'chargingslotdropdownlist';
  const ChargingSlotdropdownLabel = document.createElement('label');
  ChargingSlotdropdownLabel.textContent = ' Select Chargin Points : ';
  ChargingSlotdropdownLabel.className = 'ChargingSlotdropdownLabel';
  chargingslotsContainer.appendChild(ChargingSlotdropdownLabel);
  chargingslotsContainer.appendChild(chargingslotdropdownlist);
  chargingslotdropdownlist.innerHTML = '<option value="">Select a Chraging Slot </option>';

  const datepickerSection = document.createElement("div");
  datepickerSection.classList.add("datepicker");

  const footerbuttons = document.createElement('div');
  footerbuttons.className = 'bookingfooter';
  const bookbtn = document.createElement("button");
  bookbtn.className = "bookbtn";
  bookbtn.textContent = "Book Now";
  bookbtn.onclick=()=>{
    bookSlot();
  }
  const canclebook = document.createElement("button");
  canclebook.textContent = "Cancle";
  canclebook.className = "canclebtn";
  canclebook.onclick = () =>{
    UserLandingPage();
  }
  footerbuttons.appendChild(bookbtn);
  footerbuttons.appendChild(canclebook);



  getAllChargingStationSlotsById(chargepoint.stationId).then((data) => {
    data.map((item) => {
      const listelement = document.createElement('option');
      const slotcard = document.createElement('div');
      
      slotcard.classList.add("chargingslotcard");
      const h3 =document.createElement('h3');
      h3.innerHTML = `Chargepoint ${item.slotId}`;
      const p = document.createElement("p");
      p.innerHTML = `Price: INR ${item.pricePerHour}`;
      
      renderDatepicker(datepickerSection, item.slotId, chargepoint.stationId);
      slotcard.onclick = () => {
        const allCards = document.querySelectorAll(".chargingslotcard");
        bookingRequest.chargingSlotId=item.slotId;
        allCards.forEach((card) => {
            card.classList.remove("selectedchargingslotcard");
        });
        chargeStationPage.appendChild(datepickerSection);

        slotcard.classList.add("selectedchargingslotcard");
      };
      slotcard.appendChild(h3);
      slotcard.appendChild(p);
      listelement.value = item.SlotId;
      listelement.text = `ID : ${item.slotId}  Price : ${item.pricePerHour}`;
      chargingslotdropdownlist.appendChild(listelement);
  

    });
  });
  BookingFormDiv.appendChild(chargingslotsContainer);
  BookingFormDiv.appendChild(datepickerSection);
  BookingFormDiv.appendChild(footerbuttons);
  chargeStationPage.appendChild(BookingFormDiv);
 
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

  datePickerSection.appendChild(timeslotContainer);
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

// function renderTimeSlots(timeslots) {
//   const datepicker = document.getElementById("date");
//   const selectedDate = new Date(datepicker.value);
//   const currentDate = new Date();
//   const hourCardsContainer = document.getElementById("timeslot");
//   hourCardsContainer.innerHTML = "";

//   if (selectedDate.toDateString() === currentDate.toDateString()) {
//     const currentHour = currentDate.getHours();
//     const currentMinute = currentDate.getMinutes();

//     const futureTimeSlots = timeslots.filter((slot) => {
//       return (
//         slot.startTime > currentHour ||
//         (slot.startTime === currentHour && slot.endTime > currentMinute)
//       );
//     });

//     futureTimeSlots.forEach((data) => {
//       const card = document.createElement("div");
//       card.classList.add("card");
//       card.textContent = `${data.startTime}:00 ` + "To " + `${data.endTime}:00`;
//       hourCardsContainer.appendChild(card);
//       card.onclick = () => {
//         bookingRequest.timeSlotId=data.timeSlotId;
//         // showBookingButton();
//         const allCards = document.querySelectorAll(".card");
//         allCards.forEach((card) => {
//           card.classList.remove("selected");
//         });
//         card.classList.add("selected");
//       };
//     });
//   } else if (selectedDate > currentDate) {
//     timeslots.map((data) => {
//       const card = document.createElement("div");
//       card.classList.add("card");
//       card.textContent = `${data.startTime}:00 ` + "To " + `${data.endTime}:00`;
//       hourCardsContainer.appendChild(card);
//       card.onclick = () => {
//         bookingRequest.timeSlotId=data.timeSlotId;
//         // showBookingButton();
//         const allCards = document.querySelectorAll(".card");
//         allCards.forEach((card) => {
//           card.classList.remove("selected");
//         });
//         card.classList.add("selected");
//       };
//     });
//   } else {
//     alert("please Don't Select Old Date");
//   }
// }
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

// function showBookingButton() {
//   const buttonfooter = document.querySelector('.bookingfooter');
//   const bookingbtngroup = document.createElement("div");
//   bookingbtngroup.className = "bookingbtngroup";
//   const bookbtn = document.createElement("button");
//   bookbtn.className = "bookbtn";
//   bookbtn.textContent = "Book Now";
//   bookbtn.onclick=()=>{
//     bookSlot();
//   }

//   const canclebook = document.createElement("button");
//   canclebook.textContent = "Cancle";
//   canclebook.className = "canclebtn";
//   canclebook.onclick = () =>{
//     UserLandingPage();

//   }

//   bookingbtngroup.appendChild(canclebook);
//   bookingbtngroup.appendChild(bookbtn);
//   buttonfooter.appendChild(bookingbtngroup);
// }

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