var canvas;
var stage;

function init() {
  canvas = document.getElementById("canvas");
  canvas.width  = (window.innerWidth*.7)*2;
  canvas.height = (window.innerHeight)*2;
  canvas.style.width = (canvas.width / 2) + "px";
  canvas.style.height = (canvas.height / 2) + "px";

  //stage setup
  stage = new createjs.Stage("canvas");
  //game loop reference
  createjs.Ticker.addEventListener("tick", handleTick);
  createjs.Ticker.framerate = 60;

  stage.update();
}
