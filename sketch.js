var cat,
    catEnd,
    catRunning;

var mouse,
    mouseTeasing,
    mouseEnd;

var garden;

function preload() {
 
    mouseTeasing.loadImage("mouse3.png");

    mouse.loadImage("mouse1.png");

    garden.loadImage("garden.png");

    //load the images here
}

function setup(){
    createCanvas(1000,800);

   cat = createSprite();

   mouse = createSprite();

    //create tom and jerry sprites here

}

function draw() {
    
    background = "garden";
    //Write condition here to evalute if tom and jerry collide
    
        if(cat.x - mouse.x < (cat.width - mouse.width)/2){

            cat.addanimation("catEnd" ,catImg3);

            cat.changeAnimation("catEnd");



        }


    drawSprites();
}


function keyPressed(){
        if(keyCode === LEFT_ARROW){


            cat.velocityX = -5;

            cat.addanimation("catRunning" , catImg2);

            cat.changeAnimation("catRunning");

            mouse.addanimation("mouseTeasing", mouse3);

            mouse.changeAnimation("mouseTeasing");

        }
  //For moving and changing animation write code here


}
