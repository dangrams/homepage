const firstName = "Daniel";
const age = 37;

console.log("result");
const button = document.querySelector("action--js");

console.log("button");

button.addEventListener("click", () => {
  const heading = document.querySelector("main__heading--js");
  heading.innerHTML = "Witaj drogi odwiedzający";
  console.log(heading.classList.contains(""));
});

const hamburger = document.querySelector(".hamburger--js");

hamburger.addEventListener("click", () => {
  const nav = document.querySelector(".navigation--js");
  nav.classList.toggle("navigation--open");
});
