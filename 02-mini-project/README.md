# Mini Project — Bieber V Derulo 🎵🎧💃🎾🥎🕺🎶

<!-- Replace "Title" with the name of your project, e.g. "Mini Project — Pong Remix" -->

---

### The Project

<!-- What did you build and what makes it yours? A few sentences is enough.
     What did you change, add, or push beyond the scaffold? -->

My sketch features a game of Pong between Justin Bieber and Jason Derulo. This is achieved by having their faces replace the pong rackets. As the ball collides with their faces, a song from the artist will play. When one side wins, that side's artist will sing a song over the victory screen.

I also made a start screen, because the ball bouncing immediately after the sketch had been loaded was too sudden for me.

---

### Output

I got the pong game working pretty quickly using simple bounce mechanics. The hard part was customising it and adding the sound effects.

![screenshot](readme-assets/Screenshot%202026-09-15%20205753.png)

I first thought that I should make a start screen, because you needed to press on the screen for the ball to move anyway, and this would make it less jarring.

![screenshot](readme-assets/Screenshot%202026-09-15%20212317.png)

Here is what the game looked like after the start screen. Pretty basic.

![screenshot](readme-assets/Screenshot%202026-09-16%20151943.png)

I also started making victory screens for each side. I called them left side and right side for now so I knew the victory screens were assigned correctly.

![screenshot](readme-assets/Screenshot%202026-09-16%20163611.png)

Later I refined the font for the start screen. However, I wanted a little 'screensaver' of the ball bouncing around in the start screen to keep players entertained. For some reason I had some trouble coding this in.

I remember Kapi telling me to just not bother with making it an extra agent and just create a new ellipse just for the start screen. I still couldn't figure that out so I did a workaround, which was just calling a new variable 'introBall' and have it create an agent 'ball', within the start screen.

![screenshot](readme-assets/Screenshot%202026-09-16%20163618.png)

Here was me refining the look of the scoreboard and the screen.

![screenshot](readme-assets/Screenshot%202026-09-16%20163627.png)

![screenshot](readme-assets/Screenshot%202026-09-16%20163633.png)

![screenshot](readme-assets/Screenshot%202026-09-16%20163644.png)

Scoreboard was working well.

![screenshot](readme-assets/Screenshot%202026-09-19%20180659.png)

OK, here I thought of implementing Justin Bieber and Jason Derulo's faces inside, and so I thought they should be squares, just to make things simpler, and imported pngs I made transparent and resized to fit the square ratio.

![screenshot](readme-assets/Screenshot%202026-09-19%20183417.png)

Hello Justin Bieber and Jason Derulo

![screenshot](readme-assets/Screenshot%202026-09-19%20210305.png)

You can't hear it just yet (wait for the recording) but they play their songs as they hit the ball. And collision seems natural enough.

![screenshot](readme-assets/Screenshot%202026-09-19%20210323.png)

Victory screen for Jason Derulo. Jason Derulo sings his name.

![screenshot](readme-assets/Screenshot%202026-09-19%20215646.png)

Victory screen for Justin Bieber. The entire song of 'Baby' plays. This makes loading the sketch veeeery veeeery slow.

<!-- Drop a screenshot or GIF of your finished project.
     Save it to a readme-assets/ folder inside this project folder.
     Got more than one good screenshot? Add them. -->

[Watch Online](https://youtu.be/jb2qDEjVJs4)

Just a short clip of my awesome pong game...

<!-- Replace the link above with a URL to a screen recording or video of your project.
     ⚠️ Make sure the file or page is set to public before submitting. -->

---

### ✍️ Reflection

<!-- 200–300 words on your process. Write freely — this isn't an essay.
     Some prompts to get you started:
     — What did you set out to make, and how did the result compare?
     — What inputs does your sketch respond to, and how did you approach that?
     — What was your biggest challenge, and how did you work through it?
     — What would you push further if you had more time? -->

I just wanted to make a silly sketch I would have fun doing. At the time I had a bunch of other stressful assignments and coming back to coding this made me enjoy it a bit more. I do wish I could have added more sound effects, but my sketch was already having taking a long time loading from all the songs I put on it.

This brought me to my next point: I think if I were going to make another sketch with audio effects, I would try to keep it as minimal as possible. The loading times really interfered with my testing.

My sketch was very simple and of course based off of Kapi's original Pong template. I just added some game states, extra audio effects, and funny pictures to make it more entertaining.

One of the big problems was figuring out how to make the song play ONCE on the victory screen. Initially it kept playing the song over and over again every frame and it sounded crazy. I made up a bunch of variables and went through trial and error. Turns out I didn't even need any extra variables. I just needed to set some conditions like...

   if (gameState !== "gameover" && (leftScore === 3 || rightScore === 3)) {
    gameState = "gameover";
babySong.stop();
    jasonDeruloSong.stop();


...stopping all songs from playing as soon as the game ends and also making sure a song only played once.

I tried my best not to rely on AI for this. I asked claude why my space bar wasn't working and turns out I just mispelled a variable; I mean, I just feel embarrassed that I could have just checked my own code instead of asking around.

If I had more time, I would have definitely tried to add a disco ball to the victory screens. I don't know how I could do it. But I would definitely try.

---

<!-- ─────────────────────────────────────────────────────
     GOING FURTHER — want to document more? Try any of these:

     ### ✨ What I Changed
     A short list of the additions and modifications you made to the scaffold.
     - Changed the paddle to use mouse tracking instead of keyboard
     - Redesigned the visual language with a retro CRT aesthetic

     ### 🔍 Code Structure
     Briefly explain how your files are organised.
     - `sketch.js` — main game loop
     - `Ball.js` — ball class with collision logic
     - `assets/` — sprites and sounds

     ### 🧩 Something I'm Proud Of
     A snippet of code, a design decision, a moment where it clicked.
     ```js
     // your code here
     ```

     ### 🔗 References
     Anything that helped or inspired you — tutorials, artworks, tools.
     ───────────────────────────────────────────────────── -->
