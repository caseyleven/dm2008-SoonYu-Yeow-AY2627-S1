# Week 4 — Object-oriented Programming

<!-- Replace ## with the week number and Topic Name with the week's focus -->
<!-- You may also refer to each week's slide for the Topic Name -->
<!-- e.g. Week 03 — Arrays & Functions -->

---

### Activities

| Activity | What I Made                   |
| -------- | ----------------------------- |
| `4a`     | I made an interactive sketch where the user could press their mouse and switch between different cookie flavours visually at random. |
| `4b`     | I relied on a guided activity sketch to achieve a few things: making the agents in the sketch bounce, giving them a lifespan, and how to make a backwards loop. |

<!-- Add or remove rows to match the activities for this week. -->

---

### This Week

<!-- A short, informal summary of what you explored across the week's activities. What did you make? What clicked? What didn't?
     A few sentences is all you need — write it like a journal entry, not a report. -->

     
During this class, I learned about classes and how they could be applied to a single object. I also think this is when I learned about agents. They can actually just be named anything, but the nice part is that you could create your own classes and functions so there were more possibilities and editability making a sketch. 

For 4a, I used the guided activity to help me out with the cookies and how to change them at will. There were two flavours, chocolate and vanilla. I added a third flavour 'matcha'. Somehow I got stuck on how to switch between them. I think initially I tried to use the '1' '2' '3' key functions but I think halfway through I thought using the mouse was a lot easier. From there I put the cookie flavours in an array and made them get picked at random under the randomFlavour function.

I did struggle with 4b quite a lot, although I think it was because I thought it was a huge jump between simple cookies to a bajillion agents. Looking back, the fundamentals both sketches used were the same, but I got easily overwhelmed. I think my biggest obstacle was to figure out how to do the backwards loop so the sketch wouldn't cut off occasionally. After some advice from Kapi, I got it working. Each agent now shrunk and disappeared, bounced, and also... had a trail effect. I already told you I love trail effects.

---

### Output

**4a**

![screenshot](readme-assets/Screenshot%202026-09-02%20160901.png)

![screenshot](readme-assets/Screenshot%202026-09-02%20162315.png)

![screenshot](readme-assets/Screenshot%202026-09-02%20162320.png)

![screenshot](readme-assets/Screenshot%202026-09-02%20162326.png)


I'm sorry that there isn't much going on in the pictures, but really I just added one extra flavour and switched between them using clicks on my mouse. It doesn't look flashy but at least it works.

---

**4b**

![screenshot](readme-assets/Screenshot%202026-09-02%20165449.png)

In the beginning it looked like this. You can see why i was overwhelmed.

![screenshot](readme-assets/Screenshot%202026-09-02%20170401.png)

![screenshot](readme-assets/Screenshot%202026-09-02%20170614.png)

![screenshot](readme-assets/Screenshot%202026-09-02%20170751.png)

![screenshot](readme-assets/Screenshot%202026-09-02%20172154.png)

I think around here was when I managed to get the shrinking working, by just using -= (insert random number here).

Kapi also leaked the secret code to making the agents bounce, which was really just our coordinates multiplied by a bunch of negative numbers.

Using if (agents[i].sz <= 0) {
  agents.splice(i, 1);
}

allows the agents to disappear once they shrink, by killing off the agent that appears first in that array, which must surely be the first to disappear.

![screenshot](readme-assets/Screenshot%202026-11-20%20012217.png)

I began to go crazy with trail effects.

![screenshot](readme-assets/Screenshot%202026-11-20%20012227.png)

![screenshot](readme-assets/Screenshot%202026-11-20%20012239.png)

![screenshot](readme-assets/Screenshot%202026-11-20%20012245.png)

Unfortunately with most trail effects, they leave behind a slight discoloration.



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
