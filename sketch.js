
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roof;
var ropeObject;

function preload()
{
	
}

function setup() {
	var canvas = createCanvas(1350,650);
	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	//Bobs
	bobObject1 = new Bob(675,500);
	bobObject2 = new Bob(775,500);
	bobObject3 = new Bob(875,500);
	bobObject4 = new Bob(575,500);
	bobObject5 = new Bob(475,500);

	//Roof
	roofObject = new Roof(675,75,500,50);

	// Rope
	ropeObject01 = new Rope(bobObject1, {x:675, y:75});
	ropeObject02 = new Rope()


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  Engine.update(engine);


  //Display Bobs
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  //Display roof
  roofObject.display();

  // Display Rope
  ropeObject.display();
  
  drawSprites();
 
}



