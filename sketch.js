
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobobj1, bobobj2, bobobj3, bobobj4, bobobj5;
var roof1,rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobobj1 = new Bob(160, 500, 50);
	bobobj2 = new Bob(270, 500, 50);
	bobobj3 = new Bob(380, 500, 50);
	bobobj4 = new Bob(490, 500, 50);
	bobobj5 = new Bob(600, 500, 50);

	roof1 = new roof(400,200,700,30);

	rope1 = new Rope(roof1.body, bobobj1.body, -240, 0)
	rope2 = new Rope(roof1.body, bobobj2.body, -130,0)
	rope3 = new Rope(roof1.body, bobobj3.body,-20,0)
	rope4 = new Rope(roof1.body, bobobj4.body,90,0)
	rope5 = new Rope(roof1.body, bobobj5.body,200,0)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightYellow");
  Engine.update(engine);


  roof1.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  bobobj1.display();
  bobobj2.display();
  bobobj3.display();
  bobobj4.display();
  bobobj5.display();
  
  drawSprites();
 
}

function keyPressed (){
	if (keyCode=== LEFT_ARROW){
	Body.applyForce(bobobj1.body, bobobj1.body.position, {x:-150 , y: -150} )
	
	}
	
	
	if (keyCode === RIGHT_ARROW){
		Body.applyForce(bobobj5.body,bobobj5.body.position, {x:150 , y: -150} )
	}
	}
	
	



