const Userlandingpage = () => {
  document.body.innerHTML = "";
  Navbar();
  const mainDiv = document.createElement("main");
  mainDiv.className = "main_content";
  document.body.appendChild(mainDiv);
  const evmap = document.createElement("map");
  evmap.id = "map";
  mainDiv.appendChild(evmap);
  Rendermap();
  mapsearch();
  //   userBooking();
  //   renderFeedback(feedbackList);

  Footer();
};
