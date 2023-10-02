# Quailty Check With Computer Vision Algorithms

_2023.09.30._

---

This was my thesis project, so if you want to learn more, or you want to read the full doc, you can read it here.

## Introduction

During the manufacturing processes, critical/difficult steps appear many times, which influence the final outcome drastically. Today, so may solutions out there for these type of problems. These days there are plenty of tools and technologies avalaible, that can help us create automatic quality control for these. Given the problem, a company manufacturing break systems, wants to improve its manufacturing processes, by quality control of the installation of a Seeger ring.

As a solution to this, we plan to create an algorithm that works with computer vision and machine learning, running on a Rasberry Pi, which monitors the parts through it’s camera. To overcome the difficulties of the situation, a box is made for the Pi and the camera with 3D printing, in which they can be placed in the production line environment. Plus LED lighting on the camera to help take better photos.

So overall, a fast, accurate, but above all, practical, simple, and inexpensive solution must be provided to the partner company to automate the quality assurance of this critical step.

## The Problem

In this project, the problem i wanted to solve, is that there was a step during an assembly, when the operator applies a ring on the top of an axis which is on the top of a spring. The problem was that, if the ring doesn't applied correctly, the spring pushes the axis up, and the product would not work safely.

The specificity of this problem is that, this assembling step is made under a press, so it was complicated to see the ring.

## Data

The first task when you make a project like this, is to figure it out how to set up the camera, which angle could show the object in the best representation, how you would set up the lights and so on. I tried a few angles, and put a LED on the front of the camera to assure a good light to the environment. Here is some example from the first tries:

<center><img src="http://www.bormilan.com/seeger1.png" width="80%" height="80%"></center>

If you thinks it is a good set up, you can start gathering data, that you can use for researching the possible solutions.

My plan was to use some kind of Machine Learning based solution, so I had to create a lot of picture from the object. It is important to know that if you use a Machine Learning model, you need to put a lot of work and time into this step. Some people say this is the most important step, because the core of an ML solution is data. I agree with it because my experience confirms it, I will write the details later on this article.

So I created a huge amount of data, with different angles, lights and in some cases I made the ring in a "wrong" position for the negative training data.

## Models

At first time I thought that something classification will do the trick, so I started trying models, research what models could work in my case. I found a lot of good option, but at some point I realised what if I try a lot of them, and compare the result with each other so that I can pick the best two or three.

I tried seven different models, and I used cross validation with five batches. You can see an example result below.

<center><img src="http://www.bormilan.com/seeger2.png" width="70%" height="70%"></center>

So after the tests and the research, I picked two machine learning model, the <ins>Knn</ins> and the <ins>SVC</ins> classifiers. Besides I worked on the deep learning direction too, I tried some pre-trained <ins>neural network</ins>, but the custom network I made by myself gave the best result.

I needed to convert the image, or extract the features with some algorithm to make the data compatible with the <ins>knn</ins> and <ins>SVC</ins> classifier. For this purpse, I used the [HOG](https://learnopencv.com/histogram-of-oriented-gradients/)Histogram of Oriented Gradients feature descriptor. With this I made one dimensional data from the two dimensional image.

My custom network design looked like this:

```python
def createModel():
       model = Sequential()
       model.add(Conv2D(32, (3, 3), padding='same', activation='relu', input_shape=[400, 400, 3]))
       model.add(Conv2D(32, (3, 3), activation='relu'))
       model.add(MaxPooling2D(pool_size=(2, 2)))
       model.add(Dropout(0.25))
       model.add(Conv2D(64, (3, 3), padding='same', activation='relu'))
       model.add(Conv2D(64, (3, 3), activation='relu'))
       model.add(MaxPooling2D(pool_size=(2, 2)))
       model.add(Dropout(0.25))

       model.add(Conv2D(64, (3, 3), padding='same', activation='relu'))
       model.add(Conv2D(64, (3, 3), activation='relu'))
       model.add(MaxPooling2D(pool_size=(2, 2)))
       model.add(Dropout(0.25))
       model.add(Flatten())
       model.add(Dense(64, activation='relu'))
       model.add(Dropout(0.5))
       model.add(Dense(4, activation='softmax'))
  return model
```

## Result

Besides the fact that these models perfomed perfectly on paper, in a real environment it was awful sadly. I asked to myself why? My data is good, my models training prefectly and I have test and validation datasets too and I made a couple of other things, to prevent overfitting.

The answer is that all the models are overfits. Yes. There was too much little difference between the pictures I taken under the data collecting step, and the real word environment. So I started making a ton of new image, but sadly it didnt solved the problem.

Under the overwhelming data gathering, I realised that I can solve this problem in another way than classifying the images.

## The Solution

The idea was to detect the two key points of the ring, and then measure the distance between the two detected points.

### Object Detection

So the first task was to make a detection trained to detect the two specific points of the ring. I remembered that we made a simple face detection model at one of the classes I had, so I started implementing that algorithm.

In this solution, I used a the Knn classifier to classify each region of the image. So I made a "sliding window" algorithm that iterates through the image pixels and classifies every region if that region is the object we want to find. Here you can see how the detection developed through the process:

<center><img src="http://www.bormilan.com/seeger3.png" width="80%" height="80%"></center>

I think its a really good result, and I find interesting and awesome that you can make complex things like object detection, with just "simple" machine learning models and proper data preparation, without any convolutional neural network.

As you can see on the picture, the final solution makes multiply detections still. The most popular method to solve this, to pick the best and throw the other detections away. I made something else, because I felt that was easier in this case.

I calculated a center point from the mean of each detection rectangle center point. With this, I made a good and simple method that allows to the detection model to make multiply detections.

### Distance Measurement

Atfer the succesfull detection, I had two coordinate pairs about the two key points of the ring.

There are several distance measurement method out there, and every one of them has its ups and downs. I stated using the simple euclidean distance metric, because thats the most popular one, every one of us learned it at highschoolthats the most popular one, every one of us learned it at highschool. It was good, but not perfect. I realised that the vertical distance is important in these cases, so I switched to the manhattan metric. It was the best idea, the results were just perfect.

I had three bad and six good test images, you can see the distance results in a table with each metric.

<center><img src="http://www.bormilan.com/seeger4.png" width="70%" height="70%"></center>

In the two rows that I marked with the red rectangles, you can see how the manhattan metric increased some of the good cases and separated the good from the bad, better that the euclidean.

## Conclusion

I made a lot of progress with image classification, and Im not saying that direction was bad, but I think the other direction is better in my point of view. I think with the detection + distance measurement needs fewer training data, and its more reliable at the end of the day. Im saying this, because the distance measurement is just a pure mathematical method, so its consistent. The only way this solution can make a wrong result, is that if the detection make a false detection.

I think my detection model performed good enough, but later I trained a [Yolo](https://pjreddie.com/darknet/yolo/) model to detect the two key points of the ring, and it was perfect and a lot faster than my custom detector.

I made a good solution for this problem in my opinion. It was super fun and interesting to working on, this project made me like the field of research and development.
