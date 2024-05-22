function createWarningPopup() {
  const PopupDiv = document.querySelector('.main_content');
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


  document.body.appendChild(warningPopup);

  function showPopup() {
      warningPopup.style.display = 'flex';
  }

  function hidePopup() {
      warningPopup.style.display = 'none';
      document.body.removeChild(warningPopup); 
  }

  closePopupBtn.addEventListener('click', hidePopup);
  denyCancelBtn.addEventListener('click', hidePopup);

  
  confirmCancelBtn.addEventListener('click', function() {
      hidePopup();
      alert('Booking has been cancelled.');
  });

  window.addEventListener('click', function(event) {
      if (event.target == warningPopup) {
          hidePopup();
      }
  });

  // Show the popup initially
  showPopup();
}