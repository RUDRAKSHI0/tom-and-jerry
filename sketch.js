var mouse,mouse_stat,mouse_teasing;
var cat,cat_running,cat_stat,cat_stand;
//var catImage2;
var bg,bgImage;
function preload() {
    //load the images here
    bgImage=loadImage ("garden.png");
    mouse_stat=loadAnimation("jerryOne.png");
    mouse_teasing=loadAnimation("jerryTwo.png")
    cat_running=loadAnimation("tomTwo.png","tomThree.png");
    cat_stat=loadAnimation("tomOne.png");
    cat_stand=loadAnimation("tomFour.png");
    //catImage2=loadAnimation("tomTwo.png","tomThree.png");

}
function setup(){
    createCanvas(1000,500);
    //create tom and jerry sprites here
    mouse = createSprite(180,450,10,10);
    mouse.addAnimation("stationary1",mouse_stat);
    mouse.addAnimation("teasingcat",mouse_teasing);
    mouse.scale=0.1;
    cat= createSprite(900,450,10,10);
    cat.addAnimation("stationary", cat_stat);
    cat.addAnimation("running",cat_running);
    cat.addAnimation("standing",cat_stand);
    cat.scale=0.1;
    
}
function draw() {

    //background(255);
    background(bgImage);
    //Write condition here to evalute if tom and jerry collide
    keyPressed();
   // text(cat.X + ',' + cat.Y,10,45);
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyCode===LEFT_ARROW){
    cat.velocityX=-4;
    cat.changeAnimation("running", cat_running);
  }
  if(cat.x-mouse.x<100){
    mouse.changeAnimation("teasingcat",mouse_teasing);
    cat.changeAnimation("standing",cat_stand);
    cat.velocityX=0;
  }

 }

