const MainPage = () => {
  document.body.innerHTML = "";

  const containerDiv = document.createElement("div");
  containerDiv.className = "LandingPage";
  showloader();

  const descriptionDiv = document.createElement("div");
  descriptionDiv.className = "LandingPagedescription";
  const descriptionHeading = document.createElement("h2");
  descriptionHeading.className = "LandingPageParagraphDes";
  descriptionHeading.textContent = "EV charging should be easy.";
  const descriptionParagraph = document.createElement("p");
  descriptionParagraph.className = "paragraphDes";
  descriptionParagraph.textContent =
    "Optimize Your EV Charging with Smart Management. Efficient, Convenient, and Always Ready to Go.";

  descriptionDiv.appendChild(descriptionHeading);
  descriptionDiv.appendChild(descriptionParagraph);

  const buttonContainerDiv = document.createElement("div");
  buttonContainerDiv.className = "LandingPageButton-container";

  const userButton = document.createElement("a");
  userButton.onclick = () => {
    sessionStorage.clear();
    Userlandingpage();
  };
  userButton.className = "LandingPageUser-button";
  userButton.textContent = "For Vehicle Owner";

  const stationOwnerButton = document.createElement("a");
  stationOwnerButton.onclick = () => {
    createPOPUP("station");
  };
  stationOwnerButton.className = "LandingPageStation-button";
  stationOwnerButton.textContent = "For Station Owners";

  buttonContainerDiv.appendChild(userButton);
  buttonContainerDiv.appendChild(stationOwnerButton);
  descriptionDiv.appendChild(buttonContainerDiv);

  containerDiv.appendChild(descriptionDiv);
  document.body.appendChild(containerDiv);
  removeloader();
};
