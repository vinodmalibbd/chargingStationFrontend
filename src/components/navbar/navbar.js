const navbarlist = [
  {
    name: "Home",
    click: Userlandingpage,
  },
  {
    name: "About Us",
    click: () => {
      console.log("About Us clicked");
    },
  },
  {
    name: "Show Booking",
    click: userShowBooking,
  },
];

function Navbar() {
  const header = document.createElement("header");
  header.className = "userlandingheader";

  const container = document.createElement("div");
  container.className = "navbarcontainer";

  const nav = document.createElement("nav");
  nav.className = "navbar";

  const token = sessionStorage.getItem("web-vb-token");
  const navbarBrand = document.createElement("h1");
  navbarBrand.className = "navbar-brand";
  navbarBrand.textContent = "Smart EV";

  const navbaritemscontainer = document.createElement("ul");
  navbaritemscontainer.className = "navbaritemscontainer";

  navbarlist.forEach((item) => {
    if (item.name !== "Show Booking" || token) {
      const navbaritem = document.createElement("span");
      navbaritem.className = "navbar-item";
      navbaritem.textContent = item.name;
      if (item.click) {
        navbaritem.onclick = (e) => {
          e.preventDefault();
          item.click();
        };
      }
      navbaritemscontainer.appendChild(navbaritem);
    }
  });

  if (token) {
    const logoutNavItem = document.createElement("span");
    logoutNavItem.className = "navbar-item";
    logoutNavItem.textContent = "Logout";
    logoutNavItem.onclick = () => {
      sessionStorage.removeItem("web-vb-token");
      location.reload();
    };
    navbaritemscontainer.appendChild(logoutNavItem);
  } else {
    const navloginbutton = document.createElement("button");
    navloginbutton.className = "navbarloginbutton";
    navloginbutton.textContent = "Login";
    navloginbutton.onclick = () => {
      createPOPUP("user");
    };
    navbaritemscontainer.appendChild(navloginbutton);
  }

  const burgerMenu = document.createElement("div");
  burgerMenu.className = "burger-menu";
  burgerMenu.innerHTML = '<i class="fas fa-bars"></i>';
  burgerMenu.onclick = () => {
    const isNavVisible = navbaritemscontainer.style.display === "flex";
    navbaritemscontainer.style.display = isNavVisible ? "none" : "flex";
  };

  nav.appendChild(navbarBrand);
  nav.appendChild(navbaritemscontainer);
  nav.appendChild(burgerMenu);
  container.appendChild(nav);
  header.appendChild(container);
  document.body.appendChild(header);
}