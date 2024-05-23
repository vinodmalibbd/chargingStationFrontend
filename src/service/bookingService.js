const createBooking = async (bookingRequest) => {
  showloader(); // Show loader before API call
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
      removeloader()
      if (res.status === 201) {
          return res.json();
      }
  } else {
      removeloader()
  }
}

async function getAllChargingStationBooking() {
    showloader();
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
        removeloader();
        if (res.status === 200) {
            const bookings = await res.json();
            // Filter out duplicate bookings based on some unique identifier (e.g., ID)
            const uniqueBookings = filterUniqueBookings(bookings);
            return uniqueBookings;
        }
    } else {
        removeloader();
        MainPage();
    }
}

// Function to filter out duplicate bookings based on ID
function filterUniqueBookings(bookings) {
    const uniqueBookings = [];
    const idSet = new Set(); // Use a set to store unique IDs

    bookings.forEach(booking => {
        if (!idSet.has(booking.id)) {
            uniqueBookings.push(booking);
            idSet.add(booking.id);
        }
    });

    return uniqueBookings;
}
const cancelBooking = async (bookingId) => {
// Show loader before API call
    const token = sessionStorage.getItem("web-vb-token");
    if (token) {
        const decodedtoken = decodeJwtToken(token);
        const res = await fetch(
            `${backendurl}/booking/cancle/${bookingId}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token,
                },
            }
        );
        if (res.status === 200) {
            
            return res;
        }
    } else {
    
        console.error("Booking id was not found");
    }
  }