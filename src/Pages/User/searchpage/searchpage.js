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
      const cardcreate = createCard();
      card.appendChild(cardcreate);
      card.onclick = () => {
        chargeStationPage(item);
      };
      cardsContainer.appendChild(card);
    });
}

function createCard() {
  let card = document.createElement('div');
  card.className = 'card';
  card.style.width = '18rem';

  let cardBody = document.createElement('div');
  cardBody.className = 'card-body';

  let cardTitle = document.createElement('h5');
  cardTitle.className = 'card-title';
  cardTitle.textContent = 'ABC';

  let cardText = document.createElement('p');
  cardText.className = 'card-text';
  cardText.textContent = 'Some quick example text to build on the card title and make up the bulk of the card\'s content.';

  let cardLink1 = document.createElement('p');
  cardLink1.className = 'card-rating';
  cardLink1.textContent = ' Rating : 4';

  cardBody.appendChild(cardTitle);
  
  cardBody.appendChild(cardText);
  cardBody.appendChild(cardLink1);

  return cardBody;
}
