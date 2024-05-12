  
  function updateStationInfo() {
    document.body.innerHTML = '';
    const formContainer = document.createElement('div');
    formContainer.classList.add('form-container');
    document.body.appendChild(formContainer);
  
    const heading = document.createElement('h2');
    heading.textContent = 'Update Station Profile';
    formContainer.appendChild(heading);
  
    const form = document.createElement('form');
    form.setAttribute('action', '');
    form.setAttribute('id', 'profileForm');
    formContainer.appendChild(form);
  
    const columnLeft = document.createElement('div');
    columnLeft.classList.add('column-left');
    form.appendChild(columnLeft);
  
    const labels = ['Name:', 'Email:', 'Opening Time:', 'Closing Time:'];
    const inputIds = ['name', 'email', 'openingTime', 'closingTime'];
    const inputTypes = ['text', 'email', 'text', 'text'];
  
    labels.forEach((labelText, index) => {
        const label = document.createElement('label');
        label.setAttribute('for', inputIds[index]);
        label.textContent = labelText;
  
        const input = document.createElement('input');
        input.setAttribute('type', inputTypes[index]);
        input.setAttribute('name', inputIds[index]);
        input.setAttribute('id', inputIds[index]);
        input.setAttribute('required', '');
  
        columnLeft.appendChild(label);
        columnLeft.appendChild(input);
    });
  
    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'button');
    submitButton.textContent = 'Submit';
    submitButton.addEventListener('click', submitForm);
    columnLeft.appendChild(submitButton);
  }
  function submitForm() {
    const formData = new FormData(document.getElementById('profileForm'));
  
    for (const pair of formData.entries()) {
      console.log(pair[0] + ': ' + pair[1]);
    }
  }