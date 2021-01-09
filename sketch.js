
 const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies = Matter.Bodies;
 const Body = Matter.Body;
 const Constraint = Matter.Constraint;
 
 
 var Bob, Bob2,Bob3,Bob4,Bob5

 var rope1,rope2,rope3,rope4,rope5
 
 var roof;
 
 
 function preload()
 {
   
 }
 
 function setup() {
   createCanvas(800, 700);
 
 
   engine = Engine.create();
   world = engine.world;
 
   //Create the Bodies Here.
 
   Bob= new bob(300,600,30)
   Bob2= new bob(360,600,30)
   Bob3= new bob(420,600,30)
   Bob4= new bob(480,600,30)
   Bob5= new bob(540,600,30)
   roof=new Roof(400,200,500,50)
   rope1=new Rope(Bob.body,roof.body,-100*1.5,0)
   rope2=new Rope(Bob2.body,roof.body,-100*1,0)
   rope3=new Rope(Bob3.body,roof.body,-100*0.2,0)
   rope4=new Rope(Bob4.body,roof.body,100*0.5,0)
   rope5=new Rope(Bob5.body,roof.body,100*1,0)
 
 
 
   Engine.run(engine);
   
 }
 
 function draw() {
   rectMode(CENTER);
   background(100);
   
 
   Bob.display();
   Bob2.display();
   Bob3.display();
   Bob4.display();
   Bob5.display()
   
   
   roof.display()
 
   rope1.display()
   rope2.display()
   rope3.display()
   rope4.display()
   rope5.display()
 
  // keyPressed();
 
   drawSprites();
  
 }
 
 
 
 function keyPressed () {
 
   if(keyCode===UP_ARROW){
   Matter.Body.applyForce(Bob.body,Bob.body.position,{x:-730,y:0});
   }
 }
 
 
 

