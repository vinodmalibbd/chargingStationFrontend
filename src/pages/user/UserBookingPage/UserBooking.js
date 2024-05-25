
let bookingRequest={
  userId:null,
  chargingSlotId:null,
  timeSlotId:null,
  date:null
}

function getCurrentDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function userBooking(){

  const BookingDiv = document.querySelector('.mainDiv');
  BookingDiv.innerHTML = " ";

  const headingDiv = document.createElement('div');
  headingDiv.className = "BookingHeading";

  const bookingHeader = document.createElement('span');
  bookingHeader.className = 'bookingSpan';
  bookingHeader.textContent = "Kalyani Charging Point";

  const stationAdderess = document.createElement('span');
  stationAdderess.textContent = 'Fortaleza Complex, 5, Central Ave, Princeton Town Society, Prathamesh Society, Kalyani Nagar, Pune, Maharashtra 411006';


  headingDiv.appendChild(bookingHeader);
  headingDiv.appendChild(stationAdderess);

  BookingDiv.appendChild(headingDiv);
  
  

  const chargePointCardsDiv = document.createElement('div');
  chargePointCardsDiv.className = 'chargePointCardsDiv';
  BookingDiv.appendChild(chargePointCardsDiv);
    
for(let i=1;i<=5;i++){
  const chargePointcard = document.createElement('div');
  chargePointcard.className = 'chargePointcard';

  const chargepointId = document.createElement('span');
  chargepointId.textContent = 'Charging Point:1'
  const Price =document.createElement('span');
  Price.textContent = 'Price : $200';
  chargePointcard.appendChild(chargepointId);
  chargePointcard.appendChild(Price);

  chargePointCardsDiv.appendChild(chargePointcard);

}
const cards = document.querySelectorAll('.chargePointcard');

    if (cards.length > 0) {
        cards[0].classList.add('selected');
    }
    cards.forEach(card => {
        card.onclick =() => {
          
            cards.forEach(c => c.classList.remove('selected'));

            card.classList.add('selected');
        };
    });

const chargePointDiv = document.createElement('div');
  chargePointDiv.className = 'chargePointDiv';
  BookingDiv.appendChild(chargePointDiv);


  const bookingDatePickerDiv = document.createElement('div');
  bookingDatePickerDiv.className = "bookingDatePickerDiv";

  const bookingDatePicker = document.createElement('input');
  bookingDatePicker.className = 'bookingDatePicker';
  bookingDatePicker.type = 'date';
  bookingDatePicker.value = getCurrentDate();
  bookingDatePicker.min = getCurrentDate();

  const DatePickerlabel = document.createElement('label');
  DatePickerlabel.className = 'UserDatePickerSpan';
  DatePickerlabel.textContent = 'Date : ';

  bookingDatePickerDiv.appendChild(DatePickerlabel);
  bookingDatePickerDiv.appendChild(bookingDatePicker);

  const BookingtimeslotDiv =document.createElement('div');
  BookingtimeslotDiv.className ='BookingtimeslotDiv';

  const timeSlotlabel = document.createElement('label');
  timeSlotlabel.className = 'timeSlotlabel';
  timeSlotlabel.textContent ="Time Slot : ";

  const timeSlotList = document.createElement('select');
  timeSlotList.className = 'timeSlotList';

  BookingtimeslotDiv.appendChild(timeSlotlabel);
  BookingtimeslotDiv.appendChild(timeSlotList);

  const BookingButtonGroup = document.createElement('div');
  BookingButtonGroup.className = 'BookingButtonGroup';

  const userBookingButton =document.createElement('button');
  userBookingButton.className = 'BookingButton';
  userBookingButton.textContent = 'Book Now '

  const BookingCancelbtn = document.createElement('button');
  BookingCancelbtn.className = 'BookingCancelbtn';
  BookingCancelbtn.textContent = 'Cancel';

  BookingCancelbtn.onclick = (e) =>{
    e.preventDefault();
    // UserLandingPage();
  
  }

  BookingButtonGroup.appendChild(BookingCancelbtn);
  BookingButtonGroup.appendChild(userBookingButton);
  chargePointDiv.appendChild(bookingDatePickerDiv);
  chargePointDiv.appendChild(BookingtimeslotDiv);
  chargePointDiv.appendChild(BookingButtonGroup);

  const UserFeedback = document.createElement('div');
  UserFeedback.className = 'UserFeedback';
  BookingDiv.appendChild(UserFeedback);

}


function createChargePointCards(chargingStation){
  const slotsCards =document.querySelector('.chargePointDiv');
  // getAllChargingStationSlotsById(1).then(slots =>{

  //   console.log(slots);
  //   if(slots && slots.length > 0){
  //     slots.map(slot => {
  //       const chargingSlots = document.createElement('div');
  //       chargingSlots.className = 'charginSlot';
  
  //       const chargingSlotId = document.createElement('span');
  //       chargingSlotId.className = 'chargingSlotId';
  //       chargingSlotId.textContent = `Slot : ${slot.slotId}`;
  
  //       const chargingSlotPrice = document.createElement('span');
  //       chargingSlotPrice.className = 'chargingSlotPrice';
  //       chargingSlotPrice.textContent = `Price : ₹${slot.pricePerHour}`;
  
  //       chargingSlots.appendChild(chargingSlotId);
  //       chargingSlots.appendChild(chargingSlotPrice);
  
  //       slotsCards.appendChild(chargingSlots);
  //   });
  //   }
  //   else{
  //      const noslotAvailableslotsCards = document.createElement('div');
  //      noslotAvailableslotsCards.className = 'noslotAvailableslotsCards';

  //      const warningspan = document.createElement('span');
  //      warningspan.textContent = 'Warning'; 

  //      const warningspan01 = document.createElement('span');
  //      warningspan01.textContent ='No Chrging Slot Available for this Station';

  //      noslotAvailableslotsCards.appendChild(warningspan);
  //      noslotAvailableslotsCards.appendChild(warningspan01);
  //      chargePointDiv.appendChild(noslotAvailableslotsCards);
  //   }
  // });  
  
}