function createAndAppend(parent, elementType, content) {
  const element = document.createElement(elementType);
  element.innerHTML = content;
  parent.appendChild(element);
}

<<<<<<< HEAD
// Function to create dashboard
function chargingStationDashboard() {
  document.body.innerHTML = '';

  const container = document.createElement('div');
  container.className = 'stationdashboard';
=======
function createDashboard() {
 
  const container = document.createElement('div');
  container.className = 'container';
>>>>>>> dbb3278c953fc2625947cd9ad98c2a137fedc967

  createAndAppend(container, 'h1', 'Charging Station Owner Dashboard');

  const optionsDiv = document.createElement('div');
  optionsDiv.className = 'stationoptions';

  const viewslot = document.createElement('button');
  viewslot.textContent='View Slots'
  viewslot.className = 'stationoptionbtn';
  optionsDiv.appendChild(viewslot)

  const viewBooking = document.createElement('button');
  viewBooking.textContent='View Booking'
  viewBooking.className = 'stationoptionbtn';
  optionsDiv.appendChild(viewBooking)

  
  container.appendChild(optionsDiv);


  const dashboardSectionDiv = document.createElement('div');
  dashboardSectionDiv.className = 'dashboard-section';

  const slotsContainerDiv = document.createElement('div');
  slotsContainerDiv.className = 'slots-container';

  createAndAppend(slotsContainerDiv, 'h2', 'Slots');

  createAndAppend(slotsContainerDiv, 'table', `
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Status</th>
        <th>Bookings</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Slot 1</td>
        <td>Available</td>
        <td>2</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Slot 2</td>
        <td>Unavailable</td>
        <td>0</td>
      </tr>
    </tbody>
  `);

  dashboardSectionDiv.appendChild(slotsContainerDiv);
  const bookingsContainerDiv = document.createElement('div');
  bookingsContainerDiv.className = 'bookings-container';
  createAndAppend(bookingsContainerDiv, 'h2', 'Bookings');

  createAndAppend(bookingsContainerDiv, 'table', `
    <thead>
      <tr>
        <th>Time</th>
        <th>User</th>
        <th>Slot ID</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>12:00 PM</td>
        <td>Harshal</td>
        <td>Slot A</td>
        <td>Confirmed</td>
      </tr>
      <tr>
        <td>01:30 PM</td>
        <td>Vinodh</td>
        <td>Slot B</td>
        <td>Pending</td>
      </tr>
      <tr>
        <td>03:00 PM</td>
        <td>Mohan</td>
        <td>Slot C</td>
        <td>Confirmed</td>
      </tr>
    </tbody>
  `);

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

