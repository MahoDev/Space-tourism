import "./header.js";
import * as c from "./components.js";
import * as home from "./home.js";
import * as destination from "./destination.js";
import * as crew from "./crew.js";
import * as technology from "./technology.js";

const importedPages = { home, destination, crew, technology };
const contentOfPages = new Map();
contentOfPages.set("HOME", home.homeContent);
contentOfPages.set("DESTINATION", destination.destinationContent);
contentOfPages.set("CREW", crew.crewContent);
contentOfPages.set("TECHNOLOGY", technology.technologyContent);

const pageContentElement = document.querySelector(".page-content");
const navPages = document.querySelectorAll(".header__navbar ul li");
const logo = document.querySelector(".header__logo");

//make home active in navbar
c.makeActive(
  document.querySelector(".header__navbar .nav-item:nth-of-type(1)"),
  navPages
);

//to run the code in home.js executePage on script start
switchToPage("HOME");

//respond to event firing from home.js
document.addEventListener("gotoDestinationPage", (e) => {
  switchToPage("DESTINATION");
  c.makeActive(
    document.querySelector(".header__navbar .nav-item:nth-of-type(2)"),
    navPages
  );
});

navPages.forEach((page) => {
  page.addEventListener("click", () => {
    const pageName = page.innerText.replace(/0\d /, "");
    switchToPage(pageName);
  });
});

logo.onclick = () => {
  switchToPage("HOME");
};

function switchToPage(pageName) {
  //adding proper page class on body for styles to work
  document.body.classList.remove(document.body.classList[0]);
  document.body.classList.add(pageName.toLowerCase());
  //make right nav page active
  console.log(
    [...navPages].find((navPage) => navPage.innerText.includes(pageName))
  );
  console.log(navPages);
  c.makeActive(
    [...navPages].find((navPage) => navPage.innerText.includes(pageName)),
    navPages
  );
  //Show the content of the page
  pageContentElement.innerHTML = contentOfPages.get(pageName);
  //runs the code inside the page
  importedPages[pageName.toLowerCase()]?.executePage?.call();
}
