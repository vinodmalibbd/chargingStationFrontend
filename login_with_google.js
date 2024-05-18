function StationLandingPage() {
  document.body.innerHTML='';

  const wrapperDiv = document.createElement('div');
  wrapperDiv.className = 'wrapper';

  const sidebarDiv = document.createElement('div');
  sidebarDiv.className = 'sidebar';

  const headerDiv = document.createElement('div');
  headerDiv.className = 'header';

  const headerImgDiv = document.createElement('div');
  headerImgDiv.className = 'headerImg';
  const logoImg = document.createElement('img');
  logoImg.src = 'logo.jpg';
  logoImg.alt = '';
  headerImgDiv.appendChild(logoImg);

  const titleDiv = document.createElement('div');
  titleDiv.className ='Title';
  titleDiv.textContent = 'Smart EV Charge Point';

  headerDiv.appendChild(headerImgDiv);
  headerDiv.appendChild(titleDiv);

  const ulElement = document.createElement('ul');

  const logoutLi = document.createElement('li');
  logoutLi.innerHTML = '<i class="fas fa-user"></i>LogOut';
  logoutLi.onclick

  const chargingSlotLi = document.createElement('li');
  chargingSlotLi.innerHTML = '<i class="fas fa-address-card"></i>ChargingSlots';
  chargingSlotLi.onclick=()=>{
    StationChangeTab("/chargepoint",mainContentDiv);
  }
  const bookingLi = document.createElement('li');
  bookingLi.innerHTML = '<i class="fas fa-address-card"></i>Bookings';
  bookingLi.onclick=()=>{
    StationChangeTab("/chargepoint",mainContentDiv);
  }
  const UpdateStationLi = document.createElement('li');
  UpdateStationLi.innerHTML = '<i class="fas fa-user"></i>Update Station';
  UpdateStationLi.onclick = () =>{
    StationChangeTab("/updatestation",mainContentDiv);
  }

  ulElement.appendChild(chargingSlotLi);
  ulElement.appendChild(bookingLi);
  ulElement.appendChild(UpdateStationLi);

  sidebarDiv.appendChild(headerDiv);
  sidebarDiv.appendChild(ulElement);
  sidebarDiv.appendChild(logoutLi);

  const mainContentDiv = document.createElement('div');
  mainContentDiv.className ='main_content';
  wrapperDiv.appendChild(sidebarDiv);
  wrapperDiv.appendChild(mainContentDiv);
  document.body.appendChild(wrapperDiv);

 
}
function StationChangeTab(tabname,mainContentDiv){
  mainContentDiv.innerHTML='';
  switch(tabname){
    case "/chargepoint":{
      Chargingpoints(mainContentDiv);
      break;
    }
    case "/updatestation":{
      UpdateStationdivfunction(mainContentDiv);
      break;
    }
  }
}



function UpdateStationdivfunction(mainContentDiv){
  const chargepointtab=document.createElement("div");
  chargepointtab.className='updateform';
  mainContentDiv.appendChild(chargepointtab);
  const formContainer = document.createElement('div');
  formContainer.classList.add('main-container');
  mainContentDiv.appendChild(formContainer);

  const heading = document.createElement('h2');
  heading.textContent = 'Update Station Profile';
  formContainer.appendChild(heading);

  const form = document.createElement('form');
  form.className ="form-container";
  formContainer.appendChild(form);

 const stationName =document.createElement("label");
 stationName.textContent = "Station Name :";
 const nameInput = document.createElement("input");
 nameInput.setAttribute('type','text');
 nameInput.setAttribute('id','forminput');

 const StationOpeningtime = document.createElement("label");
 StationOpeningtime.textContent = "Station Opening Time :";
 const OpentimeInput = document.createElement("input");
 OpentimeInput.setAttribute('type','number');
 OpentimeInput.setAttribute('id','forminput');

 const StationClosingtime = document.createElement("label");
 StationClosingtime.textContent = "Station Closing Time :";
 const CloseTimeInput = document.createElement("input");
 CloseTimeInput.setAttribute('type','number');
 CloseTimeInput.setAttribute('id','forminput');

//  const checkboxdiv = document.createElement('div');
//  checkboxdiv.classList = "checkboxdiv";
//  const checkbox =document.createElement('input');
//  checkbox.type = 'checkbox';
//  checkbox.className ='checkbox';


 const stationLatitude = document.createElement("label");
 stationLatitude.textContent = "Station Latitude :";
 const LatitudeInput = document.createElement("input");
 LatitudeInput.setAttribute('type','text');
 LatitudeInput.setAttribute('id','forminput');

 const stationLongitude = document.createElement("label");
 stationLongitude.textContent = "Station Longitude :";
 const LongitudeInput = document.createElement("input");
 LongitudeInput.setAttribute('type','text');
 LongitudeInput.setAttribute('id','forminput');

  form.appendChild(stationName);
  form.appendChild(nameInput);
  form.appendChild(StationOpeningtime);
  form.appendChild(OpentimeInput);
  form.appendChild(StationClosingtime);
  form.appendChild(CloseTimeInput);
  form.appendChild(stationLatitude);
  form.appendChild(LatitudeInput);
  form.appendChild(stationLongitude);
  form.appendChild(LongitudeInput);
  
  const buttonDiv =document.createElement("div");
  buttonDiv.className ="ButtonDiv";


  const getlocation=document.createElement('button');
  getlocation.textContent="add auto location";  
  getlocation.onclick=function(){
    const loc=getCurrentPositionUser();
    const latitudeInput = document.getElementById('latitude');
    const longitudeInput = document.getElementById('longitude');
    latitudeInput.value = loc.lat;
    longitudeInput.value = loc.long;
  }
  buttonDiv.appendChild(getlocation);
  const submitButton = document.createElement('button');
  submitButton.setAttribute('type', 'button');
  submitButton.textContent = 'Submit';
  submitButton.onclick = () =>{
    submitForm();
  }
  const cancelButton =document.createElement('button');
  cancelButton.textContent ="cancel";
  cancelButton.onclick = () =>{
    StationLandingPage();
  }
  buttonDiv.appendChild(submitButton);
  buttonDiv.appendChild(cancelButton);
  form.appendChild(buttonDiv);
}

function submitForm() {
  const formData = new FormData(document.getElementById('profileForm'));

  const formDataObject = {};

  for (let [key, value] of formData.entries()) {
    if(key==='openTime'|| key==='closeTime'){
      value=parseInt(value);
    }
    if(key==='longitude'|| key==='latitude'){
      value=parseFloat(value);
    }
    formDataObject[key] = value;
  }
  console.log(formDataObject);
  getChargingStationById().then(data=>{
    console.log(data);
    formDataObject['emailId']=data.emailId;
    updateChargingStationProfile(formDataObject)
  })
}

function createNewChargingPoint(){
  console.log("Added slot")
  const card = document.createElement('div');
  card.className = 'chargepointcard';
  const inputName =document.createElement('input');
  inputName.type = 'text';
  inputName.placeholder = 'Name :';
  card.appendChild(inputName)
  
  const priceSpan =document.createElement('span');
  priceSpan.textContent ='Price :';
  const inputPrice = document.createElement('input');
  inputPrice.type = 'text';
  card.appendChild(priceSpan);
  card.appendChild(inputName);

  const spanStstus = document.createElement('span');
  spanStstus.textContent = 'Status :';
  const inputStatus =document.createElement('input');
  inputStatus.type ='text';
  card.appendChild(spanStstus);
  card.appendChild(inputStatus);
  const saveButton = document.createElement('button');
  saveButton.className = 'save-btn';
  saveButton.textContent = 'Save';
  card.appendChild(saveButton);
  saveButton.onclick = () => {
    const newItem = {
      name: inputName.value,
      openTime: inputPrice.value,
      closeTime: inputStatus.value
    };
    cardsContainer.innerHTML('');
    Chargingpoints(mainContentDiv);
  }
}
//for rendering cards
function Chargingpoints(mainContentDiv){
  const chargepointtab=document.createElement("div");
  chargepointtab.className='chargepointTab';
  mainContentDiv.appendChild(chargepointtab);

  const cardsContainer=document.createElement('div');
  cardsContainer.className="chargepointcardscontainer";
  chargepointtab.appendChild(cardsContainer);
  getAllChargingStation().then(data=>{
    data.map(item=>{
      const card=document.createElement('div');
      card.className='chargepointcard';

      const editDeleteButtonDiv = document.createElement('div');
      editDeleteButtonDiv.className = 'buttons';

      const description = document.createElement('div');
      description.className = 'description';

      const span01 = document.createElement('span');
      const span02 = document.createElement('span');
      const span03 = document.createElement('span');
      span01.textContent = item.name;
      span02.textContent = "Price : " + item.openTime;
      span03.textContent = "Status : " + item.closeTime;
      const editButton = document.createElement('button');
      editButton.classList.add('edit-btn');
      editButton.innerHTML = '✏️';
      editButton.onclick = () => {
        UpdateChargePoints();
      }
      const deleteButton = document.createElement('button');
      deleteButton.classList.add('delete-btn');
      deleteButton.innerHTML = '🗑️';
      deleteButton.onclick = () => {
        DeleteChargePoint();
      }

      description.appendChild(span01);
      description.appendChild(span02);
      description.appendChild(span03);
      editDeleteButtonDiv.appendChild(editButton);
      editDeleteButtonDiv.appendChild(deleteButton);
      
      card.appendChild(description);
      card.appendChild(editDeleteButtonDiv);
      card.onclick=()=>{
        chargeStationPage(item,mainContentDiv);
      }
      cardsContainer.appendChild(card);
    })
  })
  const buttonDiv =document.createElement('div');
  buttonDiv.className = "ButttonCrudDiv";

  const addSlot = document.createElement('button');
  addSlot.className = "AddSlotButton";
  addSlot.textContent = "ADD Slot";
  addSlot.onclick = () =>{
    createNewChargingPoint();
  }
 buttonDiv.appendChild(addSlot); 
 mainContentDiv.appendChild(buttonDiv);
}
