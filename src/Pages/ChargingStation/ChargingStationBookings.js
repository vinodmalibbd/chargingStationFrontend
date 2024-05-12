function showChargingStationBooking(bookingsContainerDiv){
    const slottableFeild=['Time','User','SlotId','Status']
    const slottabledata=[
      {
        id:1,
        time:'11',
        slotId:1,
        status:'confirmed',
        user:'vinod'
      }
    ]
  const table=document.createElement("table")
  bookingsContainerDiv.appendChild(table);

  const tableHeader=document.createElement('thead');
  const tr=document.createElement('tr');

  slottableFeild.map(item=>{
    const th=document.createElement('th');
    th.textContent=item;
    tr.appendChild(th);
  });
  tableHeader.appendChild(tr);
  table.appendChild(tableHeader)

  slottabledata.map(item=>{
    const tabledata=document.createElement('tbody')
    const tr=document.createElement('tr');

    const id=document.createElement('td');
    id.textContent=item.time;
    tr.appendChild(id);
    tabledata.appendChild(tr);

    const name=document.createElement('td');
    name.textContent=item.user;
    tr.appendChild(name);
    const status=document.createElement('td');
    status.textContent=item.slotId;
    tr.appendChild(status);

    const bookings=document.createElement('td');
    bookings.textContent=item.status;
    tr.appendChild(bookings);
    tabledata.appendChild(tr);
    table.appendChild(tabledata);
  })
  bookingsContainerDiv.appendChild(table);
}