
const toggleMenu = () => {
    menu.classList.toggle("open");
    header.classList.toggle("fix");
}


const menu = document.querySelector(".toggle");

const button = document.querySelector(".menu-img");

const header = document.querySelector("header");

button.addEventListener("click", toggleMenu.bind(this));
menu.addEventListener("mouseout", toggleMenu.bind(this));
