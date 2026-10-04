// DM2008 — Activity 3a [Guided]
// Array Sampler (20 min)
//
// An array stores a list of values — here it's colors, but it could be
// sizes, positions, or anything else.
// Press any key to cycle through the array one item at a time.
//
// Try these:
// - Replace the colors with your own values (sizes, positions, text).
// - Use mousePressed() instead of keyPressed().
// - Use push() to add new items or splice() to remove them.
// - Loop through the whole array to draw all items at once.
//
// Stretch: visualize all items in the array simultaneously instead of one at a time.

let r = 191;
let g = 10;
let b = 73;
let currentIndex = 0;
let drawSquare = false;

function setup() {
  createCanvas(400, 400);
  noStroke();
  
}

function draw() {

 
background(0,20);
  // Draw the ellipse using the current color in the array
  fill(r, g, b);
  if (drawSquare) {
    rectMode(CENTER);
    rect(width / 2, height / 2, random(50 - 300, 0.2));
  } else {
    ellipse(width / 2, height / 2, random(50 - 300, 0.2));
  }

  r = r - 1;
  g = g + 1;
  b = b + 1;
}




// Advance to the next color each time a key is pressed
function keyPressed() {
  drawSquare = !drawSquare;
  r = r - 1;
  g = g + 1;
  b = b + 1;
}
