const firstName = "Daniel";
const age = 37;

console.log("result");
const button = document.querySelector("action--js");

console.log("button");

const hamburger = document.querySelector(".hamburger--js");

hamburger.addEventListener("click", () => {
  const nav = document.querySelector(".navigation--js");
  nav.classList.toggle("navigation--open");
});
