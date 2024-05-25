const navbarlist=[
    {
        name:'Find chargestation'
    },
    {
        name:'About us'
    },
    {
        name:'Show booking'
    }
];

function Navbar() {
    const header = document.createElement('header');
    header.className = 'userlandingheader';

    const container = document.createElement('div');
    container.className = 'navbarcontainer';
    
    const nav = document.createElement('nav');
    nav.className = 'navbar';

    const navbarBrand = document.createElement('h1');
    navbarBrand.className = 'navbar-brand';
    navbarBrand.textContent='Smart EV';
    
    const navbaritemscontainer=document.createElement('ul');
    navbaritemscontainer.className='navbaritemscontainer';
    navbarlist.map(item=>{
        const navbaritem=document.createElement('span');
        navbaritem.className='navbar-item';
        navbaritem.textContent=item.name;
        navbaritemscontainer.appendChild(navbaritem);
    })

    const navuser=document.createElement('div')
    navuser.className='navbaruser';
    
    const navloginbutton=document.createElement('button');
    navloginbutton.className='navbarloginbutton'
    navloginbutton.textContent='login';
    navloginbutton.className='navbarloginbutton';

    navuser.appendChild(navloginbutton);
    
    nav.appendChild(navbarBrand);
    nav.appendChild(navbaritemscontainer)
    nav.appendChild(navuser);
    container.appendChild(nav);
    header.appendChild(container);
    document.body.appendChild(header);
}