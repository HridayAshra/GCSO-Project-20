var car,wall,speed,weight,deform;

function setup() {
  createCanvas(1400,400);
  speed = random(55,90);
  weight = random(400,1500);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1300,200,60,height/2);
  car.velocityX=speed;
  wall.shapeColor="black";
}

function draw() {
  background(255,255,255);
  if(car.x+0.5*(car.width)>wall.x-1*(wall.width)){
    car.velocityX=0;
    deform=(0.5*weight*speed*speed)/22500;
  } 

  

if(deform<=100){
  car.shapeColor="green";
}
if(deform>100 && deform<180){
  car.shapeColor="yellow";
}
if(deform>=180){
  car.shapeColor="red";
}
  drawSprites();
}