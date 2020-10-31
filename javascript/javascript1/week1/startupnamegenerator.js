// Project 4
//Startup name generator
let firstWords = [
  "Rise",
  "Fall",
  "Moon",
  "Sun",
  "Earth",
  "Jupiter",
  "Mars",
  "Star",
  "Sky",
  "Scorpion",
];
let secondWords = [
  "Soil",
  "Air",
  "Water",
  "Dust",
  "Surface",
  "Drops",
  "Crash",
  "Month",
  "Cloud",
  "Rain",
];
const firstRandomIndex = Math.floor(Math.random() * 10) + 0;
const secondRandomIndex = Math.floor(Math.random() * 10) + 0;
let startupName =
  firstWords[firstRandomIndex] + " " + secondWords[secondRandomIndex];
console.log(
  'The startup: "' +
    startupName +
    '" contains ' +
    startupName.length +
    " characters" +
    "."
);
