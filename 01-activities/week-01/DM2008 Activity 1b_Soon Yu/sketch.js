// New variable for width
let w = 30;
 
function setup() {
  createCanvas(400, 400);
  noStroke();
  rectMode(CENTER);
}
let strkcolor = (196, 14, 90)
function draw() {
  background(200,20);
  stroke(1);
  stroke(196, 14, 90);
  strokeWeight(10);
  noFill();
  rect(mouseX, mouseY, w);
  // Add one to 'w'
  w = w + 2;
  console.log(w);
}

	
function mousePressed() {
  w = (1);
}