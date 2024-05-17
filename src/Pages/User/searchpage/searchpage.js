function searchPage(stationsNearby) {
    const mainContentDiv = document.querySelector(".main_content");
    mainContentDiv.innerHTML = "";
  
    const chargepointtab = document.createElement("div");
    chargepointtab.className = "chargepointTab";
    mainContentDiv.appendChild(chargepointtab);
  
    const cardsContainer = document.createElement("div");
    cardsContainer.className = "chargepointcardscontainer";
    chargepointtab.appendChild(cardsContainer);
  
    stationsNearby.map((item) => {
      const card = document.createElement("div");
      card.textContent = item.name;
      card.className = "chargepointcard";
      card.onclick = () => {
        chargeStationPage(item);
      };
      cardsContainer.appendChild(card);
    });
}