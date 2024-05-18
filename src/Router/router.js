const routes = {
  '/': MainPage,
  '/station':chargingStationDashboard,
  '/user':UserLandingPage,
};

function navigateTo(route) {
  window.history.pushState({}, route, window.location.origin + route);
  if (routes[route]) {
      routes[route]();
  } else {
      console.error("Route not found:", route);
  }
}

function handleNavigation(e) {
  e.preventDefault();
  const currentRoute = window.location.pathname;

  const params = new URLSearchParams(window.location.search);
  const token = params.get('token');
  const role = params.get('role');

  if(token !==null){
    sessionStorage.setItem('role',role);
    if(role==='chargingstation'){
      sessionStorage.setItem('station-cookie',token);
      navigateTo('/station')
    }else if(role==='user'){
      sessionStorage.setItem('web-vb-token',token);
      navigateTo('/user');
    }else{
      navigateTo('/')
    }
  }else{
    navigateTo(currentRoute);
  }
}

window.addEventListener('popstate', handleNavigation);
window.addEventListener('load', handleNavigation);