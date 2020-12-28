const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint
var engine, world;




function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    roof = new Roof (600,200,200,20);

   
    bob1=new Bob (335,550,40);
   bob2=new Bob (365,550,40);
    bob3=new Bob (395,550,40);
    bob4=new Bob (425,550,40);
    bob5=new Bob (455,550,40);


    rope= new Rope (bob.body,bob.body)
}

function draw(){
    background(255);
    Engine.update(engine);
 
    roof.display();
    rope.display();
}
