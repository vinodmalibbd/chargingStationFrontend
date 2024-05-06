
const RenderMap=()=>{
    let lat = 20.5937;
    let lon = 78.9629;

    const map = L.map("map").setView([20.5937, 78.9629], 5);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    }).addTo(map);
    const MyLocationIcon=L.divIcon({
        html:'<svg height="20px" width="20px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 444.406 444.406" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path style="fill:#010002;" d="M222.208,0c-66.672,0-120.906,54.234-120.906,120.916c0,48.704,28.959,90.736,70.55,109.875 l46.076,213.615h8.559l46.076-213.615c41.582-19.15,70.541-61.171,70.541-109.875C343.104,54.234,288.889,0,222.208,0z M222.208,215.823c-52.329,0-94.917-42.578-94.917-94.917c0-52.349,42.578-94.907,94.917-94.907s94.907,42.569,94.907,94.907 S274.537,215.823,222.208,215.823z"></path> </g> </g> </g> </g></svg>',
        iconSize: [10, 10], // size of the icon
        iconAnchor: [15, 30] 
    })

    Cities.map((item)=>{
        item.points.map((point)=>{
            const marker = L.marker([point.lat, point.lon]).addTo(map);
        })

    });
    console.log(lat,lon);
    getCurrentPositionUser(lat,lon).then(()=>{
        const userlocation = L.marker([lat,lon],{icon:MyLocationIcon}).addTo(map);
    })
    map.setView([lat,lon], 13);
};