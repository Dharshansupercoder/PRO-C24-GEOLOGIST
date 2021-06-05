const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine, world;

var ground;

var hammer;
var stone;
var iron;

function setup() {
  canvas = createCanvas(windowWidth,windowHeight);

  engine = Engine.create();
  world = engine.world;


  ground = new Ground(width, height,100000,20)


  iron = new Iron(960, 320, 70, 70)
  
  stone = new Stone(700, 240, 70, 70);

  rubber = new Rubber(920, 320, 70, 70);

  hammer = new Hammer(10,200);
 

}

function draw() {
  background("lightblue");

  Engine.update(engine);

  ground.display();
   
  hammer.display();
  
  rubber.display();
  
  iron.display(); 
  
  stone.display();
  



}