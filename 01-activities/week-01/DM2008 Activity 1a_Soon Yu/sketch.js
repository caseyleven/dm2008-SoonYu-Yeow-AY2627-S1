// DM2008 — Activity 1a
// Simple Creatures (20 min)

// Run the sketch, then click on the preview to enable keyboard
// Use the 'Option' ('Alt' on Windows) key to view or hide the grid
// Use the 'Shift' key to change overlays between black & white
// Write the code for your creature within the space provided

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("#ea0b0b");
       fill("#000000");
     stroke("#000000");
  ellipse(200,200,500);
  fill("#ea0b0b");
  ellipse(200,200,400);
    fill("#000000");
  ellipse(200,200,300);
  fill("#e75304");
  rect(220,290,20,70);
    fill("#e75304");
  rect(170,290,20,70);
    fill("#e75304");
  rect(220,350,50,20);
      fill("#e75304");
  rect(140,350,50,20);
  //body
     fill("#fff705");
  ellipse(200,230,180,150);
  //head
  fill("#fff705");
  ellipse(150,150,120,100);
  //beak
  fill("#e75304");
  ellipse(110,160,60,30);
  // eyes
 fill("#02061d");
  ellipse(160,140,50,30);
  fill("#ffffff");
  ellipse(160,140,20);
  fill("#ee1b1b");
  ellipse(160,140,10);
  // extras
   stroke("#ee1b1b");
  // x1, y1, x2, y2
 // line(100, 100, 300, 100);
  
  helperGrid(); // do not edit or remove this line
}
