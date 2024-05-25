function Chargingstationdashboard() {
    const mainDiv=document.querySelector('.main_content_chargepoint');

    const container = document.createElement('div');
    container.className = 'chargingstation-container';

    const header = document.createElement('div');
    header.className = 'chargingstation-header';
    container.appendChild(header);
    getChargingStationById().then(async chargingstation=>{
        const profileInfo = document.createElement('div');
        profileInfo.className = 'chargingstation-profile-info';
        header.appendChild(profileInfo);
    
        const profileName = document.createElement('span');
        profileName.textContent=chargingstation.name;
        profileInfo.appendChild(profileName);
    
        const profileAdress = document.createElement('span');
        profileAdress.textContent=await getAddress(chargingstation.latitude,chargingstation.longitude);
        profileAdress.className='chargestation-address-span';
        profileInfo.appendChild(profileAdress);
    
        const accountInfo = document.createElement('div');
        accountInfo.className = 'chargingstation-account-info';
        header.appendChild(accountInfo);
    
        const accountbooking = document.createElement('div');
        accountbooking.className = 'chargingstation-totalbookings';
        accountInfo.appendChild(accountbooking);
    
        const totalbookingsheading = document.createElement('div');
        totalbookingsheading.className = 'chargingstation-balance-label';
        totalbookingsheading.textContent = 'Totalbookings';
        accountbooking.appendChild(totalbookingsheading);
    
        const totalbookings = document.createElement('div');
        totalbookings.className = 'chargingstation-balance-amount';
        totalbookings.textContent = '15';
        accountbooking.appendChild(totalbookings);
        
        const navLinks = document.createElement('nav');
        navLinks.className = 'chargingstation-nav-links';
        container.appendChild(navLinks);
    
        const createNavLink = (text, isActive = false) => {
            const link = document.createElement('span');
            link.className = 'chargingstation-nav-link';
            if (isActive) {
                link.classList.add('chargingstation-nav-link-active');
            }
            link.textContent = text;
            link.onclick=(e)=>{
                e.preventDefault();
                switchtab(text);
                document.querySelectorAll('.chargingstation-nav-link').forEach((el) => {
                    el.classList.remove('chargingstation-nav-link-active');
                });
                link.classList.add('chargingstation-nav-link-active');
            }
            return link;
        };
    
        navLinks.appendChild(createNavLink('My chargepoints', true));
        navLinks.appendChild(createNavLink('My bookings'));
        navLinks.appendChild(createNavLink('Update profile'));
        const tabcontainer=document.createElement('section');
        tabcontainer.className='chargingstationtabcontainer';
        mainDiv.appendChild(container);
        mainDiv.appendChild(tabcontainer);
        addchargepointtab();
    })

    
}

function switchtab(tabname){
    switch(tabname){
        case 'My chargepoints':{
           addchargepointtab();
           break; 
        }
        case 'My bookings':{
            Chargingstationbookingtab();
            break;
        }
        case 'Update profile':{
            chargepointupdateprofiletab()
            break;
        }
        default:{
            console.error("you have selected wrong tab");
        }
    }

}