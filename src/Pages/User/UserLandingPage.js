function UserLandingPage() {
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

  const searchBarLi = document.createElement('li');
  searchBarLi.className = 'searbarbox';
  const searchInput = document.createElement('input');
  searchInput.type = 'text';
  searchInput.placeholder = 'Search station';
  const searchButton = document.createElement('button');
  searchButton.id = 'searchButton';
  searchButton.textContent = 'Search';
  searchBarLi.appendChild(searchInput);
  searchBarLi.appendChild(searchButton);

  const loginLi = document.createElement('li');
  loginLi.innerHTML = '<i class="fas fa-user"></i>Login';

  const chargePointsLi = document.createElement('li');
  chargePointsLi.innerHTML = '<i class="fas fa-address-card"></i>ChargePoints';
  chargePointsLi.onclick=()=>{
    changeTab("/chargepoint",mainContentDiv)
  }

  ulElement.appendChild(searchBarLi);
  ulElement.appendChild(chargePointsLi);
  ulElement.appendChild(loginLi);

  sidebarDiv.appendChild(headerDiv);
  sidebarDiv.appendChild(ulElement);

  const mainContentDiv = document.createElement('div');
  mainContentDiv.className ='main_content';
  const c=document.createElement("div");
  c.id="map";
  mainContentDiv.appendChild(c);
  wrapperDiv.appendChild(sidebarDiv);
  wrapperDiv.appendChild(mainContentDiv);
  document.body.appendChild(wrapperDiv);
  RenderMap();
}
function changeTab(tabname,mainContentDiv){
  mainContentDiv.innerHTML='';
  switch(tabname){
    case "/chargepoint":{
      chargePointTab(mainContentDiv);
      break;
    }
  }
}

function chargePointTab(mainContentDiv){
  const chargepointtab=document.createElement("div");
  chargepointtab.className='chargepointTab';
  mainContentDiv.appendChild(chargepointtab)

  const cardsContainer=document.createElement('div');
  cardsContainer.className="chargepointcardscontainer";
  chargepointtab.appendChild(cardsContainer);
  getAllChargingStation().then(data=>{
    data.map(item=>{
      const card=document.createElement('div');
      card.textContent=item.name;
      card.className='chargepointcard'
      card.onclick=()=>{
        chargeStationPage(item,mainContentDiv);
      }
      cardsContainer.appendChild(card);
    })
  })
}

function chargeStationPage(chargepoint,mainContentDiv){
  mainContentDiv.innerHTML='';

  const chargeStationPage=document.createElement("div");
  chargeStationPage.className='chargestationpage';
  mainContentDiv.appendChild(chargeStationPage);

  const header=document.createElement("div");
  header.className='chargestationheader'
  chargeStationPage.appendChild(header);

  const stationName=document.createElement('span');
  stationName.textContent=chargepoint.name;
  header.appendChild(stationName);

  const selectSlot=document.createElement('span');
  selectSlot.className='selectslottip'
  selectSlot.textContent='select available charging slot and choose date';
  chargeStationPage.appendChild(selectSlot);

  const chargingslotsContainer=document.createElement('div');
  chargingslotsContainer.classList.add("chargeslotscontainer");

  getAllChargingStationSlotsById(chargepoint.stationId).then(data=>{
    data.map((item)=>{
      const slotcard=document.createElement('div');
      slotcard.classList.add('chargingslotcard')
      const p=document.createElement("p");
      p.textContent=`chargepoint ${item.slotId}`;
      slotcard.onclick=()=>{
        renderDatepicker(chargeStationPage)
      }
      slotcard.appendChild(p);
      chargingslotsContainer.appendChild(slotcard);
    })
  });
  chargeStationPage.appendChild(chargingslotsContainer)
}
function renderDatepicker(mainContentDiv){
 
  const datepickerSection = document.createElement('div');
  datepickerSection.classList.add('datepicker');
 
  const datepickerTitle = document.createElement('span');
  datepickerTitle.textContent = "Select Date:";
 
  const datePickerInput = document.createElement('input');
  datePickerInput.type = "date";
  datePickerInput.id = "date";
  datePickerInput.name = "date";
  datePickerInput.min = new Date().toISOString().split('T')[0];
  datePickerInput.onchange=()=>{
    renderTimeSlots(10,23,chargeStationPage);
  }
 
 datepickerSection.appendChild(datepickerTitle);
 datepickerSection.appendChild(datePickerInput);

 const timeslotContainer = document.createElement('div');
 timeslotContainer.id = "timeslot";
 timeslotContainer.classList.add('timeslot');
 
 mainContentDiv.appendChild(datepickerSection);
 mainContentDiv.appendChild(timeslotContainer);
}
 
function renderTimeSlots(stationOpen,stationClose,chargeStationPage) {
 const datepicker = document.getElementById("date");
 const selectedDate = new Date(datepicker.value);
 const currentDate = new Date();
 const hourCardsContainer = document.getElementById('timeslot');
 hourCardsContainer.innerHTML = ''; 

 let currentHour = stationOpen;
 let currentMinute = 0;

 if (selectedDate.toDateString() === currentDate.toDateString()) {
   
     currentHour = Math.max(currentHour, currentDate.getHours() + 1);
    while ((currentHour < stationClose)&&(currentHour>=stationOpen)) {
     const card = document.createElement('div');
     card.classList.add('card');
     card.textContent = `${currentHour}:00 ` + "To " + `${currentHour + 1}:00`;
     hourCardsContainer.appendChild(card);
     card.onclick=()=>{
      showBookingButton(chargeStationPage)
     }
     currentHour++;
    }
 }
 else if (selectedDate > currentDate){
   for(let hour = stationOpen; hour<stationClose;hour++){
     const card = document.createElement('div');
     card.classList.add('card');
     card.textContent = `${hour}:00 ` + "To " + `${hour + 1}:00`;
     hourCardsContainer.appendChild(card);
     card.onclick=()=>{
      showBookingButton(chargeStationPage)
     }
   }
 }
 else{
   alert("please Don't Select Old Date")
 }
}
function showBookingButton(chargeStationPage){
  const bookingFooter=document.createElement("div");
  bookingFooter.className='chargestationfooter';
  chargeStationPage.appendChild(bookingFooter);

  const bookingbtngroup=document.createElement('div');

  bookingbtngroup.className='bookingbtngroup';
  bookingFooter.appendChild(bookingbtngroup);
  
  const bookbtn=document.createElement('button').className='bookbtn'.textContent="Book now";
  const canclebook=document.createElement('button').className='canclebookbtn'.textContent="Cancle"
  bookingbtngroup.appendChild(canclebook);
  bookingbtngroup.appendChild(bookbtn);
}

function bookSlot() {
 alert('Booking slot functionality will be implemented here.');
}