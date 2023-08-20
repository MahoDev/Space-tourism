export function executePage() {
  const exploreBtn = document.querySelector(".home__explore-btn");
  exploreBtn;
  // Create a new custom event
  const switchPageEvent = new CustomEvent("gotoDestinationPage", {});
  if (exploreBtn !== null) {
    exploreBtn.onclick = () => {
      document.dispatchEvent(switchPageEvent);
    };
  }
}

export const homeContent = `
<div class="home__intro">
    <h5>SO, YOU WANT TO TRAVEL TO</h5>
    <h1>SPACE</h1>
    <p>
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
    </p>
    </div>
    <div class="home__button">
    <button class="home__explore-btn">EXPLORE</button>
</div>`;
