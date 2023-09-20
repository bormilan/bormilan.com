Hi!(Csőő)

This is a kickoff post about the project I started working on in the past month. I got an illness and I had very little time for this, so I have not make much progress.

What is this project:

So the goal is to try prevent drowning. I have a friend who told me that every summer multiple people drowns into the lake Balaton. So it would be an interesting problem to think on, how to make something that could reduce this number.

Because the closest fields to me are software development and computer vision, I started thinking about detecting people with object detection/segmentation methods.

Concept:

I want to detect people, with models like [Yolo](https://pjreddie.com/darknet/yolo/) or [SAM](https://segment-anything.com/), because they are easy to use and superior in this areas.(if you have any suggestions on the model, share with me)

My idea is to divide the picture/video into smaller regions, and store the number of people at every region. With this, I can track the states and detect if a region is suspicious.

![img1.png](img1.png)

Divide the picture into regions.

![img2.png](img2.png)

Look at the neighbor regions if someone left from a region.

![img3](img3.png)

Storing states in each region.

Problems:

Data gathering. I mean I how to collect the right data. I searched the web and I found some good but thats not enough. I need a large amount of good quality images(video frames), with some “positive” training data. So I decided to make some video, but the weather is getting colder and nobody swim in September.

Camera angle. Im thinking about that the best is to make from high like from a drone, but I dont know how to implement this in practice. Maybe a tall pole ?

How to handle if a person is on a region border ? Im thinking about storing states for multiply regions, for example four neighbor regions, in this way I can track the number the same way.

How to deal with distance ? If the camera is not completely perpendicular to the ground, some regions will be near and some are far from the camera. The inconsistency is the problem, if I want to detect people in different distances, I need to gather and annotate the data like that.

If you find it interesting, please share your thoughts.

Thanks for reading, I wanted to keep it simple and short, because this is the first “Phobos” post, and I wanted to publish ASAP, and also because this project is in an early phase.

If you have any suggestions, how to improve my writing share that too.