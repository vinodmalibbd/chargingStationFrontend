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
