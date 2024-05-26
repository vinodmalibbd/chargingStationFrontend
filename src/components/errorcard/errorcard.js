function showError(message, type = "fail") {
    const errorCard = document.getElementById("errorCard");
    errorCard.textContent = message || "i am fail";
    errorCard.classList.add("error-card", type);
    errorCard.style.display = "block";
    
    setTimeout(() => {
      errorCard.style.display = "none";
      errorCard.classList.remove("error-card", type);
    }, 5000);

}