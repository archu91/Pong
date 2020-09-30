var posX = Math.floor(Math.random()*300);
var posY = 200;
var ballX = 2, ballY = 2;
var randomSpeed = [-1,1];
var Pscore = 0, Cscore = 0;

function setup() {
  
  createCanvas(400, 400);
  
}

function draw() {
  
  background("lightblue");
  
  posX += ballX;
  posY += ballY;
  
  fill("blue");
  rect(0,posY-50,10,100);
  rect(390,mouseY,10,100);
  
  fill("red");
  circle(posX,posY,10);
  
  if(posX > 390 || posX < 10) {
    ballX *= -1;
  }
  
  if(posY > 390 || posY < 10) {
    ballY *= -1;
  }
  
  if(posY>mouseY && posY<mouseY+100 && posX+10 >= 390){
    ballX *= -1;
    ballY *= random(randomSpeed);
  }
  
  if(posX > 390){
    Cscore++;
  }
  
  if(posX-10 < 10 ){
    ballX *= -1;
    ballY *= random(randomSpeed);
  }
  
  if(posX < 10){
    Pscore++;
  }
  
  fill("green");
  textSize(15);
  textStyle(BOLD);
  text("Pong Game", 170, 20);
  
  textSize(11);
  fill("black");
  text("Your Score: "+Pscore, 310, 40);
  text("Computer`s Score: "+Cscore, 30, 40);
  
}