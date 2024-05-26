const showLoggedInUserBookings = async () => {
    showloader();
      const token = sessionStorage.getItem("web-vb-token");
      if (token) {
        const decodedtoken = decodeJwtToken(token);
        const userId = decodedtoken.sub;
        const res = await fetch(
          `${backendurl}/booking/user/${userId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: token,
            },
          }
        );
        removeloader();
        if (res.status === 200) {
          return res.json()
        }
      }else{
        removeloader();
      }
};