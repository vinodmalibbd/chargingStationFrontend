
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