var car, wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  car=createSprite(50,200,100,100);
  wall=createSprite(700,200,80,height/2); 
 
  car.velocityX= 10;

  speed=random(25,31);
  wieght=random(400,1500);

}
function draw() {
  background("black");
  

  if(wall.x-car.x<(car.width+wall.width/2))
  {
    car.velocityX=0;
    var deformation=0.5*wieght*speed*speed/22509;
  if(deformation>180)
  {
    car.shapeColor=("red") 
    wall.shapecolor=("white")
  }
  if(deformation<180 && deformation>100){
    car.shapeColor=("yellow") 
    wall.shapecolor=("white")
  }
  if(deformation<100){
    car.shapeColor=("green")
    wall.shapecolor=("white")
  }
}
  drawSprites();
}
