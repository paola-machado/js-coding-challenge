const button = document.getElementById("button");
const container = document.getElementById("container");

button.addEventListener("click", () => {
  createNotification();
});

function createNotification() {
  const notif = document.createElement("div");
  notif.classList.add("toast");

  notif.innerText = "Good job!";

  container.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 3000);
}
