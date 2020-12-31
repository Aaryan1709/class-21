function setup() {
    createCanvas(800,400);
    fixedRect = createSprite(200,200,80,100);
    fixedRect.shapeColor = "red";
    fixedRect.debug = true
  
    movingRect = createSprite(300,300,80,100);
    movingRect.shapeColor = "red";
    movingRect.debug = true
  }
  
  function draw() {
    background(0,10,10); 
    movingRect.x = mouseX;
    movingRect.y = mouseY;

    //call function
    //isTouching(movingRect,fixedRect);
  if(isTouching(movingRect,fixedRect)){
    movingRect.scale = 0.5;
    fixedRect.scale = 0.5;
  }
  else{
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
    drawSprites();
  }
