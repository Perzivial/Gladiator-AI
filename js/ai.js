var food = [];
var foodHealth = 10;

function addFood(amount){
  for(var i = 0; i < amount; i++){
    var food = new createjs.Shape();
    food.graphics.beginFill(randomColor()).drawCircle(0,0, arenaSize/40);
  }
}
