let bookingRequest = {
  userId: null,
  chargingSlotId: null,
  timeSlotId: null,
  date: null,
};

function getCurrentDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

async function userBooking() {
  // let chargingSlots = getAllChargingStationSlots

  const BookingDiv = document.querySelector(".main_content");
  BookingDiv.innerHTML = "";

  const headingDiv = document.createElement("div");
  headingDiv.className = "BookingHeading";

  const bookingHeader = document.createElement("span");
  bookingHeader.className = "bookingSpan";
  bookingHeader.textContent = "Kalyani Charging Point";

  const stationAdderess = document.createElement("span");
  stationAdderess.textContent =
    "Fortaleza Complex, 5, Central Ave, Princeton Town Society, Prathamesh Society, Kalyani Nagar, Pune, Maharashtra 411006";

  headingDiv.appendChild(bookingHeader);
  headingDiv.appendChild(stationAdderess);
  BookingDiv.appendChild(headingDiv);

  const chargePointCardsDiv = document.createElement("div");
  chargePointCardsDiv.className = "chargePointCardsDiv";
  BookingDiv.appendChild(chargePointCardsDiv);
  const stationID = 1;

  const data = await getAllChargingStationSlots(stationID);
  if (data) {
    console.log(data);
    data.map((slots) => {
      const chargePointcard = document.createElement("div");
      chargePointcard.className = "chargePointcard";

      const chargePointInfo = document.createElement("div");
      chargePointInfo.className = "chargePointInfo";

      const chargepointId = document.createElement("span");
      chargepointId.textContent = "Charging Point: ";

      const chargepointIdNo = document.createElement("span");
      chargepointIdNo.textContent = "1";
      chargepointIdNo.className = "sp1";
      chargepointId.appendChild(chargepointIdNo);

      const Price = document.createElement("span");
      Price.textContent = "Price :";

      const PriceAmount = document.createElement("span");
      PriceAmount.textContent = " ₹200";
      PriceAmount.className = "sp1";
      Price.appendChild(PriceAmount);
      chargePointInfo.appendChild(chargepointId);
      chargePointInfo.appendChild(Price);
      chargePointcard.appendChild(chargePointInfo);

      const bookingDatePickerDiv = document.createElement("div");
      bookingDatePickerDiv.className = "bookingDatePickerDiv";

      const bookingDatePicker = document.createElement("input");
      bookingDatePicker.className = "bookingDatePicker";
      bookingDatePicker.type = "date";
      bookingDatePicker.value = getCurrentDate();
      bookingDatePicker.min = getCurrentDate();

      const DatePickerlabel = document.createElement("label");
      DatePickerlabel.className = "UserDatePickerSpan";
      DatePickerlabel.textContent = "Date : ";

      bookingDatePickerDiv.appendChild(DatePickerlabel);
      bookingDatePickerDiv.appendChild(bookingDatePicker);
      chargePointcard.appendChild(bookingDatePickerDiv);

      const BookingtimeslotDiv = document.createElement("div");
      BookingtimeslotDiv.className = "BookingtimeslotDiv";

      const timeSlotlabel = document.createElement("label");
      timeSlotlabel.className = "timeSlotlabel";
      timeSlotlabel.textContent = "Time Slot : ";

      const timeSlotList = document.createElement("select");
      timeSlotList.className = "timeSlotList";

      BookingtimeslotDiv.appendChild(timeSlotlabel);
      BookingtimeslotDiv.appendChild(timeSlotList);
      chargePointcard.appendChild(BookingtimeslotDiv);

      const BookingButtonGroup = document.createElement("div");
      BookingButtonGroup.className = "BookingButtonGroup";

      const userBookingButton = document.createElement("button");
      userBookingButton.className = "BookingButton";
      userBookingButton.textContent = "Book Now ";

      BookingButtonGroup.appendChild(userBookingButton);
      chargePointcard.appendChild(BookingButtonGroup);
      chargePointCardsDiv.appendChild(chargePointcard);
    });
  }

  const UserFeedback = document.createElement("div");
  UserFeedback.className = "UserFeedback";
  BookingDiv.appendChild(UserFeedback);
}

function createChargePointCards(chargingStation) {
  const slotsCards = document.querySelector(".chargePointDiv");
  // getAllChargingStationSlotsById(1).then(slots =>{

  //   console.log(slots);
  //   if(slots && slots.length > 0){
  //     slots.map(slot => {
  //       const chargingSlots = document.createElement('div');
  //       chargingSlots.className = 'charginSlot';

  //       const chargingSlotId = document.createElement('span');
  //       chargingSlotId.className = 'chargingSlotId';
  //       chargingSlotId.textContent = `Slot : ${slot.slotId}`;

  //       const chargingSlotPrice = document.createElement('span');
  //       chargingSlotPrice.className = 'chargingSlotPrice';
  //       chargingSlotPrice.textContent = `Price : ₹${slot.pricePerHour}`;

  //       chargingSlots.appendChild(chargingSlotId);
  //       chargingSlots.appendChild(chargingSlotPrice);

  //       slotsCards.appendChild(chargingSlots);
  //   });
  //   }
  //   else{
  //      const noslotAvailableslotsCards = document.createElement('div');
  //      noslotAvailableslotsCards.className = 'noslotAvailableslotsCards';

  //      const warningspan = document.createElement('span');
  //      warningspan.textContent = 'Warning';

  //      const warningspan01 = document.createElement('span');
  //      warningspan01.textContent ='No Chrging Slot Available for this Station';

  //      noslotAvailableslotsCards.appendChild(warningspan);
  //      noslotAvailableslotsCards.appendChild(warningspan01);
  //      chargePointDiv.appendChild(noslotAvailableslotsCards);
  //   }
  // });
}
