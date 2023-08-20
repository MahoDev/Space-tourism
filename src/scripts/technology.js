import * as c from "./components.js";

export function executePage() {
  const portraitTechImage = document.querySelector(
    ".technology__image img:nth-child(1)"
  );
  const landscapeTechImage = document.querySelector(
    ".technology__image img:nth-child(2)"
  );
  const options = document.querySelectorAll(".options .option");
  const techInfo = document.querySelector(".technology__info");

  //make default active item
  c.makeActive(options[0], options);

  const data = [
    {
      type: "LAUNCH VEHICLE",
      details:
        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    },
    {
      type: "SPACEPORT",
      details:
        "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    },
    {
      type: "SPACE CAPSULE",
      details:
        "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    },
  ];

  for (let option of options) {
    option.addEventListener("click", () => {
      c.makeActive(option, options);

      portraitTechImage.src = `src/assets/technology/image-${option.dataset.type
        .toLowerCase()
        .replace(" ", "-")}-portrait.jpg`;
      landscapeTechImage.src = `src/assets/technology/image-${option.dataset.type
        .toLowerCase()
        .replace(" ", "-")}-landscape.jpg`;
      const techData = data.find((el) => el.type === option.dataset.type);
      techInfo.querySelector("h3").innerText = techData.type;
      techInfo.querySelector("p").innerText = techData.details;
    });
  }
}

export const technologyContent = `
      <div class="technology__title">
        <span>03</span>
        <p>SPACE LAUNCH 101</p>
      </div>
      <div class="technology__container">
        <div class="options">
          <div class="option" data-type="LAUNCH VEHICLE">1</div>
          <div class="option" data-type="SPACEPORT">2</div>
          <div class="option" data-type="SPACE CAPSULE">3</div>
        </div>
        <div class="technology__info">
          <h6>THE TERMINOLOGY…</h4>
          <h3>LAUNCH VEHICLE</h3>
          <p>
            A launch vehicle or carrier rocket is a rocket-propelled vehicle
            used to carry a payload from Earth's surface to space, usually to
            Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful
            in operation. Standing 150 metres tall, it's quite an awe-inspiring
            sight on the launch pad!
          </p>
        </div>
        <div class="technology__image">
          <img src="./src/assets/technology/image-launch-vehicle-portrait.jpg" alt="">
          <img src="./src/assets/technology/image-launch-vehicle-landscape.jpg" alt="">
        </div>
      </div>
`;
