function Chargingpoints(){
  const mainContentDiv=document.querySelector('.main_content')
  mainContentDiv.innerHTML='';
  const chargepointtab=document.createElement("div");
  chargepointtab.className='chargingSlotPage';
  mainContentDiv.appendChild(chargepointtab);

  const cardsContainer=document.createElement('div');
  cardsContainer.className="chargingSlotsContainer";
  chargepointtab.appendChild(cardsContainer);

  const buttonDiv =document.createElement('div');
  buttonDiv.className = "AddSlotButtonHeader";

  const addSlot = document.createElement('button');
  addSlot.className = "AddSlotButton";
  addSlot.textContent = "ADD Slot";
  addSlot.onclick = () =>{
    addNewSlot();
  }
  buttonDiv.appendChild(addSlot);
  cardsContainer.appendChild(buttonDiv); 
  getAllChargingStationSlots().then(data=>{
    data.map((item , key)=>{
      const card=document.createElement('div');
      card.className='chargingSlotCard';

      const editDeleteButtonDiv = document.createElement('div');
      editDeleteButtonDiv.className = 'buttons';

      const description = document.createElement('div');
      description.className = 'description';

      const span01 = document.createElement('span');
      const span02 = document.createElement('span');
      const span03 = document.createElement('span');
      span01.textContent = `chargepoint : ${key+1}`;
      span02.textContent = `Price per hour : ${item.pricePerHour}`;
      span03.textContent = item.available ? 'Status : available': 'Status : maintainance';
      const editButton = document.createElement('button');
      editButton.classList.add('edit-btn');
      editButton.innerHTML = '✏️';
      editButton.onclick = () => {
        editSlotForm(card,item);
      }
      const deleteButton = document.createElement('button');
      deleteButton.classList.add('delete-btn');
      deleteButton.innerHTML = '🗑️';
      deleteButton.onclick = () => {

      }

      description.appendChild(span01);
      description.appendChild(span02);
      description.appendChild(span03);
      editDeleteButtonDiv.appendChild(editButton);
      editDeleteButtonDiv.appendChild(deleteButton);
      
      card.appendChild(description);
      card.appendChild(editDeleteButtonDiv);
      cardsContainer.appendChild(card);
    })
  })
}
function addNewSlot(){
  const chargingSlotContainer = document.querySelector('.chargingSlotsContainer');

  const popupForm = document.createElement('div');
  popupForm.className = 'popupAddslot';

  const form = document.createElement('form');
  form.className='popupAddslotForm';

  const priceLabel = document.createElement('label');
  priceLabel.textContent = 'Price:';
  const priceInput = document.createElement('input');
  priceInput.type = 'number';
  priceInput.name = 'price';
  priceInput.required = true;

  const statusLabel = document.createElement('label');
  statusLabel.textContent = 'Status:';
  const statusSelect = document.createElement('select');
  statusSelect.name = 'status';
  const statusOptions = ['Available', 'Maintenance'];
  statusOptions.forEach(optionText => {
      const option = document.createElement('option');
      option.value = optionText.toLowerCase().replace(' ', '-');
      option.textContent = optionText;
      statusSelect.appendChild(option);
  });

  const saveButton = document.createElement('button');
  saveButton.textContent = 'Save';
  saveButton.onclick=(e)=>{
    e.preventDefault();
    saveSlot();
  }

  const canclebtn = document.createElement('button');
  canclebtn.textContent = 'Cancle';
  canclebtn.onclick=()=>{
    chargingSlotContainer.removeChild(popupForm);
  }

  // Append form elements to form
  form.appendChild(priceLabel);
  form.appendChild(priceInput);
  form.appendChild(document.createElement('br'));
  form.appendChild(statusLabel);
  form.appendChild(statusSelect);
  form.appendChild(document.createElement('br'));
  form.appendChild(saveButton);
  form.appendChild(canclebtn);
  popupForm.appendChild(form);

  chargingSlotContainer.appendChild(popupForm);
}
function saveSlot(){
  const form=document.querySelector('.popupAddslotForm');
  const formData = new FormData(form);
  const price = formData.get('price');
  const status = formData.get('status');
    const data={};
    data['pricePerHour']=parseFloat(price);
    data['available']=status==='Available'? true : false;
    addChargingSlotStation(data);
}
function editSlotForm(card,item){
  const editForm = document.createElement('div');
    editForm.className = 'editSlotForm';

    // Input field for price
    const priceInput = document.createElement('input');
    priceInput.type = 'number';
    priceInput.name = 'price';
    priceInput.placeholder = 'Enter new price';
    editForm.appendChild(priceInput);
    
    const statusSelect = document.createElement('select');
    statusSelect.name = 'status';
    const statusOptions = ['Available', 'Maintenance'];
    statusOptions.forEach(optionText => {
        const option = document.createElement('option');
        option.value = optionText.toLowerCase().replace(' ', '-');
        option.textContent = optionText;
        statusSelect.appendChild(option);
    });
    editForm.appendChild(statusSelect);


    const saveButton = document.createElement('button');
    saveButton.textContent = 'Save';
    saveButton.onclick = () => {
        const newPrice = priceInput.value;
        const newStatus = statusSelect.value;
        const data={};
        data['slotId']=item.slotId;
        data['pricePerHour']=parseFloat(newPrice);
        data['available']=newStatus==='Available'? true : false;
        console.log(data);
        updateChargingSlot(data);
        card.removeChild(editForm);
    };
    editForm.appendChild(saveButton);

    const cancelButton = document.createElement('button');
    cancelButton.textContent = 'Cancel';
    cancelButton.onclick = () => {
        card.removeChild(editForm);
    };
    editForm.appendChild(cancelButton);
    card.appendChild(editForm);
}