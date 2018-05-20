const playerClass = {
  velX : 0,
  velY : 0,
  hp : 100,
  shape : null, //the create shape
  model : null //the neural network controlling the actions
}

var players = [];
var maxFitness = 0;

function newPlayer(x, y){
  var body = new createjs.Shape();
  body.x = x;
  body.y = y;
  body.graphics.beginFill(randomColor()).drawCircle(0,0, arenaSize/20);
  const obj = Object.assign({}, playerClass);
  obj.shape = body;
  return obj;
}
function addPlayer(x, y){
  var player = newPlayer(x,y);
  stage.addChild(player.shape);
  players.push(player);
}
