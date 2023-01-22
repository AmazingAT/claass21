var ball;
var ball_options 
var groundObj


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
  


	


	Engine = Engine.create();
	World = Engine.world;

	//Create the Bodies Here.
   groundObj=new Ground(width/2,670,width,20)
   leftSide=new Ground(1100,600,20,120)
   rightSide=new Ground(1300,600,20,120)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  groundObj.display();
  leftSide.display();
  rightSide.display();
	
	
 
}

function keyPressed(){

	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
	}
}



