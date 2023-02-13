const hamburger = document.querySelector(".header_wrapper--burger");
const close = document.querySelector(".header_wrapper--close_navbar");
const navMenu = document.querySelector(".header_wrapper--navigation_items");

hamburger.addEventListener("click", mobileMenu);
close.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".header_wrapper--link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}