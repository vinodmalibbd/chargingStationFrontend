// function ShowBookingsfuncion(){
//   const ShowBookingsMainDiv = document.querySelector('.main_content');
//   ShowBookingsMainDiv.innerHTML = ' ';
//   const chargepointtab = document.createElement("div");
//     chargepointtab.className = "chargepointTab";
//     mainContentDiv.appendChild(chargepointtab);
  
//     const cardsContainer = document.createElement("div");
//     cardsContainer.className = "chargepointcardscontainer";
//     chargepointtab.appendChild(cardsContainer);
//     showAllUserBookings().then((data) => {
//       data.map((item) => {
//         const card = document.createElement("div");
//         card.textContent = item.name;
//         card.className = "chargepointcard";
//         card.onclick = () => {
//           ShowBookings(item);
//         };
//         cardsContainer.appendChild(card);
//         ShowBookingsMainDiv.appendChild(cardsContainer);
//       });
//     });

// }
const loginuser = async () => {
  window.location.href =`${backendurl}/auth/user`;
};

// function ShowBookingsfuncion(){

//   const UserLandingPage = document.querySelector(".main_content");
//   chargeStationPage.innerHTML = "";
//   const showBookingHeader =document.createElement('div');
//   showBookingHeader.className = 'showBookingHeader';
//   UserLandingPage.appendChild(showBookingHeader);
  
//   const showheadingBooking = document.createElement("span");
//   showheadingBooking.textContent = 'User Bookings';
//   showBookingHeader.appendChild(showheadingBooking);
//   const showBookingCardContainer =document.createElement('div');
//   showBookingCardContainer.className = 'showBookingCardContainer';
//   showAllUserBookings().then((data) => {
//     console.log(data);
//     data.map((item) => {
//       const showBookingcard = document.createElement("div");
//       showBookingcard.className = 'showBookingcard';
//       const StationNameSpan =document.createElement('span');
//       StationNameSpan.className = 'StationNameSpan';
//       const chargingpontid = document.createElement('span');
//       chargingpontid .className = 'chargingpontid';
//       const bookingDate = document.createElement('span');
//       bookingDate.className = 'bookingDate';
//       const bookingtime = document.createElement('span');
//       bookingtime.className = 'bookingtime';
//       const bookingAmount = document.createElement('span');
//       bookingAmount.className ='bookingAmount';
//       StationNameSpan.textContent = 'Station Name : Kalyani nagar charge Point';
//       chargingpontid.textContent = 'charge point id : 1';
//       bookingDate.textContent = 'Booking Date : 19/05/2024';
//       bookingtime.textContent = 'booking time : 10 '+' To 11';
//       const bookingStatus = document.createElement('span');
//       bookingStatus.textContent = 'Confirmed'
//       showBookingcard.appendChild(StationNameSpan);
//       showBookingCard.appendChild(chargingpontid);
//       showBookingcard.appendChild(bookingDate);
//       showBookingcard.appendChild(bookingtime);
//       showBookingcard.appendChild(bookingStatus);
//       showBookingCardContainer.appendChild(showBookingcard);
//     });

//    });
//   UserLandingPage.appendChild(showBookingCardContainer);

// }

function ShowBookingsfunction() {
  const UserLandingPage = document.querySelector(".main_content");
  UserLandingPage.innerHTML = " ";
  console.log('showbookings');
  const cardsContainershowBooking = document.createElement('div');
  cardsContainershowBooking.className = 'cardsContainershowBooking';
  UserLandingPage.appendChild(cardsContainershowBooking);
  const BookingheadingDiv = document.createElement('p');
  BookingheadingDiv.className = 'BookingheadingDiv';
  BookingheadingDiv.innerHTML = ' User Bookings';
  cardsContainershowBooking.appendChild(BookingheadingDiv);

  const bookings = [
    {
        stationName: "Station 1",
        slotId: "Slot A1",
        date: "2024-05-19",
        startTime: "10:00 AM",
        endTime: "11:00 AM"
    },
    {
        stationName: "Station 2",
        slotId: "Slot B2",
        date: "2024-05-20",
        startTime: "01:00 PM",
        endTime: "02:00 PM"
    },
];
  bookings.map(book => {
      console.log(book);
      const card = createBookingCard(book);
      
      cardsContainershowBooking.appendChild(card);
  });
}

function createBookingCard(booking) {
  const card = document.createElement('div');
  card.className = 'card';
  const cardelementDiv = document.createElement('div');
  cardelementDiv.className = 'cardelementDiv';
  card.appendChild(cardelementDiv);
  const stationName = document.createElement('h3');
  stationName.textContent = booking.stationName;

  const slotId = document.createElement('p');
  slotId.textContent = `Slot ID: ${booking.slotId}`;

  const date = document.createElement('p');
  date.textContent = `Date: ${booking.date}`;

  const startTime = document.createElement('p');
  startTime.textContent = `Start Time: ${booking.startTime}`;

  const endTime = document.createElement('p');
  endTime.textContent = `End Time: ${booking.endTime}`;
  const DivcancelBookingButton =document.createElement('div');
  DivcancelBookingButton.className = 'DivcancelBookingButton';
  const cancelBookingButton = document.createElement('button');
  cancelBookingButton.className = 'cancelBookingButton';
  cancelBookingButton.textContent = 'Cancel';
  DivcancelBookingButton.appendChild(cancelBookingButton);
    

  cardelementDiv.appendChild(stationName);
  cardelementDiv.appendChild(slotId);
  cardelementDiv.appendChild(date);
  cardelementDiv.appendChild(startTime);
  cardelementDiv.appendChild(endTime);
  card.appendChild(cardelementDiv);
  card.appendChild(DivcancelBookingButton);
  return card;
}

const books = showAllUserBookings();
console.log(books);