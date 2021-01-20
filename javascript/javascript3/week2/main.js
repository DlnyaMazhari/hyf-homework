/* This code will move the li to the position 100, 100. Calling moveElement will return
a promise that resolves after the li element has been moved.*/

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
