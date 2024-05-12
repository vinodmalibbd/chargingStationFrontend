
function showStation(){
  document.body.innerHTML = '';
  
    const navbar = document.createElement("div");
    navbar.className = "navbar";
    
    const logoLink = document.createElement("div");
    logoLink.className = "logo";

    const logoImg = document.createElement("img");
    logoImg.src = "./src/assets/logo.jpg";
    logoImg.alt = "Logo";
    logoLink.appendChild(logoImg);
    
    const logoTitle = document.createTextNode("EV Charging Station");
    logoLink.appendChild(logoTitle);
    
    navbar.appendChild(logoLink);
    
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
      const stations = getAllChargingStation();
      stations.map((item )=>{
        const card = document.createElement('div');
        card.classList.add('card');

        const name = document.createElement('h3');
        name.textContent = item.name;

        // const location = document.createElement('p');
        card.appendChild(name);

        cardContainer.appendChild(card);
      });

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