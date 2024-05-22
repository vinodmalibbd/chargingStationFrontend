function chargePointTab(mainContentDiv) {
    const ChargingStationshead = document.createElement('div');
    const headingChargingStation = document.createElement('h2');
    headingChargingStation.innerHTML ='Charging Stations';
    headingChargingStation.className = 'headingChargingStation';
    ChargingStationshead.appendChild(headingChargingStation);
    const chargepointtab = document.createElement("div");
    chargepointtab.className = "chargepointTab";
    mainContentDiv.appendChild(chargepointtab);
    chargepointtab.appendChild(ChargingStationshead);
    const cardsContainer = document.createElement("div");
    cardsContainer.className = "chargepointcardscontainer";
    chargepointtab.appendChild(cardsContainer);
    getAllChargingStation().then((data) => {
      data.map((item) => {
        if(item.name !==null){
          const card = document.createElement("div");
          card.textContent = item.name;
          card.className = "chargepointcard";
          card.onclick = () => {
            chargeStationPage(item);
          };
          cardsContainer.appendChild(card);
        }
      });
    });
    document.body.remove(loaderwrapper);
  }

