const getAllChargingStation=async()=>{
    const res =await fetch(`http://localhost:8081/chargingstation/all`,{
        method:"GET",
        headers:{
            'Content-Type':"application/json"
        }
    })
    return res.json()
};
const loginchargingStation =async()=>{
    window.location.href='http://localhost:8081/auth/chargingstation';
};
const LoginUser =async()=>{
    const res=await fetch('http://localhost:8081/auth/getuser',{
        method:"GET",
        headers:{
            'Content-Type':"application/json"
        },
    
    })
    return res;
};
const getChargingStationById =async()=>{
    const token =localStorage.getItem('station-cookie')
    if(token){

        const decodedtoken=decodeJwtToken(token);
        const stationId=decodedtoken.sub;
        const res=await fetch(`http://localhost:8081/chargingstation/${stationId}`,{
            method:"GET",
            headers:{
                'Content-Type':"application/json",
                'Authorization':token
            },
        
        })
        
        console.log(JSON.parse(res));
        return JSON.parse(res);
    }else{
        navigateTo('/')
    }
};
const updateChargingStationProfile =async(data)=>{
    const token =localStorage.getItem('station-cookie')
    if(token){

        const decodedtoken=decodeJwtToken(token);
        const stationId=decodedtoken.sub;
        const res=await fetch(`http://localhost:8081/chargingstation/update`,{
            method:"PUT",
            headers:{
                'Content-Type':"application/json",
                'Authorization':token,
            },
            body:JSON.stringify(data)
        
        })
        if(res.status===201){

            console.log(JSON.parse(res));
            navigateTo('/station')

        }
    }else{
        navigateTo('/')
    }
};