window.onload=() => {
    const userlocation = getCurrentPositionUser();
    getAllChargingStation().then(res=>{
        console.log(res);
        RenderMap(res,userlocation);
        console.log(userlocation);
    }).catch(e=>console.log(e.message))

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