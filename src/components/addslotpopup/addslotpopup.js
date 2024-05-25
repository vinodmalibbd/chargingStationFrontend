function addNewSlot() {
    const chargingSlotContainer = document.querySelector('.chargingstationtabcontainer');
    chargingSlotContainer.innerHTML = '';
    const container=document.createElement('div');
    container.className='addcharginslotcontainer';


    const popupForm = document.createElement('div');
    popupForm.className = 'chargingslot-popupAddslot';
    

    const popupformHeading = document.createElement('div');
    popupformHeading.className = 'chargingslot-popupformHeading';
    const headingcontent = document.createElement('p');
    headingcontent.textContent = 'Add New Slot';
    popupformHeading.appendChild(headingcontent);
    popupForm.appendChild(popupformHeading);

    const priceLabel = document.createElement('label');
    priceLabel.textContent = 'Price:';
    priceLabel.className = 'chargingslot-label';
    const priceInput = document.createElement('input');
    priceInput.type = 'number';
    priceInput.name = 'price';
    priceInput.required = true;
    priceInput.min = '50';
    priceInput.max = '200';
    priceInput.step = '1'; 
    priceInput.className = 'chargingslot-input';

    const priceWarningSpan = document.createElement('span');
    priceWarningSpan.className = 'chargingslot-warning';
    priceWarningSpan.textContent = 'Price must be greater than 0.';
    priceWarningSpan.style.display = 'none'; 

    const statusLabel = document.createElement('label');
    statusLabel.textContent = 'Status:';
    statusLabel.className = 'chargingslot-label';
    const statusSelect = document.createElement('select');
    statusSelect.name = 'status';
    statusSelect.className = 'chargingslot-select';
    const statusOptions = ['Available', 'Maintenance'];
    statusOptions.forEach(optionText => {
        const option = document.createElement('option');
        option.value = optionText.toLowerCase().replace(' ', '-');
        option.textContent = optionText;
        statusSelect.appendChild(option);
    });

    const ButtonForAddSlotForm = document.createElement('div');
    ButtonForAddSlotForm.className = 'chargingslot-ButtonForAddSlotForm';

    const saveButton = document.createElement('button');
    saveButton.textContent = 'Save';
    saveButton.className = 'chargingslot-button chargingslot-saveButton';
    saveButton.disabled = true; 
    saveButton.addEventListener('click', function () {
        const priceValue = parseInt(priceInput.value);
        const warningSpan = popupForm.querySelector('.chargingslot-warning');
        if (priceInput.checkValidity() && priceValue > 0 && priceValue <= 200) {
            showloader();
            // saveSlot(warningSpan);
            // Chargingpoints();
            removeloader();
        } else {
            warningSpan.textContent = 'Price must be a number greater than 50 and less than or equal to 200.';
            warningSpan.style.display = 'block'; 
        }
    });

    const cancelButton = document.createElement('button');
    cancelButton.textContent = 'Cancel';
    cancelButton.className = 'chargingslot-button chargingslot-cancelButton';
    cancelButton.addEventListener('click', function () {
        chargingSlotContainer.removeChild(container);
        // Chargingpoints();
        addchargepointtab();
        
    });

    priceInput.addEventListener('input', function () {
        const priceValue = parseInt(priceInput.value);
        if (priceValue === 0) {
            priceWarningSpan.style.display = 'block'; 
            saveButton.disabled = true; 
        } else {
            priceWarningSpan.style.display = 'none'; 
            saveButton.disabled = false; 
        }
    });

    popupForm.appendChild(priceLabel);
    popupForm.appendChild(priceInput);
    popupForm.appendChild(priceWarningSpan); 
    popupForm.appendChild(document.createElement('br'));
    popupForm.appendChild(statusLabel);
    popupForm.appendChild(statusSelect);
    popupForm.appendChild(document.createElement('br'));

    ButtonForAddSlotForm.appendChild(cancelButton);
    ButtonForAddSlotForm.appendChild(saveButton);
    popupForm.appendChild(ButtonForAddSlotForm);
    container.appendChild(popupForm);


    chargingSlotContainer.appendChild(container);
}
