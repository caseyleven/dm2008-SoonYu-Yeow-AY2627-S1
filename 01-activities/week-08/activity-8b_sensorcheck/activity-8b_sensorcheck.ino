// DM2008 — Activity 8b
// Type 1: Phototransistor Sensor (10 min)

// SIG connected to analog pin A0
const int lightPin = A0;

void setup() {
  // start communication with your computer at 9600 baud
  Serial.begin(9600);
}

void loop() {
  int luxVal = analogRead(lightPin); // read light level (0 = dark, 1023 = bright)
  Serial.println(luxVal);            // print the value to the Serial Monitor
  delay(100);                        // slow down the output so it's easier to read
}

// DM2008 — Activity 8b
// Type 2: Force Sensor (10 min)

// sensor connected to analog pin A0
const int forcePin = A0; 

void setup() {
  Serial.begin(9600);
}

void loop() {
  // read pressure (0 = none, 1023 = max)
  int forceVal = analogRead(forcePin);
  
  Serial.println(forceVal);
  delay(100);
}

// DM2008 — Activity 8b
// Type 3: Ultrasonic Sensor (10 min)

// sensor connected to analog pin A0
const int ultraPin = A0; 

void setup() {
  Serial.begin(9600);
}

void loop() {
  int duration = analogRead(ultraPin);             // raw reading from the sensor
  float distanceCM = (duration * 520.0) / 1023.0; // convert to centimeters

  // Clamp to the sensor's reliable range
  if (distanceCM < 2) {
  	distanceCM = 2;
  }
  if (distanceCM > 500) {
  	distanceCM = 500;
  }

  // Print label and value on the same line, then move to the next line
  Serial.print("Distance: ");
  Serial.print(distanceCM, 1);
  Serial.println(" cm");

  delay(100);
}