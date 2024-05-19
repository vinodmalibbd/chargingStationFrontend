// function createAndAppend(parent, elementType, content) {
//   const element = document.createElement(elementType);
//   element.innerHTML = content;
//   parent.appendChild(element);
// }

// function chargingStationDashboard() {
//     document.body.innerHTML = '';
//     getChargingStationById().then(chargepoint=>{
//       if(chargepoint.name !==null || chargepoint.name===''){
        
//         const container = document.createElement('div');
//         container.className = 'stationdashboard';

//         createAndAppend(container, 'h1', 'Charging Station Owner Dashboard');

//         const dashboardSectionDiv = document.createElement('div');
//         dashboardSectionDiv.className = 'dashboard-section';

//         const slotsContainerDiv = document.createElement('div');
//         slotsContainerDiv.className = 'slots-container';
//         createAndAppend(slotsContainerDiv, 'h2', 'Slots');

//         showChargingStationSlots(slotsContainerDiv);

//         const slotOption = document.createElement('div');
//         slotOption.className = 'stationoptions';

//         const viewslot = document.createElement('button');
//         viewslot.textContent='add slot'
//         viewslot.className = 'stationoptionbtn';
//         viewslot.onclick=function(){
//           addSlot(slotOption);
//         }
//         slotOption.appendChild(viewslot)
//         slotsContainerDiv.appendChild(slotOption)

//         dashboardSectionDiv.appendChild(slotsContainerDiv);

//         const bookingsContainerDiv = document.createElement('div');
//         bookingsContainerDiv.className = 'bookings-container';
//         createAndAppend(bookingsContainerDiv, 'h2', 'Bookings');

//         showChargingStationBooking(bookingsContainerDiv);

//         const bookingOption = document.createElement('div');
//         bookingOption.className = 'stationoptions';

//         const viewBooking = document.createElement('button');
//         viewBooking.textContent='View Booking'
//         viewBooking.className = 'stationoptionbtn';
//         bookingOption.appendChild(viewBooking)
//         bookingsContainerDiv.appendChild(bookingOption)

//         createAndAppend(bookingsContainerDiv, 'div', '');

//         dashboardSectionDiv.appendChild(bookingsContainerDiv);
//         container.appendChild(dashboardSectionDiv);

//         createAndAppend(container, 'button', 'Logout');
//         container.lastChild.className = 'logout-btn';
//         container.lastChild.onclick = function() {
//           LogOutChargingStation();
//         };

//         document.body.appendChild(container); 
//     }else{
//       updateStationInfo();
//     }
//   });
// }

function LogOutChargingStation(){
  sessionStorage.clear();
  navigateTo("/")
}

function chargingStationDashboard() {
  document.body.innerHTML='';

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
    StationChangeTab("/stationbooking",mainContentDiv);
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
    case "/stationbooking":{
      Chargingpoints(mainContentDiv);
      break;
    }
  }
}

