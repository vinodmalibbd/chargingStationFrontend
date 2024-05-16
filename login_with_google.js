function UserLandingPage() {
  document.body.innerHTML='';

  const wrapperDiv = document.createElement('div');
  wrapperDiv.className = 'wrapper';

  const sidebarDiv = document.createElement('div');
  sidebarDiv.className = 'sidebar';

  const headerDiv = document.createElement('div');
  headerDiv.className = 'header';

  const headerImgDiv = document.createElement('div');
  headerImgDiv.className = 'headerImg';
  const logoImg = document.createElement('img');
  logoImg.src = 'logo.jpg';
  logoImg.alt = '';
  headerImgDiv.appendChild(logoImg);

  const titleDiv = document.createElement('div');
  titleDiv.className ='Title';
  titleDiv.textContent = 'Smart EV Charge Point';

  headerDiv.appendChild(headerImgDiv);
  headerDiv.appendChild(titleDiv);

  const ulElement = document.createElement('ul');

  // const searchBarLi = document.createElement('li');
  // searchBarLi.className = 'searbarbox';
  // const searchInput = document.createElement('input');
  // searchInput.type = 'text';
  // searchInput.placeholder = 'Search station';
  // const searchButton = document.createElement('button');
  // searchButton.id = 'searchButton';
  // searchButton.textContent = 'Search';
  // searchBarLi.appendChild(searchInput);
  // searchBarLi.appendChild(searchButton);

  const logoutLi = document.createElement('li');
  logoutLi.innerHTML = '<i class="fas fa-user"></i>LogOut';

  const chargingSlotLi = document.createElement('li');
  chargingSlotLi.innerHTML = '<i class="fas fa-address-card"></i>ChargingSlots';
  chargingSlotLi.onclick=()=>{
    StationChangeTab("/chargepoint",mainContentDiv)
  }
  const bookingLi = document.createElement('li');
  bookingLi.innerHTML = '<i class="fas fa-address-card"></i>Bookings';
  bookingLi.onclick=()=>{
    StationChangeTab("/chargepoint",mainContentDiv)
  }


  // ulElement.appendChild(searchBarLi);
  ulElement.appendChild(chargingSlotLi);
  ulElement.appendChild(bookingLi);

  sidebarDiv.appendChild(headerDiv);
  sidebarDiv.appendChild(ulElement);
  sidebarDiv.appendChild(logoutLi);

  const mainContentDiv = document.createElement('div');
  mainContentDiv.className ='main_content';
  wrapperDiv.appendChild(sidebarDiv);
  wrapperDiv.appendChild(mainContentDiv);
  document.body.appendChild(wrapperDiv);

  function Chargingpoints(mainContentDiv){
    const slottableFeild = ['Id', 'Price'];
    const slotsContainerDiv = document.getElementById('slotsContainer');

    getAllChargingStation().then(data => {
      data.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');

        const cardContent = document.createElement('div');
        cardContent.classList.add('card-content');

        // Id
        const id = document.createElement('span');
        id.textContent = `Id: 1`;
        cardContent.appendChild(id);

        // Price
        const price = document.createElement('span');
        price.textContent = `Price: 200`;
        cardContent.appendChild(price);

        card.appendChild(cardContent);
        slotsContainerDiv.appendChild(card);
      });
    });

  }
  function StationChangeTab(tabname,mainContentDiv){
  mainContentDiv.innerHTML='';
  switch(tabname){
    case "/chargepoint":{
      Chargingpoints(mainContentDiv);
      break;
    }
  }
}

}
UserLandingPage();