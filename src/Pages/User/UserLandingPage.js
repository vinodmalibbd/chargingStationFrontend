  
function UserLandingPage() {
  document.body.innerHTML = "";
  showloader();
  document.body.appendChild(loaderwrapper);
  const wrapperDiv = document.createElement("div");
  wrapperDiv.className = "wrapper";

  const sidebarDiv = document.createElement("div");
  sidebarDiv.className = "sidebar";

  const headerDiv = document.createElement("div");
  headerDiv.className = "header";

  const headerImgDiv = document.createElement("div");
  headerImgDiv.className = "headerImg";
  const logoImg = document.createElement("img");
  logoImg.src = "logo.jpg";
  logoImg.alt = "";
  headerImgDiv.appendChild(logoImg);

  const titleDiv = document.createElement("div");
  titleDiv.className = "Title";
  titleDiv.textContent = "Smart EV Charge Point";

  headerDiv.appendChild(headerImgDiv);
  headerDiv.appendChild(titleDiv);

  const ulElement = document.createElement("ul");

  const loginLi = document.createElement("li");
  loginLi.innerHTML = '<i class="fas fa-user"></i>  Login';
  loginLi.onclick = () => {
    createPOPUP("user");
  };
  const userLi = document.createElement("li");
  userLi.innerHTML = '<i class="fas fa-user"></i>  Log out';
  userLi.onclick = () =>{
    sessionStorage.clear();
    MainPage();
  }

  const searchstationli = document.createElement("li");
  searchstationli.innerHTML = '<i class="fas fa-address-card"></i>  Search Station';
  searchstationli.onclick = () => {
    searchStationPage();
  };
  const showbookingLi = document.createElement('li');
  showbookingLi.className = 'showBooking';
  showbookingLi.innerHTML = '<i class="fas fa-address-card"></i>  ShowBookings';
  showbookingLi.onclick = () =>{
    ShowBookingsfunction();
    changeTab("/showBookings", mainContentDiv);
  }

  ulElement.appendChild(searchstationli);
  
  const user = sessionStorage.getItem("web-vb-token");
  if (user) {
    
    ulElement.appendChild(showbookingLi);
    ulElement.appendChild(userLi);
  } else {
    ulElement.appendChild(loginLi);
  }

  sidebarDiv.appendChild(headerDiv);
  sidebarDiv.appendChild(ulElement);

  const mainContentDiv = document.createElement("div");
  mainContentDiv.className = "main_content";
  const c = document.createElement("div");
  c.id = "map";
  mainContentDiv.appendChild(c);
  wrapperDiv.appendChild(sidebarDiv);
  wrapperDiv.appendChild(mainContentDiv);
  document.body.appendChild(wrapperDiv);
  RenderMap();
  removeloader();
  document.body.removeChild(loaderwrapper);
}
function changeTab(tabname, mainContentDiv) {
  mainContentDiv.innerHTML = "";
  switch (tabname) {
    case "/chargepoint": {
      chargePointTab(mainContentDiv);
      break;
    }
    case "/searchcities": {
      searchPage();
      break;
    }
    case "/showBookings":{
      ShowBookingsfunction();
      break;
    }
  }
}
function searchCharingStationInCity() {
  const search = document.getElementById("searchinput");
  if (search.value.length > 3) {
    searchByCityName(search.value).then((data) => {
      if (data !== null) {
        searchPage(data);
      }
    });
  }
}