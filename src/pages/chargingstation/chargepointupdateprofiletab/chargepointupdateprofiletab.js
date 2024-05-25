function chargepointupdateprofiletab(){
    const mainDiv=document.querySelector('.chargingstationtabcontainer')
    mainDiv.innerHTML='';


    const container=document.createElement('div');
    container.className='chargingstationprofileupdatecontainer';
    container.textContent='update profile';

    
    mainDiv.appendChild(container);
}