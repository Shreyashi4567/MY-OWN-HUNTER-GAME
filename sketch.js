var tiger,tigerImage,tigerGroup;
var forest,forestImage;
var sunImage,sun,arrow,arrowImage;
var hunter,hunterImage;
var arrowGroup,score,gunS;
var PLAY=1;
var END=0;
var gameState=PLAY;

function preload()
{
tigerImage=loadImage("tiger1.png");
forestImage=loadImage("forest.jpg");
sunImage=loadImage("sun.png");
hunterImage=loadImage("hunter.png");
arrowImage=loadImage("arrow.png");
gunS=loadSound("gun.mp3");

}
function setup()
{
  createCanvas(600,500);
  forest=createSprite(200,200,20,20);
  forest.addImage(forestImage);
  forest.scale=4;
  forest.velocityX=-1;
    
  sun=createSprite(530,70,20,20);
  sun.addImage(sunImage);
  sun.scale=0.1;
  
  hunter=createSprite(100,400,20,20);
  hunter.addImage(hunterImage);
  hunter.scale=0.4;
  
  tigerGroup=createGroup();
  arrowGroup=createGroup();
  
  score=0;
}
function draw()
{ 
  background("MistyRose");
 
  //To create a moving forest.
  if(gameState===PLAY)
    {
        tigers();
  
  if(forest.x < 0)
    {
      forest.x=forest.width/2;
    }
  if(keyDown("up"))
    {
      hunter.y=hunter.y-3;
    }
  if(score===5)
    {
      gameState=END;
    }
  if(keyDown("down"))
    {
      hunter.y=hunter.y+3;
    }
  if(keyDown("space"))
    {      arrow=createSprite(200,20,20,20);
 arrow.addImage(arrowImage);
 arrow.x=200;
 arrow.scale=0.2;
 arrow.velocityX=15;
 arrow.y=hunter.y-60;
 arrowGroup.add(arrow);
 gunS.play();
    }
  }
   if (arrowGroup.isTouching(tigerGroup))
    {
      tigerGroup.destroyEach();
      tigerGroup.setLifetimeEach(-1);
      arrowGroup.destroyEach();
      score=score+1;
      
    } 
  if(gameState===END)
    {
      sun.destroy();
      tigerGroup.destroyEach();
      hunter.destroy();
      arrow.destroy();
      forest.destroy();
      stroke("green");
      fill("green");
      textSize(30);
      textFont("Brush Script MT");
      text("You have poached 5 tigers. Now,you are caught.",100,300);
    }
    drawSprites();
}
function tigers()
{
  if(frameCount%200===0)
    {      tiger=createSprite(700,50,20,20)
 tiger.y=Math.round(random(200,450))
// tiger.x=Math.round(random(700,400))
 tiger.addImage(tigerImage);
 tiger.scale=0.4;
 tiger.lifetime=500;
 tigerGroup.add(tiger);
// tiger.debug=true;
 tiger.velocityX=-10;
 tiger.setCollider("circle",0,0,150);
    }
 
}