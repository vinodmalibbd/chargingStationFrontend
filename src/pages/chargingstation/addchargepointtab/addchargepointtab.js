function addchargepointtab(){
    const mainDiv=document.querySelector('.chargingstationtabcontainer')
    mainDiv.innerHTML='';


    const container=document.createElement('div');
    container.className='addslotcontainer';
    container.textContent='addslot';
    NoChargepointCards();
    
    mainDiv.appendChild(container);
}

function NoChargepointCards(){
    const mainDiv=document.querySelector('.chargingstationtabcontainer')
    mainDiv.innerHTML='';

    const container = document.createElement('div');
    container.className = 'NoChargingSlotFoundCard';


    const icon = document.createElement('i');
    icon.className = 'fas fa-exclamation-triangle';

    container.appendChild(icon);

    const message = document.createElement('p');
    message.textContent = 'No Charging Slot Found';
    container.appendChild(message);

    const addButton = document.createElement('button');
    addButton.textContent = 'Add Charging Point';
    addButton.className='addchargingslotbtn';
    addButton.onclick=(e)=>{
        e.preventDefault();
        addNewSlot();
    }

    container.appendChild(addButton);

    mainDiv.appendChild(container);
}

