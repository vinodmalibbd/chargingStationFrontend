function createAndAppend(parent, elementType, content) {
  const element = document.createElement(elementType);
  element.innerHTML = content;
  parent.appendChild(element);
}

function createDashboard() {
 
  const container = document.createElement('div');
  container.className = 'container';

  createAndAppend(container, 'h1', 'Charging Station Owner Dashboard');

  const optionsDiv = document.createElement('div');
  optionsDiv.className = 'options';

  createAndAppend(optionsDiv, 'button', 'View Slots');
  optionsDiv.lastChild.onclick = function() {
    window.location.href = 'slots.html';
  };

  createAndAppend(optionsDiv, 'button', 'View Bookings');
  optionsDiv.lastChild.onclick = function() {
    window.location.href = 'bookings.html';
  };

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
function ChargingStationLandingPage(){
  createDashboard();
}
