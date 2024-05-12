const renderRegisterForm=()=>{
    const inputFields = [
        { label: 'Name:', type: 'text', id: 'name' },
        { label: 'Email:', type: 'text', id: 'emailId' },
        { label: 'OpenTime:', type: 'number', id: 'openTime' },
        { label: 'CloseTime:', type: 'number', id: 'closeTime' },
        { label: 'Latitude:', type: 'text', id: 'latitude' },
        { label: 'Longitude:', type: 'text', id: 'longitude' }
    ];
    const body=document.querySelector('body')

    const chargepointDiv = document.querySelector('.register_station');
    body.appendChild(chargepointDiv)
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

    const registerBtn = document.createElement('button');
    registerBtn.classList.add('register_btn')
    registerBtn.textContent = 'Register Now';
    registerBtn.addEventListener('click', registerStation);

    const loginSpan = document.createElement('span');
    loginSpan.textContent = 'Already have an accout ? Login here';
    loginSpan.addEventListener('click',()=> changePage('login_station'));

    const formField = document.createElement('div');
    formField.classList.add('form_field');
    formField.appendChild(registerBtn);
    formField.appendChild(loginSpan);

    form.appendChild(formField);
    chargepointDiv.appendChild(form);
}

const registerStation=(event)=>{
    event.preventDefault();
    console.log(inputValues);
    if(inputValues){
        registerChargingStation(inputValues).then(res=>{
            console.log(res);
        }).catch(e=>console.log(e.message));
    }
};