function renderNavbar() {
    const navbar = document.createElement("div");
    navbar.className = "navbar";
    const logoLink = document.createElement("div");
    logoLink.className = "loglink";
    const logoImg = document.createElement("img");
    logoImg.src = "/logo.jpg";
    logoImg.alt = "Logo";
    logoLink.appendChild(logoImg);
    const StationName = document.createElement('p')
    StationName.className ="Title";
    StationName.textContent = "EV Charging Station";
    
    logoLink.appendChild(StationName);
    navbar.appendChild(logoLink);
    
    const navDiv = document.createElement("div");
    navDiv.className = "navDiv";
    const selectStation = document.createElement("p");
    selectStation.className ="selectStation";
    selectStation.textContent =  "Chargepoints";
    selectStation.onclick = () =>{
        navigateTo('/charpoints/all');
    }
    navDiv.appendChild(selectStation);
    const loginLink = document.createElement("p");
    loginLink.classList.add='logindiv';
    const isToken=localStorage.getItem('web-vb-token');
    console.log(isToken);
    if(isToken){
        const userimage = document.createElement("img");
        userimage.src = "R.png";
        userimage.alt = "Logo";
        loginLink.appendChild(userimage)
    }else{
        loginLink.className = "login";
        loginLink.textContent = "User Login";
    }
    loginLink.onclick=()=>{
        loginuser();
    }
    navDiv.appendChild(loginLink);
    navbar.appendChild(navDiv);
    document.body.appendChild(navbar);
}