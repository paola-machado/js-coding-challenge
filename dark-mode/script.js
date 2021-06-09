const toggle = document.getElementById("toggle");

function changeIcon() {
  const label = document.getElementById("label");
  if (label.innerHTML === "🌙") {
    label.innerText = "☀️";
  } else {
    label.innerText = "🌙";
  }
}

toggle.addEventListener("change", (e) => {
  document.body.classList.toggle("dark", e.target.checked);
  changeIcon();
});
