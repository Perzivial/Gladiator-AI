const playerClass = {
  velX : 0,
  velY : 0,
  hp : 100,
  shape : null, //the create shape
  network : null //the neural network controlling the actions
}

var players = [];
var moveSpeed = 3;

function newPlayer(x, y){
  //create body
  var body = new createjs.Shape();
  body.x = x;
  body.y = y;
  body.graphics.beginFill(randomColor()).drawCircle(0,0, arenaSize/20);
  //create network
  var perceptron = new synaptic.Architect.Perceptron(4,4,4,1);

  const obj = Object.assign({}, playerClass);
  obj.shape = body;
  obj.network = perceptron;
  return obj;
}
function addPlayer(x, y){
  var player = newPlayer(x,y);
  stage.addChild(player.shape);
  players.push(player);
}
