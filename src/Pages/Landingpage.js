function LandingPage(){
    const body=document.querySelector('body')
    const h=document.createElement('h1')
    h.textContent='homepage'
    const about=document.createElement('h1')
    about.textContent='about'
    about.onclick=()=>navigateTo('/about')
    const contact=document.createElement('h1')
    contact.textContent='contact'
    contact.onclick=()=>navigateTo('/contact')
    body.appendChild(h);
    body.appendChild(about)
    body.appendChild(contact)
}