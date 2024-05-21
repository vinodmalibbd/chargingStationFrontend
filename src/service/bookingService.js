const createBooking = async (bookingRequest) => {
  showLoader(true); // Show loader before API call
  const token = sessionStorage.getItem("web-vb-token");
  if (token) {
      const decodedtoken = decodeJwtToken(token);
      const res = await fetch(
          `${backendurl}/booking/create`, {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
                  Authorization: token,
              },
              body: JSON.stringify(bookingRequest),
          }
      );
      if (res.status === 201) {
          showLoader(false); 
          return res.json();
      }
  } else {
      showLoader(false); 
      navigateTo("/");
  }
}

async function getAllChargingStationBooking() {
  showLoader(true); // Show loader before API call
  const token = sessionStorage.getItem("station-cookie");
  if (token) {
      const decodedtoken = decodeJwtToken(token);
      const stationId = decodedtoken.sub;
      const res = await fetch(
          `${backendurl}/booking/all/chargingstation/${stationId}`, {
              method: "GET",
              headers: {
                  "Content-Type": "application/json",
                  Authorization: token,
              },
          }
      );
      if (res.status === 200) {
          showLoader(false); 
          return res.json();
      }
  } else {
      showLoader(false); 
      navigateTo("/");
  }
}