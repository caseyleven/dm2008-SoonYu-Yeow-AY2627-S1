let colorBtn, sizeSlider, shapeSelect;
let redSlider, blueSlider, greenSlider;
let shapeColor;

let controlPanel;

function setup() {
  createCanvas(640, 400);
  noStroke();
  textFont(
    "google sans flex, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
  );
  controlPanel = createDiv();
  //ok honestly i have no idea how to add fonts effectively
  //trying to make your site look good is very hard in javascript (or html)
  //thats why all my projects chopped af

  // starting color
  shapeColor = color(random(255), random(255), random(255));

  // Button: change color
  colorBtn = createButton("Change Color");
  //  colorBtn.position(16, 16);
  colorBtn.mousePressed(randomShapeColor);
  colorBtn.parent(controlPanel);
  //I want to be more specific about the colours I can choose
  function randomShapeColor() {
    //shapeColor = color(random(255), random(255), random(255));
    redSlider.value(random(20, 255));
    greenSlider.value(random(20, 255));
    blueSlider.value(random(20, 255));
  }

  //Slider to control all aspects of Colour
  createP("Redness").style("margin", "0").parent(controlPanel);
  redSlider = createSlider(20, 255, random(255), 1);
  redSlider.parent(controlPanel);
  //redSlider.position(15, 60);

  createP("Greenness").style("margin", "0").parent(controlPanel);
  greenSlider = createSlider(20, 255, random(255), 1);
  greenSlider.parent(controlPanel);

  //greenSlider.position(15, 100);

  createP("Blueness").style("margin", "0").parent(controlPanel);
  blueSlider = createSlider(20, 255, random(255), 1);
  blueSlider.parent(controlPanel);
  //blueSlider.position(15, 140);

  // Dropdown: choose shape
  createP("Shape").style("margin", "0").parent(controlPanel);
  shapeSelect = createSelect();
  //shapeSelect.position(16, 190);
  shapeSelect.option("ellipse");
  shapeSelect.option("rect");
  shapeSelect.option("triangle");
  shapeSelect.parent(controlPanel);

  // Slider: controls size
  createP("Size").style("margin", "0").parent(controlPanel);
  sizeSlider = createSlider(20, 220, 100, 1);
  sizeSlider.parent(controlPanel);
  //sizeSlider.position(15, 230);

  //control panel style
  controlPanel.position(16, 16);
  controlPanel.style("padding", "10px");
  controlPanel.style("background", "#c9c9c9");
  controlPanel.style("border-radius", "8px");
  // Stack controls vertically
  controlPanel.style("gap", "10px");
  controlPanel.style("display", "flex");
  controlPanel.style("flex-direction", "column");

  //putting everything in control panel
}

function draw() {
  background(240);

  push();
  translate(width * 0.65, height * 0.5);
  let s = sizeSlider.value();

  //let redness = redSlider.value();
  // let greenness = greenSlider.value();
  //let blueness = blueSlider.value();
  shapeColor = color(
    redSlider.value(),
    greenSlider.value(),
    blueSlider.value()
  );
  fill(shapeColor);

  // draw chosen shape
  let choice = shapeSelect.value();
  if (choice === "ellipse") {
    ellipse(0, 0, s, s);
  } else if (choice === "rect") {
    rectMode(CENTER);
    rect(0, 0, s, s);
  } else if (choice === "triangle") {
    triangle(-s * 0.6, s * 0.5, 0, -s * 0.6, s * 0.6, s * 0.5);
  }
  pop();
}
