const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var Box;

function setup()
 {
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


//level two
block8 = new Box(330,235,30,40);
block9 = new Box(360,235,30,40);
block10 = new Box(390,235,30,40);
block11 = new Box(420,235,30,40);
block12 = new Box(450,235,30,40);

block13 = new Box(360,195,30,40);
block14 = new Box(390,195,30,40);}


 function draw()
 {
  block8.display();  
  block9.display();
  block10.display();
  block11.display();
  block12.display();



 }