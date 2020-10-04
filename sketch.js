const Engine = Matter.Engine,
World = Matter.World,
Bodies = Matter.Bodies;

var engine,world;

var object, ball;

function setup() {
  var canvas = createCanvas(800,400);

  engine=Engine.create();
  world=engine.world;

  var options = {
   isStatic:true
  }
var ball_options={
  restitution:1.0
}

  object = Bodies.rectangle(400,350,800,20,options);
  World.add(world,object);
  ball= Bodies.circle(100, 200, 20, ball_options);
  World.add(world, ball);
  console.log(object);
  
}

function draw() {
  background(255,255,255);
  Engine.update(engine); 
  
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y,20,20);
  rectMode(CENTER);
  rect(object.position.x,object.position.y,800,20);

}