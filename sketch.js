var door , doori;
var ghost , ghosti;
var climber , climberi;
var gamestate;
var tower, toweri;
var PLAY = 1;
var END; 
var doorgroup;
var climbergroup;
var invisibleb,inveG;
var score = 0;
var sound;

function preload(){
  doori = loadImage("door.png");
  ghosti = loadImage("ghost-standing.png");
  climberi = loadImage("climber.png");
  toweri = loadImage("tower.png");
  sound = loadSound("spooky.wav");
}

function setup(){
  createCanvas(600,600);
  
  tower = createSprite(300,300);
  tower.addImage("tImage",toweri);
  tower.scale = 1; 
 
  
  ghost = createSprite(300,300,10,10);
  ghost.addImage("gimage",ghosti);
   ghost.scale=0.4  ; 
  
  gamestate = PLAY; 
  
  climbergroup = new Group();
  doorgroup = new Group();
  inveG = new Group();
}
 function draw(){
   background("black");
   
   if (gamestate === PLAY){
     tower.velocityY = 2;
     if(tower.y>600){
           tower.y=tower.width/2;
     }
     sound.loop();
     score=score+Math.round(getFrameRate()/60);  
       
     if(keyDown("space")){
       ghost.velocityY = -6;
    
     }
     ghost.velocityY = ghost.velocityY+0.3;
     
     if (keyDown("right_arrow")){
       ghost.x= ghost.x+20;
     }
     if(keyDown("left_arrow")){
       ghost.x=ghost.x-20;
     }  
     
     escape();
     
       if (climbergroup.isTouching(ghost)){
         ghost.velocityY=0;
         
       }
     if(inveG.isTouching(ghost)||ghost.y>600){
       ghost.destroy();
       gamestate=END;
     }
      drawSprites();
         strokeWeight(4);
  stroke("white");
  fill("orange");
  textSize(20);
     text("SCORE: "+score,400,50) 
  
   }
   
    if(gamestate === END){
      
  strokeWeight(4);
  stroke("white");
  fill("orange");
  textSize(20);
     text("GAME OVER", 250,300);     
      
   }
   
  
 } 
function escape(){
  if (frameCount%90===0){
    door = createSprite(Math.round(random(100,500)),10,10,10);
    door.addImage("dooriii",doori) ;
    door.velocityY=3;
    climber= createSprite(door.x,60,10,10);
    climber.addImage("cllioi",climberi);
    climber.velocityY=3;
    climber.lifetime=600;
    door.ifettime=600;
    invisibleb = createSprite(door.x,65);
    invisibleb.width = climber.width;
    invisibleb.height =2;
    invisibleb.velocityY=3;
    invisibleb.debug=true;
    invisibleb.lifetime=600;
    inveG.add(invisibleb);
    doorgroup.add(door);
    climbergroup.add(climber);
    door.depth=ghost.depth;
     ghost.depth=ghost.depth+1;
    
  }
    
}
























