var Ground;
var Stone;
var hammer;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200,100);


	engine = Engine.create();
    Stone = new Stone (700,320,70,70)
    Ground = new Ground (600,height,1200,20)
    Hammer = new Hammer(width,height,200,25)
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background(0);
  Ground.display();
  Stone.display();
  Hammer.display();
  drawSprites();
 
}