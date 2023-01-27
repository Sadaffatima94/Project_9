var ball;
var ball2
function setup(){
 canvas=createCanvas(600,400) ;

ball=createSprite(200,200,30,30);

ball2=createSprite(300,250,40,40)



}

function draw(){
background('yellow');


if(keyIsDown(LEFT_ARROW)){
ball.x=ball.x-10;
}


if(keyIsDown(RIGHT_ARROW)){
  ball.x=ball.x+10;
  }


drawSprites();
}




