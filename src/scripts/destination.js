import * as c from "./components.js";

export function executePage() {
  const celBodyImage = document.querySelector(
    ".destination__celestial-body img"
  );
  const celestialBodies = document.querySelectorAll(
    ".destination__cel-bodies li"
  );
  const celBodyInfo = document.querySelector(".destination__info");

  //make moon active by default
  c.makeActive(
    document.querySelector(".destination__cel-bodies li:nth-child(1)"),
    celestialBodies
  );
  const data = [
    {
      celestialBody: "MOON",
      details:
        "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      distance: "384,400 KM",
      travelTime: "3 DAYS",
    },
    {
      celestialBody: "MARS",
      details:
        "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      distance: "225 MIL. KM",
      travelTime: "9 MONTHS",
    },
    {
      celestialBody: "EUROPA",
      details:
        "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      distance: "628 MIL. KM",
      travelTime: "3 YEARS",
    },
    {
      celestialBody: "TITAN",
      details:
        "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      distance: "1.6 BIL. KM",
      travelTime: "7 YEARS",
    },
  ];

  for (let celBody of celestialBodies) {
    celBody.addEventListener("click", () => {
      c.makeActive(celBody, celestialBodies);

      celBodyImage.src = `src/assets/destination/image-${celBody.innerText.toLowerCase()}.png`;
      const bodyData = data.find(
        (body) => body.celestialBody === celBody.innerText
      );
      celBodyInfo.querySelector("h2").innerText = bodyData.celestialBody;
      celBodyInfo.querySelector("p").innerText = bodyData.details;
      celBodyInfo.querySelectorAll(".destination__travel-info p")[0].innerText =
        bodyData.distance;
      celBodyInfo.querySelectorAll(".destination__travel-info p")[1].innerText =
        bodyData.travelTime;
    });
  }
}

export const destinationContent = `
<div class="destination__title">
        <span>01</span>
        <p>PICK YOUR DESTINATION</p>
      </div>
      <div class="destination__container">
        <div class="destination__celestial-body">
          <img src="./src/assets/destination/image-moon.png" alt="" />
        </div>
        <div class="destination__info">
          <ul class="destination__cel-bodies">
            <li>MOON</li>
            <li>MARS</li>
            <li>EUROPA</li>
            <li>TITAN</li>
          </ul>
          <h2>MOON</h2>
          <p>
            See our planet as you’ve never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you’re there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
          </p>
          <div class="seperator"></div>
          <div class="destination__travel-info">
            <div>
              <h6>AVG. DISTANCE</h6>
              <p>384,400 KM</p>
            </div>
            <div>
              <h6>EST. TRAVEL TIME</h6>
              <p>3 DAYS</p>
            </div>
          </div>
        </div>
      </div>
`;
