function LogOutChargingStation(){
  sessionStorage.clear();
  navigateTo("/")
}
function chargingStationLanding() {
  document.body.innerHTML='';
  showloader();
  getChargingStationById().then(chargestation=>{
    if(chargestation.name===null || chargestation.name === ''){
      updateStationInfo();
      removeloader();
    }else {
      chargingStationDashboard();
      removeloader();
    }
  }).catch(e=>{
    console.error("you need to logged in ")
    removeloader();
  })
  
}
function chargingStationDashboard(){
  const wrapperDiv = document.createElement('div');
  wrapperDiv.className = 'chargingStationDashboard';

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
  logoutLi.onclick=()=>{
    LogOutChargingStation();
  }
  logoutLi.innerHTML = '<i class="fas fa-user"></i> LogOut';
  logoutLi.onclick = () =>{
    alert("Logging out");
    MainPage();
  }

  const chargingSlotLi = document.createElement('li');
  chargingSlotLi.innerHTML = '<i class="fas fa-address-card"></i> ChargingSlots';
  chargingSlotLi.onclick=()=>{
    StationChangeTab("/chargepoint",mainContentDiv);
  }
  const bookingLi = document.createElement('li');
  bookingLi.innerHTML = '<i class="fas fa-address-card"></i> Bookings';
  bookingLi.onclick=()=>{
    StationChangeTab("/showbookings", mainContentDiv);
  }
  const UpdateStationLi = document.createElement('li');
  UpdateStationLi.innerHTML = '<i class="fas fa-user"></i> Update Station';
  UpdateStationLi.onclick = () =>{
    StationChangeTab("/updatestation",mainContentDiv);
  }

  ulElement.appendChild(chargingSlotLi);
  ulElement.appendChild(bookingLi);
  ulElement.appendChild(UpdateStationLi);
  ulElement.appendChild(logoutLi)

  sidebarDiv.appendChild(headerDiv);
  sidebarDiv.appendChild(ulElement);

  const mainContentDiv = document.createElement('div');
  mainContentDiv.className ='main_content';
  wrapperDiv.appendChild(sidebarDiv);
  wrapperDiv.appendChild(mainContentDiv);
  document.body.appendChild(wrapperDiv);
  Chargingpoints(mainContentDiv);
}
function StationChangeTab(tabname,mainContentDiv){
  mainContentDiv.innerHTML='';
  switch(tabname){
    case "/chargepoint":{
      Chargingpoints(mainContentDiv);
      break;
    }
    case "/updatestation":{
      updateProfileStation(mainContentDiv);
      break;
    }
    case "/showbookings":{
      showChargingStationBooking();
      break;
    }
  }
}

