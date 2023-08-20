import * as c from "./components.js";

export function executePage() {
  const options = document.querySelectorAll(
    ".crew__container .options .option"
  );
  const crewInfo = document.querySelector(".crew__info");
  const crewImage = document.querySelector(".crew__image img");

  //default active crew member
  c.makeActive(options[0], options);

  const data = [
    {
      role: "COMMANDER",
      name: "DOUGLAS HURLEY",
      details:
        "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    },
    {
      role: "MISSION SPECIALIST",
      name: "MARK SHUTTLEWORTH",
      details:
        "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    },
    {
      role: "PILOT",
      name: "VICTOR GLOVER",
      details:
        "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    },
    {
      role: "FLIGHT ENGINEER",
      name: "ANOUSHEH ANSARI",
      details:
        "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    },
  ];

  for (let option of options) {
    option.addEventListener("click", () => {
      c.makeActive(option, options);
      crewImage.src = `src/assets/crew/image-${option.dataset.name
        .toLowerCase()
        .replace(" ", "-")}.png`;
      crewImage.src;
      const crewData = data.find((crew) => crew.name === option.dataset.name);
      crewInfo.querySelector("h4").innerText = crewData.role;
      crewInfo.querySelector("h3").innerText = crewData.name;
      crewInfo.querySelector("p").innerText = crewData.details;
    });
  }
}
export const crewContent = `
<div class="crew__title">
        <span>02</span>
        <p>MEET YOUR CREW</p>
      </div>
      <div class="crew__container">
        <div class="crew__info">
          <h4>COMMANDER</h4>
          <h3>DOUGLAS HURLEY</h3>
          <p>
            Douglas Gerald Hurley is an American engineer, former Marine Corps
            pilot and former NASA astronaut. He launched into space for the
            third time as commander of Crew Dragon Demo-2.
          </p>
          <div class="options">
            <div class="option" data-name="DOUGLAS HURLEY"></div>
            <div class="option" data-name="MARK SHUTTLEWORTH"></div>
            <div class="option" data-name="VICTOR GLOVER"></div>
            <div class="option" data-name="ANOUSHEH ANSARI"></div>
          </div>
        </div>
        <div class="crew__image">
          <img src="./src/assets/crew/image-douglas-hurley.png" alt="" />
        </div>
      </div>`;
