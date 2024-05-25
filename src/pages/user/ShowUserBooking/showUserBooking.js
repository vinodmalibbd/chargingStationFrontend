function userShowBooking(){
  const ShowUserBookingMainDiv = document.querySelector('.mainDiv');
  
  const showUserBookingDiv = document.createElement('div');
  showUserBookingDiv.className = 'showUserBookingDiv';
  ShowUserBookingMainDiv.appendChild(showUserBookingDiv);

    const UserBookingHeadingDiv= document.createElement('div');
    UserBookingHeadingDiv.className = 'UserBookingHeadingDiv';
    ShowUserBookingMainDiv.appendChild(UserBookingHeadingDiv);
   const ShowUserBookingHeadingSpan = document.createElement('span');
   ShowUserBookingHeadingSpan.className ='ShowUserBookingHeadingSpan';
   ShowUserBookingHeadingSpan.textContent ='User Bookings';

   UserBookingHeadingDiv.appendChild(ShowUserBookingHeadingSpan);

   const showAllUserBookings = document.createElement('div');
   showAllUserBookings.className ='showAllUserBookings';
   ShowUserBookingMainDiv.appendChild(showAllUserBookings)

   const ShowUserBookingCard = document.createElement('div');
   ShowUserBookingCard.className = 'ShowUserBookingCard';
   showAllUserBookings.appendChild(ShowUserBookingCard);

   const stationNameSpan = document.createElement('span');
   stationNameSpan.className = 'stationNameSpan';
   stationNameSpan.textContent = 'Name : Kalyani Charge Point';
   ShowUserBookingCard.appendChild(stationNameSpan);

   const stationAdderess = document.createElement('span');
   stationAdderess.className = 'stationAdderess';
   stationAdderess.textContent = 'Address : Bus Stand Parola, Jalgaon';
   ShowUserBookingCard.appendChild(stationAdderess);

   const chargingSlotid = document.createElement('span');
   chargingSlotid.className = 'chargingSlotid';
   chargingSlotid.textContent = 'Slot No : 1';
   ShowUserBookingCard.appendChild(chargingSlotid);

   const timeSlot = document.createElement('span');
   timeSlot.className = 'timeSlot';
   timeSlot.textContent ='Time : 10:00 to 11:00';
   ShowUserBookingCard.appendChild(timeSlot);

   const BookingStatus = document.createElement('span');
   BookingStatus.className = 'BookingStatus';
   BookingStatus.textContent =' Status : confirmed';
   ShowUserBookingCard.appendChild(BookingStatus);

   const cancelUserBookingbtn = document.createElement('button');
   cancelUserBookingbtn.className = 'cancelUserBookingbtn';
   cancelUserBookingbtn.textContent = 'Cancel Booking';
   ShowUserBookingCard.appendChild(cancelUserBookingbtn);

}

userShowBooking();