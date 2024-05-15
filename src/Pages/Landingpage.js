const MainPage=()=> {
    document.body.innerHTML = '';
    // const header = document.createElement("header");
    // header.classList.add='header'
    // const headingDiv = document.createElement("div");
    // headingDiv.className = "headingDiv";
    // const h1 = document.createElement("h1");
    // h1.textContent = "EV Charging Station";
    // const logoDiv =document.createElement("div");
    // logoDiv.className = "logoDiv";
    // const logo = document.createElement("img");
    // logo.className ="logoimg";
    // logo.src = "./logo.jpg";
    // logoDiv.appendChild(logo);
  
    // headingDiv.appendChild(h1)

    // header.appendChild(logoDiv); 
    // header.appendChild(headingDiv);
    // document.body.appendChild(header);
  
    const containerDiv = document.createElement("div");
    containerDiv.className = "landingpage";
 
    const descriptionDiv = document.createElement("div");
    descriptionDiv.className = "description";
    const descriptionHeading = document.createElement("h2");
    descriptionHeading.className ="paragraphDes";
    descriptionHeading.textContent = "EV charging should be easy.";
    const descriptionParagraph = document.createElement("p");
    descriptionParagraph.className = "paragraphDes";
    descriptionParagraph.textContent = " From organizations and fleets of all sizes to drivers across Europe and North America, our goal is to make it simple for everyone to go electric.";
   
    descriptionDiv.appendChild(descriptionHeading);
    descriptionDiv.appendChild(descriptionParagraph);

    const buttonContainerDiv = document.createElement("div");
    buttonContainerDiv.className = "button-container";

    const userButton = document.createElement("a");
    userButton.onclick = () =>{
        localStorage.clear();
        navigateTo('/user');
    }
    userButton.className = "user-button";
    userButton.textContent = "For Vehicle Owner";

    const stationOwnerButton = document.createElement("a");
    stationOwnerButton.onclick = () =>{
  
      createPOPUP();
  
    }
    stationOwnerButton.className = "station-button";
    stationOwnerButton.textContent = "For Station Owners";

    buttonContainerDiv.appendChild(userButton);
    buttonContainerDiv.appendChild(stationOwnerButton);
    descriptionDiv.appendChild(buttonContainerDiv);

    containerDiv.appendChild(descriptionDiv);
   // containerDiv.appendChild(buttonContainerDiv);
    document.body.appendChild(containerDiv);
  }
  