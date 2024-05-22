function updateStationInfo() {
    const mainContainer = document.createElement('div');
    mainContainer.className = 'main-container';
    document.body.appendChild(mainContainer);
  
    const updateprofileContainer=document.createElement('div');
    updateprofileContainer.className='updatestationformcontainer';
    mainContainer.appendChild(updateprofileContainer);
    const heading = document.createElement('h2');
    heading.textContent = 'Update Station Profile';
    updateprofileContainer.appendChild(heading);

  
    const form = document.createElement('form');
    form.id ="updatestationform";

   const stationName =document.createElement("label");
   stationName.textContent = "Station Name :";
   const nameInput = document.createElement("input");
   nameInput.setAttribute('type','text');
   nameInput.setAttribute('id','stationname');

   const StationOpeningtime = document.createElement("label");
   StationOpeningtime.textContent = "Station Opening Time :";
   const OpentimeInput = document.createElement("input");
   OpentimeInput.setAttribute('type','number');
   OpentimeInput.setAttribute('id','stationopentime');

   const StationClosingtime = document.createElement("label");
   StationClosingtime.textContent = "Station Closing Time :";
   const CloseTimeInput = document.createElement("input");
   CloseTimeInput.setAttribute('type','number');
   CloseTimeInput.setAttribute('id','stationcloseTime');

   const stationLatitude = document.createElement("label");
   stationLatitude.textContent = "Station Latitude :";
   const LatitudeInput = document.createElement("input");
   LatitudeInput.setAttribute('type','text');
   LatitudeInput.setAttribute('id','stationlatitude');

   const stationLongitude = document.createElement("label");
   stationLongitude.textContent = "Station Longitude :";
   const LongitudeInput = document.createElement("input");
   LongitudeInput.setAttribute('type','text');
   LongitudeInput.setAttribute('id','stationlongitude');
  
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
    form.appendChild(getlocation);
    
    const getlocation=document.createElement('button');
    getlocation.textContent="add auto location"; 
    getlocation.onclick=(e)=>{
      e.preventDefault();
      getCurrentPositionUser().then(loc=>{

        const latitudeInput = document.getElementById('stationlatitude');
        const longitudeInput = document.getElementById('stationlongitude');
        latitudeInput.value = loc.lat;
        longitudeInput.value = loc.long;
        
      });
      
    } 
    
    const buttonDiv =document.createElement("div");
    buttonDiv.className ="ButtonDiv";

    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    submitButton.onclick=(e)=>{
      e.preventDefault();
      submitFirstTimeprofileUpdate();
    }
    
    buttonDiv.appendChild(submitButton);
    form.appendChild(buttonDiv);
    updateprofileContainer.appendChild(form);
   
    
  }
  function submitFirstTimeprofileUpdate() {
    const name = document.getElementById("stationname").value;
    const openTime = document.getElementById("stationopentime").value;
    const closeTime = document.getElementById("stationcloseTime").value;
    const latitude = document.getElementById("stationlatitude").value;
    const longitude = document.getElementById("stationlongitude").value;

    if (!name) {
        console.error("Name is required.");
        return ;
    }

    if (!openTime || isNaN(openTime)) {
        console.error("Open time must be a valid number.");
        return ;
    }

    if (!closeTime || isNaN(closeTime)) {
        console.error("Close time must be a valid number.");
        return ;
    }

    if (!latitude || isNaN(latitude)) {
        console.error("Latitude must be a valid number.");
        return ;
    }

    if (!longitude || isNaN(longitude)) {
        console.error("Longitude must be a valid number.");
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