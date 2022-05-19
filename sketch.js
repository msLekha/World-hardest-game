var ball = createSprite(12,10,20,20);
ball.shapeColor="black";
var ball1 = createSprite(51,292,100,20);
var ball2 = createSprite(195,142,100,20);
var ball3 = createSprite(348,288,100,20);
var ball4 = createSprite(196,350,20,100);
var ball5 = createSprite(89,208,100,20);
var ball6 = createSprite(302,205,100,20);
var ball7 = createSprite(348,80,100,20);
var ball8 = createSprite(48,85,100,20);
var ball9 = createSprite(198,27,20,100);

var cup= createSprite(405,390,50,30);
cup.shapeColor="black"

var car1 = createSprite(51,25,10,10);
car1.shapeColor="red";
var car2 = createSprite(345,25,10,10);
car2.shapeColor="red";
var car3 = createSprite(52,142,10,10);
car3.shapeColor="red";
var car4 = createSprite(192,182,10,10);
car4.shapeColor="red";
var car5 = createSprite(342,136,10,10);
car5.shapeColor="red";
var car6 = createSprite(284,396,10,10);
car6.shapeColor="red";
var car7 = createSprite(284,328,10,10);
car7.shapeColor="red";
var car8 = createSprite(328,362,10,10);
car8.shapeColor="red";
var car9 = createSprite(196,271,10,10);
car9.shapeColor="red";
var car10 = createSprite(38,352,10,10);
car10.shapeColor="red";
var car11 = createSprite(163,81,10,10);
car11.shapeColor="red";
var car12 = createSprite(337,267,10,10);
car12.shapeColor="red";
var car13 = createSprite(33,267,10,10);
car13.shapeColor="red";
var car14 = createSprite(150,355,10,10);
car14.shapeColor = "red";
function draw() 
{
background("yellow");

if(keyDown(UP_ARROW)) {
    ball.velocityX = 0;
    ball.velocityY = -3;
  }
  if(keyDown(DOWN_ARROW)) {
    ball.velocityX = 0;
    ball.velocityY = 3;
  }
  if(keyDown(LEFT_ARROW)) {
    ball.velocityX = -3;
    ball.velocityY = 0;
  }
  if(keyDown(RIGHT_ARROW)) {
    ball.velocityX = 3;
    ball.velocityY = 0;
  }
  

if (ball.isTouching(car1)||ball.isTouching(car2)||
    ball.isTouching(car3)||ball.isTouching(car4)||
    ball.isTouching(car5)||ball.isTouching(car6)||
    ball.isTouching(car7)||ball.isTouching(car8)||
    ball.isTouching(car9)||ball.isTouching(car10)||
    ball.isTouching(car11)||ball.isTouching(car12)||
    ball.isTouching(car13)||ball.isTouching(car14))
    {
      ball.x = 0;
      ball.y = 0; }
    
if (ball.isTouching(ball1)||ball.isTouching(ball2)||ball.isTouching(ball3)||ball.isTouching(ball4)||
    ball.isTouching(ball5)||ball.isTouching(ball6)||ball.isTouching(ball7)||ball.isTouching(ball8)||ball.isTouching(ball9))
    {
      ball.x = 0;
      ball.y = 0; }
   

createEdgeSprites();
ball.bounceOff(edges);
ball.bounceOff(ball1);
ball.bounceOff(ball2);
ball.bounceOff(ball3);
ball.bounceOff(ball4);
ball.bounceOff(ball5);
ball.bounceOff(ball6);
ball.bounceOff(ball7);
ball.bounceOff(ball8);
ball.bounceOff(ball9);
ball.bounceOff(car1);
ball.bounceOff(car2);

if( ball.isTouching(cup)) {
    ball.velocityX=0;
    ball.velocityY=0;
    stroke("red");
    strokeWeight(20);
    textSize(25);
    text("YOU WiN",50,180);
}

drawSprites();
}















