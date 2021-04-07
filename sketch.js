var starImg,bgImg;
var star, starBody;
//create variable for fairy sprite and fairyImg
var fairypng ,fairyImg;
var fairyImage1,fairypng
var fairyImage2,fairypng
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	//load animation for fairy here
	fairypng=loadImage("images/fairy.png");
	fairyImg=loadImage("images/fairyImage1.png");
   fairyImg=loadImage("images/fairyImage2.png");
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound

	//create fairy sprite and add animation for fairy
	fairypng=loadImage("images/fairy.png");
	fairyImg=loadImage("images/fairyImage1.png");
   fairyImg=loadImage("images/fairyImage2.png");

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	fairy= createSprite(600,300);
	fairy.addImage(fairyImg);
	fairy.scale = 0.5;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //write code to stop star in the hand of fairy

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right
	if (keyCode === LEFT_ARROW) {
	fairy.x=fairy.x-20;
	}
	if (keyCode === RIGHT_ARROW) {
		fairy.x=fairy.x+20;
	}
	 
	

}
