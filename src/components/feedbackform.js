function createFeedbackForm(feedbackcontainer,stationId) {

    const feedbackFormBox = document.createElement('div');
    feedbackFormBox.classList.add('feedback-form-box');

    const textUp = document.createElement('div');
    textUp.classList.add('textup');
    textUp.innerHTML = '<i class="fa fa-solid fa-clock"></i> It only takes two minutes!!';
    feedbackFormBox.appendChild(textUp);

    const form = document.createElement('form');
    form.setAttribute('id', 'feedbackform');
    feedbackFormBox.appendChild(form);
  

    const satisfactionLabel = document.createElement('label');
    satisfactionLabel.innerHTML = '<i class="fa-solid fa-face-smile"></i> Do you satisfy with our service?';
    form.appendChild(satisfactionLabel);
  
  
    const radioGroup = document.createElement('div');
    radioGroup.classList.add('radio-group');
    form.appendChild(radioGroup);
  
    
    for (let i = 1; i <= 5; i++) {
        const radioButton = document.createElement('input');
        radioButton.setAttribute('type', 'radio');
        radioButton.setAttribute('id', 'option' + i);
        radioButton.setAttribute('name', 'satisfy');
        radioButton.setAttribute('value', i);
        if (i === 1) {
            radioButton.setAttribute('checked', 'checked');
        }
  
        const label = document.createElement('label');
        label.setAttribute('for', 'option' + i);
        label.innerHTML = i;
  
        radioGroup.appendChild(radioButton);
        radioGroup.appendChild(label);
    }
  
  
    const suggestionsLabel = document.createElement('label');
    suggestionsLabel.innerHTML = '<i class="fa-solid fa-comments" style="margin-right: 3px;"></i> Write your Suggestions:';
    form.appendChild(suggestionsLabel);
  
    const textarea = document.createElement('textarea');
    textarea.setAttribute('id', 'msg');
    textarea.setAttribute('name', 'msg');
    textarea.setAttribute('rows', '4');
    textarea.setAttribute('cols', '10');
    form.appendChild(textarea);
  
    const submitButton = document.createElement('button');
    submitButton.innerHTML = 'Submit';
    submitButton.onclick=(e)=>{
        e.preventDefault();
        submitFeedback();
    }
    form.appendChild(submitButton);

    feedbackcontainer.appendChild(feedbackFormBox);
  }
  function submitFeedback(stationId){
    const form = document.getElementById('feedbackform');
    const formData = new FormData(form);
    const rating = formData.get('satisfy'); // Get the rating value
    const description = formData.get('msg'); // Get the description value

    // Now you can use the rating and description as needed
    const data={
        feedback:description,
        rating:rating
    }
    addfeedbackonchargingstation(data,userId,stationId);
}