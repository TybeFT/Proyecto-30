const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
var score = 0;

function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  //Implemente un score para simular la cantidad de cubos que tiraste o en este caso "tocaste"
  //No es exacto pero tras muchas pruebas y errores esto fue lo que logré hacer
  //Tiene el error de que solo funciona con el segundo STAND y cuando le das a uno de los segundos stands ya funciona el otro pero es dificil 
  //También cuando derribas el ultimo cubito la cuenta se vuelve infinita agregandose 1 + 1 
  //score = 0;

  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);

  //nivel uno
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //nivel dos
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //nivel tres
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //parte superior
  block16 = new Block(390,155,30,40);

  //Nivel uno {STAND 2}
  block17 = new Block(640,170,30,40);
  block18 = new Block(670,170,30,40);
  block19 = new Block(700,170,30,40);
  block20 = new Block(730,170,30,40);
  block21 = new Block(760,170,30,40);

  //Nivel dos {STAND 2}
  block22 = new Block(660,140,30,40);
  block23 = new Block(690,140,30,40);
  block24 = new Block(720,140,30,40);
  block25 = new Block(750,140,30,40);

  //Nivel tres {STAND 2}
  block26 = new Block(680,100,30,40);
  block27 = new Block(710,100,30,40);
  block28 = new Block(740,100,30,40);

  //Nivel cuatro {STAND 2}
  block29 = new Block(710,60,30,40);

  //Aqui decidí desde el proyecto pasado crear una clase exclusiva para el polígono porque se me hacía mas personalizable y complejo el código así
  //Espero este bien :)
  poligono = new Polygon(50,10);

  //Creamos la resortera con la restriccion al cuerpo del poligono
  slingShot = new SlingShot(poligono.body,{x: 140, y: 200});
}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  
  //texto de instrucciones 
  text("Arrastra el hexagono y suelta para derrumbar los cubos!",140,40);
  //Cambia el tamaño de las letras para dar formato
  textSize(13);
  text("Presiona ESPACIO para tener varios tiros",260,70);
  text("Cubos Tirados: " + score,20,350);

  //Se muestra en pantalla nuestros objetos del mundo Matter.js

  ground.display();
  stand1.display();
  stand2.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();

  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  block26.display();
  block27.display();
  block28.display();
  fill("grey");
  block16.display();
  block29.display();

  //Se muestra la resortera
  slingShot.display();

  //Se muestra el poligono
  poligono.display();
}

//Funcion para arrastrar el bodyA (poligono) con el mouse 
function mouseDragged(){
  Matter.Body.setPosition(poligono.body, {x: mouseX , y: mouseY});
}

//Funcion para soltar sl slingShot simulando una resortera
function mouseReleased(){
  slingShot.fly();
}

//Funcion para presionar la tecla ESPACIO (32) y que genere otra vez una restriccion con el poligono a la slingShot
function keyPressed(){
  if(keyCode === 32){
    slingShot.attach(poligono.body);
  }
}