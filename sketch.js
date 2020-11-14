const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperObject;
var dustBin,dustBin1,dustBin2;
function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperObject = new paper(200,470,20);
	dustBin = new dustbin(500,650,220,20);
	dustBin1 = new dustbin(380,480,20,180);
	dustBin2 = new dustbin(600,480,20,180);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paperObject.display();
  dustBin.display();
  dustBin1.display();
  dustBin2.display();
  drawSprites();
}

function keyPressed(){
	 if (keyCode === UP_ARROW) { 
	 Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:5,y:-85});
	 } 
	}



