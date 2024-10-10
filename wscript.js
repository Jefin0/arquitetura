const imgs = document.getElementById("img");
//tem que por o id da img
const img = document.querySelectorAll("#img img");

let idx = 0;

function carrossel() {
  idx++;

  if (idx > img.length - 1) {
    idx = 0;
  }

  imgs.style.transform = `translateX(${-idx * 280}px)`;
}

setInterval(carrossel, 2500);
