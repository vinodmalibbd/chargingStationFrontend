function chargepointupdateprofiletab() {
    const mainDiv = document.querySelector('.chargingstationtabcontainer');
    mainDiv.innerHTML = ''; // Clear the main content div

    const container = document.createElement('div');
    container.className = 'chargingstationprofileupdatecontainer';
    mainDiv.appendChild(container);

    const chargepointtab = document.createElement("div");
    chargepointtab.className = 'updateform';
    container.appendChild(chargepointtab);

    const formContainer = document.createElement('div');
    formContainer.classList.add('main-container');
    container.appendChild(formContainer);

    const heading = document.createElement('h2');
    heading.textContent = 'Update Station Profile';
    formContainer.appendChild(heading);

    const form = document.createElement('form');
    form.className = "profileupdateform";
    formContainer.appendChild(form);

    // Group 1
    const group1 = document.createElement('div');
    group1.className = 'form-group';
    const stationName = document.createElement("label");
    stationName.textContent = "Station Name :";
    const nameInput = document.createElement("input");
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('id', 'inputname');
    nameInput.setAttribute('required', 'true');
    group1.appendChild(stationName);
    group1.appendChild(nameInput);

    const StationOpeningtime = document.createElement("label");
    StationOpeningtime.textContent = "Station Opening Time :";
    const OpentimeInput = document.createElement("input");
    OpentimeInput.setAttribute('type', 'number');
    OpentimeInput.setAttribute('id', 'inputopentime');
    group1.appendChild(StationOpeningtime);
    group1.appendChild(OpentimeInput);

    // Group 2
    const group2 = document.createElement('div');
    group2.className = 'form-group';
    const StationClosingtime = document.createElement("label");
    StationClosingtime.textContent = "Station Closing Time :";
    const CloseTimeInput = document.createElement("input");
    CloseTimeInput.setAttribute('type', 'number');
    CloseTimeInput.setAttribute('id', 'inputclosetime');
    group2.appendChild(StationClosingtime);
    group2.appendChild(CloseTimeInput);

    const stationLatitude = document.createElement("label");
    stationLatitude.textContent = "Station Latitude :";
    const LatitudeInput = document.createElement("input");
    LatitudeInput.setAttribute('type', 'text');
    LatitudeInput.setAttribute('id', 'inputlatitude');
    group2.appendChild(stationLatitude);
    group2.appendChild(LatitudeInput);

    // Group 3
    const group3 = document.createElement('div');
    group3.className = 'form-group';
    const stationLongitude = document.createElement("label");
    stationLongitude.textContent = "Station Longitude :";
    const LongitudeInput = document.createElement("input");
    LongitudeInput.setAttribute('type', 'text');
    LongitudeInput.setAttribute('id', 'inputlongitude');
    group3.appendChild(stationLongitude);
    group3.appendChild(LongitudeInput);

    form.appendChild(group1);
    form.appendChild(group2);
    form.appendChild(group3);

    const buttonDiv = document.createElement("div");
    buttonDiv.className = "StationprofileUpdateButtonDiv";

    const getlocation = document.createElement('span');
    getlocation.textContent = "use current location";
    getlocation.className = 'currentlocationspan';
    getlocation.onclick = function () {
        getCurrentPositionUser().then(loc => {
            const latitudeInput = document.getElementById('inputlatitude');
            const longitudeInput = document.getElementById('inputlongitude');
            latitudeInput.value = loc.lat;
            longitudeInput.value = loc.long;
        });
    }
    form.appendChild(getlocation);

    const cancelButton = document.createElement('button');
    cancelButton.textContent = "Cancel";
    cancelButton.className = "cancel-button"; // Adding a class for cancel button
    cancelButton.onclick = (e) => {
        e.preventDefault();
        chargingStationDashboard();
    }

    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'button');
    submitButton.textContent = 'Submit';
    submitButton.onclick = (e) => {
        e.preventDefault();
        submitForm();
    }

    buttonDiv.appendChild(cancelButton);
    buttonDiv.appendChild(submitButton);
    form.appendChild(buttonDiv);

    // Fetch existing profile data and pre-fill the form
    getChargingStationById().then(data => {
        if (data) {
            document.getElementById('inputname').value = data.name || '';
            document.getElementById('inputopentime').value = data.openTime || '';
            document.getElementById('inputclosetime').value = data.closeTime || '';
            document.getElementById('inputlatitude').value = data.latitude || '';
            document.getElementById('inputlongitude').value = data.longitude || '';
        }
    }).catch(e => {
        console.log(e.message);
    });
}

function submitForm() {
    const name = document.getElementById("inputname").value;
    const openTime = parseInt(document.getElementById("inputopentime").value);
    const closeTime = parseInt(document.getElementById("inputclosetime").value);
    const latitude = parseFloat(document.getElementById("inputlatitude").value);
    const longitude = parseFloat(document.getElementById("inputlongitude").value);

    if (!name) {
        alert("Name is required.");
        return;
    }

    if (isNaN(openTime) || openTime < 0 || openTime >= 24) {
        alert("Open time must be a valid number between 0 and 24.");
        return;
    }

    if (isNaN(closeTime) || closeTime < 0 || closeTime >= 24) {
        alert("Close time must be a valid number between 0 and 24.");
        return;
    }

    if (closeTime <= openTime) {
        alert("Close time must be greater than open time.");
        return;
    }

    if (isNaN(latitude)) {
        alert("Latitude must be a valid number.");
        return;
    }

    if (isNaN(longitude)) {
        alert("Longitude must be a valid number.");
        return;
    }

    const profileData = {
        name: name,
        openTime: openTime,
        closeTime: closeTime,
        latitude: latitude,
        longitude: longitude
    };

    console.log("Profile Data:", profileData);

    getChargingStationById().then(data => {
        console.log(data);
        profileData['emailId'] = data.emailId;
        updateChargingStationProfile(profileData);
    });
}

function showSuccessMessage(message) {
    const successCard = document.createElement('div');
    successCard.classList.add('success-card');

    const successMessage = document.createElement('p');
    successMessage.textContent = message;
    successCard.appendChild(successMessage);
    document.body.appendChild(successCard);

    setTimeout(() => {
        successCard.remove();
    }, 5000);
}
