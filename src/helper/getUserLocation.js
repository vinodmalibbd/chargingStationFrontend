const getCurrentPositionUser=async(lat, lon)=>{
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            lat = position.coords.latitude;
            lon = position.coords.longitude;
        });
    } 
};