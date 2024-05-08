const renderLoginForm=()=>{
    const inputFields = [
        { label: 'Email:', type: 'text', id: 'emailId' },
        { label: 'password:', type: 'password', id: 'password' },
    ];
    const chargepointDiv = document.querySelector('.login_station');

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

    const loginSpan = document.createElement('span');
    loginSpan.textContent = 'Not have an accout ? Register here';
    loginSpan.addEventListener('click',()=> changePage("register_station"));

    const formField = document.createElement('div');
    formField.classList.add('form_field');
    formField.appendChild(registerBtn);
    formField.appendChild(loginSpan)

    form.appendChild(formField);
    chargepointDiv.appendChild(form);
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