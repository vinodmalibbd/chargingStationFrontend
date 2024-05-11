// const getAllChargingStation=async(token)=>{
//     const res =await fetch(`http://localhost:8081/chargingstation/all`,{
//         method:"GET",
//         headers:{
//             'Content-Type':"application/json",
//             'Authorization': `${token}` 
//         }
//     })
//     return res.json()
// };
// // window.onload(()=>{
// //     getAllChargingStation();
// // })
window.addEventListener('load',function(){
    const token='eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ2bTIxMjQyMTI0QGdtYWlsLmNvbSIsImlhdCI6MTcxNTM0MDk3MCwiZXhwIjoxNzE1MzU4OTcwfQ.-4eh76sKKeD2RkJoYPHDhT2XR2H-bg3gCGFXe3u1kL5YIT33xFkzbYY98VBlwDBw5ycpT3vd5PAq9a1aeRi6dw'
    getAllChargingStation(token);
})


// const Stationlogin = (event) =>{
//     event.preventDefault();
//     window.location.href ='./temp/temp.html';
//   }
//   const Userlogin = (event) =>{
//     event.preventDefault();
//     window.location.href = './UserHome/User-homePage.html';
//   } 
  // Create a function to generate the HTML content
  