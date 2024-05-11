const getCurrentPositionUser=()=>{
    let arr={
        lat:20.5937,
        long:78.9629
    }
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            arr.lat = position.coords.latitude;
            arr.long = position.coords.longitude;
            return arr;
        });
    } 
    return arr;
};

const RenderMap=(Evlocations,userlocation)=>{
    let lat = 20.5937;
    let lon = 78.9629;
    const map = L.map("map");
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    }).addTo(map);
    const MyLocationIcon=L.divIcon({
        html:'<svg width="30px" height="30px" viewBox="0 0 " fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#00bfff" transform="rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0" transform="translate(4.199999999999999,4.199999999999999), scale(0.65)"><rect x="0" y="0" width="24.00" height="24.00" rx="12" fill="#7ed0ec" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#c9c5c5" stroke-width="0.192"></g><g id="SVGRepo_iconCarrier"> <path d="M3 12H21M12 3V21M19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12C5 8.13401 8.13401 5 12 5C15.866 5 19 8.13401 19 12Z" stroke="#007bff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>',
        iconSize: [25, 25], // size of the icon
        iconAnchor: [15, 30] 
    })
    Evlocations.map((item)=>{
       const marker=L.marker([item.latitude, item.longitude]).addTo(map);
    })
    const m=L.marker([userlocation.lat,userlocation.long],{icon:MyLocationIcon}).addTo(map);
    if(userlocation){

        map.setView([userlocation.lat,userlocation.long],13);
    }else{
        map.setView([lat,lon], 13);
    }
};
const RederChargingStations=(chargingStation)=>{
    const elements = document.querySelector(`.stationcards`);
    console.log(chargingStation);
    chargingStation.map((item,key)=>{
        const card = document.createElement('div');
        card.classList.add('stationcard');
        card.addEventListener('click',()=>changePage("booking_page"));
        
        const chargeStationname=document.createElement('p')
        chargeStationname.textContent=item.name;

        card.appendChild(chargeStationname);
        elements. appendChild(card);
    })
};
function handleInputChange(event) {
    let inputId = event.target.id;
    let inputValue = event.target.value;
    if(inputId==='longitude' || inputId === 'latitude'){
        inputValue=parseFloat(inputValue);
    }
    if(inputId==='openTime' || inputId === 'closeTime'){
        inputValue=parseInt(inputValue);
    }
    inputValues[inputId] = inputValue;
    // console.log(inputValues);
}
const getTokenAndSaveToLocalStorage=()=>{
    var urlParams = new URLSearchParams(window.location.search);
    var token = urlParams.get('email');
    if(token){
        console.log("Token:", token);
        localStorage.setItem("auth-token",token)
        window.location.href="http://127.0.0.1:5500/index.html"
    }
}
const changePage = (pagename) => {
    const elements = document.querySelector(`.${pagename}`);
    Pages.forEach((page)=>{
        console.log();
        if(page===pagename){
            elements.style.display = 'flex';
        }else{
            const hidepage = document.querySelector(`.${page}`);
            hidepage.style.display = 'none';
        }
    })
};

const gotoLogin = (event) => {
    event.preventDefault();
    window.location.href="http://localhost:8081/auth/user"
};
