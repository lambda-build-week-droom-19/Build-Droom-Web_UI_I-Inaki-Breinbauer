const toggleMenu = () => {
    menu.classList.toggle("open");
    header.classList.toggle("fix");
}

const menu = document.querySelector(".toggle");

const button = document.querySelector(".menu-img");

const header = document.querySelector("header");

button.addEventListener("click", toggleMenu.bind(this));
menu.addEventListener("mouseout", toggleMenu.bind(this));

/* -------------- */


const imgarr = document.querySelectorAll(".imgmockup");

let counter = 0;
const waitTime = 3000;

const change = () => {

    imgarr[counter].classList.remove("show");

    if (counter < imgarr.length - 1) {
        counter++;
    }
    else {
        counter = 0;
    }

    /* imgarr.forEach((element) => {
        element.classList.remove("show");
    }); */

    imgarr[counter].classList.add("show");

    setTimeout(change, waitTime);
}
console.log(document.querySelector(".show"));
document.querySelector(".show").addEventListener("onload", setTimeout.call(this, change, 3000));