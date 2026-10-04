// DM2008 — Activity 4a [Guided]
// Bake a Cookie (30 min)
//
// A class is a blueprint — Cookie describes what every cookie has and can do.
// Your job is to complete the class, then add movement and a flavor randomizer.
//
// Suggested order:
// 1. Add the missing properties to the constructor (sz, x, y)
// 2. Fix show() so it uses this.flavor, this.x, this.y, this.sz
// 3. Implement move() and randomFlavor()
// 4. Wire them up in keyPressed() and mousePressed()
//
// Stretch: add a second cookie with different starting values.

let cookie;
let ChocChipColor;
function setup() {
  createCanvas(400, 400);
  noStroke();

  cookie = new Cookie("vanilla", 200, width / 2, height / 2);
}

function draw() {
  background(230);
  cookie.show();
  cookie.move();
}

class Cookie {
  constructor(flavor, sz, x, y) {
    // this. binds each value to this specific cookie object
    // Add the missing properties below
    this.flavor = flavor;
    this.sz = sz;
    this.x = x;
    this.y = y;
  }

  show() {
    // Fix this method — it should use this.flavor, this.x, this.y, this.sz

    switch (this.flavor) {
      case "chocolate":
        fill(196, 146, 96);
        ChocChipColor=color(43, 13, 8)
        break;
      case "vanilla":
        fill(255, 223, 150);
         ChocChipColor=color(117, 69, 18)
        break;
      case "matcha":
        fill("#98ec9d");
         ChocChipColor=color(25, 92, 13)
        break;
      default:
        fill(220, 180, 120);
    }

    ellipse(this.x, this.y, this.sz);
    push
    fill(ChocChipColor)
    ellipse(250, 150, this.sz/10)
    ellipse(150, 190, this.sz/10)
    ellipse(170, 210, this.sz/10)
    ellipse(250, 250, this.sz/10)
    pop
  }

  // Add a move() method — update this.x or this.y based on which key is pressed
  move() {
    this.x = width/2;
    this.y = height/2;
  }

  // Add a randomFlavor() method — set this.flavor to one of at least 3 options
  randomFlavor() {
    // this.flavor = random(["chocolate", "vanilla"]);
    let flavors = ["chocolate", "vanilla", "matcha"];
    this.flavor = random(flavors);
  }
}

// Call cookie.move() when an arrow key is pressed
//function keyPressed() {
//if(key === '1'){flavor="chocolate";}
//else if (key === '2'){flavor="vanilla";}
//else if (key === '3'){flavor="default";}
//}

// Call cookie.randomFlavor() when the mouse is clicked
function mousePressed() {
  cookie.randomFlavor();
}
