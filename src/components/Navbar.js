function renderNavbar() {
    const navbar = document.createElement("div");
    navbar.className = "navbar";
    const logoLink = document.createElement("div");
    logoLink.className = "logo";
    const logoImg = document.createElement("img");
    logoImg.src = "logo.jpg";
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
    selectStation.textContent =  "Chargepoints";
    selectStation.onclick = () =>{
        navigateTo('/charpoints/all');
    }
    navbar.appendChild(selectStation);
    navbar.appendChild(loginLink);
    document.body.appendChild(navbar);
}