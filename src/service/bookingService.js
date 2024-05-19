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

