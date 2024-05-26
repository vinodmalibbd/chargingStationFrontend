let bookingRequest = {
  date: null,
  date: null,
  chargingSlotId: null,
  stationId: null,
};

let getslotrequest = {
  date: null,
  chargingSlotId: null,
  stationId: null,
  chargingSlotId: null,
  stationId: null,
};

function getCurrentDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function userBooking(chargepoint) {
  console.log(chargepoint);

  const BookingDiv = document.querySelector(".main_content");
  BookingDiv.innerHTML = "";

  const headingDiv = document.createElement("div");
  headingDiv.className = "BookingHeading";

  const bookingHeader = document.createElement("span");
  bookingHeader.className = "bookingSpan";
  bookingHeader.textContent = `${chargepoint.name}`;

  const stationAdderess = document.createElement("span");
  getAddress(chargepoint.latitude, chargepoint.longitude).then(
    (addr) => (stationAdderess.textContent = addr)
  );

  headingDiv.appendChild(bookingHeader);
  headingDiv.appendChild(stationAdderess);
  BookingDiv.appendChild(headingDiv);

  const chargePointCardsDiv = document.createElement("div");
  chargePointCardsDiv.className = "chargePointCardsDiv";
  BookingDiv.appendChild(chargePointCardsDiv);
  getslotrequest.stationId = chargepoint.stationId;

  getAllChargingStationSlotsById(chargepoint.stationId).then((data) => {
    if (data) {
      console.log(data);
      data.map((slots) => {
        if (slots.available) {
          generateChargPoints(slots);
        }
      });
    }
  });

  const UserFeedback = document.createElement("div");
  UserFeedback.className = "UserBookingFeedback";
  BookingDiv.appendChild(UserFeedback);
}

function generateChargPoints(slots) {
  bookingRequest.chargingSlotId = slots.slotId;
  const chargePointcard = document.createElement("div");
  chargePointcard.className = "chargePointcard";

  const chargePointInfo = document.createElement("div");
  chargePointInfo.className = "chargePointInfo";

  const chargepointId = document.createElement("span");
  chargepointId.textContent = "Charging Point: ";

  const chargepointIdNo = document.createElement("span");
  chargepointIdNo.textContent = `${slots.slotId}`;
  chargepointIdNo.className = "sp1";
  chargepointId.appendChild(chargepointIdNo);

  const Price = document.createElement("span");
  Price.textContent = "Price :";

  const PriceAmount = document.createElement("span");
  PriceAmount.textContent = `₹${slots.pricePerHour}`;
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
  userBookingButton.onclick = () => {
    const selectedTimeslot = timeSlotList.value;
    console.log(selectedTimeslot);
    console.log(bookingDatePicker.value);
    console.log(slots.slotId);

    const token = sessionStorage.getItem("web-vb-token");
    if (token) {
      const decodedtoken = decodeJwtToken(token);
      const userId = decodedtoken.sub;
      const data = {
        date: new Date(bookingDatePicker.value),
        chargingSlotId: Number(slots.slotId),
        userId: Number(userId),
        timeSlotId: Number(timeSlotList.value),
      };
      console.log(data);
      createBooking(data).then((res) => {
        console.log(res);
        createSucessPopUpBox("Thank you for using our service");
      });
    } else {
      createPOPUP("user");
    }
  };

  BookingButtonGroup.appendChild(userBookingButton);
  chargePointcard.appendChild(BookingButtonGroup);

  const chargePointCardsDiv = document.querySelector(".chargePointCardsDiv");
  chargePointCardsDiv.appendChild(chargePointcard);

  bookingDatePicker.onchange = () => {
    generateTimeSlot(slots.slotId, bookingDatePicker.value, timeSlotList);
  };

  generateTimeSlot(slots.slotId, bookingDatePicker.value, timeSlotList);
}

async function generateTimeSlot(slotId, date, timeSlotList) {
  timeSlotList.innerHTML = "";
  getslotrequest.chargingSlotId = slotId;
  getslotrequest.date = date;
  try {
    const data = await getSlotAvailblity(getslotrequest);
    const currentdate = new Date();
    const currentHour = currentdate.getHours();
    data.forEach((timeslot) => {
      const startHour = timeslot.startTime;
      const endHour = timeslot.endTime;
      if (
        new Date(date).setHours(startHour) >= currentdate.setHours(currentHour)
      ) {
        const timeslotoption = document.createElement("option");
        timeslotoption.value = timeslot.timeSlotId;
        timeslotoption.textContent = `${timeslot.startTime}:00 To ${timeslot.endTime}:00`;
        timeSlotList.appendChild(timeslotoption);
      }
    });
  } catch (error) {
    console.error("Error fetching time slots:", error);
  }
}
