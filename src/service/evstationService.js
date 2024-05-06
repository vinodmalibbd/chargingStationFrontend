
// let baseURL=baseURL='http://localhost:8081';
const getAllChargingStation=async()=>{
    const responce =await fetch(`http://localhost:8081/chargingstation/all`);
    return responce.json;
};