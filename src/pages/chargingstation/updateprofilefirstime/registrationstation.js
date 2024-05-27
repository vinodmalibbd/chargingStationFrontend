function chargingStationRegistration() {
  const mainContainer = document.createElement("div");
  mainContainer.className = "registration-main-container";
  document.body.appendChild(mainContainer);

  const cardContainer = document.createElement("div");
  cardContainer.className = "registration-card-container";

  mainContainer.appendChild(cardContainer);

  const updateprofileContainer = document.createElement("div");
  updateprofileContainer.className = "registration-updatestationformcontainer";
  cardContainer.appendChild(updateprofileContainer);

  const heading = document.createElement("h2");
  heading.textContent = "Register Charging Station";
  updateprofileContainer.appendChild(heading);

  const form = document.createElement("form");
  form.id = "registration-updatestationform";
  updateprofileContainer.appendChild(form);

  const stationName = document.createElement("label");
  stationName.textContent = "Station Name:";
  const nameInput = document.createElement("input");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("id", "registration-stationname");

  const stationOpeningTime = document.createElement("label");
  stationOpeningTime.textContent = "Station Opening Time:";
  const openTimeInput = document.createElement("input");
  openTimeInput.setAttribute("type", "number");
  openTimeInput.setAttribute("id", "registration-stationopentime");

  const stationClosingTime = document.createElement("label");
  stationClosingTime.textContent = "Station Closing Time:";
  const closeTimeInput = document.createElement("input");
  closeTimeInput.setAttribute("type", "number");
  closeTimeInput.setAttribute("id", "registration-stationcloseTime");

  const stationLatitude = document.createElement("label");
  stationLatitude.textContent = "Station Latitude:";
  const latitudeInput = document.createElement("input");
  latitudeInput.setAttribute("type", "text");
  latitudeInput.setAttribute("id", "registration-stationlatitude");

  const stationLongitude = document.createElement("label");
  stationLongitude.textContent = "Station Longitude:";
  const longitudeInput = document.createElement("input");
  longitudeInput.setAttribute("type", "text");
  longitudeInput.setAttribute("id", "registration-stationlongitude");

  const getLocation = document.createElement("span");
  getLocation.textContent = "Use Current Location";

  form.appendChild(stationName);
  form.appendChild(nameInput);
  form.appendChild(stationOpeningTime);
  form.appendChild(openTimeInput);
  form.appendChild(stationClosingTime);
  form.appendChild(closeTimeInput);
  form.appendChild(stationLatitude);
  form.appendChild(latitudeInput);
  form.appendChild(stationLongitude);
  form.appendChild(longitudeInput);
  form.appendChild(getLocation);

  getLocation.onclick = (e) => {
    e.preventDefault();
    getCurrentPositionUser().then((loc) => {
      const latitudeInput = document.getElementById(
        "registration-stationlatitude"
      );
      const longitudeInput = document.getElementById(
        "registration-stationlongitude"
      );
      latitudeInput.value = loc.lat;
      longitudeInput.value = loc.long;
    });
  };

  const buttonDiv = document.createElement("div");
  buttonDiv.className = "registration-ButtonDiv";
  form.appendChild(buttonDiv);

  const submitButton = document.createElement("button");
  submitButton.textContent = "Submit";
  buttonDiv.appendChild(submitButton);

  submitButton.onclick = (e) => {
    e.preventDefault();
    submitFirstTimeprofileUpdate();
  };

  // const cancelButton = document.createElement('button');
  // cancelButton.textContent = 'Cancel';
  // cancelButton.className = 'registration-cancel';
  // buttonDiv.appendChild(cancelButton);

  // cancelButton.onclick = (e) => {
  //     e.preventDefault();

  // };
}

function submitFirstTimeprofileUpdate() {
  const name = document.getElementById("registration-stationname").value;
  const openTime = document.getElementById(
    "registration-stationopentime"
  ).value;
  const closeTime = document.getElementById(
    "registration-stationcloseTime"
  ).value;
  const latitude = document.getElementById(
    "registration-stationlatitude"
  ).value;
  const longitude = document.getElementById(
    "registration-stationlongitude"
  ).value;

  if (!name || !openTime || !closeTime || !latitude || !longitude) {
    alert("All fields are required.");
    return;
  }

  if (
    isNaN(openTime) ||
    isNaN(closeTime) ||
    isNaN(latitude) ||
    isNaN(longitude)
  ) {
    alert("Invalid input. Please enter valid numbers.");
    return;
  }

  if (openTime < 0 || openTime > 24) {
    alert("Open time must be a valid number between 0 and 24.");
    return;
  }

  if (closeTime < 0 || closeTime > 24) {
    alert("Close time must be a valid number between 0 and 24.");
    return;
  }

  getChargingStationById().then((res) => {
    const profileData = {
      name: name,
      openTime: parseInt(openTime),
      closeTime: parseInt(closeTime),
      latitude: parseFloat(latitude),
      longitude: parseFloat(longitude),
      stationId: Number(res.stationId),
      emailId: res.emailId,
    };
    updateChargingStationProfile(profileData);
    Chargingstationdashboard();
  });
}

function cancelRegistration() {}
