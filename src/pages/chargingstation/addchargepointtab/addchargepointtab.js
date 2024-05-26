function addchargepointtab(){
    const mainDiv=document.querySelector('.chargingstationtabcontainer')
    mainDiv.innerHTML='';


    const container=document.createElement('div');
    container.className='addslotcontainer';

    getAllChargingStationSlots().then(res=>{
        console.log(res);
        if(res.length===0){
            NoChargepointCards();
        } else {
            res.map((item,key)=>{
                RenderChargingSlotCard(item,key);
            })
        }
    }).catch(e=>{
        console.log(e.message);
    })
    
    mainDiv.appendChild(container);
}

function RenderChargingSlotCard(item, key) {
    const cardsContainer = document.querySelector('.chargingstationtabcontainer');

    const card = document.createElement('div');
    card.className = 'renderchargingslot-card';

    const description = document.createElement('div');
    description.className = 'renderchargingslot-description';

    const span01 = document.createElement('span');
    const span02 = document.createElement('span');
    const span03 = document.createElement('span');
    
    span01.innerHTML = `<strong>Chargepoint:</strong> ${key + 1}`;
    span02.innerHTML = `<strong>Price per hour:</strong> ${item.pricePerHour}`;
    span03.innerHTML = `<strong>Status: <p style="color: ${item.available ? 'green' : 'red'}">${item.available ? 'available' : 'maintenance'}</p></strong>`;


    const editButtonDiv = document.createElement('div');
    editButtonDiv.className = 'renderchargingslot-buttons';
    const editButton = document.createElement('button');
    editButton.className = 'renderchargingslot-edit-btn';
    editButton.innerHTML = '✏️';
    editButton.onclick = () => {
        // editSlotForm(card, item);
        editChargingslot(card, item);
    }

    description.appendChild(span01);
    description.appendChild(span02);
    description.appendChild(span03);
    editButtonDiv.appendChild(editButton);

    card.appendChild(description);
    card.appendChild(editButtonDiv);
    cardsContainer.appendChild(card);
}

function editChargingslot(card, item) {
    const existingForm = card.querySelector('.renderchargingslot-editcard');
    console.log(item);
    if (existingForm) {
        card.removeChild(existingForm);
    }

    const editchargingslotcard = document.createElement('div');
    editchargingslotcard.className = 'renderchargingslot-editcard';

    const priceLabel = document.createElement('label');
    priceLabel.textContent = 'Price:';
    const priceInput = document.createElement('input');
    priceInput.type = 'number';
    priceInput.value = item.pricePerHour;
    priceInput.required = true;

    const statusLabel = document.createElement('label');
    statusLabel.textContent = 'Status:';
    const statusSelect = document.createElement('select');
    const statusOptions = ['Available', 'Maintenance'];
    statusOptions.forEach(optionText => {
        const option = document.createElement('option');
        option.value = optionText.toLowerCase().replace(' ', '-');
        option.textContent = optionText;
        if (optionText.toLowerCase().replace(' ', '-') === 'available' ? 'available' : 'maintenance') {
            option.selected = true;
        }
        statusSelect.appendChild(option);
    });

    const buttonDiv = document.createElement('div');
    buttonDiv.className = 'renderchargingslot-buttondiv';

    const updateButton = document.createElement('button');
    updateButton.textContent = 'Update';
    updateButton.onclick = (e) => {
        e.preventDefault();
        const newPrice = priceInput.value;
        const newStatus = statusSelect.value.toLowerCase();

        if (newPrice <= 0 || newPrice > 200) {
            warningSpan.textContent = 'Please enter a valid price (1-200)';

            return;
        }

        const data = {
            slotId: item.slotId,
            pricePerHour: parseFloat(newPrice),
            available: newStatus === 'available'
        };

        console.log(data);
        updateChargingSlot(data).then(res => {
            addchargepointtab();
        });
    };

    const cancelButton = document.createElement('button');
    cancelButton.textContent = 'Cancel';
    cancelButton.onclick = (e) => {
        e.preventDefault();
        card.removeChild(editchargingslotcard);
    };

    const warningSpan = document.createElement('span');
    warningSpan.className = 'renderchargingslot-warning';

    editchargingslotcard.appendChild(priceLabel);
    editchargingslotcard.appendChild(priceInput);
    editchargingslotcard.appendChild(statusLabel);
    editchargingslotcard.appendChild(statusSelect);
    editchargingslotcard.appendChild(warningSpan);
    buttonDiv.appendChild(updateButton);
    buttonDiv.appendChild(cancelButton);
    editchargingslotcard.appendChild(buttonDiv);

    card.appendChild(editchargingslotcard);
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

