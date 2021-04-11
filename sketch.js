var  canvas;
var bg;
var together;
var cat , catImg1 , catImg2, catImg4;
var mouse , mouseImg1, mouseImg2 , mouseImg4;

function preload(){
bg = loadImage ("garden.png");
catImg1= loadAnimation("cat1.png");
catImg2= loadAnimation("cat2.png", "cat3.png");
catImg4= loadAnimation("cat4.png");
mouseImg1= loadAnimation("mouse1.png");
mouseImg2= loadAnimation("mouse2.png","mouse3.png");
mouseImg4= loadAnimation("mouse4.png");
}
function setup (){
canvas = createCanvas(1000,800);
cat = createSprite(870,600);
cat.addAnimation("catSleeping",catImg1);
cat.scale=0.2;
mouse = createSprite(200,600);
mouse.addAnimation("mouseStanding",mouseImg1);
mouse.scale=0.15;
}
function draw() {
background(bg);
if (cat.x-mouse.x <(cat.width-mouse.width)/2){
cat.velocityX=0;
cat.addAnimation("catLastImage", catImg4);
cat.x=300;
cat.scale=0.2;
cat.changeAnimation("catLastImage");
mouse.addAnimation("mouseLastImage", mouseImg4);
mouse.scale=0.15;
mouse.changeAnimation("mouseLastImage");
}
drawSprites();
}
function keyPressed(){
if(keyCode===LEFT_ARROW){
cat.velocityX=-5;
cat.addAnimation("catRunning",catImg2);
cat.changeAnimation("catRunning");
mouse.addAnimation("mouseTeasing",mouseImg2);
mouse.frameDelay=25;
mouse.changeAnimation("mouseTeasing");

}
}