function createAndAppend(parent, elementType, content) {
  const element = document.createElement(elementType);
  element.innerHTML = content;
  parent.appendChild(element);
}


function chargingStationDashboard() {
  document.body.innerHTML = '';
  const container = document.createElement('div');
  container.className = 'stationdashboard';

  createAndAppend(container, 'h1', 'Charging Station Owner Dashboard');

  const dashboardSectionDiv = document.createElement('div');
  dashboardSectionDiv.className = 'dashboard-section';

  const slotsContainerDiv = document.createElement('div');
  slotsContainerDiv.className = 'slots-container';
  createAndAppend(slotsContainerDiv, 'h2', 'Slots');
  showChargingStation(slotsContainerDiv);

  const slotOption = document.createElement('div');
  slotOption.className = 'stationoptions';

  const viewslot = document.createElement('button');
  viewslot.textContent='add slot'
  viewslot.className = 'stationoptionbtn';
  viewslot.onclick=function(){
    addSlot(slotOption);
  }
  slotOption.appendChild(viewslot)
  slotsContainerDiv.appendChild(slotOption)

  dashboardSectionDiv.appendChild(slotsContainerDiv);

  const bookingsContainerDiv = document.createElement('div');
  bookingsContainerDiv.className = 'bookings-container';
  createAndAppend(bookingsContainerDiv, 'h2', 'Bookings');

  showChargingStationBooking(bookingsContainerDiv);

  const bookingOption = document.createElement('div');
  bookingOption.className = 'stationoptions';

  const viewBooking = document.createElement('button');
  viewBooking.textContent='View Booking'
  viewBooking.className = 'stationoptionbtn';
  bookingOption.appendChild(viewBooking)
  bookingsContainerDiv.appendChild(bookingOption)

  createAndAppend(bookingsContainerDiv, 'div', '');
  createAndAppend(bookingsContainerDiv.lastChild, 'button', 'Feedback');
  bookingsContainerDiv.lastChild.lastChild.onclick = function() {
    window.location.href = 'feedback.html';
  };

  dashboardSectionDiv.appendChild(bookingsContainerDiv);
  container.appendChild(dashboardSectionDiv);

  createAndAppend(container, 'button', 'Logout');
  container.lastChild.className = 'logout-btn';
  container.lastChild.onclick = function() {
    window.location.href = 'logout.html';
  };

  document.body.appendChild(container);
}

