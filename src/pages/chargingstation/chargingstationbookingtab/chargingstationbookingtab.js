function Chargingstationbookingtab() {
    const maincontent = document.querySelector('.chargingstationtabcontainer');
    maincontent.innerHTML = '';
    const mainDiv = document.createElement('div');
    mainDiv.className='chargingstationbookings'
    maincontent.appendChild(mainDiv);

    
    const container = document.createElement('div');
    container.className = 'stationbookingcontainer';

    getAllChargingStationBooking().then(data=>{
        console.log(data);
        const filterContainer = document.createElement('div');
        filterContainer.className = 'filterContainer';
     
        const statusFilter = document.createElement('select');
        statusFilter.className = 'statusFilter';
        statusFilter.innerHTML = `
            <option value="">All Statuses</option>
            <option value="confirmed">Confirmed</option>
            <option value="cancelled">Cancelled</option>
        `;
        statusFilter.addEventListener('change', () => filterBookings(data));
     
        const dateFilter = document.createElement('input');
        dateFilter.type = 'date';
        dateFilter.className = 'dateFilter';
        dateFilter.addEventListener('change', () => filterBookings(data));
     
        filterContainer.appendChild(statusFilter);
        filterContainer.appendChild(dateFilter);
        mainDiv.appendChild(filterContainer);
        mainDiv.appendChild(container);
       
        renderBookings(data, container);
    
    }).catch(e=>{
        console.log(e.message);
    })
 
    
 
}
 
function formatTime(hour) {
    const h = hour % 12 || 12;
    const ampm = hour < 12 || hour === 24 ? 'AM' : 'PM';
    return `${h}:00 ${ampm}`;
}
 
function renderBookings(data, container) {
    container.innerHTML = '';
    if (data.length === 0) {
        const noDataMessage = document.createElement('div');
        noDataMessage.className = 'noDataMessage';
        noDataMessage.innerText = 'No bookings found for the selected filters.';
        container.appendChild(noDataMessage);
        return;
    }
    data.map(booking => {
        const bookingCard = document.createElement('div');
        bookingCard.className = 'bookingCard';
 
        const username = document.createElement('div');
        username.className = 'bookingDetail';
        username.innerHTML = `<strong>Username:</strong> ${booking.user.firstName} ${booking.user.lastName}`;
        bookingCard.appendChild(username);
 
        const date = document.createElement('div');
        date.className = 'bookingDetail';
        date.innerHTML = `<strong>Date:</strong> ${new Date(booking.date).toLocaleDateString()}`;
        bookingCard.appendChild(date);
 
        const startTime = document.createElement('div');
        startTime.className = 'bookingDetail';
        startTime.innerHTML = `<strong>Start Time:</strong> ${formatTime(booking.timeSlot.startTime)}`;
        bookingCard.appendChild(startTime);
 
        const endTime = document.createElement('div');
        endTime.className = 'bookingDetail';
        endTime.innerHTML = `<strong>End Time:</strong> ${formatTime(booking.timeSlot.endTime)}`;
        bookingCard.appendChild(endTime);
 
        const chargingPoint = document.createElement('div');
        chargingPoint.className = 'bookingDetail';
        chargingPoint.innerHTML = `<strong>Charging Point Number:</strong> ${booking.chargingSlot.slotId}`;
        bookingCard.appendChild(chargingPoint);
 
        const status = document.createElement('div');
        status.className = 'bookingDetail';
        const statusSpan = document.createElement('span');
        statusSpan.innerHTML = booking.status.charAt(0).toUpperCase() + booking.status.slice(1);
        statusSpan.className = `status ${booking.status === 'confirmed' ? 'confirm' : 'cancel'}`;
        status.appendChild(document.createTextNode('Status: '));
        status.appendChild(statusSpan);
        bookingCard.appendChild(status);
 
        container.appendChild(bookingCard);
    });
}
 
function filterBookings(data) {
    const statusFilter = document.querySelector('.statusFilter').value;
    const dateFilter = document.querySelector('.dateFilter').value;
 
    const filteredData = data.filter(booking => {
        const matchesStatus = statusFilter ? booking.status === statusFilter : true;
        const matchesDate = dateFilter ? new Date(booking.date).toLocaleDateString() === new Date(dateFilter).toLocaleDateString() : true;
        return matchesStatus && matchesDate;
    });
 
    const container = document.querySelector('.stationbookingcontainer');
    renderBookings(filteredData, container);
}