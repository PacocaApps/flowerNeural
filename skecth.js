function setup(){
createCanvas(windowWidth,windowHeight)

}




function draw(){
background(0)
if(test(mouseX,mouseY) > 0.5){
  fill(0,0,255);
}else if(test(mouseX,mouseY) < 0.5){
  fill(255,0,0);
}
noStroke();
ellipse(width/2,height/2,mouseX/2,mouseY)
ellipse(width/2,height/2,mouseX,mouseY/2)
fill(255,255,0);
ellipse(width/2,height/2,mouseX/6,mouseY/3)
ellipse(width/2,height/2,mouseX/3,mouseY/6)
fill(255)
textSize(32)
text("If its > 0.5 its blue, if its < 0.5 its red",width/5,height/15)
text("Blue or Red: "+test(mouseX,mouseY),100,100)
text("Error: "+ slope,100,150)
}
function test(x,y){


var z = x*w1 + y*w2 + bias;

return sigmoid(z);


}
