

var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score, ground
var survivalTime

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
  FoodGroup= new Group()
  obstacleGroup= new Group()
  
}



function setup() {
  createCanvas(690, 500);
  score=0
  survivalTime=0
  
  monkey=createSprite(80,315,20,20)
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x=ground.width/2;
  console.log(ground.x)
  
   
  
  
  

  }
function draw() {
  background("blue")
  
  if(keyDown("space")&&monkey.y >= 370){
    monkey.velocityY=-10
  }
  monkey.velocityY = monkey.velocityY + 0.3
  monkey.collide(ground)
  
  
  ground.velocityX = -7 
 ground.x = ground.width/2;
    
 if(World.frameCount%200===0){
    fruits()
 }
  
  if(World.frameCount%300===0){
    stones()
 }
  
  if(monkey.isTouching(FoodGroup)){
     FoodGroup.destroyEach()
    score=score+1
      }
  
 
 drawSprites()
  fill("white") 
  text("Score: "+ score, 600,50);
  
  fill("black")
  var survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime,450,50)
  
}

function fruits(){
  banana=createSprite(680,Math.round(random(170,230)),10,10)
  banana.addImage(bananaImage)
  banana.scale=0.1
  banana.velocityX=-5
  FoodGroup.add(banana)
}

function stones(){
  obstacle=createSprite(670,320,10,10)
  obstacle.addImage(obstaceImage)
  obstacle.velocityX=-5
  obstacle.scale=0.2
  obstacleGroup.add(obstacle)
}






