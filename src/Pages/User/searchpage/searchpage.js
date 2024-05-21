function searchStationPage() {
  const mainDiv = document.querySelector('.main_content');
  mainDiv.innerHTML = "";

  // Create search page container
  const searchPage = document.createElement('div');
  searchPage.className = 'searchpage';

  // Create search header
  const searchPageHeader = document.createElement('div');
  searchPageHeader.className = 'searchpageheader';

  const searchPageHeading = document.createElement('div');
  searchPageHeading.className = 'searchpageheading';
  const heading = document.createElement('h3');
  heading.textContent = 'In which city do you want to search for?';
  searchPageHeading.appendChild(heading);
  searchPageHeader.appendChild(searchPageHeading);

  const searchPageSearchBar = document.createElement('div');
  searchPageSearchBar.className = 'searchpagesearchbar';
  const input = document.createElement('input');
  input.type = 'text';
  input.id = 'searchcityinp';
  input.className = 'searchbar';
  input.placeholder = 'Enter city name';
  const button = document.createElement('button');
  button.textContent = 'Submit';
  button.onclick = function(event) {
    event.preventDefault(); // Prevent form submission
    const cityInput = document.getElementById('searchcityinp').value;
    searchChargingStations(cityInput);
  };
  searchPageSearchBar.appendChild(input);
  searchPageSearchBar.appendChild(button);
  searchPageHeader.appendChild(searchPageSearchBar);

  searchPage.appendChild(searchPageHeader);

  // Create middle section
  const searchPageMiddle = document.createElement('div');
  searchPageMiddle.className = 'searchpagemiddle';
  const middleHeading = document.createElement('h3');
  middleHeading.textContent = 'Search Results:';
  searchPageMiddle.appendChild(middleHeading);
  searchPage.appendChild(searchPageMiddle);

  // Create container for charging stations
  const searchPageChargingStation = document.createElement('div');
  searchPageChargingStation.className = 'searchpagechargingstation';
  searchPage.appendChild(searchPageChargingStation);

  // Append search page to main div
  mainDiv.appendChild(searchPage);
}

function searchChargingStations(city) {
  const chargingStationContainer = document.querySelector('.searchpagechargingstation');
  chargingStationContainer.innerHTML = ""; // Clear previous results

  searchByCityName(city)
    .then(filteredStations => {
      filteredStations.forEach(station => {
        const searchStationCard = document.createElement('div');
        searchStationCard.className = 'searchstationcard';

        const name = document.createElement('strong');
        name.textContent = `Name: ${station.name}`;
        const openTime = document.createElement('span');
        openTime.textContent = `Open Time: ${station.openTime}`;
        const closeTime = document.createElement('span');
        closeTime.textContent = `Close Time: ${station.closeTime}`;
        const location = document.createElement('span');
        location.textContent = `Location: ${station.location}`;

        searchStationCard.appendChild(name);
        searchStationCard.appendChild(openTime);
        searchStationCard.appendChild(closeTime);
        searchStationCard.appendChild(location);
        searchStationCard.onclick=(e)=>{
          e.preventDefault();
          chargeStationPage(station);
        }

        chargingStationContainer.appendChild(searchStationCard);
      });
    })
    .catch(error => {
      console.error('Error fetching charging stations:', error);
    });
}
