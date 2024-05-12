const UserBooking=()=>{
  document.body.innerHTML('');
  const container = document.createElement('div');
  container.classList.add('container');
  container.id = "cardContainer";
  
  const datepickerSection = document.createElement('div');
  datepickerSection.classList.add('datepicker');
  
  const datepickerTitle = document.createElement('h2');
  datepickerTitle.textContent = "Select Date:";
  
  const datePickerInput = document.createElement('input');
  datePickerInput.type = "date";
  datePickerInput.id = "date";
  datePickerInput.name = "date";
  datePickerInput.min = new Date().toISOString().split('T')[0];
  
  const submitButton = document.createElement('button');
  submitButton.textContent = "Submit";
  submitButton.addEventListener('click', renderTimeSlots);
  
  datepickerSection.appendChild(datepickerTitle);
  datepickerSection.appendChild(datePickerInput);
  datepickerSection.appendChild(submitButton);
  

  const timeslotContainer = document.createElement('div');
  timeslotContainer.id = "timeslot";
  timeslotContainer.classList.add('timeslot');
  
  document.body.appendChild(container);
  document.body.appendChild(datepickerSection);
  document.body.appendChild(timeslotContainer);
  
}
  
document.addEventListener('DOMContentLoaded', function () {
  fetch('http://localhost:8081/chargingstation/all')
    .then(response => response.json())
    .then(data => {
      const cardContainer = document.getElementById('cardContainer');
      data.forEach(item => {
        const card = createCard(item);
        cardContainer.appendChild(card);
      });
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });

 
    const bookingButton = document.createElement('button');
    bookingButton.textContent = 'Book Slot';
    bookingButton.addEventListener('click', bookSlot);
    bookingButton.classList.add('booking-button');
    document.body.appendChild(bookingButton);
  renderTimeSlots();
});

function renderTimeSlots() {
  const datepicker = document.getElementById("date");
  const selectedDate = new Date(datepicker.value);
  const currentDate = new Date();
  const stationOpen = 9; 
  const stationClose = 24; 
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
      
      currentHour++;
     }
  }
  else if (selectedDate > currentDate){
    for(let hour = stationOpen; hour<stationClose;hour++){
      const card = document.createElement('div');
      card.classList.add('card');
      card.textContent = `${hour}:00 ` + "To " + `${hour + 1}:00`;
      hourCardsContainer.appendChild(card);

    }
  }
  else{
    alert("please Don't Select Old Date")
  }
}

function bookSlot() {
  alert('Booking slot functionality will be implemented here.');
}