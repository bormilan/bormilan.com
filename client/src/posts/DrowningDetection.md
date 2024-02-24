# Project Kickoff: Drowning Detection

September 21, 2023

---

This is a kickoff, I wanted to share about a project I've been working on for the past month. Unfortunately, I got sick and didn't have much time to work on it, so progress has been slow.

## What is this project about?

Well, my friend told me that every summer, multiple people drown in Lake Balaton. This got me thinking about how to prevent drowning and reduce the number of cases. As someone who has experience in software development and computer vision, I decided to explore the possibility of detecting people with object detection/segmentation methods.

## Concept:

My plan is to use models like Yolo or SAM to detect people, as they are easy to use and superior in these areas. I want to divide the picture or video into smaller regions and track the number of people in each region. This will help me detect any suspicious activity.

<center><img src="http://www.bormilan.com/img1.png" width="100%" height="100%"></center>

## Problems:

- However, I have encountered some problems along the way. Firstly, data gathering has been difficult. I need a large amount of good-quality images or video frames with positive training data. I have tried searching the web, but it's not enough. I need to make my own videos, but it's getting colder now, and no one swims in September.
- Secondly, I'm not sure about the best camera angle. I think it would be best to use a drone, but I'm not sure how to implement it practically. Maybe a tall pole would work?
- Thirdly, I need to figure out how to deal with distance. If the camera is not perpendicular to the ground, some regions will be closer and some farther from the camera. This inconsistency makes it challenging to detect people at different distances. I need to gather and annotate data like that.
- Lastly, tracking movement has been a challenge. Sometimes people swim fast without going out of the water. It's difficult to determine if someone has drowned or not. A time threshold is not always reliable because a little child can stay underwater for up to 20 seconds, but an adult can stay for up to 2 minutes

---

If you find this project interesting, please share your thoughts. I would appreciate any suggestions you may have. Thank you for reading! This is the first "Phobos" post, and I wanted to keep it simple and short. The project is still in its early phase.
