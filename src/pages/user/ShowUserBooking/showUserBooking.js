function userShowBooking() {
  console.log("hello");
  const ShowUserBookingMainDiv = document.querySelector('.main_content');
  ShowUserBookingMainDiv.innerHTML = '';

  const showUserBookingDiv = document.createElement('div');
  showUserBookingDiv.className = 'showUserBookingDiv';
  ShowUserBookingMainDiv.appendChild(showUserBookingDiv);

  const ShowUserBookingHeadingSpan = document.createElement('span');
  ShowUserBookingHeadingSpan.className = 'ShowUserBookingHeadingSpan';
  ShowUserBookingHeadingSpan.textContent = 'Your Bookings';
  ShowUserBookingMainDiv.appendChild(ShowUserBookingHeadingSpan);

  const showAllUserBookings = document.createElement('div');
  showAllUserBookings.className = 'showAllUserBookings';
  ShowUserBookingMainDiv.appendChild(showAllUserBookings);

  showLoggedInUserBookings().then(res => {
    console.log(res);
    res.forEach(item => {
      console.log(item);
      const ShowUserBookingCard = document.createElement('div');
      ShowUserBookingCard.className = 'ShowUserBookingCard';
      showAllUserBookings.appendChild(ShowUserBookingCard);

      const stationNameSpan = document.createElement('span');
      stationNameSpan.className = 'stationNameSpan';
      stationNameSpan.innerHTML = `<strong>Chargestation: </strong> ${item.chargingStation.name}`;
      ShowUserBookingCard.appendChild(stationNameSpan);

      const stationAddress = document.createElement('span');
      stationAddress.className = 'stationAddress';
      getAddress(item.chargingStation.latitude, item.chargingStation.longitude).then(Address => {
        stationAddress.innerHTML = `<strong>Address:</strong> ${Address}`;
      });
      ShowUserBookingCard.appendChild(stationAddress);

      const chargingSlotId = document.createElement('span');
      chargingSlotId.className = 'chargingSlotId';
      chargingSlotId.innerHTML = `<strong>Chargepoint No :</strong> ${item.chargingSlot.slotId}`;
      ShowUserBookingCard.appendChild(chargingSlotId);

      const timeSlot = document.createElement('span');
      timeSlot.className = 'timeSlot';
      timeSlot.innerHTML = `<strong>Time:</strong> ${item.timeSlot.startTime}:00 to ${item.timeSlot.endTime}:00`;
      ShowUserBookingCard.appendChild(timeSlot);

      const bookingDate = document.createElement('span');
      bookingDate.className = 'bookingDate';
      bookingDate.innerHTML = `<strong>Date:</strong> ${getFormattedDate(item.date)}`;
      ShowUserBookingCard.appendChild(bookingDate);

      const bookingStatus = document.createElement('span');
      bookingStatus.className = 'bookingStatus';
      bookingStatus.innerHTML = '<strong>Status:</strong> ';
      const statusText = document.createElement('span');
      const currentDateTime = new Date();
      const bookingDateTime = new Date(item.date);
      bookingDateTime.setHours(item.timeSlot.startTime, 0, 0, 0);

      if (currentDateTime > bookingDateTime) {
        item.status = 'Completed';
      }

      statusText.textContent = item.status;
      if (statusText.textContent === 'Confirmed') {
        statusText.classList.add('status-confirmed');
      } else if (statusText.textContent === 'Cancelled') {
        statusText.classList.add('status-cancelled');
      } else if (statusText.textContent === 'Completed') {
        statusText.classList.add('status-completed');
      }
      bookingStatus.appendChild(statusText);
      ShowUserBookingCard.appendChild(bookingStatus);

      const cancelUserBookingBtn = document.createElement('button');
      cancelUserBookingBtn.className = 'cancelUserBookingBtn';
      cancelUserBookingBtn.textContent = 'Cancel Booking';
      ShowUserBookingCard.appendChild(cancelUserBookingBtn);
    });
  }).catch(error => {
    console.error('Error fetching user bookings:', error);
  });
}

function getFormattedDate(date) {
  const d = new Date(date);
  return d.toLocaleDateString();
}