function setup() {
  createCanvas(800,800);
  rect1 = createSprite(400,100,80,100);
  rect1.shapeColor = "red";
  rect1.debug = true

  rect2 = createSprite(400,700,80,100);
  rect2.shapeColor = "red";
  rect2.debug = true

  rect1.velocityY = 3;
  rect2.velocityY = -3;

  rect3 = createSprite(400,300,80,100);
  rect3.shapeColor = "red";
  rect3.debug = true

  rect4 = createSprite(100,300,80,100);
  rect4.shapeColor = "red";
  rect4.debug = true

  rect3.velocityX = -3;
  rect4.velocityX = 3;

}

function draw() {
  background(0,10,10); 
//calling function
bounceOff(rect2,rect1);
bounceOff(rect3,rect4);
  drawSprites();
}
