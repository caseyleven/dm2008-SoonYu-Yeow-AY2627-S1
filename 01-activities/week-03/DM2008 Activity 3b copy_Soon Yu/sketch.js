// DM2008 — Activity 3b
// One Function Wonder (30 min)
//
// Write a function that draws a shape or group of shapes.
// It should take at least one parameter — try x, y, size, or color.
// Call it several times with different values to create variation.
//
// Ideas: a simple face, a flower, a house, an icon.
// Example: myShape(100, 200, 50); myShape(300, 200, 80);
//
// Stretch: call your function inside a for loop to create a repeating pattern.
let atomcolor;
function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  

}
let atomx= 100;
//let atomcolor= color(66, 138, 245);
let atomy= 50;
function draw() {
  background(220);
  fill(66, 138, 245);
  ellipse(mouseX,mouseY, atomx, atomx);
  noFill();
  rectMode(CENTER)
  translate (mouseX, mouseY)
  rotate(1)
  ellipse (0,0, atomx*3, atomx/2.5)
  rotate(1)
  ellipse (0,0, atomx*3, atomx/2.5)
  rotate(1)
  ellipse (0,0, atomx*3, atomx/2.5)

  // Call your function here with different values each time
}

// Define your function outside draw()
// It can be called from anywhere in your sketch

function myShape(x, y, s) {
  ellipse(x, y, s, s);
}