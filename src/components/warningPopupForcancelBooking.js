function createWarningPopup(bookingRequest) {
  const PopupDiv = document.querySelector('.userbookingsection');
  const warningPopup = document.createElement('div');
  warningPopup.id = 'warningPopup';
  warningPopup.className = 'popup';

  const popupContent = document.createElement('div');
  popupContent.className = 'popup-content';

  const closePopupBtn = document.createElement('span');
  closePopupBtn.id = 'closePopupBtn';
  closePopupBtn.className = 'close-btn';
  closePopupBtn.innerHTML = '&times;';

  const popupTitle = document.createElement('h2');
  popupTitle.textContent = 'Warning!';

  const popupMessage = document.createElement('p');
  popupMessage.textContent = 'Are you sure you want to cancel the booking?';

  const confirmCancelBtn = document.createElement('button');
  confirmCancelBtn.id = 'confirmCancelBtn';
  confirmCancelBtn.textContent = 'Yes, Cancel';
  confirmCancelBtn.onclick = (e) =>{
    e.preventDefault();
    console.log(bookingRequest)
    cancelBooking(bookingRequest);
  }

  const denyCancelBtn = document.createElement('button');
  denyCancelBtn.id = 'denyCancelBtn';
  denyCancelBtn.textContent = 'No, Keep Booking';


  popupContent.appendChild(closePopupBtn);
  popupContent.appendChild(popupTitle);
  popupContent.appendChild(popupMessage);
  popupContent.appendChild(confirmCancelBtn);
  popupContent.appendChild(denyCancelBtn);


  warningPopup.appendChild(popupContent);

  PopupDiv.appendChild(warningPopup);

  function showPopup() {
      warningPopup.style.display = 'flex';
  }

  function hidePopup() {
      warningPopup.style.display = 'none';
      PopupDiv.removeChild(warningPopup); 
  }

  closePopupBtn.onclick = () =>{
    hidePopup();
  }

  denyCancelBtn.onclick = () =>{
    hidePopup();
  }

  
  confirmCancelBtn.onclick = (e) => {
      e.preventDefault();
      alert('Booking has been cancelled.');
      console.log(bookingRequest);
      hidePopup();
      cancelBooking(bookingRequest.bookingId);


  };

  window.addEventListener('click', function(event) {
      if (event.target == warningPopup) {
          hidePopup();
          
      }
  });
  showPopup();
}