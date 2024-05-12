function UserLandingPage() {
    document.body.innerHTML = '';
    const navbar = document.createElement("div");
    navbar.className = "navbar";
    const logoLink = document.createElement("div");
    logoLink.className = "logo";
    const logoImg = document.createElement("img");
    logoImg.src = "./logo.jpg";
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
    selectStation.onclick = () =>{
        navigateTo('/user/showStation');
    }
    navbar.appendChild(selectStation);
    navbar.appendChild(loginLink);
    document.body.appendChild(navbar);
  
    const searchBar = document.createElement("div");
    searchBar.className = "searchBar";

    const searchContainer = document.createElement("div");
    searchContainer.className = "search-container";

    const searchInput = document.createElement("input");
    searchInput.type = "text";
    searchInput.id = "searchInput";
    searchInput.placeholder = "Search for a location";

    const searchButton = document.createElement("button");
    searchButton.id = "searchButton";
    searchButton.textContent = "Search";

    searchContainer.appendChild(searchInput);
    searchContainer.appendChild(searchButton);

    searchBar.appendChild(searchContainer);
    
   document.body.appendChild(searchBar);

    const mainPage = document.createElement("div");
    mainPage.className = "mainpage";

    const mapContainer = document.createElement("div");
    mapContainer.id = "map";
    mainPage.appendChild(mapContainer);
    document.body.appendChild(mainPage);
    RenderMap();
    
    const footer = document.createElement("footer");
    mainPage.appendChild(footer);
  }