function checkStorageAndRedirect() {
    const stationCookie = sessionStorage.getItem('station-cookie');
    const webVbToken = sessionStorage.getItem('web-vb-token');
    const role = sessionStorage.getItem('role');
  
    if (stationCookie || webVbToken) {
      redirectBasedOnRole(role);
    } else {
      MainPage();
    }
  }
  
  function redirectBasedOnRole(role) {
    switch (role) {
      case 'chargingstation':
        Chargestationlanding();
        break;
      case 'user':
        Userlandingpage();
        break;
      default:
        MainPage();
    }
  }
  
  function handleNavigation(e) {
    e.preventDefault();
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');
    const role = params.get('role');
  
    if (token !== null) {
      sessionStorage.setItem('role', role);
      if (role === 'chargingstation') {
        sessionStorage.setItem('station-cookie', token);
      } else if (role === 'user') {
        sessionStorage.setItem('web-vb-token', token);
      }
    }
    history.replaceState({}, document.title, window.location.pathname);
    checkStorageAndRedirect();
  }
  
  window.addEventListener('popstate', handleNavigation);
  window.addEventListener('navigate', handleNavigation);
  
  window.addEventListener('load', () => {
    handleNavigation(new Event('load'));
  });