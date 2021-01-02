/* This code will move the li to the position 100, 100. Calling moveElement will return
a promise that resolves after the li element has been moved.*/

const redBox = document.querySelector("ul.marks li:nth-child(1)");
const blueBox = document.querySelector("ul.marks li:nth-child(2)");
const greenBox = document.querySelector("ul.marks li:nth-child(3)");
const boxes = [redBox, blueBox, greenBox];

function moveElement(boxToMove, newPosition) {
  return new Promise((resolve) => {
    boxToMove.style.transform = `translate(${newPosition.x}px, ${newPosition.y}px)`;
    boxToMove.addEventListener("transitionend", resolve);
  });
}

async function translateOneByOne() {
  try {
    await moveElement(redBox, { x: 20, y: 300 });
    console.log("Red box to go!");
    await moveElement(blueBox, { x: 400, y: 300 });
    console.log("Blue box moved!");
    await moveElement(greenBox, { x: 400, y: 20 });
    console.log("Finally, green box moved!");
  } catch (error) {
    console.log(error);
  }
}
translateOneByOne();

async function translateAllAtOnce() {
  Promise.all([
    moveElement(redBox, { x: 20, y: 300 }),
    moveElement(blueBox, { x: 400, y: 300 }),
    moveElement(greenBox, { x: 400, y: 20 }),
  ]).then(() => console.log("MAGIC! all the boxes moved at the same time!"));
}
translateAllAtOnce();
window.moveElement = moveElement;

// moveElement(document.querySelector("li"), { x: 100, y: 100 }).then(() => {
//   console.log("Element has been moved");
// });
