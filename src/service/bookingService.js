const createBooking=async(bookingRequest)=>{
    const token = sessionStorage.getItem("web-vb-token");
    if (token) {
      const decodedtoken = decodeJwtToken(token);
      const res = await fetch(
        `${backendurl}/booking/create`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
          body: JSON.stringify(bookingRequest),
        }
      );
      if (res.status === 201) {
        return res.json();
      }
    } else {
      navigateTo("/");
    }
}

async function getAllChargingStationBooking(){
  const token = sessionStorage.getItem("station-cookie");
  if (token) {
    const decodedtoken = decodeJwtToken(token);
    const stationId=decodedtoken.sub;
    const res = await fetch(
      `${backendurl}/booking/all/chargingstation/${stationId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      }
    );
    if (res.status === 200) {
      return res.json();
    }
  } else {
    navigateTo("/");
  }
}