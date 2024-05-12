function UserLandingPage() {
    // Create navbar element
    document.body.innerHTML = '';
  
    var navbar = document.createElement("div");
    navbar.className = "navbar";
    
    // Create logo link
    var logoLink = document.createElement("div");
    logoLink.className = "logo";
    
    // Create logo image
    var logoImg = document.createElement("img");
    logoImg.src = "./logo.jpg";
    logoImg.alt = "Logo";
    logoLink.appendChild(logoImg);
    
    // Create text node for logo title
    var logoTitle = document.createTextNode("EV Charging Station");
    logoLink.appendChild(logoTitle);
    
    // Append logo link to navbar
    navbar.appendChild(logoLink);
    
    // Create login link
    var loginLink = document.createElement("p");
    loginLink.className = "login";
    loginLink.textContent = "User Login";
    
    // Append login link to navbar
    navbar.appendChild(loginLink);
    document.body.appendChild(navbar);
  
    // Create search bar element
    var searchBar = document.createElement("div");
    searchBar.className = "searchBar";
    
    // Create search container
    var searchContainer = document.createElement("div");
    searchContainer.className = "search-container";
    
    // Create search input
    var searchInput = document.createElement("input");
    searchInput.type = "text";
    searchInput.id = "searchInput";
    searchInput.placeholder = "Search for a location";
    
    // Create search button
    var searchButton = document.createElement("button");
    searchButton.id = "searchButton";
    searchButton.textContent = "Search";
    
    // Append search input and button to search container
    searchContainer.appendChild(searchInput);
    searchContainer.appendChild(searchButton);
    
    // Append search container to search bar
    searchBar.appendChild(searchContainer);
    
   document.body.appendChild(searchBar);
  
    // Create main page element
    var mainPage = document.createElement("div");
    mainPage.className = "mainpage";
    
    // Create map container
    var mapContainer = document.createElement("div");
    mapContainer.id = "map";
    
    // Append map container to main page
    mainPage.appendChild(mapContainer);
    document.body.appendChild(mainPage);
  }
// const getAllChargingStation=async()=>{
//   const res =await fetch(`http://localhost:8081/chargingstation/all`,{
//       method:"GET",
//       headers:{
//           'Content-Type':"application/json"
//       }
//   })
//   return res.json()
// };
// const getCurrentPositionUser=()=>{
//   let arr={
//       lat:20.5937,
//       long:78.9629
//   }
//   if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(function (position) {
//           arr.lat = position.coords.latitude;
//           arr.long = position.coords.longitude;
//           return arr;
//       });
//   } 
//   return arr;
// };

// const RenderMap=(Evlocations,userlocation)=>{
//   let lat = 20.5937;
//   let lon = 78.9629;
//   const map = L.map("map");
//   L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
//   }).addTo(map);
//   const MyLocationIcon=L.divIcon({
//       html:'<svg width="30px" height="30px" viewBox="0 0 " fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#00bfff" transform="rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0" transform="translate(4.199999999999999,4.199999999999999), scale(0.65)"><rect x="0" y="0" width="24.00" height="24.00" rx="12" fill="#7ed0ec" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#c9c5c5" stroke-width="0.192"></g><g id="SVGRepo_iconCarrier"> <path d="M3 12H21M12 3V21M19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12C5 8.13401 8.13401 5 12 5C15.866 5 19 8.13401 19 12Z" stroke="#007bff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>',
//       iconSize: [25, 25], // size of the icon
//       iconAnchor: [15, 30] 
//   })
//   Evlocations.map((item)=>{
//      const marker=L.marker([item.latitude, item.longitude]).addTo(map);
//   })
//   const m=L.marker([userlocation.lat,userlocation.long],{icon:MyLocationIcon}).addTo(map);
//   if(userlocation){

//       map.setView([userlocation.lat,userlocation.long],13);
//   }else{
//       map.setView([lat,lon], 13);
//   }
// };
// window.onload=() => {
//   const userlocation = getCurrentPositionUser();
//   getAllChargingStation().then(res=>{
//       console.log(res);
//       RenderMap(res,userlocation);
//       console.log(userlocation);
//   }).catch(e=>console.log(e.message))
// };

// document.addEventListener('DOMContentLoaded', function () {
//   const searchInput = document.getElementById('searchInput');
//   const stationDropdown = document.getElementById('stationDropdown');

//   // Event listener for search input
//   searchInput.addEventListener('input', function () {
//       const searchQuery = searchInput.value.trim();
      
//       // Fetch station data based on search query
//       fetch(`backend_endpoint?search=${searchQuery}`)
//           .then(response => response.json())
//           .then(data => {
//               // Clear previous options
//               stationDropdown.innerHTML = '';

//               // Populate dropdown with station options
//               data.forEach(station => {
//                   const option = document.createElement('option');
//                   option.value = station.id; // Assuming 'id' is a property in the station object
//                   option.textContent = station.name; // Assuming 'name' is a property in the station object
//                   stationDropdown.appendChild(option);
//               });
//           })
//           .catch(error => {
//               console.error('Error fetching station data:', error);
//           });
//   });
// });

// function createSearchBar() {
    
//     const divSearchBar = document.createElement("div");
//     divSearchBar.className = "searchBar";

   
    
//     const divSearchContainer = document.createElement("div");
//     divSearchContainer.className = "search-container";
    
//     const inputSearch = document.createElement("input");
//     inputSearch.type = "text";
//     inputSearch.id = "searchInput";
//     inputSearch.placeholder = "Search for a location";
    
//     const buttonSearch = document.createElement("button");
//     buttonSearch.id = "searchButton";
//     buttonSearch.textContent = "Search";
    
    
//     divSearchContainer.appendChild(inputSearch);
//     divSearchContainer.appendChild(buttonSearch);
//     divSearchBar.appendChild(divSearchContainer);

//     return divSearchBar;
//   }
  
//   var searchBar = createSearchBar();
//   document.body.appendChild(searchBar);
  
// function UserLandingPage() {
//     // Create navbar element
//     var navbar = document.createElement("div");
//     navbar.className = "navbar";
    
//     // Create logo link
//     var logoLink = document.createElement("a");
//     logoLink.href = "#";
//     logoLink.className = "logo";
    
//     // Create logo image
//     var logoImg = document.createElement("img");
//     logoImg.src = "logo.jpg";
//     logoImg.alt = "Logo";
//     logoLink.appendChild(logoImg);
    
//     // Create text node for logo title
//     var logoTitle = document.createTextNode("EV Charging Station");
//     logoLink.appendChild(logoTitle);
    
//     // Append logo link to navbar
//     navbar.appendChild(logoLink);
    
//     // Create login link
//     var loginLink = document.createElement("a");
//     loginLink.href = "#";
//     loginLink.className = "login";
//     loginLink.textContent = "User Login";
    
//     // Append login link to navbar
//     navbar.appendChild(loginLink);
//     document.body.appendChild(navbar);
  
//     // Create search bar element
//     var searchBar = document.createElement("div");
//     searchBar.className = "searchBar";
    
//     // Create search container
//     var searchContainer = document.createElement("div");
//     searchContainer.className = "search-container";
    
//     // Create search input
//     var searchInput = document.createElement("input");
//     searchInput.type = "text";
//     searchInput.id = "searchInput";
//     searchInput.placeholder = "Search for a location";
    
//     // Create search button
//     var searchButton = document.createElement("button");
//     searchButton.id = "searchButton";
//     searchButton.textContent = "Search";
    
//     // Append search input and button to search container
//     searchContainer.appendChild(searchInput);
//     searchContainer.appendChild(searchButton);
    
//     // Append search container to search bar
//     searchBar.appendChild(searchContainer);
    
//    document.body.appendChild(searchBar);
  
//     // Create main page element
//     var mainPage = document.createElement("div");
//     mainPage.className = "mainpage";
    
//     // Create map container
//     var mapContainer = document.createElement("div");
//     mapContainer.id = "map";
    
//     // Append map container to main page
//     mainPage.appendChild(mapContainer);
//     document.body.appendChild(mainPage);
// }
  
  