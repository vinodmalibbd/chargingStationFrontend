function searchPage(stationsNearby) {
    const mainContentDiv = document.querySelector(".main_content");
    mainContentDiv.innerHTML = "";
    const Booking_Heading =document.createElement('div');
    Booking_Heading.className ='Booking_Heading';
    const headingdescr = document.createElement('p');
    headingdescr.className = 'headingdescr';
    headingdescr.innerHTML = 'Charging Stations';
    Booking_Heading.appendChild(headingdescr);
    mainContentDiv.appendChild(Booking_Heading);
  
    const chargepointtab = document.createElement("div");
    chargepointtab.className = "chargepointTab";
    mainContentDiv.appendChild(chargepointtab);

    
    
    const cardsContainer = document.createElement("div");
    cardsContainer.className = "chargepointcardscontainer";
    chargepointtab.appendChild(cardsContainer);
    
  
    stationsNearby.map((item) => {
      const card = document.createElement("div");
      card.className = "chargepointcard";
      const cardcreate = createCard(item);
      card.appendChild(cardcreate);
      card.onclick = () => {
        chargeStationPage(item);
      };
      cardsContainer.appendChild(card);
    });
}
 function createCard(item) {
  let card = document.createElement('div');
  card.className = 'card';
  card.style.width = '18rem';
  
  let cardBody = document.createElement('div');
  cardBody.className = 'card-body';

  let cardTitle = document.createElement('h5');
  cardTitle.className = 'card-title';
  cardTitle.textContent = item.name;

  let cardText = document.createElement('p');
  cardText.className = 'card-text';
  getAddress(item.latitude, item.longitude).then(address => cardText.textContent = address);


  let cardopenTime = document.createElement('p');
  cardopenTime.className = 'station-open';
  cardopenTime.textContent = `Opening Time : ${item.openTime}:00`;

  let cardCloseTime = document.createElement('p');
  cardCloseTime.className = 'station-close';
  cardCloseTime.textContent = `Closing Time : ${item.closeTime}:00`;

  cardBody.appendChild(cardTitle);
  
  cardBody.appendChild(cardText);
  cardBody.appendChild(cardopenTime);
  cardBody.appendChild(cardCloseTime);

  return cardBody;
}
