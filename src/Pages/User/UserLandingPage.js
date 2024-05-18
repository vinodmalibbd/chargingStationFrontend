function UserLandingPage() {
  document.body.innerHTML = "";

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

  const searchBarLi = document.createElement("li");
  searchBarLi.className = "searbarbox";
  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.id = "searchinput";
  searchInput.placeholder = "Search station";
  const searchButton = document.createElement("button");
  searchButton.id = "searchButton";
  // searchButton.textContent = "Search";
  searchButton.innerHTML = '🔍';
  searchButton.onclick = () => {
    searchCharingStationInCity();
  };
  searchBarLi.appendChild(searchInput);
  searchBarLi.appendChild(searchButton);

  const loginLi = document.createElement("li");
  loginLi.innerHTML = '<i class="fas fa-user"></i>  Login';
  loginLi.onclick = () => {
    createPOPUP("user");
  };
  const userLi = document.createElement("li");
  userLi.innerHTML = '<i class="fas fa-user"></i>  Profile';

  const chargePointsLi = document.createElement("li");
  chargePointsLi.innerHTML = '<i class="fas fa-address-card"></i>  ChargePoints';
  chargePointsLi.onclick = () => {
    changeTab("/chargepoint", mainContentDiv);
  };
  ulElement.appendChild(searchBarLi);
  ulElement.appendChild(chargePointsLi);
  const user = sessionStorage.getItem("web-vb-token");
  if (user) {
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

