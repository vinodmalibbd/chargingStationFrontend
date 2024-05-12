function UserLandingPage() {
    // Create navbar element
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
    selectStation.onclick = () =>{
        navigateTo('/user/showStation');
    }
    // Append login link to navbar
    navbar.appendChild(selectStation);
    navbar.appendChild(loginLink);
    document.body.appendChild(navbar);
  
    // Create search bar element
    const searchBar = document.createElement("div");
    searchBar.className = "searchBar";
    
    // Create search container
    const searchContainer = document.createElement("div");
    searchContainer.className = "search-container";
    
    // Create search input
    const searchInput = document.createElement("input");
    searchInput.type = "text";
    searchInput.id = "searchInput";
    searchInput.placeholder = "Search for a location";
    
    // Create search button
    const searchButton = document.createElement("button");
    searchButton.id = "searchButton";
    searchButton.textContent = "Search";
    
    // Append search input and button to search container
    searchContainer.appendChild(searchInput);
    searchContainer.appendChild(searchButton);
    
    // Append search container to search bar
    searchBar.appendChild(searchContainer);
    
   document.body.appendChild(searchBar);
  
    // Create main page element
    const mainPage = document.createElement("div");
    mainPage.className = "mainpage";
    
    // Create map container
    const mapContainer = document.createElement("div");
    mapContainer.id = "map";
    mainPage.appendChild(mapContainer);
    document.body.appendChild(mainPage);
    RenderMap();
    
    const footer = document.createElement("footer");
    mainPage.appendChild(footer);
  }