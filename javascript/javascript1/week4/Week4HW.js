"use strict";

var arrNames = [];
var todoArr = [];

function getReplay(command) {
  const splitedCommand = command.split(" ");
  const userName = splitedCommand[splitedCommand.length - 1];
  if (command === "" || typeof command != "string") {
    return "Please say something valid!";
  }
  if (command == `Hello my name is ${userName}`) {
    if (arrNames.includes(userName)) {
      return "We already got introduced!";
    } else {
      arrNames.push(userName);
      return "Nice to meet you";
    }
  }
  if (command == "What is my name") {
    if (arrNames.length == 0) {
      return "I dont know your name";
    } else {
      return "Your name is " + arrNames[0];
    }
  }
  if (command == "Add fishing to my todo") {
    todoArr.push("fishing");
    return "fishing added";
  }
  if (command == "Add singing in the shower to my todo") {
    todoArr.push("singing in the shower");
    return "singing in the shower added";
  }
  if (command == "Remove fishing from my todo") {
    todoArr.shift();
    return "Removed fishing from your todo";
  }
  if (command == "What is on my todo?") {
    todoArr.unshift("fishing");
    return todoArr;
  }
  if (command == "What day is it today?") {
  }
  if (command == "What day is it today?") {
    const days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];

    const today = new Date();
    const daypattern = { day: "numeric", month: "long", year: "numeric" };

    return today.toLocaleDateString(undefined, daypattern);
  } else {
    return "I dont understand what you are saying";
  }
}

function arithOperator(command) {
  var digit = command.match(/\d/g);
  // console.log(digit[0], digit[1]);
  let digit1 = parseInt(digit[0]);
  let digit2 = parseInt(digit[1]);
  if (command.includes("+")) {
    return digit1 + digit2;
  }
  if (command.includes("*")) {
    return digit2 * digit1;
  }
}
function Timer() {
  console.log("Timer is done");
}
setTimeout(Timer, 240000);

console.log(getReplay("Hello my name is Benjamin"));
console.log(getReplay("Hello my name is Benjamin"));
console.log(getReplay("What is my name"));
console.log(getReplay("Add fishing to my todo"));
console.log(getReplay("Add singing in the shower to my todo"));
console.log(todoArr);
console.log(getReplay("Remove fishing from my todo"));
console.log(todoArr);
console.log(getReplay("What is on my todo?"));
console.log(getReplay("What day is it today?"));
console.log(arithOperator("what is 3 + 8 ?"));
console.log(arithOperator("what is 3 * 8 ?"));
