var bg1;
var ninja, sensei, boxer, wizard, sensei2, tentacular, djimmi, toad, boss;
var ninjaImg, senseiImg, boxerImg, wizardImg, sensei2Img, tentacularImg,
djimmiImg, toadImg, bossImg;
var edges;

function preload() {
  bg1 = loadImage("assets/Level1_DojoBG.webp");
  ninjaImg = loadImage("assets/character.png");
  senseiImg = loadImage("assets/Sensei.png");
  boxerImg = loadImage("assets/Boxer.png");
  wizardImg = loadImage("assets/wizard.PNG");
  sensei2Img = loadImage("assets/sensei_boss 2.png");
  tentacularImg = loadImage("assets/tentacular_boss2.png");
  djimmiImg = loadImage("assets/Djimmi.png");
  toadImg = loadImage("assets/toad.png");
  bossImg = loadImage("assets/Boss.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  ninja = createSprite(1190,540, 20, 20);
  ninja.addImage("ninja",ninjaImg);
 //ninja.velocityY=-2;
 ninja.debug= true;
 ninja.setCollider("circle",0,0,60)


  sensei = createSprite(170, 520, 20, 20);
  sensei.addImage("sensei",senseiImg);
  sensei.scale = 0.18

  //edges = createEdgeSprites();
}

function draw() {
  background(bg1);

  if(keyDown("LEFT_ARROW")){
    ninja.x=ninja.x -8;
  }
  
  if(keyDown("RIGHT_ARROW")){
    ninja.x = ninja.x +8;
  }
  //ninja.bounceOff(edges);
  drawSprites();
  textSize(30);
//  text(mouseX + "," + mouseY, mouseX, mouseY);
}
