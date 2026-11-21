# Sensor Jam — Pufferfish🦈🐟🐠🐡🎣

<!-- Replace "Title" with the name of your project, e.g. "Sensor Jam — Theremin Visualiser" -->

---

### The Project

<!-- What does your sketch do, and what physical input drives it?
     How does the sensor data translate into something on screen?
     A few sentences is all you need. -->

Inspired by the ultrasonic sensor, Isaac had the idea to create a pufferfish that blew up on the screen the closer you were to the sensor. This was our attempt to code it.

---

### Output


<!-- Drop a screenshot or GIF of your sketch in action.
     Got a photo of your physical setup too? Throw it in.
     Save everything to a readme-assets/ folder inside this project folder. -->

[Sensor Jam Test 1](https://youtube.com/shorts/ZXf1Bi1tkM0?feature=share)

Our goal was to first create a basic skeleton of the 'pufferfish'. Naturally, it would have two eyes, and as the fish expanded, the eyes would get further apart. We tested this with one eye first. It was honestly looking a little funky at that stage already. One of our big challenges was to get the eye to stay consistently on the body (ellipse).


[Sensor Jam Test 2](https://youtu.be/LqnT0Or5ArQ)


This time we tried two eyes, and the result was a little funny as well. I think we were coding on a smaller canvas, and when we switched to a bigger aspect ratio, the coordinates of the eyes were clearly off. At least the sensor worked fine; it expanded when we went near, and shrunk when we got further away.

This was overall an interesting project, considering it was our first time trying to create something with Arduino. It would also serve as a basis for our final project later on.

<!-- Replace the link above with a URL to a video of your project in action.
     ⚠️ Make sure the file or page is set to public before submitting. -->

---

### ✍️ Reflection

I really do have mixed feelings about Arduino. I know technically there are more advance hardware to work with, and this is meant to be basic, but as someone who has no background in coding, it was a steep learning curve. I felt kind of lost just playing around with the sensor. I think our testing went smoothly, but when we ran into an issue (like not being able to sense motion correctly), it was hard to rectify it as we weren't as familiar with Arduino code.
    
The templates Kapi gave us were really very useful, with room to learn and pick up the code we were taught into practice. I appreciate that I still got the opportunity to interact with tangible coding experiences.

---

<!-- ─────────────────────────────────────────────────────
     GOING FURTHER — want to document more? Try any of these:

     ### ✍️ Reflection
     A short write-up of your process — what worked, what didn't,
     and what you'd take further if you had more time.

     ### 🛠️ Hardware
     List the physical components you used.
     - Arduino Uno
     - Ultrasonic sensor (HC-SR04)

     ### 🔍 Sensor Mapping
     How does your sensor data map to visual or sonic output?
     e.g. "Distance (0–400cm) → circle size (10–400px) using map()"

     ### 🧩 Something I Found Interesting
     A snippet, a technique, a happy accident.
     ```js
     // your code here
     ```

     ### 🔗 References
     Anything that helped — tutorials, datasheets, examples.
     ───────────────────────────────────────────────────── -->
