window.onload=() => {
    const userlocation = getCurrentPositionUser();
    getAllChargingStation().then(res=>{
        console.log(res);
        RenderMap(res,userlocation);
        RederChargingStations(res);
        console.log(userlocation);
    }).catch(e=>console.log(e.message))
    getTokenAndSaveToLocalStorage();
    renderNavbar();
    renderRegisterForm();
    renderLoginForm();
};

const changePage = (pagename) => {
    const elements = document.querySelector(`.${pagename}`);
    Pages.forEach((page)=>{
        console.log();
        if(page===pagename){
            elements.style.display = 'flex';
        }else{
            const hidepage = document.querySelector(`.${page}`);
            hidepage.style.display = 'none';
        }
    })
};

const getTokenAndSaveToLocalStorage=()=>{
    var urlParams = new URLSearchParams(window.location.search);
    var token = urlParams.get('email');
    if(token){
        console.log("Token:", token);
        localStorage.setItem("auth-token",token)
        window.location.href="http://127.0.0.1:5500/index.html"
    }
}
const gotoLogin = (event) => {
    event.preventDefault();
    window.location.href="http://localhost:8081/auth/user"
};