function showChargingStationBooking(){
  const mainContentDiv=document.querySelector('.main_content');
  mainContentDiv.innerHTML='';
  
  const stationBookingHeader=document.createElement('div');
  stationBookingHeader.className='stationbookingheader'
  stationBookingHeader.textContent="Bookings"
  
  const bookings=document.createElement('div')
  bookings.className='stationbookingsection';

  getAllChargingStationBooking().then(res=>{
    console.log(res);
  })
//   usersTimeSlots.map((item)=>{
    // const bookingcard=document.createElement('div');
    // bookingcard.className='stationbookingcard';
    
    // const usernamecontainer=document.createElement('div');
    // usernamecontainer.className='stationbookingusername';

    // const namespan=document.createElement('span');
    // namespan.textContent='Name';
    // namespan.className='lablespan';

    // const username=document.createElement('span');
    // username.textContent=item.userName;
    // username.className='valuespan';

    // usernamecontainer.appendChild(namespan);
    // usernamecontainer.appendChild(username);
    
    // const datetimecontainer=document.createElement('div');
    // datetimecontainer.className='stationbookingdatetime';

    // const datecontainer=document.createElement('div');
    // datecontainer.className='bookingdatecontainer';

    // const datespan=document.createElement('span');
    // datespan.textContent='Date'
    // datespan.className='lablespan'

    // const bookingdate=document.createElement('span');
    // bookingdate.textContent=item.date;
    // bookingdate.className='valuespan';

    // datecontainer.appendChild(datespan);
    // datecontainer.appendChild(bookingdate);

    // const timeContainer=document.createElement('div');
    // timeContainer.className='bookingtimecontainer';

    // const timespan=document.createElement('span');
    // timespan.textContent='Time'
    // timespan.className='lablespan'

    // const bookingtime=document.createElement('span');
    // bookingtime.textContent=`${item.timeSlot.startTime} - ${item.timeSlot.endTime}`;
    // bookingtime.className='valuespan';

    // timeContainer.appendChild(timespan);
    // timeContainer.appendChild(bookingtime);

    // const slotnumbercontainer=document.createElement('div');
    // slotnumbercontainer.className='bookingtimecontainer';
    // const slotspan=document.createElement('span');
    // slotspan.textContent='Chargepoint:1';
    // slotspan.className='lablespan';
    

    // slotnumbercontainer.appendChild(slotspan);

    // datetimecontainer.appendChild(usernamecontainer);
    // datetimecontainer.appendChild(datecontainer);
    // datetimecontainer.appendChild(timeContainer);
    // datetimecontainer.appendChild(slotnumbercontainer);
    
    // bookingcard.appendChild(datetimecontainer);

    // bookings.appendChild(bookingcard);

//   })
  mainContentDiv.appendChild(stationBookingHeader);
  mainContentDiv.appendChild(bookings);
}

