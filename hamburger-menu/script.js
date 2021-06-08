const button = document.getElementById("button");
const nav = document.getElementById("nav");

button.addEventListener("click", () => {
  nav.classList.toggle("active");
  button.classList.toggle("active");
});
