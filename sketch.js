const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var box;
var ball;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    box = new Box(400,500,100,100);
    ball = new Ball(200,30);
    ball1 = new Ball1(500,30);
    ellipse(0,0,this.r, this.r);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    box.display();
    ball.display();
    ball1.display();
}