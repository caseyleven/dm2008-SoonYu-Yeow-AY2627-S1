# Final Project — Planet Maker 🚀🪐🌕🌑☄️🛸

<!-- Replace "Title" with the name of your project -->

---

### The Project

<!-- What is your project and what does it do?
     What experience does it create, and who or what does it respond to?
     A short paragraph is ideal — make it something you'd be happy for anyone to read. -->

Isaac, Jacee, and I went about making a Planet Maker. The planet is fully customisable with sliders, and the plan was to have the music in the background change accordingly to these adjustments as well. Since I had a background in music, I was in charge of coding all sound-related features, while Isaac and Jacee worked on the UI and visuals.

---

### Output

I took a bunch of video progress of my music setup but lost most of it; I'll explain along some pictures and videos I do have.

First, I knew that the project would use a bunch of sliders for modifications to the planet. However, I also didn't know if we were going to use dropdown options just yet. I included three sliders and one dropdown option just to check if the setup actually worked for controlling audio.

Secondly, I did not want any music files to bog down the loading time. I experienced this in my mini project, and hated it, so this time if there was a way to produce audio locally on p5js, I would take it.

I used the setup in activity 10 as a template, as it already had all the sliders ready to go. I also found out if you create sliders in draw(), p5js will keep drawing them and make your sketch look crazy.

![screenshot](readme-assets/Screenshot%202026-10-31%20170807.png)

![screenshot](readme-assets/Screenshot%202026-10-31%20172239.png)

The template I used...

![screenshot](readme-assets/Screenshot%202026-11-21%20001049.png)

Really, the slider names were just placeholders.

For local beeps and boops, I used p5.oscillator-- which was probably the only way to make sounds natively. I chose the drop down menu to control the oscillator style, from sine to sqaure. I also knew I had to use drums and instrumentals to make the track sound fuller. Initially, I tried making a beat using hi hats, and kick drums. It sounded terrible. 

[Watch kick drums here](https://youtube.com/shorts/YE3o2qKXI2w?feature=share)

The bass drum sounded OK, but it was way too quiet and was missing that space atmosphere I wanted.

[Watch bass drums here](https://youtube.com/shorts/N2qTsiyJM64)

As per Isaac and Jacee's reccommendations, I listened to some Outer Wilds music, and it helped me in capturing that sci-fi vibe. I noticed most tracks had some kind of ambience, so I focused on implementing that as well.

When we first came up with the music idea, we knew there were two ways to go about it. One was to make the track completely customisable, and two was to make an already existing music track, but only certain instrumentals would come into play when customising the planet. 

Isaac preferred customisation, but I was worried about making it sound harmonious. In the end I decided on a middle ground, where all the instrumentals would at least be on the same key, similar pitch, and adjusting their pitch or speed in any way would affect other instrumentals as well, so the music wouldn't be compromised.

In order to do this, the oscillator would have to beep out C, D, E, G, and A, the notes on the pentatonic scale. Of course we could have done other keys, but C major was the most basic one I could go to. Now that we had a key, I needed to find an ambience track in C major, which fortunately was easy to find because... well, C major.

I replaced the bass drum with a heartbeat sound, as I thought it added an alien and organic beat to the track. I think the variable is still called bassDrum to this day, despite using a heartbeat sound... truly a relic from my experimental phase. 

![screenshot](readme-assets/Screenshot%202026-11-21%20143205.png)

Finally, the music sounded something like this, and was totally adjustable with pitch, drums, and speed settings.

[Watch first music draft here](https://youtube.com/shorts/lE_NRs3ZPcM)

Now it was time for the next hurdle, which was implementing this into the planet maker.

---

**Merging Our Code**

![screenshot](readme-assets/Screenshot%202026-11-21%20144333.png)

Of course, as you might expect, merging code was such a tedious task. Kapi reccommended using LLMs to help put our code together. It worked somewhat, but I think the biggest challenge was that in the preview, we could only hear the oscillator, but not the ambience or the drums.

I also had to find out how to map the slider values to certain controls, as one slider could affect both pitch and volume. 

Just imagine-- me, Jacee, and Isaac sitting at the table with one hour left to class. We knew this was going to take long, but not this long. Finally after a bunch of Claude interference, we got the code up and working, and all the music features were working. I felt really bad for not being able to get it running faster. Literally the three of us were trying to figure out why the music wasn't playing.

But now it did work, and we got to present the finished product to the class.

[Watch our planet maker here](https://youtu.be/4hgHZjjsU2Y)

Isaac had the idea to add a Sun Sfx to make it sound like we were orbiting around the sun, and strings that correlate with the weather slider. The strings weren't in C major, but it did sound eerie and cool, so I left it alone.

After the presentation, I wanted a bit more impact on the sound when the planet grows bigger, so when the magnitude went up, so did the heartbeat volume.

When the planet got colder, it followed a set note pattern, but when it got hotter, the music had a higher chance of mutation (giving the illusion of notes bouncing around as it gets hotter).

I noticed that when the planet was more acid-y, a.k.a. more yellow, the clouds are hard to see, I made it so the cloud opacity increased just a little when the acidity went up.

<!-- Drop a screenshot or GIF of your project.
     Got more to show? Add more images — let the work speak for itself.
     Save everything to a readme-assets/ folder inside this project folder. -->



<!-- Replace the link above with a URL to a screen recording or video of your final project.
     ⚠️ Make sure the file or page is set to public before submitting. -->

---

### ✍️ Reflection

<!-- 200–300 words on your process and outcome. Write freely — this is your story to tell.
     Some prompts to get you started:
     — What did you set out to create, and how did the final result compare to your original vision?
     — How is your project structured — what inputs does it respond to and how did you approach the code?
     — What were your key visual and/or sonic design decisions, and why?
     — What was your biggest challenge, and how did you work through it?
     — What would you change, add, or explore further given more time? -->


It was such a rush trying to get this project out for presentation because I had a lot of things going on at the time. But I commend my team for being so proactive and working on their own parts. Like Kapi said, we had a very clear idea and linear path towards what we wanted to achieve, and we did exactly that. I do wish I could have contributed more to my group, because I feel like I was just doing all the easy parts. Even towards the end we were finding it hard to merge the music together with the planet maker; I wish I figured how to do it faster. 

Regarding the music, initially we wanted to add some sort of strings like guitar, but it feel through because it simply sounded too chaotic. I think later on the violins were a better stand-in for strings. 

We spent a bit of them deciding what slider should correlate with what music aspect. For example using the acidity to control the oscillator styles-- I thought that was a good choice. Some things were easier to decide, like temeperature slowng down tempo of the heartbeats, or the magnitude inversely affecting the pitch.

I already said this, but my biggest challenge was merging all our parts together. I was dreading it as I worked on my part, and I knew it was going to be a pain. Asking Claude to help us implement the music code still took a lot of time. We kept persistently fine-tuning the sketch until I could finally get the music working.

If I had more time, I would definitely try my hand at merging the code manually. It might be even more painful than what I went through, but I feel like a lot of my code has been moved around and I can't really understand it as much because I relied on an LLM to merge it together. I had to re-read multiple sections to understand what my own code was doing, which was a headache on its own.

---

<!-- ─────────────────────────────────────────────────────
     GOING FURTHER — want to document more? Try any of these:

     ### ✨ Features
     A short list of what your project does.
     - Responds to mouse position and velocity
     - Generates sound based on particle density

     ### 🔍 Code Structure
     How are your files organised?
     - `sketch.js` — main setup and draw loop
     - `Agent.js` — autonomous agent class
     - `assets/` — images and sounds

     ### 🛠️ Hardware (if applicable)
     List any physical components used.
     - Arduino Uno
     - Sensor type and model

     ### 🧩 Something I'm Proud Of
     A snippet, a decision, a moment where it all came together.
     ```js
     // your code here
     ```

     ### 🔗 References
     Tutorials, libraries, artworks, or research that informed your project.
     ───────────────────────────────────────────────────── -->
