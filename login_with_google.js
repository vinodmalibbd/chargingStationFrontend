// // // function StationLandingPage() {
// // //   document.body.innerHTML='';

// // //   const wrapperDiv = document.createElement('div');
// // //   wrapperDiv.className = 'wrapper';

// // //   const sidebarDiv = document.createElement('div');
// // //   sidebarDiv.className = 'sidebar';

// // //   const headerDiv = document.createElement('div');
// // //   headerDiv.className = 'header';

// // //   const headerImgDiv = document.createElement('div');
// // //   headerImgDiv.className = 'headerImg';
// // //   const logoImg = document.createElement('img');
// // //   logoImg.src = 'logo.jpg';
// // //   logoImg.alt = '';
// // //   headerImgDiv.appendChild(logoImg);

// // //   const titleDiv = document.createElement('div');
// // //   titleDiv.className ='Title';
// // //   titleDiv.textContent = 'Smart EV Charge Point';

// // //   headerDiv.appendChild(headerImgDiv);
// // //   headerDiv.appendChild(titleDiv);

// // //   const ulElement = document.createElement('ul');

// // //   const logoutLi = document.createElement('li');
// // //   logoutLi.innerHTML = '<i class="fas fa-user"></i>LogOut';
// // //   logoutLi.onclick

// // //   const chargingSlotLi = document.createElement('li');
// // //   chargingSlotLi.innerHTML = '<i class="fas fa-address-card"></i>ChargingSlots';
// // //   chargingSlotLi.onclick=()=>{
// // //     StationChangeTab("/chargepoint",mainContentDiv);
// // //   }
// // //   const bookingLi = document.createElement('li');
// // //   bookingLi.innerHTML = '<i class="fas fa-address-card"></i>Bookings';
// // //   bookingLi.onclick=()=>{
// // //     StationChangeTab("/chargepoint",mainContentDiv);
// // //   }
// // //   const UpdateStationLi = document.createElement('li');
// // //   UpdateStationLi.innerHTML = '<i class="fas fa-user"></i>Update Station';
// // //   UpdateStationLi.onclick = () =>{
// // //     StationChangeTab("/updatestation",mainContentDiv);
// // //   }

// // //   ulElement.appendChild(chargingSlotLi);
// // //   ulElement.appendChild(bookingLi);
// // //   ulElement.appendChild(UpdateStationLi);

// // //   sidebarDiv.appendChild(headerDiv);
// // //   sidebarDiv.appendChild(ulElement);
// // //   sidebarDiv.appendChild(logoutLi);

// // //   const mainContentDiv = document.createElement('div');
// // //   mainContentDiv.className ='main_content';
// // //   wrapperDiv.appendChild(sidebarDiv);
// // //   wrapperDiv.appendChild(mainContentDiv);
// // //   document.body.appendChild(wrapperDiv);

 
// // // }
// // // function StationChangeTab(tabname,mainContentDiv){
// // //   mainContentDiv.innerHTML='';
// // //   switch(tabname){
// // //     case "/chargepoint":{
// // //       Chargingpoints(mainContentDiv);
// // //       break;
// // //     }
// // //     case "/updatestation":{
// // //       UpdateStationdivfunction(mainContentDiv);
// // //       break;
// // //     }
// // //   }
// // // }



// // // function UpdateStationdivfunction(mainContentDiv){
// // //   const chargepointtab=document.createElement("div");
// // //   chargepointtab.className='updateform';
// // //   mainContentDiv.appendChild(chargepointtab);
// // //   const formContainer = document.createElement('div');
// // //   formContainer.classList.add('main-container');
// // //   mainContentDiv.appendChild(formContainer);

// // //   const heading = document.createElement('h2');
// // //   heading.textContent = 'Update Station Profile';
// // //   formContainer.appendChild(heading);

// // //   const form = document.createElement('form');
// // //   form.className ="form-container";
// // //   formContainer.appendChild(form);

// // //  const stationName =document.createElement("label");
// // //  stationName.textContent = "Station Name :";
// // //  const nameInput = document.createElement("input");
// // //  nameInput.setAttribute('type','text');
// // //  nameInput.setAttribute('id','forminput');

// // //  const StationOpeningtime = document.createElement("label");
// // //  StationOpeningtime.textContent = "Station Opening Time :";
// // //  const OpentimeInput = document.createElement("input");
// // //  OpentimeInput.setAttribute('type','number');
// // //  OpentimeInput.setAttribute('id','forminput');

// // //  const StationClosingtime = document.createElement("label");
// // //  StationClosingtime.textContent = "Station Closing Time :";
// // //  const CloseTimeInput = document.createElement("input");
// // //  CloseTimeInput.setAttribute('type','number');
// // //  CloseTimeInput.setAttribute('id','forminput');

// // // //  const checkboxdiv = document.createElement('div');
// // // //  checkboxdiv.classList = "checkboxdiv";
// // // //  const checkbox =document.createElement('input');
// // // //  checkbox.type = 'checkbox';
// // // //  checkbox.className ='checkbox';


// // //  const stationLatitude = document.createElement("label");
// // //  stationLatitude.textContent = "Station Latitude :";
// // //  const LatitudeInput = document.createElement("input");
// // //  LatitudeInput.setAttribute('type','text');
// // //  LatitudeInput.setAttribute('id','forminput');

// // //  const stationLongitude = document.createElement("label");
// // //  stationLongitude.textContent = "Station Longitude :";
// // //  const LongitudeInput = document.createElement("input");
// // //  LongitudeInput.setAttribute('type','text');
// // //  LongitudeInput.setAttribute('id','forminput');

// // //   form.appendChild(stationName);
// // //   form.appendChild(nameInput);
// // //   form.appendChild(StationOpeningtime);
// // //   form.appendChild(OpentimeInput);
// // //   form.appendChild(StationClosingtime);
// // //   form.appendChild(CloseTimeInput);
// // //   form.appendChild(stationLatitude);
// // //   form.appendChild(LatitudeInput);
// // //   form.appendChild(stationLongitude);
// // //   form.appendChild(LongitudeInput);
  
// // //   const buttonDiv =document.createElement("div");
// // //   buttonDiv.className ="ButtonDiv";


// // //   const getlocation=document.createElement('button');
// // //   getlocation.textContent="add auto location";  
// // //   getlocation.onclick=function(){
// // //     const loc=getCurrentPositionUser();
// // //     const latitudeInput = document.getElementById('latitude');
// // //     const longitudeInput = document.getElementById('longitude');
// // //     latitudeInput.value = loc.lat;
// // //     longitudeInput.value = loc.long;
// // //   }
// // //   buttonDiv.appendChild(getlocation);
// // //   const submitButton = document.createElement('button');
// // //   submitButton.setAttribute('type', 'button');
// // //   submitButton.textContent = 'Submit';
// // //   submitButton.onclick = () =>{
// // //     submitForm();
// // //   }
// // //   const cancelButton =document.createElement('button');
// // //   cancelButton.textContent ="cancel";
// // //   cancelButton.onclick = () =>{
// // //     StationLandingPage();
// // //   }
// // //   buttonDiv.appendChild(submitButton);
// // //   buttonDiv.appendChild(cancelButton);
// // //   form.appendChild(buttonDiv);
// // // }

// // // function submitForm() {
// // //   const formData = new FormData(document.getElementById('profileForm'));

// // //   const formDataObject = {};

// // //   for (let [key, value] of formData.entries()) {
// // //     if(key==='openTime'|| key==='closeTime'){
// // //       value=parseInt(value);
// // //     }
// // //     if(key==='longitude'|| key==='latitude'){
// // //       value=parseFloat(value);
// // //     }
// // //     formDataObject[key] = value;
// // //   }
// // //   console.log(formDataObject);
// // //   getChargingStationById().then(data=>{
// // //     console.log(data);
// // //     formDataObject['emailId']=data.emailId;
// // //     updateChargingStationProfile(formDataObject)
// // //   })
// // // }

// // // function createNewChargingPoint(){
// // //   console.log("Added slot")
// // //   const card = document.createElement('div');
// // //   card.className = 'chargepointcard';
// // //   const inputName =document.createElement('input');
// // //   inputName.type = 'text';
// // //   inputName.placeholder = 'Name :';
// // //   card.appendChild(inputName)
  
// // //   const priceSpan =document.createElement('span');
// // //   priceSpan.textContent ='Price :';
// // //   const inputPrice = document.createElement('input');
// // //   inputPrice.type = 'text';
// // //   card.appendChild(priceSpan);
// // //   card.appendChild(inputName);

// // //   const spanStstus = document.createElement('span');
// // //   spanStstus.textContent = 'Status :';
// // //   const inputStatus =document.createElement('input');
// // //   inputStatus.type ='text';
// // //   card.appendChild(spanStstus);
// // //   card.appendChild(inputStatus);
// // //   const saveButton = document.createElement('button');
// // //   saveButton.className = 'save-btn';
// // //   saveButton.textContent = 'Save';
// // //   card.appendChild(saveButton);
// // //   saveButton.onclick = () => {
// // //     const newItem = {
// // //       name: inputName.value,
// // //       openTime: inputPrice.value,
// // //       closeTime: inputStatus.value
// // //     };
// // //     cardsContainer.innerHTML('');
// // //     Chargingpoints(mainContentDiv);
// // //   }
// // // }
// // // //for rendering cards
// // // function Chargingpoints(mainContentDiv){
// // //   const chargepointtab=document.createElement("div");
// // //   chargepointtab.className='chargepointTab';
// // //   mainContentDiv.appendChild(chargepointtab);

// // //   const cardsContainer=document.createElement('div');
// // //   cardsContainer.className="chargepointcardscontainer";
// // //   chargepointtab.appendChild(cardsContainer);
// // //   getAllChargingStationSlots().then(data=>{
// // //     data.map(item=>{
// // //       const card=document.createElement('div');
// // //       card.className='chargepointcard';

// // //       const editDeleteButtonDiv = document.createElement('div');
// // //       editDeleteButtonDiv.className = 'buttons';

// // //       const description = document.createElement('div');
// // //       description.className = 'description';

// // //       const span01 = document.createElement('span');
// // //       const span02 = document.createElement('span');
// // //       const span03 = document.createElement('span');
// // //       span01.textContent = item.name;
// // //       span02.textContent = "Price : " + item.openTime;
// // //       span03.textContent = "Status : " + item.closeTime;
// // //       const editButton = document.createElement('button');
// // //       editButton.classList.add('edit-btn');
// // //       editButton.innerHTML = '✏️';
// // //       editButton.onclick = () => {
// // //         UpdateChargePoints();
// // //       }
// // //       const deleteButton = document.createElement('button');
// // //       deleteButton.classList.add('delete-btn');
// // //       deleteButton.innerHTML = '🗑️';
// // //       deleteButton.onclick = () => {
// // //         DeleteChargePoint();
// // //       }

// // //       description.appendChild(span01);
// // //       description.appendChild(span02);
// // //       description.appendChild(span03);
// // //       editDeleteButtonDiv.appendChild(editButton);
// // //       editDeleteButtonDiv.appendChild(deleteButton);
      
// // //       card.appendChild(description);
// // //       card.appendChild(editDeleteButtonDiv);
// // //       card.onclick=()=>{
// // //         chargeStationPage(item,mainContentDiv);
// // //       }
// // //       cardsContainer.appendChild(card);
// // //     })
// // //   })
// // //   const buttonDiv =document.createElement('div');
// // //   buttonDiv.className = "ButttonCrudDiv";

// // //   const addSlot = document.createElement('button');
// // //   addSlot.className = "AddSlotButton";
// // //   addSlot.textContent = "ADD Slot";
// // //   addSlot.onclick = () =>{
// // //     createNewChargingPoint();
// // //   }
// // //  buttonDiv.appendChild(addSlot); 
// // //  mainContentDiv.appendChild(buttonDiv);
// // // }

// // // StationLandingPage();


// // function createSucessPopUpBox(){
// //   const mainDiv = document.createElement('div');
// //   mainDiv.className = 'PopSucessmainDiv';
// //   const SucessPopUp = document.createElement('div');
// //   SucessPopUp.className = 'SuccessPopUpBox';
// //   const PopUpHeader = document.createElement('div');
// //   PopUpHeader.className = 'PopUpHeader';
// //   PopUpHeader.textContent = 'Sucess';
// //   const PopUpMessage = document.createElement('div');
// //   PopUpMessage.className = 'PopUpMessage';
// //   PopUpMessage.textContent = 'Booking confirmed';
// //   const PopUpOkButton =document.createElement('div');
// //   const PopUpicon =document.createElement('div');
// //   PopUpicon.className = 'PopUpicon';
// //   PopUpicon.innerHTML = `<i class="fas fa-check-circle"></i> `;
// //   const PopupOkButton =document.createElement('button')
// //   PopUpOkButton.className = 'PopupOkButton';
// //   PopUpOkButton.textContent = 'OK';
// //   PopUpOkButton.onclick =() =>{
// //     document.body.removeChild(mainDiv);
// //   }
// //   SucessPopUp.appendChild(PopUpicon);
// //   SucessPopUp.appendChild(PopUpHeader);
// //   SucessPopUp.appendChild(PopUpMessage);
// //   SucessPopUp.appendChild(PopUpOkButton);
// //   mainDiv.appendChild(SucessPopUp);
// //   document.body.appendChild(mainDiv);

// // }
// // createSucessPopUpBox();
// // script.js
// // script.js
// // document.addEventListener('DOMContentLoaded', () => {
// //   // User data
// //   const user = {
// //       name: 'John Doe',
// //       email: 'john.doe@example.com'
// //   };

// //   // Booking data
// //   const bookings = [
// //       { id: 'booking-1', slot: 'A1', date: '2024-05-20', bookingId: '12345' },
// //       { id: 'booking-2', slot: 'B2', date: '2024-05-22', bookingId: '67890' }
// //   ];

// //   // Populate user info
// //   const userInfoDiv = document.getElementById('userInfo');
// //   userInfoDiv.innerHTML = `
// //       <p><strong>Name:</strong> ${user.name}</p>
// //       <p><strong>Email:</strong> ${user.email}</p>
// //   `;

// //   // Populate bookings
// //   const bookingsDiv = document.getElementById('bookings');
// //   bookings.forEach(booking => {
// //       const bookingDiv = document.createElement('div');
// //       bookingDiv.className = 'booking';
// //       bookingDiv.id = booking.id;
// //       bookingDiv.innerHTML = `
// //           <p><strong>Booking ID:</strong> ${booking.bookingId}</p>
// //           <p><strong>Slot:</strong> ${booking.slot}</p>
// //           <p><strong>Date:</strong> ${booking.date}</p>
// //           <button class="cancel-button" onclick="cancelBooking('${booking.id}')">Cancel Booking</button>
// //       `;
// //       bookingsDiv.appendChild(bookingDiv);
// //   });
// // });

// // // Function to show bookings
// // function showBookings() {
// //   const bookingsContainer = document.getElementById('bookingsContainer');
// //   bookingsContainer.style.display = 'block';
// // }

// // // Function to cancel booking
// // function cancelBooking(bookingId) {
// //   const bookingElement = document.getElementById(bookingId);
// //   if (confirm('Are you sure you want to cancel this booking?')) {
// //       bookingElement.remove();
// //       alert('Booking cancelled successfully.');
// //   }
// // }

// // // Function to logout
// // function logout() {
// //   // Clear session (for this example, we just use an alert)
// //   alert('Logging out...');
// //   // Redirect to home page (you can replace with actual redirect logic)
// //   window.location.href = 'index.html';
// // }

// // Mock function to simulate fetching data from the backend
// async function fetchBookings() {
//   return [
//       {
//           stationName: "Station 1",
//           slotId: "Slot A1",
//           date: "2024-05-19",
//           startTime: "10:00 AM",
//           endTime: "11:00 AM"
//       },
//       {
//           stationName: "Station 2",
//           slotId: "Slot B2",
//           date: "2024-05-20",
//           startTime: "01:00 PM",
//           endTime: "02:00 PM"
//       },
//       // Add more bookings as needed
//   ];
// }

// // Function to create a card for each booking
// function createBookingCard(booking) {
//   const card = document.createElement('div');
//   card.className = 'card';

//   const stationName = document.createElement('h3');
//   stationName.textContent = booking.stationName;

//   const slotId = document.createElement('p');
//   slotId.textContent = `Slot ID: ${booking.slotId}`;

//   const date = document.createElement('p');
//   date.textContent = `Date: ${booking.date}`;

//   const startTime = document.createElement('p');
//   startTime.textContent = `Start Time: ${booking.startTime}`;

//   const endTime = document.createElement('p');
//   endTime.textContent = `End Time: ${booking.endTime}`;

//   card.appendChild(stationName);
//   card.appendChild(slotId);
//   card.appendChild(date);
//   card.appendChild(startTime);
//   card.appendChild(endTime);

//   return card;
// }

// // Function to show all bookings in the form of cards
// async function showBookings() {
//   const bookingsContainer = document.getElementById('bookings-container');
//   const bookings = await fetchBookings();

//   bookings.forEach(booking => {
//       const card = createBookingCard(booking);
//       bookingsContainer.appendChild(card);
//   });
// }

// // Call the function to show bookings on page load
// document.addEventListener('DOMContentLoaded', showBookings);
// function searchStationPage(){
//   const MainDiv = document.querySelector('.main_content');
//   MainDiv.innerHTML = "";
//   const chargingStationContainer = document.createElement('div');
//   chargingStationContainer.className = 'chargingStationContainer';

//   const chargingStationHeader = document.createElement('div');
//   chargingStationHeader.className = 'chargingStationHeader';

//   const Headerspan = document.createElement('span');
//   Headerspan.className = 'Headerspan';
//   Headerspan.textContent = 'SEARCH CHARGING STATION';

//   chargingStationHeader.appendChild(Headerspan);

  
//   const chargingStationBody = document.createElement('div');
//   chargingStationBody.className = 'chargingStationBody';

//   const searchStationbar = document.createElement('input');
//   searchStationbar.className = 'searchStationbar';
//   searchStationbar.type ='text';

//   const SearchStationButton =document.createElement('button');
//   SearchStationButton.textContent = 'SEARCH';
//   SearchStationButton.className = 'SearchStationButton';
//   SearchStationButton.onclick = () =>{
//     searchChargingStations(searchStationbar.value);
//   }
//   chargingStationBody.appendChild(searchStationbar);
//   chargingStationBody.appendChild(SearchStationButton);

//   chargingStationContainer.appendChild(chargingStationHeader);
//   chargingStationContainer.appendChild(chargingStationBody);
//   MainDiv.appendChild(chargingStationContainer);
// }
document.addEventListener("DOMContentLoaded", function() {
  const toastContainer = document.getElementById('toastContainer');

  function createToast(message, type) {
      const toast = document.createElement('div');
      toast.classList.add('toast', type);
      
      toast.innerHTML = `
          <span>${message}</span>
          <span class="close-btn">&times;</span>
      `;

      toast.querySelector('.close-btn').addEventListener('click', () => {
          toastContainer.removeChild(toast);
      });

      toastContainer.appendChild(toast);

      setTimeout(() => {
          if (toastContainer.contains(toast)) {
              toastContainer.removeChild(toast);
          }
      }, 3000);
  }

  const showSuccessToast = () => createToast('Your action was successful!', 'success');
  const showErrorToast = () => createToast('An error occurred!', 'error');

  document.getElementById('showSuccessToastBtn').addEventListener('click', showSuccessToast);
  document.getElementById('showErrorToastBtn').addEventListener('click', showErrorToast);
});



function searchChargingStations(city) {
  const chargingStationContainer = document.querySelector('.chargingStationBody');

  const chargingStations = getAllChargingStation();

  const filteredStations = searchByCityName(city);

  filteredStations.forEach(station => {
      const stationCard = document.createElement('div');
      stationCard.className = 'searchstationcard';

      const name = document.createElement('span');
      name.textContent = station.name;

      const opentime = document.createElement('span');
      opentime.textContent = station.openTime;

      const closeTime = document.createElement('span');
      closeTime.textContent = station.closeTime;

      const Spanaddress =document.createElement('span');
      getAddress(station.latitude, station.longitude).then(address => Spanaddress.textContent = address);

      stationCard.appendChild(name);
      stationCard.appendChild(Spanaddress);
      stationCard.appendChild(opentime);
      stationCard.appendChild(closeTime);
      
      chargingStationContainer.appendChild(stationCard);
  });
}

// searchStationPage();


// document.querySelector('.searchpagesearchbar button').addEventListener('click', () => {
//   const city = document.querySelector('.searchpagesearchbar input').value;
//   searchChargingStations(city);
// });
