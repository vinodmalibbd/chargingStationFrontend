function showStation(){
  document.body.innerHTML = '';
  
    const navbar = document.createElement("div");
    navbar.className = "navbar";
    
    // Create logo link
    const logoLink = document.createElement("div");
    logoLink.className = "logo";
    
    // Create logo image
    const logoImg = document.createElement("img");
    logoImg.src = "./logo.jpg";
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
    //submitButton.addEventListener('click', renderTimeSlots);
    selectStation.addEventListener('click',showChargingStation)
    // Append login link to navbar
    navbar.appendChild(selectStation);
    navbar.appendChild(loginLink);
    document.body.appendChild(navbar);
}