const renderLoginForm=()=>{
    const inputFields = [
        { label: 'Email:', type: 'text', id: 'emailId' },
        { label: 'password:', type: 'password', id: 'password' },
    ];
    const chargepointDiv = document.querySelector('.chargepoint');

    const form = document.createElement('form');
    form.classList.add('form');


    inputFields.forEach(field => {
        const formField = document.createElement('div');
        formField.classList.add('form_field');

        const label = document.createElement('label');
        label.textContent = field.label;

        const input = document.createElement('input');
        input.type = field.type;
        input.classList.add('inp');
        input.id = field.id;
        input.addEventListener('change', handleInputChange);

        formField.appendChild(label);
        formField.appendChild(input);

        form.appendChild(formField);
    });

    // Add register button
    const registerBtn = document.createElement('button');
    registerBtn.textContent = 'Login Now';
    registerBtn.addEventListener('click', loginStation);

    const formField = document.createElement('div');
    formField.classList.add('form_field');
    formField.appendChild(registerBtn);

    form.appendChild(formField);
    chargepointDiv.appendChild(form);
}

const inputValues = {};
function handleInputChange(event) {
    let inputId = event.target.id;
    let inputValue = event.target.value;
    if(inputId==='longitude' || inputId === 'latitude'){
        inputValue=parseFloat(inputValue);
    }
    if(inputId==='openTime' || inputId === 'closeTime'){
        inputValue=parseInt(inputValue);
    }
    inputValues[inputId] = inputValue;
    // console.log(inputValues);
}

const loginStation=(event)=>{
    event.preventDefault();
    console.log(inputValues);
    if(inputValues){
        registerChargingStation(inputValues).then(res=>{
            console.log(res);
        }).catch(e=>console.log(e.message));
    }
};