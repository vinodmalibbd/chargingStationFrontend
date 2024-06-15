function searchStationPage() {
  const mainDiv = document.querySelector(".main_content");
  mainDiv.innerHTML = "";

  const searchPage = document.createElement("div");
  searchPage.className = "searchpage";

  const searchPageHeader = document.createElement("div");
  searchPageHeader.className = "searchpageheader";

  const searchPageHeading = document.createElement("div");
  searchPageHeading.className = "searchpageheading";
  const heading = document.createElement("h3");
  heading.textContent = "In which city do you want to search for?";
  searchPageHeading.appendChild(heading);
  searchPageHeader.appendChild(searchPageHeading);

  const searchPageSearchBar = document.createElement("div");
  searchPageSearchBar.className = "searchpagesearchbar";
  const input = document.createElement("input");
  input.type = "text";
  input.id = "searchcityinp";
  input.className = "searchbar";
  input.placeholder = "Enter city name";
  const button = document.createElement("button");
  button.textContent = "Search";
  button.onclick = function (event) {
    event.preventDefault();
    const cityInput = document.getElementById("searchcityinp").value;
    searchChargingStations(cityInput);
  };
  searchPageSearchBar.appendChild(input);
  searchPageSearchBar.appendChild(button);
  searchPageHeader.appendChild(searchPageSearchBar);

  searchPage.appendChild(searchPageHeader);

  // const searchPageMiddle = document.createElement("div");
  // searchPageMiddle.className = "searchpagemiddle";
  // const middleHeading = document.createElement("h3");
  // middleHeading.textContent = "Search Results:";
  // searchPageMiddle.appendChild(middleHeading);
  // searchPage.appendChild(searchPageMiddle);

  const searchPageChargingStation = document.createElement("div");
  searchPageChargingStation.className = "searchpagechargingstation";
  searchPage.appendChild(searchPageChargingStation);

  mainDiv.appendChild(searchPage);
}

function searchChargingStations(city) {
  // const tempdiv = document.querySelector(".searchpage");
  const searchPageMiddle = document.createElement("div");
  searchPageMiddle.className = "searchpagemiddle";
  const middleHeading = document.createElement("h3");
  middleHeading.textContent = "Search Results:";
  searchPageMiddle.appendChild(middleHeading);
  // tempdiv.appendChild(searchPageMiddle);

  const chargingStationContainer = document.querySelector(
    ".searchpagechargingstation"
  );
  chargingStationContainer.innerHTML = "";
  chargingStationContainer.appendChild(searchPageMiddle);

  searchByCityName(city)
    .then((filteredStations) => {
      if (filteredStations.length === 0) {
        throw new Error("not found");
      }
      filteredStations.forEach((station) => {
        if (station.name !== null && station.chargingSlots.length > 0) {
          const searchStationCard = document.createElement("div");
          searchStationCard.className = "searchstationcard";

          const name = document.createElement("strong");
          name.textContent = `Name: ${station.name}`;
          const openTime = document.createElement("span");
          openTime.textContent = `Open Time: ${station.openTime}`;
          const closeTime = document.createElement("span");
          closeTime.textContent = `Close Time: ${station.closeTime}`;
          const location = document.createElement("span");

          getAddress(station.latitude, station.longitude).then(
            (address) => (location.textContent = `Location : ${address}`)
          );

          searchStationCard.appendChild(name);
          searchStationCard.appendChild(openTime);
          searchStationCard.appendChild(closeTime);
          searchStationCard.appendChild(location);
          searchStationCard.onclick = (e) => {
            e.preventDefault();
            userBooking(station);
          };

          chargingStationContainer.appendChild(searchStationCard);
        }
      });
    })
    .catch((error) => {
      const notFoundCard = document.createElement("div");
      notFoundCard.className = "notfoundcard";

      const notFoundIcon = document.createElement("i");
      notFoundIcon.className = "fas fa-exclamation-triangle";

      const notFoundText = document.createElement("p");
      notFoundText.textContent = "No charging stations found in this city";

      notFoundCard.appendChild(notFoundIcon);
      notFoundCard.appendChild(notFoundText);

      chargingStationContainer.appendChild(notFoundCard);
    });
}
