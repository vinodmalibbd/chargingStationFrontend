function chargePointTab(mainContentDiv) {
    const chargepointtab = document.createElement("div");
    chargepointtab.className = "chargepointTab";
    mainContentDiv.appendChild(chargepointtab);
  
    const cardsContainer = document.createElement("div");
    cardsContainer.className = "chargepointcardscontainer";
    chargepointtab.appendChild(cardsContainer);
    getAllChargingStation().then((data) => {
      data.map((item) => {
        const card = document.createElement("div");
        card.textContent = item.name;
        card.className = "chargepointcard";
        card.onclick = () => {
          chargeStationPage(item);
        };
        cardsContainer.appendChild(card);
      });
    });
  }