
function showAllChargingStations(){
      document.body.innerHTML = '';
      renderNavbar();
      const cardContainer=document.createElement("div")
      cardContainer.classList.add='cardContainer';
      getAllChargingStation().then(data=>{
        data.map(item=>{
          const card = document.createElement('div');
          card.classList.add('card');

          const name = document.createElement('h3');
          name.textContent = item.name;
          card.appendChild(name);

          cardContainer.appendChild(card);
        })
      })
      document.body.appendChild(cardContainer);
}