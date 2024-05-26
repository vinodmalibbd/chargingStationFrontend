function userShowBooking() {
  
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
    res.forEach(item => {
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

      if(item.status==='Confirmed') {
        const cancelUserBookingBtn = document.createElement('button');
        cancelUserBookingBtn.className = 'cancelUserBookingBtn';
        cancelUserBookingBtn.textContent = 'Cancel Booking';
        cancelUserBookingBtn.onclick = () => {
          showModal(item.bookingId);
        };
        ShowUserBookingCard.appendChild(cancelUserBookingBtn);
      }
    });
  }).catch(error => {
    console.error('Error fetching user bookings:', error);
  });
}

function getFormattedDate(date) {
  const d = new Date(date);
  return d.toLocaleDateString();
}

function showModal(bookingId) {
  const modalContainer = document.createElement("div");
  modalContainer.id = "confirm-model-cancelModal";
  modalContainer.className = "confirm-model-modal";

  const modalContent = document.createElement("div");
  modalContent.className = "confirm-model-modal-content";

  const closeButton = document.createElement("span");
  closeButton.className = "close";
  closeButton.id = "confirm-model-cancelCloseButton";
  closeButton.textContent = "×";

  const modalText = document.createElement("p");
  modalText.textContent = "Are you sure you want to cancel this booking?";

  const confirmButton = document.createElement("button");
  confirmButton.id = "confirm-model-cancelConfirmButton";
  confirmButton.className = "confirm-model-confirm-button";
  confirmButton.textContent = "Confirm";

  const cancelButton = document.createElement("button");
  cancelButton.id = "confirm-model-cancelCancelButton";
  cancelButton.className = "confirm-model-cancel-button";
  cancelButton.textContent = "Cancel";

  modalContent.appendChild(closeButton);
  modalContent.appendChild(modalText);
  modalContent.appendChild(cancelButton);
  modalContent.appendChild(confirmButton);

  modalContainer.appendChild(modalContent);

  document.body.appendChild(modalContainer);

  closeButton.addEventListener("click", () => {
      modalContainer.style.display = "none";
  });

  cancelButton.addEventListener("click", () => {
      modalContainer.style.display = "none";
  });

  confirmButton.addEventListener("click", () => {
      cancelBooking(bookingId);
      modalContainer.style.display = "none";
  });

  window.addEventListener("click", (event) => {
      if (event.target === modalContainer) {
          modalContainer.style.display = "none";
      }
  });

  modalContainer.style.display = "block";
}