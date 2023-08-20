export function makeActive(element, elements) {
  elements.forEach((el) => {
    el.classList.remove("active");
  });
  element.classList.add("active");
}
