const renderNavbar=()=> {
    const navbarItems = [
        { text: "Home", action: "mainpage" },
        { text: "Find charging station", action: "find_station" },
        { text: "Register charging station", action: "register_station" }
    ];
    const navbar = document.querySelector('.Navbar');

    if (!navbar) {
        console.error("Navbar element not found!");
        return;
    }

    const logo = document.createElement('div');
    logo.classList.add('logo');
    
    const logoimg = document.createElement('img');
    logoimg.classList.add('logoimg');
    logoimg.src='./logo.png';

    // Create navbar items container
    const navbarItemsContainer = document.createElement('div');
    navbarItemsContainer.classList.add('navbar-items');

    // Create navbar login button
    const loginBtn = document.createElement('div');
    loginBtn.classList.add('navbar-login-btn');
    loginBtn.textContent = 'Login';
    loginBtn.addEventListener('click', gotoLogin);

    // Append logo to navbar
    navbar.appendChild(logo);

    // Append each navbar item to the navbar items container
    navbarItems.forEach(function(item) {
        const navbarItem = document.createElement('p');
        navbarItem.classList.add('navbar-item');
        navbarItem.textContent = item.text;
        navbarItem.addEventListener('click', function() {
            changePage(item.action);
        });
        navbarItemsContainer.appendChild(navbarItem);
    });

    navbar.appendChild(navbarItemsContainer);

    navbar.appendChild(loginBtn);
}