// function Chargestationlanding (){
//     document.body.innerHTML='';
//     getChargingStationById().then(res=>{
//         console.log(res);
//     })
   
// }

function Chargestationlanding() {
    document.body.innerHTML='';
    showloader();
    getChargingStationById().then(chargestation=>{
      if(chargestation.name===null || chargestation.name === ''){
        
        chargingStationRegistration();
        removeloader();
      }else {
        Chargepointnav();
        const mainDiv=document.createElement('main'); 
        mainDiv.className='main_content_chargepoint';
        document.body.appendChild(mainDiv) 
        Chargingstationdashboard();
        Footer();
        removeloader();
      }
    }).catch(e=>{
      removeloader();
    })
   
  }