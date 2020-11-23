"use strict";
// Flight booking fullname function

function getFullName(firstName, surName, useFormalName) {
  if (useFormalName) {
    let formal = "lord";
    return formal + " " + firstName + " " + surName;
  } else {
    return firstName + " " + surName;
  }
}
const fullname1 = getFullName("Benjamin", "Hughes", true); // returns "Lord Benjamin Hughes"`
const fullname2 = getFullName("Benjamin", "Hughes", false); // returns "Benjamin Hughes"
console.log(fullname1);
console.log(fullname2);

Event application

const weekDay = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
function getEventWeekday(number) {
  const day = new Date();
  const today = day.getDay();
  const eventDay = (today + number) % weekDay.length;
  return weekDay[eventDay];
}
console.log(getEventWeekday(5));

//Weather wear

function tempWear(temperature) {
  if (temperature >= 7 && temperature < 16) {
    console.log("Weather is a bit cold, you would better wear a jecket");
  } else if (temperature >= 16 && temperature < 22) {
    console.log(
      "you may enjoy the little breeze and sunshine, wear spring clothes( a shirt or sweatshirt maybe) and enjoy"
    );
  } else if (temperature > 22) {
    console.log(
      "It is summer for Danish people :D wear a short a shirt and enjoy the sunshine! "
    );
  } else {
    console.log(
      "It is cold and there is wind most probably, so wear your winter jacket, gloves and DON'T forget a hat or headband!"
    );
  }
}
tempWear(25);
tempWear(18);
tempWear(12);
tempWear(3);

//Student manager

const class07Students = ["a", "b"];
console.log(typeof class07Students);
function addStudentToClass(studentName) {
  if (studentName === "") {
    console.log("You cannot add an empty string to a class");
  } else if (class07Students.includes(studentName)) {
    console.log("Student" + studentName + "is already in the class'");
  } else if (studentName === "Queen") {
    class07Students.push(studentName);
  } else if (class07Students.length >= 6) {
    console.log("Cannot add more students to class 07");
  } else {
    class07Students.push(studentName);
    console.log("Student" + studentName + "is added.");
  }
}
function getNumberOfStudents() {
  return class07Students.length;
}

console.log(class07Students);
console.log("The number of students in the class is " + getNumberOfStudents());

//Candy helper
let candyPrice = 0;
let boughtCandyPrices = [];
function addCandy(candyType, weight) {
  if (candyType == "sweet") {
    candyPrice = weight * 0.5;
    boughtCandyPrices.push(candyPrice);
  } else if (candyType == "Chocolate") {
    candyPrice = weight * 0.7;
    boughtCandyPrices.push(candyPrice);
  } else if (candyType == "Toffee") {
    candyPrice = weight * 1.1;
    boughtCandyPrices.push(candyPrice);
  } else if (candyType == "chewing-gum") {
    candyPrice = weight * 0.03;
    boughtCandyPrices.push(candyPrice);
  }
  console.log(boughtCandyPrices);
}
addCandy("sweet", 20);
addCandy("Chocolate", 50);
addCandy("Toffee", 10);
addCandy("chewing-gum", 30);

let amountToSpend = Math.random() * 100;
let boughtCandy = [];
let total = 0;
function canBuyMoreCandy() {
  for (let i = 0; i < boughtCandyPrices.length; i++) {
    total = total + boughtCandyPrices[i];
    // console.log(total);
  }
  if (total > amountToSpend) {
    return false;
  } else {
    return true;
  }
}

const buyMore = canBuyMoreCandy();
//console.log(c);
if (buyMore) {
  console.log("You can buy more, so please do");
} else console.log("Enough candy for you!");
addCandy("toffe", 20);
addCandy("chewing-gum", 20);
