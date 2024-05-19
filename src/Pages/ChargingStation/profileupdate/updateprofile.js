function updateProfileStation(mainContentDiv){
    const chargepointtab=document.createElement("div");
    chargepointtab.className='updateform';
    mainContentDiv.appendChild(chargepointtab);
    const formContainer = document.createElement('div');
    formContainer.classList.add('main-container');
    mainContentDiv.appendChild(formContainer);
  
    const heading = document.createElement('h2');
    heading.textContent = 'Update Station Profile';
    formContainer.appendChild(heading);
  
    const form = document.createElement('form');
    form.className ="form-container";
    formContainer.appendChild(form);
  
   const stationName =document.createElement("label");
   stationName.textContent = "Station Name :";
   const nameInput = document.createElement("input");
   nameInput.setAttribute('type','text');
   nameInput.setAttribute('id','forminput');
  
   const StationOpeningtime = document.createElement("label");
   StationOpeningtime.textContent = "Station Opening Time :";
   const OpentimeInput = document.createElement("input");
   OpentimeInput.setAttribute('type','number');
   OpentimeInput.setAttribute('id','forminput');
  
   const StationClosingtime = document.createElement("label");
   StationClosingtime.textContent = "Station Closing Time :";
   const CloseTimeInput = document.createElement("input");
   CloseTimeInput.setAttribute('type','number');
   CloseTimeInput.setAttribute('id','forminput');
  
   const stationLatitude = document.createElement("label");
   stationLatitude.textContent = "Station Latitude :";
   const LatitudeInput = document.createElement("input");
   LatitudeInput.setAttribute('type','text');
   LatitudeInput.setAttribute('id','forminput');
  
   const stationLongitude = document.createElement("label");
   stationLongitude.textContent = "Station Longitude :";
   const LongitudeInput = document.createElement("input");
   LongitudeInput.setAttribute('type','text');
   LongitudeInput.setAttribute('id','forminput');
  
    form.appendChild(stationName);
    form.appendChild(nameInput);
    form.appendChild(StationOpeningtime);
    form.appendChild(OpentimeInput);
    form.appendChild(StationClosingtime);
    form.appendChild(CloseTimeInput);
    form.appendChild(stationLatitude);
    form.appendChild(LatitudeInput);
    form.appendChild(stationLongitude);
    form.appendChild(LongitudeInput);
    
    const buttonDiv =document.createElement("div");
    buttonDiv.className ="ButtonDiv";
  
  
    const getlocation=document.createElement('button');
    getlocation.textContent="add auto location";  
    getlocation.onclick=function(){
      const loc=getCurrentPositionUser();
      const latitudeInput = document.getElementById('latitude');
      const longitudeInput = document.getElementById('longitude');
      latitudeInput.value = loc.lat;
      longitudeInput.value = loc.long;
    }
    buttonDiv.appendChild(getlocation);
    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'button');
    submitButton.textContent = 'Submit';
    submitButton.onclick = () =>{
      submitForm();
    }
    const cancelButton =document.createElement('button');
    cancelButton.textContent ="cancel";
    cancelButton.onclick = () =>{
      chargingStationDashboard();
    }
    buttonDiv.appendChild(submitButton);
    buttonDiv.appendChild(cancelButton);
    form.appendChild(buttonDiv);
  }
  
  function submitForm() {
    const formData = new FormData(document.getElementById('profileForm'));
  
    const formDataObject = {};
  
    for (let [key, value] of formData.entries()) {
      if(key==='openTime'|| key==='closeTime'){
        value=parseInt(value);
      }
      if(key==='longitude'|| key==='latitude'){
        value=parseFloat(value);
      }
      formDataObject[key] = value;
    }
    console.log(formDataObject);
    getChargingStationById().then(data=>{
      console.log(data);
      formDataObject['emailId']=data.emailId;
      updateChargingStationProfile(formDataObject)
    })
  }