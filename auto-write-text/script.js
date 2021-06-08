const text =
  " The only excuse for making a useless thing is that one admires it intensely.\nAll art is quite useless.\n- Oscar Wilde.";

let index = 0;

function writeText() {
  document.body.innerText = text.slice(0, index);
  index++;
  if (index > text.length) {
    index = 0;
  }
}

setInterval(writeText, 150);