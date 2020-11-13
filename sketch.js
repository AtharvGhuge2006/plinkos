
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var plinkos=[]
var particles=[]
var divisions=[]
var ground,wall_left,wall_right,top_wall ;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    engine = Engine.create();
	world = engine.world;

ground=new Ground(400,695,800,10)
wall_left=new Ground(795,350,10,800)
wall_right=new Ground(5,350,10,800)
top_wall=new Ground(400,5,800,10)



	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  if(frameCount%60===0)
  {
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));  } 
     for (var j = 0; j < particles.length; j++) 
  { particles[j].display(); }

ground.display()
wall_right.display()
wall_left.display()
top_wall.display()
drawSprites();
}



