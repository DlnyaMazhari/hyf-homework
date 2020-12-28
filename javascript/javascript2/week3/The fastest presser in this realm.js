"use strict";

// counter for L
let totalL = 0;
const elL = document.querySelector("#countL");
const pressedL = (event) => {
  if (event.keyCode == 76) {
    totalL++;
    elL.innerHTML = totalL;
  }
};
function counterL() {
  document.addEventListener("keydown", pressedL);
}
// counter for S

let totalS = 0;
const elS = document.querySelector("#countS");
const pressedS = (event) => {
  if (event.keyCode == 83) {
    totalS++;
    elS.innerHTML = totalS;
  }
};
function counterS() {
  document.addEventListener("keydown", pressedS);
}

// setting the time of the game

// const time = timeSet.value;
const startButton = document
  .getElementById("timeButton")
  .addEventListener("click", startGame);
function startGame() {
  const timeSet = document.getElementById("playTimeSet").value;
  counterL();
  counterS();
  setTimeout(() => {
    console.log("game finished");
    if (totalS > totalL) {
      elS.innerHTML = "WINNER " + "  " + totalS;
    } else if (totalL > totalS) {
      elL.innerHTML = "WINNER" + "  " + totalL;
    } else {
      alert("Wow! You are both winners ,You pressed equally");
    }
    document.removeEventListener("keydown", pressedL);
    document.removeEventListener("keydown", pressedS);
  }, timeSet * 1000);
}
