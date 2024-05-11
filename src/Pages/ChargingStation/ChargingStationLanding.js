// Function to fetch slot data from the backend
function fetchSlotData() {
  // Simulating backend data retrieval
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Assuming slot data is fetched successfully from the backend
      const slotData = [
        { id: 1, name: "Slot 1", status: "Available", bookings: 2 },
        { id: 2, name: "Slot 2", status: "Unavailable", bookings: 0 }
      ];
      resolve(slotData);
    }, 1000); // Simulating delay
  });
}

// Function to fetch booking data from the backend
function fetchBookingData() {
  // Simulating backend data retrieval
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Assuming booking data is fetched successfully from the backend
      const bookingData = [
        { time: "12:00 PM", user: "Harshal", slotID: "Slot A", status: "Confirmed" },
        { time: "01:30 PM", user: "Vinodh", slotID: "Slot B", status: "Pending" },
        { time: "03:00 PM", user: "Mohan", slotID: "Slot C", status: "Confirmed" }
      ];
      resolve(bookingData);
    }, 1000); // Simulating delay
  });
}

// Function to render slot data
function renderSlots(slotData) {
  const slotsContainer = document.querySelector('.slots-container table tbody');
  slotsContainer.innerHTML = ''; // Clear existing data

  slotData.forEach(slot => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${slot.id}</td>
      <td>${slot.name}</td>
      <td>${slot.status}</td>
      <td>${slot.bookings}</td>
    `;
    slotsContainer.appendChild(row);
  });
}

// Function to render booking data
function renderBookings(bookingData) {
  const bookingsContainer = document.querySelector('.bookings-container table tbody');
  bookingsContainer.innerHTML = ''; // Clear existing data

  bookingData.forEach(booking => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${booking.time}</td>
      <td>${booking.user}</td>
      <td>${booking.slotID}</td>
      <td>${booking.status}</td>
    `;
    bookingsContainer.appendChild(row);
  });
}

// Function to initialize the dashboard
async function initializeDashboard() {
  // Fetch slot data and render slots
  const slotData = await fetchSlotData();
  renderSlots(slotData);

  // Fetch booking data and render bookings
  const bookingData = await fetchBookingData();
  renderBookings(bookingData);
}

// Call the initializeDashboard function to start the dashboard
initializeDashboard();
