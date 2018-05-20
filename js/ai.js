var foods = [];
var foodHealth = 10;

function addFood(amount){
  for(var i = 0; i < amount; i++){
    var food = new createjs.Shape();
    var point = pointInArena(arenaSize/5);
    food.graphics.beginFill(randomColor()).drawCircle(0,0, arenaSize/40);
    food.x = point.x;
    food.y = point.y;
    stage.addChild(food);
    foods.push(food);
  }
}

function goToClosestFood(){
  players.forEach(function(player){
    var closestFood = foods[0];
    var closestDist = arenaSize * 2;
    foods.forEach(function(food){
      var dist = distance(player.shape.x,player.shape.y,food.x,food.y);
      if(dist < closestDist){
        closestFood = food;
        closestDist = dist;
      }
    });

    var input = [];

    input.push(player.shape.x);
    input.push(player.shape.y);
    input.push(closestFood.x);
    input.push(closestFood.y);

    var output = player.network.activate(input);

    //output = toRadians(angle(player.shape.x,player.shape.y,closestFood.x,closestFood.y));

    var velX = moveSpeed * Math.cos(toRadians((output*720)-360));
    var velY = moveSpeed * Math.sin(toRadians((output*720)-360));
    player.shape.x += velX;
    player.shape.y += velY;

    var learningRate = .8;

    var target = ((angle(player.shape.x,player.shape.y,closestFood.x,closestFood.y))+360)/720;
    player.network.propagate(learningRate, [target]);

    if(closestDist < arenaSize/20){
      stage.removeChild(closestFood);
      var index = foods.indexOf(closestFood);
      foods.splice(index, 1);
    }

    debugger;
  });
}
