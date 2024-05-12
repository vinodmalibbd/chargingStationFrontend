const MainPage=()=> {
    document.body.innerHTML = '';
    const header = document.createElement("header");
    const h1 = document.createElement("h1");
    h1.textContent = "EV Charging Station";
    header.appendChild(h1);
    document.body.appendChild(header);
  
    const containerDiv = document.createElement("div");
    containerDiv.className = "container";
  
    // Create description div
    const descriptionDiv = document.createElement("div");
    descriptionDiv.className = "description";
  
    // Create description paragraph
    const descriptionParagraph = document.createElement("p");
    descriptionParagraph.textContent = "Welcome to our EV charging station! We provide fast and reliable charging services for electric vehicles. Whether you're a user looking to charge your car or a station owner interested in our services, we've got you covered.";
  
    // Append paragraph to description div
    descriptionDiv.appendChild(descriptionParagraph);
  
    // Create button container div
    const buttonContainerDiv = document.createElement("div");
    buttonContainerDiv.className = "button-container";
  
    // Create user button
    const userButton = document.createElement("a");
    userButton.onclick = () =>{
        navigateTo('/user')
    }
    userButton.className = "user-button";
    userButton.textContent = "For Users";
  
    // Create station owner button
    const stationOwnerButton = document.createElement("a");
    stationOwnerButton.onclick = () =>{
      navigateTo('/station')
  }
    stationOwnerButton.className = "station-button";
    stationOwnerButton.textContent = "For Station Owners";
  
    // Append buttons to button container div
    buttonContainerDiv.appendChild(userButton);
    buttonContainerDiv.appendChild(stationOwnerButton);
  
    // Append description and button container divs to container div
    containerDiv.appendChild(descriptionDiv);
    containerDiv.appendChild(buttonContainerDiv);
  
    // Append container div to the body of the document
    document.body.appendChild(containerDiv);
  }
  