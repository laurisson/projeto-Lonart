var interval = 0;

var maxSlider = document.querySelectorAll(".box-image").length - 1;

acao();

function acao() {
  let img = document.querySelectorAll(".box-image img");

  setInterval(function () {
    img[interval].style.display = "none";
    interval++;
    if (interval > maxSlider) {
      interval = 0;
    }

    img[interval].style.display = "block";
  }, 3000);
}

var btn = document.querySelector("#login");
var esconder = document.querySelector("#logi");

btn.addEventListener("click", function () {
  if (esconder.style.display === "block") {
    esconder.style.display = "none";
  } else {
    esconder.style.display = "block";
  }
});

var submi = document.querySelector("#sub");

var esconde = document.querySelector(".produtoss");

submi.addEventListener("click", function () {
  if (esconde.style.display === "block") {
    esconde.style.display = "none";
  } else {
    esconde.style.display = "block";
  }
});
