function showChargingStation(slotsContainerDiv){
    const slottableFeild=['Id','Name','Status','Bookings']
    const slottabledata=[
      {
        id:1,
        name:'slot 1',
        status:'Available',
        bookings:3
      },
      {
        id:2,
        name:'slot 2',
        status:'Available',
        bookings:2
      },
      {
        id:3,
        name:'slot 3',
        status:'Available',
        bookings:5
      }
    ]
  const table=document.createElement("table")
  slotsContainerDiv.appendChild(table);

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
    id.textContent=item.id;
    tr.appendChild(id);
    tabledata.appendChild(tr);

    const name=document.createElement('td');
    name.textContent=item.name;
    tr.appendChild(name);
    const status=document.createElement('td');
    status.textContent=item.status;
    tr.appendChild(status);

    const bookings=document.createElement('td');
    bookings.textContent=item.bookings;
    tr.appendChild(bookings);
    tabledata.appendChild(tr);
    table.appendChild(tabledata);
  })
  slotsContainerDiv.appendChild(table);
}
function addSlot(slotOption){
  slotOption.innerHTML='';
  const container=document.createElement('div')
  container.classList.add='addslotcontainer';

  const inp=document.createElement('input')
  container.appendChild(inp);
  const addbtn=document.createElement('button');
  addbtn.classList.add='stationoptionbtn'
  addbtn.textContent='add';

  container.appendChild(addbtn);
  slotOption.appendChild(container);
}