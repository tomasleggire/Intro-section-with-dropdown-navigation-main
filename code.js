const feaAcc = document.getElementById("feature-acc");
const feaLabel = document.getElementById("feature-label");

feaLabel.addEventListener("click",(accordion) => {
    feaAcc.classList.toggle("active");
})

const compAcc = document.getElementById("company-acc");
const compLabel = document.getElementById("company-label");

compLabel.addEventListener("click",(accordion) => {
    compAcc.classList.toggle("active");
})





const btnMenuOpen = document.getElementById("logo-menu");
const oscuro = document.getElementById("oscuro");
const menu = document.getElementById("menu");
const btnMenuClose = document.getElementById("btn-close");


btnMenuOpen.addEventListener("click",(g) => {
    oscuro.classList.add("oscuro-show");
    menu.classList.add("menu-active");
})

btnMenuClose.addEventListener("click",(h) => {
    oscuro.classList.remove("oscuro-show");
    menu.classList.remove("menu-active");
})






const feaMobileLabel = document.getElementById("feature-label-mobile");
const feaMobileContent = document.getElementById("feature-content-mobile");
const feaMobile = document.getElementById("feature-mobile");

feaMobileLabel.addEventListener("click",(j) => {
    feaMobileContent.classList.toggle("feature-content-mobile-active");
    feaMobile.classList.toggle("active-mobile1");
})

const compMobileLabel = document.getElementById("company-label-mobile");
const compMobileContent = document.getElementById("company-content-mobile");
const compMobile = document.getElementById("company-mobile");

compMobileLabel.addEventListener("click",(f) => {
    compMobileContent.classList.toggle("company-content-mobile-active");
    compMobile.classList.toggle("active-mobile2");
})