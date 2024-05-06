window.onload=() => {
    RenderMap();
    const res=getAllChargingStation();
    console.log(res);
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