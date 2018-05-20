var foods = [];
var foodHealth = 10;

function addFood(amount){
  for(var i = 0; i < amount; i++){
    var food = new createjs.Shape();
    var point = pointInArena(arenaSize/5);
    food.graphics.beginFill(randomColor()).drawCircle(point.x,point.y, arenaSize/40);
    stage.addChild(food);
    foods.push(food);
  }
}
