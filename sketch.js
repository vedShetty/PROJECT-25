const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var engine, world, ground;
var dustbin1, dustbin2, dustbin3;
var paper;

function setup() {
	createCanvas(1200, 400);

	engine = Engine.create();
	world = engine.world;

  ground = new Ground(600,height-20,1200,15);
	
  dustbin2 = new Dustbin(800,height-80,100,100);
  
  paper = new Paper(100,300);

}


function draw() {
  background(255);
  Engine.update(engine);
  ground.display();
  dustbin2.display();
  paper.display();

  //keyPressed();

  drawSprites();
 
}

function keyPressed(){
  if (keyCode === UP_ARROW){

    Matter.Body.applyForce(paper.body,paper.body.position,{x:114,y:-115});
  }

}

