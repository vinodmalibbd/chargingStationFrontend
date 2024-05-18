function createSucessPopUpBox(){
  const mainDiv = document.createElement('div');
  mainDiv.className = 'PopSucessmainDiv';
  const SucessPopUp = document.createElement('div');
  SucessPopUp.className = 'SuccessPopUpBox';
  const PopUpHeader = document.createElement('div');
  PopUpHeader.className = 'PopUpHeader';
  PopUpHeader.textContent = 'Sucess';
  const PopUpMessage = document.createElement('div');
  PopUpMessage.className = 'PopUpMessage';
  PopUpMessage.textContent = 'Booking confirmed';
  const PopUpOkButton =document.createElement('div');
  const PopUpicon =document.createElement('div');
  PopUpicon.className = 'PopUpicon';
  PopUpicon.innerHTML = `<i class="fas fa-check-circle"></i> `;
  const PopupOkButton =document.createElement('button')
  PopUpOkButton.className = 'PopupOkButton';
  PopUpOkButton.textContent = 'OK';
  PopUpOkButton.onclick =() =>{
    document.body.removeChild(mainDiv);
  }
  SucessPopUp.appendChild(PopUpicon);
  SucessPopUp.appendChild(PopUpHeader);
  SucessPopUp.appendChild(PopUpMessage);
  SucessPopUp.appendChild(PopUpOkButton);
  mainDiv.appendChild(SucessPopUp);
  document.body.appendChild(mainDiv);

}