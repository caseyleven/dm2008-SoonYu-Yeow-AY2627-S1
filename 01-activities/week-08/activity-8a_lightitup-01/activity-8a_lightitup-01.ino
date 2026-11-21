// DM2008 — Activity 8a
// Type 2: On/Off Control (10 min)

// the pin your LED is connected to
int ledPin = 13;

void setup() {
  pinMode(ledPin, OUTPUT); // tell Arduino this pin will send signals, not receive them
}

void loop() {
  digitalWrite(ledPin, HIGH); // LED on
  delay(300);
  digitalWrite(ledPin, LOW);  // LED off
  delay(500);
}

// DM2008 — Activity 8a
// Type 3: Fade Control (10 min)

int ledPin = 9;     // must be a PWM pin (~)
int brightness = 0; // current brightness level (0–255)
int fadeAmount = 5; // how much brightness changes each step

void setup() {
  pinMode(ledPin, OUTPUT);
}

void loop() {
  analogWrite(ledPin, brightness);

  brightness += fadeAmount;

  // When brightness hits 0 or 255, reverse the direction
  if (brightness <= 0 || brightness >= 255) {
    fadeAmount = -fadeAmount;
  }

  delay(10);
}

// DM2008 — Activity 8a
// Combination Challenge (15 min)
//
// The always-on LED is handled purely by wiring (5V rail) — no code needed for that one.

int fadeLED = 9;     // PWM pin for fade control (~)
int blinkLED = 13;   // Digital pin for on/off blink

int brightness = 0;  // current brightness level (0–255)
int fadeAmount = 5;  // how much brightness changes each step

void setup() {
  pinMode(fadeLED, OUTPUT);
  pinMode(blinkLED, OUTPUT);
}

void loop() {
  // Blink LED
  digitalWrite(blinkLED, HIGH);
  delay(100);
  digitalWrite(blinkLED, LOW);
  delay(100);

  // Fade LED
  analogWrite(fadeLED, brightness);
  brightness += fadeAmount;

  // Reverse direction at brightness limits
  if (brightness <= 0 || brightness >= 255) {
    fadeAmount = -fadeAmount;
  }

  delay(30);
}