

function createPOPUP(usertype) {
 
  document.body.innerHTML = '';

  const mainDiv =document.createElement("div");
  mainDiv.className = "popup-overlay";

  const popContent = document.createElement("div");
  popContent.className = "popup-content";
  const Title =document.createElement("h2");
  Title.className = "loginTitle";
  Title.textContent = "Login With Google"

  const LoginBtn = document.createElement("button");
  LoginBtn.textContent = "Sign up with Google";
  LoginBtn.className = "g-signin2";
  LoginBtn.onclick= () =>{
    sessionStorage.clear();
    if(usertype==="station"){
      loginchargingStation();
    }else{
      loginuser();
    }

  }


  const cancelBtn = document.createElement("button");
  cancelBtn.className = "close-button";
  cancelBtn.textContent = "cancel";
  cancelBtn.onclick = () =>{
    MainPage();
  }
  popContent.appendChild(Title);
  popContent.appendChild(LoginBtn);
  popContent.appendChild(cancelBtn);
  mainDiv.appendChild(popContent);
  document.body.appendChild(mainDiv);
  
}