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
    form.className ="profileupdateform";
    formContainer.appendChild(form);
  
   const stationName =document.createElement("label");
   stationName.textContent = "Station Name :";
   const nameInput = document.createElement("input");
   nameInput.setAttribute('type','text');
   nameInput.setAttribute('id','inputName');
   nameInput.setAttribute('required','true')
  
   const StationOpeningtime = document.createElement("label");
   StationOpeningtime.textContent = "Station Opening Time :";
   const OpentimeInput = document.createElement("input");
   OpentimeInput.setAttribute('type','number');
   OpentimeInput.setAttribute('id','inputOpenTime');
  
   const StationClosingtime = document.createElement("label");
   StationClosingtime.textContent = "Station Closing Time :";
   const CloseTimeInput = document.createElement("input");
   CloseTimeInput.setAttribute('type','number');
   CloseTimeInput.setAttribute('id','inputCloseTime');
  
   const stationLatitude = document.createElement("label");
   stationLatitude.textContent = "Station Latitude :";
   const LatitudeInput = document.createElement("input");
   LatitudeInput.setAttribute('type','text');
   LatitudeInput.setAttribute('id','inputLongitude');
  
   const stationLongitude = document.createElement("label");
   stationLongitude.textContent = "Station Longitude :";
   const LongitudeInput = document.createElement("input");
   LongitudeInput.setAttribute('type','text');
   LongitudeInput.setAttribute('id','inputLatitude');
  
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
    buttonDiv.className ="StationprofileUpdateButtonDiv";
  
  
    const getlocation=document.createElement('span');
    getlocation.textContent="use current location";  
    getlocation.onclick=function(){
       getCurrentPositionUser().then(loc=>{
        const latitudeInput = document.getElementById('inputLatitude');
        const longitudeInput = document.getElementById('inputLongitude');
        latitudeInput.value = loc.lat;
        longitudeInput.value = loc.long;

      });
    }
   form.appendChild(getlocation);
    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'button');
    submitButton.textContent = 'Submit';
    submitButton.onclick = (e) =>{
      e.preventDefault();
      submitForm();
    }
    const cancelButton =document.createElement('button');
    cancelButton.textContent ="Cancel";
    cancelButton.onclick = () =>{
      chargingStationDashboard();
    }
    buttonDiv.appendChild(submitButton);
    buttonDiv.appendChild(cancelButton);
    form.appendChild(buttonDiv);
  }
  
  function submitForm() {
    // const formobj = document.querySelector('.profileupdateform')
    // const formData = new FormData(formobj);

    // const formDataObject = {};
  
    // for (let [key, value] of formData.entries()) {
    //   if(key==='openTime'|| key==='closeTime'){
    //     value=parseInt(value);
    //   }
    //   if(key==='longitude'|| key==='latitude'){
    //     value=parseFloat(value);
    //   }
    //   formDataObject[key] = value;
    // }
    // console.log(formDataObject);
    // getChargingStationById().then(data=>{
    //   console.log(data);
    //   formDataObject['emailId']=data.emailId;
    //   updateChargingStationProfile(formDataObject)
    // })
    const name = document.getElementById("inputName").value;
    const openTime = document.getElementById("inputOpenTime").value;
    const closeTime = document.getElementById("inputCloseTime").value;
    const latitude = document.getElementById("inputLatitude").value;
    const longitude = document.getElementById("inputLongitude").value;

    if (!name) {
        alert("Name is required.");
        return ;
    }

    if (!openTime || isNaN(openTime)) {
        alert("Open time must be a valid number.");
        return ;
    }

    if (!closeTime || isNaN(closeTime)) {
        alert("Close time must be a valid number.");
        return ;
    }

    if (!latitude || isNaN(latitude)) {
       alert("Latitude must be a valid number.");
        return ;
    }

    if (!longitude || isNaN(longitude)) {
        alert("Longitude must be a valid number.");
        return;
    }


    const profileData = {
        name: name,
        openTime: parseInt(openTime),
        closeTime: parseInt(closeTime),
        latitude: parseFloat(latitude),
        longitude: parseFloat(longitude)
    };
        getChargingStationById().then(data=>{
      console.log(data);
      profileData['emailId']=data.emailId;
      updateChargingStationProfile(profileData)
      
    })
  }