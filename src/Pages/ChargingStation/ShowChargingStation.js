// function fetchStationData() {
//   return fetch('http://localhost:8081/chargingstation/all')
//       .then(response => {
//           if (!response.ok) {
//               throw new Error('Failed to fetch station data');
//           }
//           return response.json();
//       })
//       .catch(error => {
//           console.error('Error fetching station data:', error);
//           return [];
//       });
// }

function showStation(){
  document.body.innerHTML = '';
  
    const navbar = document.createElement("div");
    navbar.className = "navbar";
    
    // Create logo link
    const logoLink = document.createElement("div");
    logoLink.className = "logo";
    
    // Create logo image
    const logoImg = document.createElement("img");
    logoImg.src = "./src/assets/logo.jpg";
    logoImg.alt = "Logo";
    logoLink.appendChild(logoImg);
    
    // Create text node for logo title
    const logoTitle = document.createTextNode("EV Charging Station");
    logoLink.appendChild(logoTitle);
    
    // Append logo link to navbar
    navbar.appendChild(logoLink);
    
    // Create login link
    const loginLink = document.createElement("p");
    loginLink.className = "login";
    loginLink.textContent = "User Login";
    const selectStation = document.createElement("p");
    selectStation.className ="selectStation";
    selectStation.textContent =  "Select Station";
    // selectStation.onclick = () =>{
    //   navigateTo('/user/showStation')
    // };
    navbar.appendChild(selectStation);
    navbar.appendChild(loginLink);
    document.body.appendChild(navbar);

    try {
      // Fetch station data from the backend
      const stations = getAllChargingStation();
      stations.map((item )=>{
        const card = document.createElement('div');
        card.classList.add('card');

        const name = document.createElement('h3');
        name.textContent = item.name;

        // const location = document.createElement('p');
    

        // const availability = document.createElement('p');
    

        card.appendChild(name);

        cardContainer.appendChild(card);

      })

      for(var i=0;i<stations.length;i++){
        const station = stations[i];

        const card = document.createElement('div');
        card.classList.add('card');

        const name = document.createElement('h3');
        name.textContent = station.name;

        const location = document.createElement('p');
        location.textContent = `Location: ${station.location}`;

        const availability = document.createElement('p');
        availability.textContent = `Availability: ${station.availability}`;

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(availability);

        cardContainer.appendChild(card);
      }
    } catch (error) {
  console.error('Error creating station cards:', error);
  }
}