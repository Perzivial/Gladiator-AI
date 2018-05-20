var canvas;
var stage;
var arena;

var arenaSize;
function handleTick(){

}

function init() {
  canvas = document.getElementById("canvas");
  canvas.width  = (window.innerWidth*.7)*2;
  canvas.height = (window.innerHeight)*2;
  canvas.style.width = (canvas.width / 2) + "px";
  canvas.style.height = (canvas.height / 2) + "px";

  arenaSize = canvas.height;

  //stage setup
  stage = new createjs.Stage("canvas");
  setUpArena();
  var point = {
    x : canvas.width/2,
    y : canvas.height/2
  }
  addPlayer(point.x,point.y);
  addFood(10);
  //game loop reference
  createjs.Ticker.addEventListener("tick", handleTick);
  createjs.Ticker.framerate = 60;

  stage.update();
}
function setUpArena(){
  arena = new createjs.Shape();
  arena.graphics.beginFill("white").drawCircle(0,0,canvas.height/2);
  arena.x = canvas.width /2;
  arena.y = canvas.height /2;
  stage.addChild(arena);
}

function pointInArena(mindist){
  var bufferAmount = .1;
  var dist = (Math.random()*((arenaSize/2) - mindist)) - ((arenaSize/2)*bufferAmount);
  dist += mindist;
  var angle = Math.random()*360;
  var point = {
    x : (Math.sin(angle)*dist) + arena.x,
    y : (Math.cos(angle)*dist) + arena.y
  }
  return point;
}
