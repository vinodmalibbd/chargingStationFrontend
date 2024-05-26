function Rendermap(){
    const map = L.map("map");
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {}).addTo(map);

    const MyLocationIcon = L.divIcon({
        html: '<svg width="30px" height="30px" viewBox="0 0 " fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#00bfff" transform="rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0" transform="translate(4.199999999999999,4.199999999999999), scale(0.65)"><rect x="0" y="0" width="24.00" height="24.00" rx="12" fill="#7ed0ec" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#c9c5c5" stroke-width="0.192"></g><g id="SVGRepo_iconCarrier"> <path d="M3 12H21M12 3V21M19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12C5 8.13401 8.13401 5 12 5C15.866 5 19 8.13401 19 12Z" stroke="#007bff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>',
        iconSize: [25, 25],
        iconAnchor: [15, 30]
    });

    let routingControl = null;
    let currentPopup = null;

    getCurrentPositionUser().then(userLocation => {
        L.marker([userLocation.lat, userLocation.long], { icon: MyLocationIcon }).addTo(map);
        map.setView([userLocation.lat, userLocation.long], 13);
        getAllChargingStation().then(data => {
            data.forEach(item => {
                const chargingMarker = L.marker([item.latitude, item.longitude]).addTo(map);
                chargingMarker.on('click', () => {
                    if (currentPopup) {
                        currentPopup.close();
                    }
                    if (routingControl !== null) {
                        map.removeControl(routingControl);
                    }
                    routingControl = L.Routing.control({
                        waypoints: [
                            L.latLng(userLocation.lat, userLocation.long),
                            L.latLng(item.latitude, item.longitude)
                        ],
                        routeWhileDragging: true,
                        show: false, 
                        createMarker: function () {
                            return null; 
                        }
                    }).on('routesfound', function (e) {
                        const route = e.routes[0];
                        const distance = route.summary.totalDistance;
                        const formattedDistance = (distance / 1000).toFixed(2) + " km";
                        const destinationMarker = L.marker(route.coordinates[0]).addTo(map);
                        currentPopup = destinationMarker.bindPopup(openStationDetailsPopup(item,formattedDistance)).openPopup();

                        const poupcard=document.querySelector('.popup-button-stationcard');
                        if(poupcard){
                            poupcard.addEventListener('click',(e)=>{
                                e.preventDefault();
                                userBooking(item);
                            })
                        }
                    }).addTo(map);
                });
            });
        });
    });
    
}

const openStationDetailsPopup = (station, distance) => {
    const popupContent = `
        <div class="popupstaioninfo">
            <h3>${station.name}</h3>
            <p>Open Time: ${station.openTime}</p>
            <p>Close Time: ${station.closeTime}</p>
            <p>Distance: ${distance} km</p>
            <button class="popup-button-stationcard">More Details</button>
        </div>
    `;
    return popupContent;
};