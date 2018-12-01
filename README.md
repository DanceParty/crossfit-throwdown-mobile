# crossfit-throwdown-mobile

## What is this repository?

This project is designed for the 2019 CrossFit Yuma Throwdown. The CrossFit Yuma Throwdown is an annually held CrossFit
competition in which competitors from all around the area come by to compete in a day long event with the hopes of winning.
This project is designed to be used by competitors and spectators in order to keep track of the current standings, and get refreshers
on all of the workouts for all of the different skills.

## Getting started

`npm install && expo start`

## Structure

### 2 Pages: Workouts and Leaderboard

Workouts:

Purpose is to display the information for each workout in a way that is easily accessible and digestible to the user

Leaderboard:

Purpose is the display the most up-to-date results from the tournament as a whole. This includes all divisions: RX Men, RX Women, Scaled Men, and Scaled Women

## Libraries

### navigation

React-Navigation 3.0

### data

firebase

*having a weird terminal issue on `npm install firebase` where it isn't compatible with the latest version of node. running --force when installing ignores this. Downgrading node will fix this all together*

### font scaling

react-native-size-matters

*Due to different font sizing on different devices, this is needed to create a consistency on all devices*

### swipe views

react-native-carousel