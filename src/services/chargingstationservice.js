const getAllChargingStation = async () => {
  showloader();
  const res = await fetch(`${backendurl}/chargingstation/all`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  removeloader();
  return res.json();
};
const loginchargingStation = async () => {
  window.location.href = `${backendurl}/auth/chargingstation`;
};
const getChargingStationById = async () => {
  showloader();
  const token = sessionStorage.getItem("station-cookie");
  if (token) {
    const decodedtoken = decodeJwtToken(token);
    const stationId = decodedtoken.sub;
    const res = await fetch(`${backendurl}/chargingstation/${stationId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    removeloader();
    return res.json();
  } else {
    removeloader();
    MainPage();
  }
};
const updateChargingStationProfile = async (data) => {
  console.log("calling updateChargingStationProfile");

  showloader();
  const token = sessionStorage.getItem("station-cookie");
  if (token) {
    const decodedtoken = decodeJwtToken(token);
    const stationId = decodedtoken.sub;
    const res = await fetch(`${backendurl}/chargingstation/update`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(data),
    });

    if (res.status === 201) {
      removeloader();
      // addchargepointtab();
      Chargestationlanding();

      showSuccessMessage("profile updated successfully");
    }
    removeloader();
  } else {
    removeloader();
    MainPage();
  }
};

const getCharginstation = async (id) => {
  showloader();

  const res = await fetch(`${backendurl}/chargingstation/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  removeloader();
  if (res.ok) {
    return res.json();
  }
};
