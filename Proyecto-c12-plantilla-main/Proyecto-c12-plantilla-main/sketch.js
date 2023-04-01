var path, boy, leftBoundary, rightBoundary;
var pathImage;
var i;
var boy_running;

function preload() {
  pathImage = loadImage("path.png");
  boy_running = loadAnimation("jake1.png", "jake2.png", "jake3.png", "jake4.png", "jake5.png");
}

function setup() {
  createCanvas(400, 400);
  path = createSprite(200,200);
  path.addImage("path",pathImage);
  path.velocityY = -3;
  path.scale = 1.0;

  boy = createSprite(120, 200);
  boy.addAnimation("running", boy_running);
  boy.scale = 0.8;

  leftBoundary = createSprite(300, 100, 100, 800);
  leftBoundary.visible = false;

  //crear right Boundary (límite derecho)
  rightBoundary = createSprite(410, 0, 100, 800);
  rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;

  boy.x=World.mouseX
  edges = createEdgeSprites();
  boy.collide(edges[3]);
  
  // código para reiniciar el fondo
  if (path.y > 400) {
    path.y = height / 2;
  }

  drawSprites();
}
