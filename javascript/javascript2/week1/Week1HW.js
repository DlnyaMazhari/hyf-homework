"use strict";

//Find the shortest word

const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
const shortestWord = getShortestWord(danishWords); // returns 'ø'
function getShortestWord(words) {
  let newWord = danishWords[0];
  for (let i = 1; i < danishWords.length; i++) {
    if (danishWords[i].length <= newWord.length) {
      newWord = danishWords[i];
    }
  }
  return newWord;
}
document.getElementById("ShortestWord").innerHTML =
  "shortest word in array : " + shortestWord;
console.log(
  'Shortest word in array ["bil", "plante", "kaffe", "bog", "ø", "planetarium"] is : ' +
    shortestWord
);

//Find and count the Danish letters
const danishString2 = "Blå grød med røde bær";
let danishLetters = danishLettersCounter(danishString2);
function danishLettersCounter(danString) {
  const stringArray = danString.split("");
  console.log(stringArray);
  let total = 0;
  let åCount = 0;
  let æCount = 0;
  let øCount = 0;

  for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i] === "å") {
      åCount++;
      total++;
    } else if (stringArray[i] === "ø") {
      øCount++;
      total++;
    } else if (stringArray[i] === "æ") {
      æCount++;
      total++;
    }
  }

  return {
    total: total,
    å: åCount,
    ø: øCount,
    æ: æCount,
  };
}

document.getElementById("danishLetters").innerHTML = danishLetters;
console.log(danishLetters);

//Spirit animal name generator
let firstName = document.getElementById("getname");
firstName.addEventListener("click", getSpiritName);
function getSpiritName() {
  let spiritAnimals = [
    "-The Aardwolf",
    "-The Alley Cat",
    "-The Bear",
    "-The Black Jaguar",
    "-The Dolphin",
    "-The Falcon",
    "-The Gorilla",
    "-The Hawk",
    "-The Honey Bee",
    "-The Jaguar",
  ];
  let randomAnimal = spiritAnimals[Math.floor(Math.random() * 10)];
  let name1 = document.getElementById("name").value;
  if (name1 == "") {
    let a = "Please enter name";
    document.getElementById("h1").innerHTML = a;
  } else {
    let name = document.getElementById("name").value + " " + randomAnimal;
    document.getElementById("h1").innerHTML = name;
  }
}
