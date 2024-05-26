const charginstationnavbarlist = [
    {
        name: 'My Chargepoints'
    },
    {
        name: 'My Bookings'
    }
];

function Chargepointnav() {
    const header = document.createElement('header');
    header.className = 'chargepoint-userlandingheader';

    const container = document.createElement('div');
    container.className = 'chargepoint-navbarcontainer';
    
    const nav = document.createElement('nav');
    nav.className = 'chargepoint-navbar';

    const navbarBrand = document.createElement('h1');
    navbarBrand.className = 'chargepoint-navbar-brand';
    navbarBrand.textContent = 'Smart EV';
    
    const navbaritemscontainer = document.createElement('ul');
    navbaritemscontainer.className = 'chargepoint-navbaritemscontainer';
    
    charginstationnavbarlist.forEach(item => {
        const navbaritem = document.createElement('span');
        navbaritem.className = 'chargepoint-navbar-item';
        navbaritem.textContent = item.name;
        navbaritemscontainer.appendChild(navbaritem);
    });

    const navuser = document.createElement('div');
    navuser.className = 'chargepoint-navbaruser';
    
    const navloginbutton = document.createElement('button');
    navloginbutton.className = 'chargepoint-navbarloginbutton';
    navloginbutton.textContent = 'Login';
    
    navuser.appendChild(navloginbutton);
    
    nav.appendChild(navbarBrand);
    nav.appendChild(navbaritemscontainer);

    container.appendChild(nav);
    header.appendChild(container);
    document.body.appendChild(header);
}


