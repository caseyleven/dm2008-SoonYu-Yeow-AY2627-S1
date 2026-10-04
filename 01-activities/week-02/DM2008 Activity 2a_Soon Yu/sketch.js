// DM2008 — Activity 2a
// Mode Switch (20 min)
//
// Use keys 1, 2, 3 to switch between at least 3 modes.
// Each mode should change more than just the background — think fill, size, or motion.
//
// Stretch: add a 4th mode, or make the ellipse change shape between modes.

let x = 0;       // ellipse x-position
let size = 50;   // ellipse size
let bgColor;     // background color, changed by key presses
let c;

function setup() {
  createCanvas(400, 400);
  bgColor = color(220);
  c = color(0);
}

function draw() {
  background(bgColor);

  fill(c);
  ellipse(x, height / 2, size);

  x += 2;

  if (x > width + size / 2) {
    x = 0;
  }
}

// Keys 1, 2, 3 change the background color
function  keyPressed() {
  switch (key) {
    case "1":
      c = color(255);
      bgColor = color(237, 45, 131, 10);
      size = (300)
      break; // red
    case "2":
       c = color(235, 157, 188);
      bgColor = color(19, 237, 52, 10);
       size = (50)
      break; // green
    case "3":
       c = color(242, 237, 177);
      bgColor = color(100, 100, 200, 10);
      size = (100)
      break; // blue
    case " ":
      bgColor = color(220); // grey
      break;
  }
}
