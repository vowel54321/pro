
var AnimeQ,PhysicsQ,MathsQ,BTSQ;
var score=0;
function preload()
{
 AnimeQImg=loadAnimation("QP1NN.png","QP2NN.png","QP3NN.png","QP4NN.png","QP5NN.png")
 PHYQImg = loadAnimation("PHY1.png","PHY2.png","PHY3.png","PHY4.png","PHY5.png");
 BTSQImg= loadAnimation("qBTS2 (1).png");
 MATQImg= loadAnimation("MAT2.png","MAT3.png","MAT4.png","MAT5.png")
 CrossImg=loadAnimation("gameOver (1).png")
bgImg=loadImage("Mj.jpg");
AnimeQues=loadAnimation("AnimeQ.jpg")
PhysicsQues=loadAnimation("PhyQ.png")
MathsQues=loadAnimation("MathsQ.png")
BTSQues=loadAnimation("BTSQ.jpg")
a= loadAnimation("A.png")
b= loadAnimation("b.png")
c= loadAnimation("c.png")
d= loadAnimation("d.png")
runImg=loadImage("Run.png")
// to load sound or music, i m doing one as an example so u can follow it.
sound=loadSound("music.mp3")
}




function setup()
{
  createCanvas(displayWidth, displayHeight);
  AnimeQ = createSprite(265,155,50,50);
 AnimeQ.scale=0.4;
  AnimeQ.addAnimation("Animeq",AnimeQImg);
  AnimeQ.addAnimation("AnQ",AnimeQues);
  //AnimeQ.setAnimation(AnimeQImg);
  PhysicsQ= createSprite(displayWidth - 100,  70, 50, 50);
  PhysicsQ.scale=0.4;
  PhysicsQ.addAnimation("Physicsq",PHYQImg)
  PhysicsQ.addAnimation("PhQ",PhysicsQues);
  player=createSprite(10,150,20,20);
  player.addImage("runn", runImg)
  player.scale=0.15;
  player.shapeColor="red";
  MathsQ= createSprite(displayWidth - 120, displayHeight - 80, 50, 50);
  MathsQ.scale=0.4;
  MathsQ.addAnimation("MATq",MATQImg)
  MathsQ.addAnimation("MaQ",MathsQues)

  BTSQ = createSprite(100,  displayHeight - 160, 50, 50);
  //BTSQ.scale=1.2;
  BTSQ.addAnimation("BTSq",BTSQImg);
  BTSQ.scale=0.4;
  BTSQ.addAnimation("BTQ",BTSQues);
  cross1=createSprite(316.19,20,20);
  cross1.addAnimation("CrosIm",CrossImg)
  cross1.scale=0.15;
   cross1.velocityY=-10;
   cross1.velocityX=10;
   cross2=createSprite(displayWidth-30.19,20,20);
  cross2.addAnimation("CrosIm",CrossImg)
  cross2.scale=0.15;
   cross2.velocityY=10;
   cross2.velocityX=-10;

   BTSQ.depth=player.depth;
   player.depth+=1;

   MathsQ.depth=player.depth;
   player.depth+=1;

   PhysicsQ.depth=player.depth;
   player.depth+=1;

  edges=createEdgeSprites();
  m1 = createSprite(displayWidth-400, displayHeight/8-20, 8, displayHeight/4);
    m1.shapeColor = "green";

    m2 = createSprite(displayWidth/4, 20, 8, displayHeight/4);
    m2.shapeColor = "green";

    m3 = createSprite(displayWidth/2, 30, 7, displayHeight/4);
    m3.shapeColor = "green";

    m4 = createSprite(120, 250, displayWidth/4, 8);
    m4.shapeColor = "green";

    m5 = createSprite(200, 400, displayWidth/7, 8);
    m5.shapeColor = "green";

    m6 = createSprite(displayWidth-10,displayHeight-10 , displayWidth/7, 10);
    m6.shapeColor = "green";
    
    m7 = createSprite(displayWidth - 70, 450, 8, displayHeight/4);
    m7.shapeColor = "green";

    m8 = createSprite(100, 100, displayWidth/5, 8);
    m8.shapeColor = "green";

    m9 = createSprite(displayWidth/2 - 20, 550, 8, displayHeight/5);
    m9.shapeColor = "green";
    
    m10 = createSprite(displayWidth - 300, 50, displayWidth/4,8);
    m10.shapeColor = "green";

    m11 = createSprite(displayWidth/8, 20, 8, 90);
    m11.shapeColor = "green";

    m12 = createSprite(1000, 500, displayWidth/6, 8);
    m12.shapeColor = "green";

    m13 = createSprite(830, 120, 8, displayHeight/4);
    m13.shapeColor = "green";
    
    m14 = createSprite(900, 600, displayWidth/8, 8);
    m14.shapeColor = "green";

    m15 = createSprite(displayWidth-200, displayHeight-10, 8, displayHeight/4);
    m15.shapeColor = "green";

    m16 = createSprite(displayWidth-500, displayHeight-50, displayWidth/4, 8);
    m16.shapeColor = "green";

    m17 = createSprite(displayWidth-300, 700, 8, displayHeight/4);
    m17.shapeColor = "green";

    m18 = createSprite(displayWidth-900, 500, 8, displayHeight/4);
    m18.shapeColor = "green";

    m19 = createSprite(displayWidth-1200, 500, displayWidth/5, 8);
    m19.shapeColor = "green";

    m20 = createSprite(displayWidth-800, 750, 8, displayHeight/4);
    m20.shapeColor = "green";
  
    m21 = createSprite(displayWidth-80, 50, 8, displayHeight/4);
    m21.shapeColor = "green";

    m22 = createSprite(displayWidth-200, 270, displayWidth/5, 8);
    m22.shapeColor = "green";

    m23 = createSprite(displayWidth/6-50, 1070, displayWidth/5, 8);
    m23.shapeColor = "green";

    m24 = createSprite(displayWidth/10-50, 170, displayWidth/5, 8);
    m24.shapeColor = "green";

    m24 = createSprite(displayWidth/10-50, 770, displayWidth/5, 8);
    m24.shapeColor = "green";

    m25 = createSprite(displayWidth/10, 970, displayWidth/5, 8);
    m25.shapeColor = "green";

    m26 = createSprite(displayWidth/4+170, 10, 8, displayHeight/2);
    m26.shapeColor = "green";

    m27 = createSprite(150, 680, 8, displayHeight/4);
    m27.shapeColor = "green";

    m28 = createSprite(350, 670, displayWidth/6, 8);
    m28.shapeColor = "green";

    sound.play();
  }
  
function draw() {
background(bgImg)

//cross.setAnimation("CS.png_1");
cross1.bounceOff(edges);
cross1.bounceOff(m1);
cross1.bounceOff(m2);
cross1.bounceOff(m3);
cross1.bounceOff(m4);
cross1.bounceOff(m5);
cross1.bounceOff(m6);
cross1.bounceOff(m7);
cross1.bounceOff(m8);
cross1.bounceOff(m9);
cross1.bounceOff(m10);
cross1.bounceOff(m11);
cross1.bounceOff(m12);
cross1.bounceOff(m13);
cross1.bounceOff(m14);
cross1.bounceOff(m15);

cross1.bounceOff(m16);
cross1.bounceOff(m17);
cross1.bounceOff(m18);
cross1.bounceOff(m19);
cross1.bounceOff(m20);
cross1.bounceOff(m21);
cross1.bounceOff(m22);
cross1.bounceOff(m23);
cross1.bounceOff(m24);
cross1.bounceOff(m25);
cross1.bounceOff(m26);
cross1.bounceOff(m27);
cross1.bounceOff(m28);

cross2.bounceOff(edges);
cross2.bounceOff(m1);
cross2.bounceOff(m2);
cross2.bounceOff(m3);
cross2.bounceOff(m4);
cross2.bounceOff(m5);
cross2.bounceOff(m6);
cross2.bounceOff(m7);
cross2.bounceOff(m8);
cross2.bounceOff(m9);
cross2.bounceOff(m10);
cross2.bounceOff(m11);
cross2.bounceOff(m12);
cross2.bounceOff(m13);
cross2.bounceOff(m14);
cross2.bounceOff(m15);

cross2.bounceOff(m16);
cross2.bounceOff(m17);
cross2.bounceOff(m18);
cross2.bounceOff(m19);
cross2.bounceOff(m20);
cross2.bounceOff(m21);
cross2.bounceOff(m22);
cross2.bounceOff(m23);
cross2.bounceOff(m24);
cross2.bounceOff(m25);
cross2.bounceOff(m26);
cross2.bounceOff(m27);
cross2.bounceOff(m28);

player.bounceOff(m1);
player.bounceOff(m2);
player.bounceOff(m3);
player.bounceOff(m4);
player.bounceOff(m5);
player.bounceOff(m6);
player.bounceOff(m7);
player.bounceOff(m8);
player.bounceOff(m9);
player.bounceOff(m10);
player.bounceOff(m11);
player.bounceOff(m12);
player.bounceOff(m13);
player.bounceOff(m14);
player.bounceOff(m15);
player.bounceOff(m16);
player.bounceOff(m17);
player.bounceOff(m18);
player.bounceOff(m19);
player.bounceOff(m20);
player.bounceOff(m21);
player.bounceOff(m22);
player.bounceOff(m23);
player.bounceOff(m24);
player.bounceOff(m25);
player.bounceOff(m26);
player.bounceOff(m27);
player.bounceOff(m28);

if(keyDown("right"))
{
  player.x+=5;
}
if(keyDown("left"))
{
  player.x-=5;
}
if(keyDown("up"))
{
  player.y-=5;
}
if(keyDown("down"))
{
  player.y+=5;
}

if(player.isTouching(AnimeQ))
{
  AnimeQ.changeAnimation("AnQ",AnimeQues);
  score=score+1;
  a1 = createSprite(180,200,20,20)
  a1.scale=0.01
  a1.addAnimation("aa",a)
 if(player.isTouching(a1))
 {
  player.visible= false;
  m1.visible = false;
  m2.visible= false;
  m3.visible= false;
  m4.visible=false;
  m5.visible=false;
  m6.visible= false;
  m7.visible=false;
  m8.visible= false;
  m9.visible=false;
  m10.visible=false;
  m11.visible= false;
  m12.visible=false;
  m13.visible=false;
  m14.visible= false;
  m15.visible=false;
  m16.visible = false;
  m17.visible= false;
  m18.visible=false;
  m19.visible=false;
  m20.visible = false;
  m21.visible=false;
  m22.visible=false;
  m23.visible=false;
  m24.visible=false;
  m25.visible=false;
  m26.visible=false;
  m27.visible=false;
  m28.visible=false;
  cross1.visible=flse;
  cross2.visible=false;
  AnimeQ.visible= false;
  BTSQ.visible=false;
  MathsQ.visible=false;
  PhysicsQ.visible=false;   
 }
  a2 = createSprite(240,200,20,20)
  a2.scale=0.04
  a2.addAnimation("bb",b)
  if(player.isTouching(a2))
 {
  player.visible= false;
  m1.visible = false;
  m2.visible= false;
  m3.visible= false;
  m4.visible=false;
  m5.visible=false;
  m6.visible= false;
  m7.visible=false;
  m8.visible= false;
  m9.visible=false;
  m10.visible=false;
  m11.visible= false;
  m12.visible=false;
  m13.visible=false;
  m14.visible= false;
  m15.visible=false;
  m16.visible = false;
  m17.visible= false;
  m18.visible=false;
  m19.visible=false;
  m20.visible = false;
  m21.visible=false;
  m22.visible=false;
  m23.visible=false;
  m24.visible=false;
  m25.visible=false;
  m26.visible=false;
  m27.visible=false;
  m28.visible=false;
  cross1.visible=flse;
  cross2.visible=false;
  AnimeQ.visible= false;
  BTSQ.visible=false;
  MathsQ.visible=false;
  PhysicsQ.visible=false;   
 }
  a3 = createSprite(280,200,20,20)
  a3.scale= 0.01
  a3.addAnimation("cc",c)
  a4 = createSprite(320,200,20,20)
  a4.scale=0.01
  a4.addAnimation("dd",d)
}

if(player.isTouching(PhysicsQ))
{
  PhysicsQ.changeAnimation("PhQ",PhysicsQues);
  score=score+1;
}

if(player.isTouching(BTSQ))
{
  BTSQ.changeAnimation("BTQ",BTSQues);
  score=score+1;
}

if(player.isTouching(MathsQ))
{
  MathsQ.changeAnimation("MaQ",MathsQues);
  score=score+1;
}

//write the code for game over
if(score===4)
{
  //write code for winning the quiz game. do it nicely or i will kill you
  
}
if(player.isTouching(cross1) || player.isTouching(cross2)  )
{
player.visible= false;
m1.visible = false;
m2.visible= false;
m3.visible= false;
m4.visible=false;
m5.visible=false;
m6.visible= false;
m7.visible=false;
m8.visible= false;
m9.visible=false;
m10.visible=false;
m11.visible= false;
m12.visible=false;
m13.visible=false;
m14.visible= false;
m15.visible=false;
m16.visible = false;
m17.visible= false;
m18.visible=false;
m19.visible=false;
m20.visible = false;
m21.visible=false;
m22.visible=false;
m23.visible=false;
m24.visible=false;
m25.visible=false;
m26.visible=false;
m27.visible=false;
m28.visible=false;
cross1.visible=flse;
cross2.visible=false;
AnimeQ.visible= false;
BTSQ.visible=false;
MathsQ.visible=false;
PhysicsQ.visible=false;
}

fill("white")
textSize(15);
text("AnimeQ",245,105);
text('PhysicsQ',displayWidth - 150,  20);
text("MathsQ",displayWidth - 150, displayHeight - 140);
text("BTSQ",60,  displayHeight - 210);
drawSprites();


}

