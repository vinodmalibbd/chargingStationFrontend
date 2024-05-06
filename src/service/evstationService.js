
// let baseURL=baseURL='http://localhost:8081';
const getAllChargingStation=async()=>{
    const res =await fetch(`http://localhost:8081/chargingstation/all`,{
        method:"GET",
        headers:{
            'Content-Type':"application/json"
        }
    })
    return res.json()
};
const registerChargingStation =async(data)=>{
    const res=await fetch('http://localhost:8081/chargingstation/register',{
        method:"POST",
        headers:{
            'Content-Type':"application/json"
        },
        body:JSON.stringify(data)
    })
    return res;
};