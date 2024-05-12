
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

      // stations.map((item )=>{
      
      // });

      // for(var i=0;i<stations.length;i++){
      //   const station = stations[i];

      //   const card = document.createElement('div');
      //   card.classList.add('card');

      //   const name = document.createElement('h3');
      //   name.textContent = station.name;

      //   const location = document.createElement('p');
      //   location.textContent = `Location: ${station.location}`;

      //   const availability = document.createElement('p');
      //   availability.textContent = `Availability: ${station.availability}`;

      //   card.appendChild(name);
      //   card.appendChild(location);
      //   card.appendChild(availability);

      //   cardContainer.appendChild(card);
      // }
}