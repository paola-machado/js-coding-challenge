const imgs = document.getElementById("imgs");
const image = document.querySelectorAll("#imgs img");

let index = 0;

function run() {
  index++;

  if (index > image.length - 1) {
    index = 0;
  }

  imgs.style.transform = `translateX(${-index * 600}px)`;
}

setInterval(run, 2000);
