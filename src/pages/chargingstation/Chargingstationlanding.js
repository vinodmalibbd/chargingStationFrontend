function Chargestationlanding (){
    document.body.innerHTML='';
    Chargepointnav();
    const mainDiv=document.createElement('main'); 
    mainDiv.className='main_content_chargepoint';
    document.body.appendChild(mainDiv) 
    Chargingstationdashboard();
    Footer();
}