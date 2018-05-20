var canvas;
var stage;

function handleTick(){

}

function init() {
  canvas = document.getElementById("canvas");
  canvas.width  = (window.innerWidth*.7)*2;
  canvas.height = (window.innerHeight)*2;
  canvas.style.width = (canvas.width / 2) + "px";
  canvas.style.height = (canvas.height / 2) + "px";

  //stage setup
  stage = new createjs.Stage("canvas");
  setUpArena();
  addPlayer(canvas.width/2,100);
  //game loop reference
  createjs.Ticker.addEventListener("tick", handleTick);
  createjs.Ticker.framerate = 60;

  stage.update();
}
function setUpArena(){
  var arena = new createjs.Shape();
  arena.graphics.beginFill("white").drawCircle(0,0,canvas.height/2);
  arena.x = canvas.width /2;
  arena.y = canvas.height /2;
  stage.addChild(arena);
}
