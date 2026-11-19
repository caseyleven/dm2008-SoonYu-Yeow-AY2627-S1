// DM2008 — Activity 5a [Guided]
// Colliding Circles (30 min)
//
// A vector stores position and movement together — cleaner than separate x and y variables.
// Your job is to get two balls moving, then detect and respond to their collision.
//
// Suggested order:
// 1. Create two Ball objects in setup()
// 2. Check the distance between them in draw()
// 3. Trigger a visual response when they collide
// 4. Implement edge behaviour in move() — wrap or bounce, your choice
//
// Stretch: add a third ball, or make the collision response affect both balls.
let balls = [];

function setup() {
  createCanvas(400, 400);

  balls.push(new Ball(100, 200));
  balls.push(new Ball(300, 200));
  
}

function draw() {
  
  background(230);
  background('skyblue');
  textSize(300);
  text('🌈', 50, 360);
  
  // Check whether the original two balls are colliding
  let d = dist(balls[0].pos.x, balls[0].pos.y, balls[1].pos.x, balls[1].pos.y);

  let colliding = d < balls[0].r + balls[1].r;

  // Only respond when a NEW collision begins
  if (colliding && !balls[0].wasColliding) {
    balls[0].vel.mult(-1);
    balls[1].vel.mult(-1);
     textSize(20);
    fill(255, 255, 255);
  text("New baby!", 60, 60);


    // Create one new ball
    balls.push(
      new Ball(
        (balls[0].pos.x + balls[1].pos.x) / 2,
        (balls[0].pos.y + balls[1].pos.y) / 2
      )
    );
  }

  // Remember the collision state for the next frame
  balls[0].wasColliding = colliding;

  for (let i = 0; i < balls.length; i++) {
    balls[i].move();
    balls[i].show();
  }
}

class Ball {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(random(-2, 2), random(-2, 2));
    this.r = 30;

    // Each Ball can remember information about its own state
    this.wasColliding = false;
  }

  move() {
    this.pos.add(this.vel);
 if (this.pos.x > width) {
      this.vel.x = -this.vel.x;
    }
    if (this.pos.x < 0) {
      this.vel.x = -this.vel.x;
    }
    if (this.pos.y > height) {
      this.vel.y = -this.vel.y;
    }
    if (this.pos.y < 0) {
      this.vel.y =-this.vel.y;
    }
  

  }

  show() {
    noStroke();
    if (balls[0] === this || balls[1] === this) {
      fill(255, 255, 255);
      ellipse(this.pos.x, this.pos.y, this.r * 2);
    } else {
      fill(200, 0, 50);
      ellipse(this.pos.x, this.pos.y, this.r * 1.5);
    }
    
  }
}
