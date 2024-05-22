function ShowBookingsfunction() {
  const UserLandingPage = document.querySelector(".main_content");
  UserLandingPage.innerHTML = " ";
  const cardsContainershowBooking = document.createElement('div');
  cardsContainershowBooking.className = 'userbookingheader';
  cardsContainershowBooking.textContent="YOURS BOOKING"
  UserLandingPage.appendChild(cardsContainershowBooking);
  const BookingheadingDiv = document.createElement('p');
  BookingheadingDiv.className = 'userbookingheader';
  BookingheadingDiv.textContent = ' User Bookings';
  const userBookingSection=document.createElement('div');
  userBookingSection.className='userbookingsection';
  UserLandingPage.appendChild(userBookingSection);
  showAllUserBookings().then(data=>{

      data.map(book => {
          createBookingCard(book,userBookingSection);
      });
  })
}

function createBookingCard(booking,userBookingSection) {
  const bookingcard=document.createElement('div');
    bookingcard.className='stationbookingcard';
    
    const usernameanddatecontainer=document.createElement("div");
    usernameanddatecontainer.className='stationbookingcarditem';

    const usernamecontainer=document.createElement('div');
    usernamecontainer.className='stationbookinglablespan';

    const namespan=document.createElement('span');
    namespan.textContent='Name';
    namespan.className='lablespan';
    

    const username=document.createElement('span');
    username.textContent=`${booking.chargingStation.name}`;
    username.className='valuespan';

    usernamecontainer.appendChild(namespan);
    usernamecontainer.appendChild(username);
    

    const datecontainer=document.createElement('div');
    datecontainer.className='stationbookinglablespan';

    const datespan=document.createElement('span');
    datespan.textContent=`Date`
    datespan.className='lablespan'

    const bookingdate=document.createElement('span');
    bookingdate.textContent=`${formatDate(booking.date)}`;
    bookingdate.className='valuespan';

    datecontainer.appendChild(datespan);
    datecontainer.appendChild(bookingdate);

    usernameanddatecontainer.appendChild(usernamecontainer);
    usernameanddatecontainer.appendChild(datecontainer);

    const timeandstatuscontainer=document.createElement('div');
    timeandstatuscontainer.className='stationbookingcarditem';


    const timeContainer=document.createElement('div');
    timeContainer.className='stationbookinglablespan';

    const timespan=document.createElement('span');
    timespan.textContent='Time'
    timespan.className='lablespan'

    const bookingtime=document.createElement('span');
    bookingtime.textContent=`${booking.timeSlot.startTime}:00 -${booking.timeSlot.endTime}:00`;
    bookingtime.className='valuespan';

    timeContainer.appendChild(timespan);
    timeContainer.appendChild(bookingtime);

    const slotnumbercontainer=document.createElement('div');
    slotnumbercontainer.className='stationbookinglablespan';

    const slotspan=document.createElement('span');
    slotspan.textContent=`Status`;
    slotspan.className='lablespan';
    const bookingstatus=document.createElement('span');
    bookingstatus.textContent=`${booking.status}`;
    bookingstatus.className='valuespan';
    

    slotnumbercontainer.appendChild(slotspan);
    slotnumbercontainer.appendChild(bookingstatus);

    timeandstatuscontainer.appendChild(timeContainer);
    timeandstatuscontainer.appendChild(slotnumbercontainer)

    const showbookingbtn=document.createElement("span");
    showbookingbtn.className='stationbookingshowmorebtn';
    showbookingbtn.textContent=`chargepoint: ${booking.chargingSlot.slotId}`

    const cancelBtnDiv = document.createElement('div');
    cancelBtnDiv.className = 'cancelBtnDiv';
    const cancelBooking = document.createElement('button');
    cancelBooking.className = 'cancelBooking';
    cancelBooking.textContent = 'cancelBooking';
    
    cancelBooking.onclick = () =>{
      console.log(booking);
      createWarningPopup(booking);

    }


    bookingcard.appendChild(usernameanddatecontainer);
    bookingcard.appendChild(timeandstatuscontainer);
    bookingcard.appendChild(showbookingbtn);
    cancelBtnDiv.appendChild(cancelBooking);
    if(booking.status === 'cancelled'){
      cancelBtnDiv.removeChild(cancelBooking);
    }
    else{
      cancelBtnDiv.appendChild(cancelBooking);
    }
    bookingcard.appendChild(cancelBtnDiv)
    userBookingSection.appendChild(bookingcard);

}
