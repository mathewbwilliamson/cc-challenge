# Project Overview

A small project I did for fun based on an interview question that I recieved. The idea of the small project was to make a box with barriers to left, right, top, and bottom, along with a small "ball" in the middle.

Then on click of the barriers, the ball will move towards that barrier.

## To Run It

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Thoughts On Building

Overall, a cool little project. I spent less than one hour doing this. I tried my best to point out some design decisions that I was making.

I also tried, even in this small project, to use a professional architecture. There weren't enough components to really have anything much to show. Oh well!

It was fun!

## Improvements and Such

Given more time, I would do the following:

- I would block the ball from moving past the barriers. My first solution of the challenge will not work because I made the barriers in CSS. This means that only CSS can see how wide and short the barriers are, therefore the "ball" will not know where it is in relation to the barriers. Whoops! To fix that, I would bring the barrier information in and control those via styles in the React components. Then it would be a calculation to see where the ball is in relation to the barriers.
- Instead of hardcoding, I would give some way of changing the sizes of the barriers. It would be interesting to add draggable borders to each outer edge to change the sizes of things.
- It only moves when you click, so why don't we start the ball always moving? Each barrier click would increase the speed of the ball.
- Let's add some animations. Those are fun!
