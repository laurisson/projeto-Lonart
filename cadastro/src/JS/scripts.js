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
