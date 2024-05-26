const navbarlist = [
  {
    name: "Home",
    click:Userlandingpage
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

  const navbarBrand = document.createElement("h1");
  navbarBrand.className = "navbar-brand";
  navbarBrand.textContent = "Smart EV";

  const navbaritemscontainer = document.createElement("ul");
  navbaritemscontainer.className = "navbaritemscontainer";
  navbarlist.forEach((item) => {
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
  });

  const navuser = document.createElement("div");
  navuser.className = "navbaruser";

  const navloginbutton = document.createElement("button");
  navloginbutton.className = "navbarloginbutton";
  navloginbutton.textContent = "Login";
  navloginbutton.onclick = () => {
    createPOPUP("user");
  };

  navuser.appendChild(navloginbutton);

  nav.appendChild(navbarBrand);
  nav.appendChild(navbaritemscontainer);
  nav.appendChild(navuser);
  container.appendChild(nav);
  header.appendChild(container);
  document.body.appendChild(header);
}
