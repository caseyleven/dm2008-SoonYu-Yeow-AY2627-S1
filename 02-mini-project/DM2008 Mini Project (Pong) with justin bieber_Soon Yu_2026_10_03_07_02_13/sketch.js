// DM2008 — Mini Project
// PONG (Starter Scaffold)
//
// Complete this scaffold into a playable game.
// Your game should have player control, collision detection,
// score tracking, and at least two game states.
//
// Not sure where to start? Try this order:
// 1. Get both paddles moving — controls are the first thing to nail
// 2. Get the ball moving — uncomment the velocity in the Ball constructor
// 3. Add scoring when the ball passes a paddle, then reset the ball
// 4. Add game states — at minimum a playing state and a game over state
//
// Stretch: add a start screen, a win condition, or angle variation on paddle hits.

/* ----------------- Globals ----------------- */
let leftPaddle, rightPaddle, ball, startBall;
let leftScore = 0;
let rightScore = 0;
let babySong, jasonDeruloSong;
let leftPaddleBieber, rightPaddleDerulo;
let gameOverBieber, gameOverDerulo;
let songCounter;

// Game states: "playing" or "gameover" — add more if you need them
let gameState = "StartScreen";

/* ----------------- Setup & Draw ----------------- */
//async function setup() {

//}

async function setup() {
 babySong = await loadSound("babySong.mp3");
  jasonDeruloSong = await loadSound("jasonderulosayingjasonderulo.mp3");

  leftPaddleBieber = await loadImage("justinBieber.png");
  rightPaddleDerulo = await loadImage("jasonderulo.png"); 
  
//gameover songs
  //gameOverBieber= await loadSound("")
  gameOverDerulo = await loadSound("jasonderulocomp.mp3")
    

  //console.log("setup running, babySong is:", babySong);
  createCanvas(640, 360);
  noStroke();
  leftPaddle = new Paddle(30, height / 2 - 30, 60, 60, leftPaddleBieber);
  console.log("leftPaddle.img:", leftPaddle.img);
  rightPaddle = new Paddle(width - 90, height / 2 - 30, 60, 60, rightPaddleDerulo);
  ball = new Ball(width / 2, height / 2, 8);

  introBall = new Ball(width / 2, height / 2, 8);
  introBall.vel = createVector(2, 1.5);
}

//function keyPressed() {}

function draw() {
  songHasPlayed=false
  background(18);
  textFont("Unbounded");
  textStyle(BOLD);
  if (gameState === "StartScreen") {
    background(18);
    fill("white");
    textAlign(CENTER);
    textSize(20);
    text("THIS IS A VERY GOOD GAME OF PONG", width / 2, 80);
    textSize(15);
    text("(Whoever scores 3 points first wins)", width / 2, 100);
    text("LEFT", 160, 180);
    text("RIGHT", 480, 180);
    text("W and S to move", 160, 200);
    text("↑ and ↓ to move", 480, 200);
    text("Press 'space' to start", width / 2, 300);
    songCounter = 0;
    fill(255, 170, 70);
    introBall.show();
    introBall.update();
    if (introBall.pos.x <= 0 || introBall.pos.x >= width) {
      introBall.vel.x *= -1;
    }
    if (introBall.pos.y <= 0 || introBall.pos.y + introBall.r >= height) {
      introBall.vel.y *= -1;
    }

    //ball

    //ellipse(width/2, height/2, 16);
    // ellipse.vel = createVector(random(-2, 2), random(-2, 2));

    if (key == " ") {
      gameState = "playingBallFrozen";
      console.log("Game Start");
      console.log(gameState);
    }
  }

  if (gameState === "playingBallFrozen") {
    handleInput();
    textAlign(CENTER);
    textSize(30);
    text(leftScore, 160, 40);
    text(rightScore, 480, 40);
    leftPaddle.update();
    rightPaddle.update();
    ball.checkWallBounce();
    ball.checkPaddleBounce(leftPaddle);
    ball.checkPaddleBounce(rightPaddle);

    drawCourt();
    leftPaddle.show();
    rightPaddle.show();
    ball.show();
    textSize(15);
    fill("white");
    textAlign(CENTER);
    text("Press '1' to let ball fly", width / 2, 300);

    if (key == "1") {
      gameState = "playingBallMove";
      console.log("Ball should move");
      console.log(gameState);
      ball.vel = createVector(
        random([-1, 1]) * ball.xSpeed,
        random([-1, 1]) * ball.ySpeed
      );
    }

    // Display scores — look up textAlign() and textSize() in the p5.js reference
  }
  if (gameState === "playingBallMove") {
    handleInput();
    fill("white");
    textAlign(CENTER);
    textSize(30);
    text(leftScore, 160, 40);
    textAlign(CENTER);
    textSize(30);
    text(rightScore, 480, 40);

    leftPaddle.update();
    rightPaddle.update();

    ball.update();
    ball.checkWallBounce();
    ball.checkPaddleBounce(leftPaddle);
    ball.checkPaddleBounce(rightPaddle);

    drawCourt();
    leftPaddle.show();
    rightPaddle.show();
    ball.show();
    textSize(15);
    fill("white");

    // Display scores — look up textAlign() and textSize() in the p5.js reference
  }

  //Condition is that one side scores 3 to win
  if (leftScore === 3 || rightScore === 3) {
    gameState = "gameover";
    songCounter = songCounter + 1
  }

  if (gameState === "gameover") {
    background(230);

    //rainbow
    background("skyblue");
    textAlign(CENTER);
    textSize(300);
    text("🌈", 500, 360);

    //congrats!
    textSize(40);

    fill("white");
    text("CONGRATULATIONS!", width / 2, height / 2);
    textSize(15);
    stroke("#10497f");
    strokeWeight(4);
    text("Press 'space' to restart", width / 2, 300);

    //text different depending on who won
if (leftScore === 3 || 2 > songCounter > 0) {
  text("JUSTIN BIEBER wins-- never say never.", width / 2, 280);
  if (!songHasPlayed) {
    babySong.play();
    songHasPlayed = true;
  }
}
if (rightScore === 3 || 2 > songCounter > 0) {
  text("JASON DERULOOO-- is what the winner would say, cuz they won.", width / 2, 280);
  if (!songHasPlayed) {
    gameOverDerulo.play();
    songHasPlayed = true;
  }
}
    if (key == " ") {
      leftScore = 0;
      rightScore = 0;
      gameState = "StartScreen";
    }
  }

  // What should the player see when the game ends?
  // How do they restart?
}

/* ----------------- Input ----------------- */
function handleInput() {
  // Left paddle: W (up) and S (down) — use keyIsDown() with the key's character
  if (keyIsDown("w")) {
    leftPaddle.vy = -leftPaddle.speed;
  }
  if (keyIsDown("s")) {
    leftPaddle.vy = leftPaddle.speed;
  }
  if (keyIsDown(UP_ARROW)) {
    rightPaddle.vy = -rightPaddle.speed;
  }
  if (keyIsDown(DOWN_ARROW)) {
    rightPaddle.vy = rightPaddle.speed;
  }

  // Right paddle: UP_ARROW and DOWN_ARROW — same pattern as left paddle
}

function keyReleased() {
  leftPaddle.vy = 0;
  rightPaddle.vy = 0;
}

/* ----------------- Classes ----------------- */
class Paddle {
  constructor(x, y, w, h, img) {
    this.pos = createVector(x, y);
    this.w = w;
    this.h = h;
    this.vy = 0;
    this.speed = 5;
    this.img= img || null;
  }

  update() {
    this.pos.y += this.vy;
    this.pos.y = constrain(this.pos.y, 0, height - this.h);
  }

  show() {
      
    image(this.img, this.pos.x, this.pos.y, this.w, this.h);
  
}}

class Ball {
  constructor(x, y, r) {
    this.pos = createVector(x, y);
    this.r = r;
    this.xSpeed = 2.0;
    this.ySpeed = 2.0;
    this.vel = createVector(0, 0);
    // Give the ball a random starting direction to get it moving
    // this.vel = createVector(random([-1, 1]) * this.xSpeed, random([-1, 1]) * this.ySpeed);
  }

  move() {
    this.pos.add(this.vel);
  }

  update() {
    this.pos.add(this.vel);
  }

  checkWallBounce() {
    // Bounce off top and bottom walls
    if (this.pos.y - this.r <= 0 || this.pos.y + this.r >= height) {
      this.vel.y *= -1;
      this.pos.y = constrain(this.pos.y, this.r, height - this.r);
    }
    //right side wins, ball passes left edge
    if (this.pos.x <= 0) {
      rightScore += 1;
      gameState = "playingBallFrozen";
      this.reset();
    }
    //left side wins, ball passes right edge
    if (this.pos.x >= width) {
      leftScore += 1;
      gameState = "playingBallFrozen";
      this.reset();
    }
    // When the ball passes the left or right edge, a player scores
    // Increment the correct score, then call this.reset()
  }

  checkPaddleBounce(paddle) {
    const withinY =
      this.pos.y > paddle.pos.y && this.pos.y < paddle.pos.y + paddle.h;
    const withinX =
      this.pos.x + this.r > paddle.pos.x &&
      this.pos.x - this.r < paddle.pos.x + paddle.w;

    if (withinX && withinY) {
      if (this.vel.x < 0) {
        this.pos.x = paddle.pos.x + paddle.w + this.r;
      } else {
        this.pos.x = paddle.pos.x - this.r;
      }
      this.vel.x *= -1;

      if (paddle === leftPaddle) {
        jasonDeruloSong.stop();
        babySong.play();
      }
       if (paddle === rightPaddle) {
         babySong.stop();
        jasonDeruloSong.play();
      }
      


      // Stretch: add angle variation based on where the ball hits the paddle
      // this.vel.y += (this.pos.y - paddle.pos.y - paddle.h / 2) * 0.1;
    }
  }

  show() {
    fill(255, 170, 70);
    circle(this.pos.x, this.pos.y, this.r * 2);
  }

  reset() {
    this.pos.set(width / 2, height / 2);
    // random([-1, 1]) picks randomly from an array — a handy pattern for direction
    // this.vel.set(random([-1, 1]) * this.xSpeed, random([-1, 1]) * this.ySpeed);
  }
}

/* ----------------- UI Helpers ----------------- */
function drawCourt() {
  stroke(80);
  strokeWeight(2);
  for (let y = 10; y < height; y += 18) {
    line(width / 2, y, width / 2, y + 8);
  }
  noStroke();
}
