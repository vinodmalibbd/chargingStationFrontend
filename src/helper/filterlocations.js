async function getCityBounds(cityName) {
    const geocodeUrl = `${URLs.openstreetMapSearchcity}${encodeURIComponent(cityName)}`;
    const response = await fetch(geocodeUrl);
    const data = await response.json();
    if (data.length > 0) {
        return data[0].boundingbox.map(coord => parseFloat(coord));
    } else {
        return null;
    }
}

function isWithinBounds(latitude, longitude, bounds) {
    const [latMin, latMax, lonMin, lonMax] = bounds;
    return latitude >= latMin && latitude <= latMax && longitude >= lonMin && longitude <= lonMax;
}




async function searchByCityName(cityName) {
    const cityBounds = await getCityBounds(cityName);
    const stations = await getAllChargingStation();
    if (cityBounds) {
        return stations.filter(station => isWithinBounds(station.latitude, station.longitude, cityBounds));
    }else{
        return null;
    }
}
