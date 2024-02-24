# Quality Check With Computer Vision Algorithms

September 30, 2023

---

This was my thesis project, so if you want to learn more, or you want to read the full doc, you can read it here.

## Introduction

During the manufacturing processes, critical and difficult steps often occur, which can have a significant impact on the outcome. Fortunately, there are now numerous tools and technologies available to address these types of problems. In this case, a company that manufactures brake systems is looking to enhance its manufacturing processes by implementing quality control for the installation of a Seeger ring.

To tackle this issue, our proposed solution involves creating an algorithm that utilizes computer vision and machine learning. This algorithm will run on a Raspberry Pi, which will monitor the parts using its camera. To overcome the challenges posed by the production line environment, we will design a 3D-printed box to house the Pi and the camera. Additionally, LED lighting will be implemented to improve the quality of the captured photos.

In summary, our goal is to provide the partner company with a fast, accurate, practical, simple, and cost-effective solution to automate the quality assurance of this critical step.

## The Problem

The problem I aimed to solve in this project was related to a specific step in the assembly process. During this step, the operator needed to apply a ring on top of an axis that sits on a spring. If the ring was not applied correctly, the spring would push the axis up, resulting in an unsafe product.

The challenge in this problem was that the assembly step took place under a press, making it difficult to see the ring.

## Data

The first task in a project like this is to determine how to set up the camera to capture the best representation of the object, including the angle and lighting. I experimented with various angles and added an LED to the front of the camera to ensure adequate lighting. Here is an example from the initial attempts:

<center><img src="http://www.bormilan.com/seeger1.png" width="80%" height="80%"></center>

If you are satisfied with this setup, you can start gathering data for researching possible solutions.

Since I planned to use a Machine Learning-based solution, I needed to create a large number of pictures of the object. It is important to note that when using a Machine Learning model, this step requires significant effort and time. Some people consider it the most crucial step because the quality of the data is essential for an ML solution. I agree with this perspective based on my own experience, which I will discuss in more detail later in this article.

Therefore, I generated a substantial amount of data, capturing the object from different angles and lighting conditions. In some cases, I intentionally placed the ring in a "wrong" position to create negative training data.

## Models

When I began working on my project, I experimented with different models to find the most suitable one. I researched various options and decided to compare the results of several models to choose the best two or three. After trying out seven different models and using cross-validation with five batches, I was able to narrow down my choices. An example result is shown below.

<center><img src="http://www.bormilan.com/seeger2.png" width="70%" height="70%"></center>

Based on my tests and research, I selected the Knn and SVC classifiers in machine learning. I also explored deep learning and tested some pre-trained neural networks, but ultimately found that the custom network I designed myself produced the best results. To make the data compatible with the Knn and SVC classifiers, I used the HOG (Histogram of Oriented Gradients) feature descriptor to extract features from the image and convert it into one-dimensional data.

Here is a diagram of my custom network design:

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

Despite the fact that these models performed perfectly on paper, they performed poorly in a real-world environment. I asked myself, why? My data is good, my models are trained perfectly, and I have test and validation datasets. I also took several measures to prevent overfitting.

The answer is that all the models are overfitting. Yes, there was very little difference between the pictures I took during the data collection step and the real-world environment. So, I started capturing a large number of new images, but unfortunately, it didn't solve the problem.

During the extensive data gathering process, I realized that I can solve this problem in a different way rather than classifying the images.

## The Solution

The goal was to detect the two key points of the ring and measure the distance between them.

### Object Detection

The first step was to create a detection algorithm trained specifically for detecting the two points of the ring. I remembered that we had created a simple face detection model in one of my classes, so I started implementing a similar algorithm.

For this solution, I used a K-nearest neighbors (Knn) classifier to classify each region of the image. I developed a "sliding window" algorithm that iterates through the image pixels and classifies each region to determine if it contains the desired object. The image below shows the progress of the detection process:

<center><img src="http://www.bormilan.com/seeger3.png" width="80%" height="80%"></center>

I believe the results are quite good, and I find it interesting and impressive that we can achieve complex tasks like object detection using "simple" machine learning models and proper data preparation, without needing a convolutional neural network.

As you can see in the picture, the final solution still produces multiple detections. The most common approach to address this is to select the best detection and discard the others. However, in this case, I decided to take a different approach that I found easier.

I calculated a center point based on the mean of the center points of each detection rectangle. This allowed me to develop a simple and effective method that allows the detection model to produce multiple detections.

### Distance Measurement

After successfully detecting the ring's key points, I obtained two pairs of coordinates.

There are several methods for measuring distance, each with its own strengths and weaknesses. I initially used the simple Euclidean distance metric, as it is the most popular and widely taught in high school. While it was good, it wasn't perfect. I realized that the vertical distance is important in these cases, so I switched to the Manhattan metric. This turned out to be the best choice, as the results were nearly perfect.

I tested the solution with three bad and six good images. The table below shows the distance results using each metric:

<center><img src="http://www.bormilan.com/seeger4.png" width="70%" height="70%"></center>

In the two rows marked with red rectangles, you can see how the Manhattan metric improved some of the good cases and better distinguished them from the bad cases compared to the Euclidean metric.

## Conclusion

I have made significant progress with image classification, and while I don't believe the direction I initially took was necessarily bad, I personally think the alternative direction is superior. In my opinion, using detection combined with distance measurement requires less training data and provides more reliable results in the end. I say this because distance measurement is purely mathematical, making it consistent. The only way this solution can yield incorrect results is if the detection itself produces a false positive.

I am satisfied with the performance of my detection model, but later on, I trained a [Yolo](https://pjreddie.com/darknet/yolo/) model to detect the two key points of the ring. It performed flawlessly and was much faster than my custom detector.

Overall, I believe I have found a good solution for this problem. Working on this project has been incredibly enjoyable and stimulating, and it has cultivated my interest in the field of research and development.
