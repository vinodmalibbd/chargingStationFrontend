const addfeedbackonchargingstation = async (data,userId,stationId) => {
    const token = sessionStorage.getItem("station-cookie");
    if (token) {
      const decodedtoken = decodeJwtToken(token);
      const res = await fetch(
        `${backendurl}/feedback/add/${userId}/${stationId}`,
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