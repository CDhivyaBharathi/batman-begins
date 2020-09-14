const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine, world;
var canvas;
var bruce, thunder, droplets;
var drops = [];
var thunder;
var ground;
var light;
var thunderFrame;


function preload(){
    thunder1 = loadImage("thunder.png");
}

function setup(){
    canvas = createCanvas(400,700);
    engine = Engine.create();
  world = engine.world;
    
    bruce = new Uobj(200,500,100);
    ground = createSprite(200,700,400,20);
    ground.visible = false;
    
    
    


}

function draw(){
    background(0);
    bruce.display();

    bruce.collide = ground;
    if(frameCount%2===0){
      drops.push(new Particle(random(0,400), 3,3));
      
    }
    for (var j = 0; j < drops.length; j++) {
   
      drops[j].display();
    }

    rand = Math.round(random(1,4));
    if(frameCount%100===0){
        thunderFrame=frameCount;
        thunder = createSprite(random(10,385), random(15,40), 15, 15);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder1);
            break; 
            case 3: thunder.addImage(thunder1);
            break;
            case 4: thunder.addImage(thunder1);
            break;
            default: break;
        }
        thunder.scale = random(0.3,0.6)
    }

    if(thunderFrame + 10 ===frameCount && thunder){
        thunder.destroy();
    }

    


    
    Engine.update(engine);
     
    
    drawSprites();
}   

