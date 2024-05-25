function Chargingstationbookingtab(){
    const mainDiv=document.querySelector('.chargingstationtabcontainer')
    mainDiv.innerHTML='';


    const container=document.createElement('div');
    container.className='stationbookingcontainer';
    container.textContent='bookings';

    
    mainDiv.appendChild(container);
}