function setup() {
  createCanvas (windowWidth, windowHeight) 
}

function draw () {
  
  stroke(random(0, 255), random(0, 255), random(0, 255))
  rectMode(CENTER)
  rect(500, 500, 1000)
  background (random(0, 255), random(0, 255), random(0, 255))
  fill(random(0, 255), random(0, 255), random(0, 255))
  frameRate(5)
  
  
  stroke(128,128,128)
  strokeWeight (5)
  fill(255, 255, 255)
  rectMode(CENTER)
  rect(500, 500, 50, 400)
  
  stroke(245,224,119)
  ellipseMode(CENTER)
  ellipse(500, 300, 300, 300)
  strokeWeight (5)
  fill(255, 255, 255)
  
  stroke(51, 173, 255)
  fill(51, 173, 255)
  ellipseMode(CENTER)
  ellipse(500, 300, 50, 50)
  
  var x = mouseX
  var y = mouseY
  x = constrain(x, 490, 510)
  y = constrain(y, 290, 310)
  
  stroke(0, 0, 0)
  fill(0, 0, 0)
  ellipseMode(CENTER)
  ellipse(x, y, 25, 25)
  
  // stroke(128,128,128)
  // strokeWeight (5)
  // fill(140, 140, 140)
  // rectMode(CENTER)
  // rect(450, 470, 50, 400)
  
}

function windowResized (){
  resizeCanvas(windowWidth, windowHeight);
}