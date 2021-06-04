var platform1,platform2
function preload()
{}

function setup() {
  createCanvas(7346, 668);
  var countDistanceX=0;
var gap ;
  for(var i=0;i<6;i++){
    platform1=new Platform(countDistanceX);
    gap=random([0,0,0,0,80]);
    countDistanceX=countDistanceX+platform1.rw+gap;
  
  
  
    //platform1=new Platform(100);
  }
  

 // platform2=new Platform(500);
}

function draw() {
  background('skyblue'); 
 drawSprites();
}

