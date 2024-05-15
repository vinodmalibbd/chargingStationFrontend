// function UserLandingPage() {
//     document.body.innerHTML = '';
//     renderNavbar();
//     const searchBar = document.createElement("div");
//     searchBar.className = "searchBar";

//     const searchContainer = document.createElement("div");
//     searchContainer.className = "search-container";

//     const searchInput = document.createElement("input");
//     searchInput.type = "text";
//     searchInput.id = "searchInput";
//     searchInput.placeholder = "Search for a location";

//     const searchButton = document.createElement("button");
//     searchButton.id = "searchButton";
//     searchButton.textContent = "Search";

//     searchContainer.appendChild(searchInput);
//     searchContainer.appendChild(searchButton);

//     searchBar.appendChild(searchContainer);
    
//    document.body.appendChild(searchBar);

//     const mainPage = document.createElement("div");
//     mainPage.className = "mainpage";

//     const mapContainer = document.createElement("div");
//     mapContainer.id = "map";
//     mainPage.appendChild(mapContainer);
//     document.body.appendChild(mainPage);
//     RenderMap();
    
//     const footer = document.createElement("footer");
//     mainPage.appendChild(footer);
//   }
function UserLandingPage() {
  // Create wrapper div
  const wrapperDiv = document.createElement('div');
  wrapperDiv.className = 'wrapper';

  // Create sidebar div
  const sidebarDiv = document.createElement('div');
  sidebarDiv.className = 'sidebar';

  // Create header div
  const headerDiv = document.createElement('div');
  headerDiv.className = 'header';

  // Create header image div
  const headerImgDiv = document.createElement('div');
  headerImgDiv.className = 'headerImg';
  const logoImg = document.createElement('img');
  logoImg.src = 'logo.jpg';
  logoImg.alt = '';
  headerImgDiv.appendChild(logoImg);

  // Create title div
  const titleDiv = document.createElement('div');
  titleDiv.className ='Title';
  titleDiv.textContent = 'Smart EV Charge Point';

  // Append header image and title to header div
  headerDiv.appendChild(headerImgDiv);
  headerDiv.appendChild(titleDiv);

  // Create ul element
  const ulElement = document.createElement('ul');

  // Create search bar li element
  const searchBarLi = document.createElement('li');
  searchBarLi.className = 'searbarbox';
  const searchInput = document.createElement('input');
  searchInput.type = 'text';
  searchInput.placeholder = 'Search station';
  const searchButton = document.createElement('button');
  searchButton.id = 'searchButton';
  searchButton.textContent = 'Search';
  searchBarLi.appendChild(searchInput);
  searchBarLi.appendChild(searchButton);

  // Create Login li element
  const loginLi = document.createElement('li');
  const loginLink = document.createElement('a');
  loginLink.href = '#';
  loginLink.innerHTML = '<i class="fas fa-user"></i>Login';
  loginLi.appendChild(loginLink);

  // Create ChargePoints li element
  const chargePointsLi = document.createElement('li');
  const chargePointsLink = document.createElement('a');
  chargePointsLink.href = '#';
  chargePointsLink.innerHTML = '<i class="fas fa-address-card"></i>ChargePoints';
  chargePointsLi.appendChild(chargePointsLink);

  // Append li elements to ul
  ulElement.appendChild(searchBarLi);
  ulElement.appendChild(loginLi);
  ulElement.appendChild(chargePointsLi);

  // Append header and ul to sidebar
  sidebarDiv.appendChild(headerDiv);
  sidebarDiv.appendChild(ulElement);

  // Create main_content div
  const mainContentDiv = document.createElement('div');
  mainContentDiv.className ='main_content';

  // Create info div inside main_content div
  const infoDiv = document.createElement('div');
  infoDiv.className = 'info';

  document.body.appendChild(wrapperDiv);
  const mapContainer = document.createElement("div");
      mapContainer.id = "map";
      infoDiv.appendChild(mapContainer);
    

  // Append info div to main_content div
  mainContentDiv.appendChild(infoDiv);

  // Append sidebar and main_content to wrapper
  wrapperDiv.appendChild(sidebarDiv);
  wrapperDiv.appendChild(mainContentDiv);

  // Append wrapper to body
  RenderMap();
}
