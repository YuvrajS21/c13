var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function createApples(){

  apple = createSprite(random(50,350),40,10,10);
  appleimg=loadImage("apple.png")
  apple.velocityX=40
}

  function createLeaves(){
    leaves=createSprite(random(50,350),40,10,10)
    leaves.addImage("BABA",leavesImage)
    leaves.velocityY=3
  leaves.scale=0.2
  }



function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
}

var select_sprites=math.round(random(1,2));
if (frameCount % 80 == 0) {
  if (select_sprites==1) {
    createApples
  }
  else{
    createLeaves
  }
}


