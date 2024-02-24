# Introduction

I want to share how my team chose the software development methodology for our research and development project. As a small team with diverse skills, we needed a flexible method to adapt to any issues or changes. We determined an agile approach was the best fit.

Our team consists of a front-end developer, a software testing engineer, an AI developer, and myself as a full-stack developer. However, we often switch roles and tasks depending on the project's needs. This allows us to utilize our diverse skill sets effectively.

To ensure high-quality results and minimize mistakes, we sought a framework to follow. I conducted extensive research on different methodologies to make an informed decision.

---

I came across several studies on the topic of software development methods. One idea that caught my attention was the combination of Scrum and Extreme Programming (XP) [https://www.arxiv-vanity.com/papers/2310.03248/]. After reading a paper on the subject, I realized that it would be important to explore different methods and determine which practices would work best for our team and our work. Upon further research, I found XP particularly interesting as it offers unique practices not found in Scrum, which was previously the only method I knew of. Agile, Scrum, and XP are the most popular options for software development and there are numerous case studies available online to explore: [link](https://www.ijert.org/research/case-study-of-agile-methodologies-in-field-of-software-development-IJERTV6IS110104.pdf). It's fascinating to see how different people compare and contrast these methods.

# Methodologies

## What is Agile?

Agile software development is an iterative and flexible approach to software development that prioritizes collaboration, customer feedback, and the ability to respond to changing requirements and priorities. It emphasizes delivering functional, high-quality software in small, incremental releases rather than in a single, large release.

## What is XP?

> “XP is a lightweight methodology for small to medium-sized teams developing software in the face of vague or rapidly changing requirements.” - Kent Beck

I started with this quote, because I think this describes perfectly. Of course, because this quote from the methodology’s inventor, Kent Beck.

So this method made by a programmer, who wanted to create a framework that provides good technical outcome, if you comply its practices.

Extreme Programming has five values, you need to keep in mind:

- Simplicity: Keep everything as simple as it is possible.
- Communication: Focuses on communication rather than documentation.
- Feedback: Continuous feedback and communication are the most important elements that help the team to keep the project along the line.
- Courage: You need to refactor the code frequently, to keep it healthy.
- Respect: Respect force the team members especially developers to deliver high quality work.

<ins>How would you program if you had all the time in the world?</ins>

- write tests
- restructure often
- talk with fellow programmers and with the customer often

XP can be defined with 12 practices. These practices are considered as the foundations of XP. They are all together shape the whole framework. These are small releases, metaphor, simple design, testing, refactor, pair programming, collective ownership, continuous integration, sustainable working hours, on-site client, and coding standards.

Practices are context-dependent, so not all practices fit with every team and/or project. Applying a practice is a choice, we don’t need to apply all of them, but the more we apply, the more we can improve the development process. We can apply the practices slowly, so we can apply only one and see its improvements, and then review if we need that practice.

I like the idea of testing the first development, and I liked the method that is described in this video about XP: [link](https://www.youtube.com/watch?v=piqKnf-dyHs)

## What is Scrum?

Scrum is a widely used agile framework for software development and project management that focuses on delivering high-quality products iteratively and incrementally. It was initially introduced in the early 1990s and has since gained popularity in various industries beyond just software development.

The key elements of scrum are the followings:

- There is a Scrum master, who is responsible for the managing the development process, removing obstacles, and ensuring that the team adheres to Scrum practices. There is a Product Owner who represents the the interest of stakeholders and responsible for defining and prioritizing the product backlog. The others are the development team.
- The team works in short time iterations, these are called sprints. These iterations are two to four weeks long.
- There is a Product Backlog, that is a prioritized list of the works that needs to be done. The Sprint Backlog holds all the task that needs to be done in the current sprint.
- At the start of a sprint, the team holds an event called Sprint Planning. During this event, the team picks what they will do in that specific time period. During the sprint, the members holds Daily Sprints at every day, to track the progress of the work. At the end of each sprint, the team talks retrospectively about the sprint/work went.

The advantage of scrum is that the team can collect feedback in short time periods, so the outcome can fit more for the customers needs.

## Difference between roles in different methodologies

# Our old method

In the past, our work practices were disorganized, inefficient, and suboptimal. We used a sprint-based approach, starting with planning. We identified the main features or problems we needed to address, known as epics, and created tasks that corresponded to them. These tasks were then arranged in a kanban table. We held standup meetings every morning to discuss our progress from the previous day and plan our next steps. Furthermore, we created a developer handbook that outlined the guidelines we aimed to follow.

These were a good start, and I think we did a lot of things well, but we realized that this method is just not sustainable.

# The new path

It has been determined that the current method we are using is not sustainable. Why is that? We cannot rely solely on the scrum method because it lacks flexibility. As stated in Hosseini's work, "In scrum we cannot allow any changes during sprints," and in XP, "If the team has not started working on a specific feature, a new feature with equal size can be brought into iteration instead of working on an unstarted one." Hosseini suggests that it is better to start with the scrum methodology and then elaborate it to XP and discover our method which has better efficiency. This way of thinking aligns well with our team, as we need to gradually develop our practices and carefully construct a methodology that fits our project and team. Our goal is to create a framework, a set of practices and guidelines that support us on our development journey, making us comfortable during work.

In Hosseini's work, he suggests seven ideas for a professional scrum team to implement some practices and ideas from XP. I will not copy his work, but I will explain how we can implement these ideas in my opinion:

1. We do not need a scrum master who lacks technical skills.
2. We want to keep the developer team idea from scrum, as we consider developers as cross-functional developers, not just testers or developers.
3. Working with shorter sprints could be beneficial because planning would be easier. In a research/development project, it is difficult to predict the difficulty and possible time effort of a task. Delivering features more frequently is also beneficial because we can receive feedback much faster.
4. Pair programming can be implemented in two ways. First, we can work on testing in pairs because it would be much easier to think about an appropriate test and cover all possible cases together. Second, we already have a review practice, and it would be great to only merge code into the "dev" branch if someone has reviewed and approved it.
5. Test-first development is a great way to keep the code sustainable and make developers trustful with the codebase. It is a good idea to switch the sequence of the test and the actual logic code. If someone starts from the test side, they will be more accurate with the logic because they have thought through all possible inputs and cases of that function.

I also read an article and found it interesting[https://medium.com/the-andela-way/how-to-successfully-lead-a-software-development-team-6b9a6ffcf760]. Additionally, I suggest we start holding retrospective meetings at the end of sprints. We have not done any before, and I think it would be beneficial for management.

I found it an interesting idea to limit the number of stories we work on during a single sprint.

# Feedback from team

To gather feedback from my team on concepts and ideas, I created a simple form with five questions about the current system and nine questions about the new path and practices I want to implement in our work. Here are some thoughts from their answers:

- One out of three team members said that we had no framework before.
- Everyone wants a more strict framework.
- Everyone likes the new path.
- Pair programming would be nice, but we need to consider if we have enough resources for it.
- Test-driven development would also be nice, but we need to consider if we have enough resources for it.
- People do not like the idea of checking the tasks together daily.

My next plan was to discuss the responses with them to see if they were willing to try these practices despite their divisive appearance. During the meeting, we came to a decision:

# Experiences

[In progress]

# Conclusion

In summary, I believe that this research has been helpful for me. It has taught me that each methodology has its advantages and disadvantages, and it's important to switch between them, even within different projects. I have also realized that the size of the team and the personalities of the individuals involved can impact which framework is most suitable.
One of the most fascinating insights I gained is that we can experiment with different practices and components to determine which ones work best for our team and project.
Overall, I enjoyed learning about new methodologies and concepts, even those that I have not yet implemented.

[In progress]

# Additional references

A playlist about Extreme Programming: [link](https://www.youtube.com/watch?v=hbFOwqYIOcU&list=PLCku-ULHIQvnWyghG0JnYbVQm35DvJi29)

Video about a presentation from Kent Beck about the story of Extreme programming: [link](https://www.youtube.com/watch?v=cGuTmOUdFbo)

A paper about SXP: Simplified Extreme Programming: [link](https://www.mecs-press.org/ijmecs/ijmecs-v9-n6/IJMECS-V9-N6-4.pdf)

Conference Talk about Putting XP in Scrum: [link](https://www.youtube.com/watch?v=JtvSp3BPG8I)
