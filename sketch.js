var fixedRect, movingRect,gameob1,gameob2,gameob3,gameob4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameob1 = createSprite(200, 100, 60, 80);
  gameob1.shapeColor = "blue";
  gameob1.debug = true;
  gameob2 = createSprite(400, 100, 60, 80);
  gameob2.shapeColor = "yellow";
  gameob2.debug = true;
  gameob3 = createSprite(600, 100, 60, 80);
  gameob3.shapeColor = "pink";
  gameob3.debug = true;
  gameob4 = createSprite(800, 100, 60, 80);
  gameob4.shapeColor = "red";
  gameob4.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

if (isTouching(movingRect,gameob3)) {
  movingRect.shapeColor = "blue";
  gameob3.shapeColor = "#FF0000";
}
 else {movingRect.shapeColor = "#32CD32";
 gameob3.shapeColor = "#FFBF00";
}

  drawSprites();

}


