"use strict";

// 1. Log out the text "Called after 2.5 seconds", 2.5 seconds after the script is loaded.
function delay() {
  setTimeout(() => {
    console.log("Called after 2.5 seconds");
  }, 2500);
}
delay();
// OR we can do as below

/*function delay() {
  console.log("Called after 2.5 seconds");
}
setTimeout(delay, 2500);*/

// 2. Create a function that takes 2 parameters: delay and stringToLog.
// Calling this function should log out the stringToLog after delay seconds. Call the function you have created with some different arguments.

function delayFunc(delay, stringToLog) {
  setTimeout(() => {
    console.log(stringToLog);
  }, delay * 1000);
}
delayFunc(3, "This string logged out after 3 seconds");
delayFunc(5, "This string logged out after 5 seconds");

// 3.Create a button in html. When clicking this button,
// use the function you created in the previous task to log out the text: Called after 5 seconds 5 seconds after the button is clicked.

// First way is by creating the function then calling it
// function delayer() {
//   delayFunc(5, "This string logged out after 5 seconds");
// }
// document.getElementById("Delay-button").addEventListener("click", delayer);

// Second way is by using ananymous function and calling the function inside
document.getElementById("Delay-button").addEventListener("click", () => {
  delayFunc(5, "This string logged out after 5 seconds");
});

// 4.Create two functions and assign them to two different variables. One function logs out Earth, the other function logs out Saturn.
// Now create a new third function that has one parameter: planetLogFunction. The only thing the third function should do is call the
// provided parameter function. Try call the third function once with the Earth function and once with the Saturn function.

function earthLogger() {
  console.log("Here is for 4th task : Earth");
}
function saturnLogger() {
  console.log("Here is for 4th task: Saturn");
}

function planetLogFunction(callback) {
  callback();
}
planetLogFunction(earthLogger);
planetLogFunction(saturnLogger);

// 5. Create a button with the text called "Log location". When this button is clicked
// the location (latitude, longitude) of the user should be logged out

function findLocation() {
  const locInfo = document.getElementById("locationText");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;
      // Display longitute and latitude
      console.log(`Latitude : ${lat}  Longitutde : ${long} `);
    });
  }
}
document.getElementById("location").addEventListener("click", findLocation);

// 7. Create a function called runAfterDelay. It has two parameters: delay and callback. When called the function
//  should wait delay seconds and then call the provided callback function. Try and call this function with different
//  delays and different callback functions
function runAfterDelay(delay, callback) {
  setTimeout(() => {
    callback();
  }, delay * 1000);
}

runAfterDelay(4, function () {
  console.log("Should be logged after 4 seconds , and this is for task 7.");
});

runAfterDelay(8, function () {
  console.log("Should be logged after 8 seconds, and this is for task 7.");
});

// 8.Check if we have double clicked on the page. A double click is defined by two clicks within 0.5 seconds.
// If a double click has been detected, log out the text: "double click!"

document.addEventListener("dblclick", () => console.log("Double click"));

//Create a function called jokeCreator that has three parameters: shouldTellFunnyJoke - boolean,
//  logFunnyJoke - function and logBadJoke - function. If you set shouldTellFunnyJoke to true it should
//  call the logFunnyJoke function that should log out a funny joke. And vice versa.

function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
  return shouldTellFunnyJoke;
}

function shouldTellFunnyJoke(joke) {
  if (joke == true) {
    logFunnyJoke();
  } else {
    logBadJoke();
  }
}

function logFunnyJoke() {
  console.log(
    "Don't trust JavaScript programmers, all they do is promises but they never callback." +
      "( supposed to be the funny Joke :D)"
  );
}
function logBadJoke() {
  console.log(
    "What do you call a can opener that doesn’t work? >> A can’t opener!" +
      "Its a bad joke, dont laugh :D"
  );
}

shouldTellFunnyJoke(false);
shouldTellFunnyJoke(true);
// *******************************/

// Function as a variable
//1. Create an array with 3 items. All items should be functions. Iterate through the array and call all the functions.

const arrFunc = [
  function () {
    console.log("I am the first function");
  },
  function () {
    console.log("I am the second function");
  },
  function () {
    console.log("I am the third function");
  },
];
for (let i = 0; i < arrFunc.length; i++) {
  arrFunc[i]();
}

//2. Create a function as a const and try creating a function normally. Call both functions.

// a normal funcion
function multiplication(a, b) {
  return a * b;
}
console.log(multiplication(2, 3));

// a function as const
const One = (x, y) => {
  return x + y;
};
console.log(One(2, 3));

//3. Create an object that has a key whose value is a function. Try calling this function.
let myAge = () => {
  return (Math.random() * 25).toFixed(0);
};
let obj = {
  Name: "Dlnya",
  age: myAge,
};
console.log(obj.age());
