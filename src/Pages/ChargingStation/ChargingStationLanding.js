function createAndAppend(parent, elementType, content) {
  const element = document.createElement(elementType);
  element.innerHTML = content;
  parent.appendChild(element);
}

// Function to create dashboard
function chargingStationDashboard() {
  document.body.innerHTML = '';

  const container = document.createElement('div');
  container.className = 'stationdashboard';

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

  // Create slots container div
  const slotsContainerDiv = document.createElement('div');
  slotsContainerDiv.className = 'slots-container';

  // Create slots header
  createAndAppend(slotsContainerDiv, 'h2', 'Slots');

  // Create slots table
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

  // Append slots container div to dashboard section div
  dashboardSectionDiv.appendChild(slotsContainerDiv);

  // Create bookings container div
  const bookingsContainerDiv = document.createElement('div');
  bookingsContainerDiv.className = 'bookings-container';

  // Create bookings header
  createAndAppend(bookingsContainerDiv, 'h2', 'Bookings');

  // Create bookings table
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

  // Create feedback button
  createAndAppend(bookingsContainerDiv, 'div', '');
  createAndAppend(bookingsContainerDiv.lastChild, 'button', 'Feedback');
  bookingsContainerDiv.lastChild.lastChild.onclick = function() {
    window.location.href = 'feedback.html';
  };

  // Append bookings container div to dashboard section div
  dashboardSectionDiv.appendChild(bookingsContainerDiv);

  // Append dashboard section div to container
  container.appendChild(dashboardSectionDiv);

  // Create logout button
  createAndAppend(container, 'button', 'Logout');
  container.lastChild.className = 'logout-btn';
  container.lastChild.onclick = function() {
    window.location.href = 'logout.html';
  };

  // Append container to body
  document.body.appendChild(container);
}

// Call the function to create the dashboard
