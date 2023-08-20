import * as c from "./components.js";

//Header code
const burgerMenu = document.querySelector(".header__menu-icon");
const navigationBar = document.querySelector(".header__navbar");
const closeIcon = document.querySelector(".close-icon");
const navPages = document.querySelectorAll(".header__navbar ul li");

burgerMenu.onclick = () => {
  navigationBar.classList.add("shown");
};
closeIcon.onclick = () => {
  navigationBar.classList.remove("shown");
};
navPages.forEach((page) => {
  page.addEventListener("click", () => {
    c.makeActive(page, navPages);
  });
});
