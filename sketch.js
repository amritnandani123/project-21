var deformation1,deformation2,deformation3,deformation4;

var bullet1,bullet2,bullet3,bullet4 ;
var wall1, wall2, wall3, wall4;
var speed1, speed2, speed3,speed4, weight ;
var box1,box2,box3,box4;
var thickness1, thickness2, thickness3, thickness4;
function setup() {
  createCanvas(850,650);

  thickness1=random(22,83);
  thickness2=random(22,83);
  thickness3=random(22,83);
  thickness4=random(22,83);

box1=createSprite(800,75,1600,150);
box2=createSprite(800,235,1600,150);
box3=createSprite(800,395,1600,150);
box4=createSprite(800,555,1600,150);

bullet1=createSprite(100, 75, 30, 30);
bullet2=createSprite(100, 235, 30, 30);
bullet3=createSprite(100, 395, 30, 30);
bullet4=createSprite(100, 555, 30, 30);


  wall1=createSprite(720,75,thickness1,130);
  wall2=createSprite(720,235,thickness2,130);
  wall3=createSprite(720,395,thickness3,130);
  wall4=createSprite(720,555,thickness4,130);

  speed1=random(55,90);
  speed2=random(55,90);
  speed3=random(55,90);
  speed4=random(55,90);
  
  weight=random(400,1500);
  box1.shapeColor="black";
  box2.shapeColor="black";
  box3.shapeColor="black";
  box4.shapeColor="black";

  bullet1.shapeColor="white";
  bullet2.shapeColor="white";
  bullet3.shapeColor="white";
  bullet4.shapeColor="white";

  bullet1.velocityX = speed1;
  bullet2.velocityX = speed2;
  bullet3.velocityX = speed3;
  bullet4.velocityX = speed4;  

}

function draw() {



  background(225,225,225);  

//damage of wall1
if(wall1.x-bullet1.x <(bullet1.width+wall1.width/2)) {
  bullet1.velocityX=0;
  deformation1=0.5*weight*speed1*speed1/(thickness1*thickness1*thickness1);


  if(deformation1>10) {
    wall1.shapeColor=color(225,0,0);
  }

  if(deformation1<10) {
    wall1.shapeColor=color(0,225,0);
  }


}

//damage of wall2
if(wall2.x-bullet2.x <(bullet2.width+wall2.width/2)) {
  bullet2.velocityX=0;
  deformation2=0.5*weight*speed2*speed2/(thickness2*thickness2*thickness2);
  

  if(deformation2>10) {
    wall2.shapeColor=color(225,0,0);
  }

  

  if(deformation2<10) {
    wall2.shapeColor=color(0,225,0);
  }


}

//damage of wall 3
if(wall3.x-bullet3.x <(bullet3.width+wall3.width/2)) {
  bullet3.velocityX=0;
  deformation3=0.5*weight*speed3*speed3/(thickness3*thickness3*thickness3);

  if(deformation3>10) {
    wall3.shapeColor=color(225,0,0);
  }

  

  if(deformation3<10) {
    wall3.shapeColor=color(0,225,0);
  }

  //damage of wall4
  if(wall4.x-bullet4.x <(bullet4.width+wall4.width/2)) {
    bullet4.velocityX=0;
    deformation4=0.5*weight*speed4*speed4/(thickness4*thickness4*thickness4);    
    if(deformation4>10) {
      wall4.shapeColor=color(225,0,0);
    }
  
    if(deformation4<10) {
      wall4.shapeColor=color(0,225,0);
    }
  
  
  }
  

}

  drawSprites();




}