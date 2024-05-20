function showChargingStationBooking(){
  const mainContentDiv=document.querySelector('.main_content');
  mainContentDiv.innerHTML='';
  
  const stationBookingHeader=document.createElement('div');
  stationBookingHeader.className='stationbookingheader'
  stationBookingHeader.textContent="Bookings"
  
  const bookings=document.createElement('div')
  bookings.className='stationbookingsection';
  showLoader(true);
  getAllChargingStationBooking().then(res=>{
    console.log(res);
    showLoader(false);
    res.map((item)=>{
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
    username.textContent=`${item.user.firstName} ${item.user.lastName}`;
    username.className='valuespan';

    usernamecontainer.appendChild(namespan);
    usernamecontainer.appendChild(username);
    

    const datecontainer=document.createElement('div');
    datecontainer.className='stationbookinglablespan';

    const datespan=document.createElement('span');
    datespan.textContent=`Date`
    datespan.className='lablespan'

    const bookingdate=document.createElement('span');
    bookingdate.textContent=`${formatDate(item.date)}`;
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
    bookingtime.textContent=`${item.timeSlot.startTime}:00 - ${item.timeSlot.endTime}:00`;
    bookingtime.className='valuespan';

    timeContainer.appendChild(timespan);
    timeContainer.appendChild(bookingtime);

    const slotnumbercontainer=document.createElement('div');
    slotnumbercontainer.className='stationbookinglablespan';

    const slotspan=document.createElement('span');
    slotspan.textContent=`Status`;
    slotspan.className='lablespan';
    const bookingstatus=document.createElement('span');
    bookingstatus.textContent=`${item.status}`;
    bookingstatus.className='valuespan';
    

    slotnumbercontainer.appendChild(slotspan);
    slotnumbercontainer.appendChild(bookingstatus);

    timeandstatuscontainer.appendChild(timeContainer);
    timeandstatuscontainer.appendChild(slotnumbercontainer)

    const showbookingbtn=document.createElement("span");
    showbookingbtn.className='stationbookingshowmorebtn';
    showbookingbtn.textContent=`chargepoint: ${item.chargingSlot.slotId}`

    bookingcard.appendChild(usernameanddatecontainer);
    bookingcard.appendChild(timeandstatuscontainer);
    bookingcard.appendChild(showbookingbtn);
    bookings.appendChild(bookingcard);
  })
  })

  mainContentDiv.appendChild(stationBookingHeader);
  mainContentDiv.appendChild(bookings);
}

