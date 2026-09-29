
const logos = document.querySelectorAll(".logo"); // logo
const navAddress = document.querySelector(".nav-address"); //address
const navLocation = document.querySelector(".nav-location"); //nav-location
const crossBtn = document.querySelector(".cross-btn"); //Close location btn
const backToTopBtn = document.querySelector(".foot-panel1") //Back to top btn

logos.forEach(logo => {     // logo
    logo.addEventListener("click", () => {
        location.reload();
    });
});


navAddress.addEventListener("click", () => {
    navLocation.style.display = "flex";
});
crossBtn.addEventListener( "click", () => {
    navLocation.style.display = "none";
});


backToTopBtn.addEventListener( "click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});




