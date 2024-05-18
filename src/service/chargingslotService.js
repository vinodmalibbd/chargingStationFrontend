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
      return res.json();
    }
  } else {
    navigateTo("/");
  }
};
const updateChargingSlot = async (data) => {
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
    if (res.status === 200) {
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