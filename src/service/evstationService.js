// let backendurl=`http://ec2-54-75-101-91.eu-west-1.compute.amazonaws.com:8081`;
let backendurl=`http://localhost:8081`;

const getAllChargingStation = async () => {
  const res = await fetch(
    `${backendurl}/chargingstation/all`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return res.json();
};
const loginchargingStation = async () => {
  window.location.href =
    `${backendurl}/auth/chargingstation`;
};
const loginuser = async () => {
  window.location.href =`${backendurl}/auth/user`;
};
const getChargingStationById = async () => {
  const token = sessionStorage.getItem("station-cookie");
  if (token) {
    const decodedtoken = decodeJwtToken(token);
    const stationId = decodedtoken.sub;
    const res = await fetch(
      `${backendurl}/chargingstation/${stationId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      }
    );
    return res.json();
  } else {
    navigateTo("/");
  }
};
const updateChargingStationProfile = async (data) => {
  const token = sessionStorage.getItem("station-cookie");
  if (token) {
    const decodedtoken = decodeJwtToken(token);
    const stationId = decodedtoken.sub;
    const res = await fetch(
      `${backendurl}/chargingstation/update`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(data),
      }
    );
    if (res.status === 201) {
      console.log(res.json());
      navigateTo("/station");
    }
  } else {
    navigateTo("/");
  }
};
const getAllChargingStationSlots = async () => {
  const token = sessionStorage.getItem("station-cookie");
  if (token) {
    const decodedtoken = decodeJwtToken(token);
    const stationId = decodedtoken.sub;
    const res = await fetch(
      `${backendurl}/chargingslot/all/${stationId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      }
    );

    if (res.ok) {
      return res.json();
    }
  } else {
    navigateTo("/");
  }
};
const addChargingSlotStation = async (data) => {
  const token = sessionStorage.getItem("station-cookie");
  if (token) {
    const decodedtoken = decodeJwtToken(token);
    const stationId = decodedtoken.sub;
    const res = await fetch(
      `${backendurl}/chargingslot/addslot/${stationId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(data),
      }
    );
    if (res.status === 201) {
      navigateTo("/station");
      console.log(res.json());
      return res.json();
    }
  } else {
    navigateTo("/");
  }
};
const getAllChargingStationSlotsById = async (id) => {
  const res = await fetch(
    `${backendurl}/chargingslot/all/${id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return res.json();
};


const getSlotAvailblity=async(requestBody)=>{
  const res = await fetch(
    `${backendurl}/booking/availability/chargingslot`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    }
  );
    return res.json();
}