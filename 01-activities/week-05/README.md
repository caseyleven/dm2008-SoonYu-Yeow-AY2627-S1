# Week 5 — Object-oriented Programming (Part II)

<!-- Replace ## with the week number and Topic Name with the week's focus -->
<!-- You may also refer to each week's slide for the Topic Name -->
<!-- e.g. Week 03 — Arrays & Functions -->

---

### Activities

| Activity | What I Made                   |
| -------- | ----------------------------- |
| `5a`     | I made a sketch where two balls bounce and when they collide, another smaller ball would appear, with the words 'new baby!'. |


<!-- Add or remove rows to match the activities for this week. -->

---

### This Week

<!-- A short, informal summary of what you explored across the week's activities. What did you make? What clicked? What didn't?
     A few sentences is all you need — write it like a journal entry, not a report. -->

Here, I wanted two balls to create one new ball whenever they collided. First, it was a lot harder for me to figure out how to create one new agent. I asked Kapi for help, and at this point it grew apparent that I was getting more and more ambitious with my sketch. 

Kapi introduced a wasColliding check that only turned false when the balls separated. This was to ensure that the balls wouldn't keep producing new agents as they collided for a few frames, which, as it turns out, was the cause of my sketch being frozen in my initial attempt.

---

### Output

![screenshot](readme-assets/Screenshot%202026-09-09%20155843.png)
![screenshot](readme-assets/Screenshot%202026-09-09%20162821.png)
Initial stages of building my sketch.
![screenshot](readme-assets/Screenshot%202026-09-09%20163130.png)
At this point, I had managed to create a new agent, but it froze there...
![screenshot](readme-assets/Screenshot%202026-09-09%20163237.png)
...and gave me an error message. I couldn't comprehend why I was freezing, not understanding that 1. the collision was happening for several frames, freaking the sketch out, and 2. I was doing all this in show(), which was not suited for frame-by-frame interactions like this.
![screenshot](readme-assets/Screenshot%202026-09-09%20164441.png)
![screenshot](readme-assets/Screenshot%202026-09-09%20165011.png)
At some point, I took Kapi's advice and adjusted the code accordingly. Then I thought some trail effects would look cool, so I tried adding them.
![screenshot](readme-assets/Screenshot%202026-09-14%20205145.png)
OK, obviously after this I stopped using trail effects, as it seemed to be causing more trouble for me.
![screenshot](readme-assets/Screenshot%202026-09-14%20205603.png)
I resized the rainbow background (which was really just the rainbow emoji sized up) to fit canvas.
![screenshot](readme-assets/Screenshot%202026-09-14%20205631.png)
![screenshot](readme-assets/Screenshot%202026-09-14%20205820.png)
And hooray! Lots of babies were created.
<!-- Drop a screenshot, photo, or GIF of something you made this week.
     Save it to a readme-assets/ folder inside this week's folder.
     Made more than one thing worth showing? Add more images. -->

---

<!-- ─────────────────────────────────────────────────────
     GOING FURTHER — if you want to document more, here are some ideas:

     ### 1a — Activity Name
     ![screenshot](readme-assets/activity-1a.png)
     What you tried, what you discovered.

     ### 1b — Activity Name
     ![screenshot](readme-assets/activity-1b.png)
     What you tried, what you discovered.

     ### 🧩 Something I Found Interesting
     A line of code, a technique, a happy accident — paste it here.
     ```js
     // your code here
     ```

     ### ❓ Questions I'm Sitting With
     Anything unresolved, something you want to revisit, or a rabbit hole you fell into.

     ### 🔗 References
     Links to anything that helped or inspired you this week.
     ───────────────────────────────────────────────────── -->
