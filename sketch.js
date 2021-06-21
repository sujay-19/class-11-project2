var jaxon,jaxon_running
var pathimage,path
var edges

function preload(){
  //pre-load images
    jaxon_running=loadAnimation("Runner-1.png","Runner-2.png")
    pathimage=loadImage("path.png")
    }

function setup(){
  createCanvas(400,400);
  //create sprites here

  path=createSprite(200,200)
  path.addImage(pathimage)
  path.velocityY=4
  path.scale=1.3


  jaxon=createSprite(310,360)
  jaxon.addAnimation("running",jaxon_running)
  jaxon.scale=0.05

  edges=createEdgeSprites()

 
 
}

function draw() {
  background("brown");
 jaxon.x=World.mouseX
  if (path.y>400) {
    path.y=height/2
  }
 jaxon.collide(edges)
 
  drawSprites()

}
