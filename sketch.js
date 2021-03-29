var fixedRectangle , movingRectangle,Rectangle1,gameObject1,gameObject2,gameObject3;
function setup() {
  createCanvas(1980,1000);
  fixedRectangle=createSprite(200, 200, 50, 80);
  movingRectangle=createSprite(400, 200, 80, 30);
  
  fixedRectangle.shapeColor= "green";
  movingRectangle.shapeColor= "green";

  Rectangle1=createSprite(400, 100, 50, 80);
  Rectangle2=createSprite(400, 500, 80, 30);

  Rectangle1.shapeColor= "purple";
  Rectangle2.shapeColor= "lime";

  Rectangle1.velocityY= 5;
  Rectangle1.velocityX= 3;

  Rectangle2.velocityY= -5;
  Rectangle2.velocityX= 3;

  gameObject1=createSprite(100,100,50,50);
  gameObject2=createSprite(200,100,50,50);
  gameObject3=createSprite(300,100,50,50);

  gameObject1.shapeColor="teal";
  gameObject2.shapeColor="teal";
  gameObject3.shapeColor="purple";
  
  gameObject3.velocityX=-3
}

function draw() {
  background(0,0,0);  
  movingRectangle.x= World.mouseX;
  movingRectangle.y= World.mouseY;
 


    bounceOff(gameObject1,gameObject3);
    if (isTouching(movingRectangle,gameObject1)){
    movingRectangle.shapeColor="red"  
    gameObject1.shapeColor="red"  
    }
    else
    {
      movingRectangle.shapeColor="green";  
      gameObject1.shapeColor="teal";  
    }

    if(isTouching(movingRectangle,gameObject2)){
      movingRectangle.shapeColor="red"  
      gameObject2.shapeColor="red"  
    }
    
    else
    {
      movingRectangle.shapeColor="green";  
      gameObject2.shapeColor="teal";  
    }

    drawSprites();
}

 














