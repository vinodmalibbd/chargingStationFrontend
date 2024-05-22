function createSucessPopUpBox(message,functionname){
  const mainDiv=document.querySelector('.main_content');
  mainDiv.innerHTML='';
  const container=document.createElement('div');
  container.className='SuccessPopUpContainer';

  const SucessPopUp = document.createElement('div');
  SucessPopUp.className = 'SuccessPopUpBox';
  const PopUpHeader = document.createElement('div');
  PopUpHeader.className = 'PopUpHeader';
  PopUpHeader.textContent = 'Sucess';
  const PopUpMessage = document.createElement('div');
  PopUpMessage.className = 'PopUpMessage';
  PopUpMessage.textContent = message;
  const PopUpOkButton =document.createElement('div');
  const PopUpicon =document.createElement('div');
  PopUpicon.className = 'PopUpicon';
  PopUpicon.innerHTML = `<i class="fas fa-check-circle"></i> `;
  PopUpOkButton.className = 'PopupOkButton';
  PopUpOkButton.textContent = 'OK';
  PopUpOkButton.onclick =() =>{
    // navigateTo(`${navigate}`)
    functionname();
  }
  SucessPopUp.appendChild(PopUpicon);
  SucessPopUp.appendChild(PopUpHeader);
  SucessPopUp.appendChild(PopUpMessage);
  SucessPopUp.appendChild(PopUpOkButton);
  container.appendChild(SucessPopUp);

  mainDiv.appendChild(container);
}