const routes = {
  '/': LandingPage,
  '/user':UserLandingPage,
  '/station':ChargingStationLandingPage
};

function navigateTo(route) {
  window.history.pushState({}, route, window.location.origin + route);
  if (routes[route]) {
      routes[route]();
  } else {
      navigateTo('/')
      console.error("Route not found:", route);
  }
}

function handleNavigation(e) {
  e.preventDefault();
  const currentRoute = window.location.pathname;
  navigateTo(currentRoute);
}

window.addEventListener('popstate', handleNavigation);
window.addEventListener('load', handleNavigation);