const bookingRequest={
    userId:null,
    chargingSlotId:null,
    timeSlotId:null,
    date:null
}

function chargeStationPage(chargepoint) {
  const chargeStationPage = document.querySelector(".main_content");
  chargeStationPage.innerHTML = "";

  const header = document.createElement("div");
  header.className = "chargestationheader";
  chargeStationPage.appendChild(header);

  const stationName = document.createElement("span");
  stationName.textContent = chargepoint.name;
  header.appendChild(stationName);

  const selectSlot = document.createElement("span");
  selectSlot.className = "selectslottip";
  selectSlot.textContent = "select available charging slot and choose date";
  chargeStationPage.appendChild(selectSlot);

  const chargingslotsContainer = document.createElement("div");
  chargingslotsContainer.classList.add("chargeslotscontainer");

  const datepickerSection = document.createElement("div");
  datepickerSection.classList.add("datepicker");

  const bookingFooter = document.createElement("div");
  bookingFooter.className = "chargestationfooter";

  getAllChargingStationSlotsById(chargepoint.stationId).then((data) => {
    data.map((item) => {
      const slotcard = document.createElement("div");
      slotcard.classList.add("chargingslotcard");
      const p = document.createElement("p");
      // p.textContent = `chargepoint ${item.slotId}`;
      p.innerHTML = `Chargepoint ${item.slotId}<br>Price: INR ${item.pricePerHour}`;
      slotcard.onclick = () => {
        renderDatepicker(datepickerSection, item.slotId, chargepoint.stationId);
        const allCards = document.querySelectorAll(".chargingslotcard");
        bookingRequest.chargingSlotId=item.slotId;
        allCards.forEach((card) => {
            card.classList.remove("selectedchargingslotcard");
        });
        slotcard.classList.add("selectedchargingslotcard");
      };
      slotcard.appendChild(p);
      chargingslotsContainer.appendChild(slotcard);
    });
  });
  chargeStationPage.appendChild(chargingslotsContainer);
  chargeStationPage.appendChild(datepickerSection);
  chargeStationPage.appendChild(bookingFooter);
}
function renderDatepicker(datePickerSection, selectedSlotid, stationId) {
  let selectedDate;
  datePickerSection.innerHTML = "";

  const datepickerTitle = document.createElement("span");
  datepickerTitle.textContent = "Select Date:";

  const datePickerInput = document.createElement("input");
  datePickerInput.type = "date";
  datePickerInput.id = "date";
  datePickerInput.name = "date";
  datePickerInput.min = new Date().toISOString().split("T")[0];
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
}

function renderTimeSlots(timeslots) {
  const datepicker = document.getElementById("date");
  const selectedDate = new Date(datepicker.value);
  const currentDate = new Date();
  const hourCardsContainer = document.getElementById("timeslot");
  hourCardsContainer.innerHTML = "";

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
      const card = document.createElement("div");
      card.classList.add("card");
      card.textContent = `${data.startTime}:00 ` + "To " + `${data.endTime}:00`;
      hourCardsContainer.appendChild(card);
      card.onclick = () => {
        bookingRequest.timeSlotId=data.timeSlotId;
        showBookingButton();
        const allCards = document.querySelectorAll(".card");
        allCards.forEach((card) => {
          card.classList.remove("selected");
        });
        card.classList.add("selected");
      };
    });
  } else if (selectedDate > currentDate) {
    timeslots.map((data) => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.textContent = `${data.startTime}:00 ` + "To " + `${data.endTime}:00`;
      hourCardsContainer.appendChild(card);
      card.onclick = () => {
        bookingRequest.timeSlotId=data.timeSlotId;
        showBookingButton();
        const allCards = document.querySelectorAll(".card");
        allCards.forEach((card) => {
          card.classList.remove("selected");
        });
        card.classList.add("selected");
      };
    });
  } else {
    alert("please Don't Select Old Date");
  }
}
function showBookingButton() {
  const bookingFooter = document.querySelector(".chargestationfooter");
  bookingFooter.innerHTML = "";

  const bookingbtngroup = document.createElement("div");

  bookingbtngroup.className = "bookingbtngroup";
  bookingFooter.appendChild(bookingbtngroup);

  const bookbtn = document.createElement("button");
  bookbtn.className = "bookbtn";
  bookbtn.textContent = "Book Now";
  bookbtn.onclick=()=>{
    bookSlot();
  }

  const canclebook = document.createElement("button");
  canclebook.textContent = "Cancle";
  canclebook.className = "canclebtn";

  bookingbtngroup.appendChild(canclebook);
  bookingbtngroup.appendChild(bookbtn);
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
        }
    }
}
