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

async function getAddress(latitude, longitude) {
    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&addressdetails=1`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
  
      const data = await response.json();
      const address = data.display_name;
      return address;
    } catch (error) {
      console.error('Error fetching the address:', error);
      return null;
    }
  }