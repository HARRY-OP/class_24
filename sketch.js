const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box3,box4,box5,ground1,pig1,pig2,log1,log2,log3,log4;
var angryB1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,50+20);
    box2 = new Box(920,320,70,100-30);
    box3 = new Box(700,240,70,100-30);
    box4 = new Box(920,240,70,100-30);
    box5 = new Box(810,160,70,100-30);

    ground1 = new ground(600,height,1200,20);
   
    pig1 = new pig(810,360-10);
    pig2 = new pig(810,240-10);
    angryB1 = new red(40,240-10);

    log1 = new log(810,260,300,PI/2);
    log2 = new log(810,190,300,PI/2);
    log3 = new log(770,120,150,PI/7);
    log4 = new log(850,120,150,-PI/7);


}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    
    angryB1.display();
    ground1.display();
}