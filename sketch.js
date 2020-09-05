const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var backgroundImg

var gameState = "onSling";
var bg = "sprites/bg1.png";
var score = 0;

function preload() {
  getBackgroundImg();
}


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

ground1 = new ground(400,375,800,50)
stand1 = new ground(300,300,200,20)
stand2 = new ground(600,200,200,20)
box1 = new box(240,275,40,40);
box2 = new box(260,275,40,40);
box3 = new box(290,275,40,40);
box4 = new box(310,275,40,40);
box5 = new box(260,250,40,40);
box6 = new box(290,250,40,40);
box7 = new box(330,250,40,40);
box8 = new box(290,230,40,40);
box9 = new box(320,230,40,40);
box10 = new box(330,210,40,40);
box2b = new box(530,190,40,40);
box1b = new box(500,190,40,40);
box3b = new box(560,190,40,40);
box4b = new box(580,190,40,40);
box5b = new box(520,165,40,40);
box6b = new box(550,165,40,40);
box7b = new box(580,165,40,40);
box8b = new box(530,140,40,40);
box9b = new box(550,140,40,40);
box10b = new box(550,110,40,40);
//polygon = Bodies.circle(50,300,20)
//World.add(world,polygon)
ammo = new box1c (70,300,20,20)

slingshot = new SlingShot(ammo.body,{x:100,y:200})


  Engine.run(engine)  
}

function draw() {
  
  
  if(backgroundImg)
  background(backgroundImg);

  noStroke();
  textSize(35)
  fill("white")
  text("Score  " + score, width-300, 50)
  //background(255,255,255);  

  ground1.display();
  stand1.display();
  stand2.display();
  box1.display();
  box1.score();
  box2.display();
  box2.score();
  box3.display();
  box3.score();
  box4.display();
  box4.score();
  box5.display();
  box5.score();
  box6.display();
  box6.score();
  box7.display();
  box7.score();
  
  box8.display();
  box8.score();
  box9.display();
  box9.score();
  box10.display();
  box10.score();
  box1b.display();
  box1b.score();
  box2b.display();
  box2b.score();
  box3b.display();
  box3b.score();
  box4b.display();
  box4b.score();
  box5b.display();
  box5b.score();
  box6b.display();
  box6b.score();
  box7b.display();
  box7b.score();
  box8b.display();
  box8b.score();
  box9b.display();
  box9b.score();
  box10b.display();
  box10b.score();
  slingshot.display();
  ammo.display();

 
 
 
 Engine.update(engine); 
}





function mouseDragged(){
  Matter.Body.setPosition(ammo.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed()
{
    if (keyCode===32){
        slingshot.attach(ammo.body);
    }
}

async function getBackgroundImg(){
  var response = await fetch("https://worldtimeapi.org/api/timezone/America/New_York");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=0600 && hour<=1900){
      bg = "sprites/bg1.png";
  }
  else{
      bg = "sprites/bg2.jpg";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}