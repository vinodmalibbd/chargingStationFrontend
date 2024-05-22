const getAllChargingStationSlots = async () => {
  showloader();
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

    removeloader();
    if (res.ok) {
      return res.json();
    }
  } else {
    MainPage();
  }
};
const addChargingSlotStation = async (data) => {
  showloader();
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
    removeloader();
    if (res.status === 201) {
      
      return res.json();
    }
  } else {
    
  }
};
const updateChargingSlot = async (data) => {
  showloader();
  const token = sessionStorage.getItem("station-cookie");
  if (token) {
    const res = await fetch(
      `${backendurl}/chargingslot/update`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(data),
      }
    );
    removeloader();
    if (res.status === 200) {
      return res.json();
    }
  } 
};
const getAllChargingStationSlotsById = async (id) => {
  showloader();
  const res = await fetch(
    `${backendurl}/chargingslot/all/${id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  removeloader();
  return res.json();
};


const getSlotAvailblity=async(requestBody)=>{
  showloader();
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
  removeloader();
    return res.json();
}