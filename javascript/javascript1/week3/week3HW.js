"use strict";

//Item array removal
const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "katrine",
  "Tala",
];
const nameToRemove = "Ahmad";
names.splice(3, 2);
console.log(names);

//When will we be there??
const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

const timeTakes =
  travelInformation.destinationDistance / travelInformation.speed;

const hourCalc = Math.floor(timeTakes);
// const hourCalc = parseInt(Number(timeTakes));
// For the above line , I had used but with me it gave error while on other computers it worked fine!
const minutCalc = Math.round((timeTakes - hourCalc) * 60);
console.log(
  "The way is " +
    travelInformation.destinationDistance +
    " km far. And it takes us " +
    hourCalc +
    " hours and " +
    minutCalc +
    " minutes to get there."
);

//Series duration of my life
const seriesDurations = [
  {
    title: "Game of thrones",
    days: 7,
    hours: 1,
    minutes: 0,
  },
  {
    title: "Chernobyl",
    days: 5,
    hours: 6,
    minutes: 0,
  },
  {
    title: "Being like Erica",
    days: 10,
    hours: 12,
    minutes: 20,
  },
];

function seriesText() {
  const age = 80;
  const ageInHr = age * 365 * 24;
  let total = 0;
  for (let i = 0; i < seriesDurations.length; i++) {
    const seriesCalcTime =
      seriesDurations[i].days *
      (seriesDurations[i].hours + seriesDurations[i].minutes / 60);
    let timeSpent = ((seriesCalcTime * 100) / ageInHr) * 100;
    let time = timeSpent.toFixed(2);
    console.log(seriesDurations[i].title + " took " + time + "% of my life");
    total += timeSpent;
  }
  const totalTime = total.toFixed(2);
  console.log("In total, the serieses took " + totalTime + "% of my life.");
}
seriesText();

//NOnoN0nOYes (Note taking app)
// 1.Save a note
const notes = [];

function saveNote(content, id) {
  const obj = {
    content: content,
    id: id,
  };
  notes.push(obj);
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]

// 2. Get a note
function getNote(id) {
  for (let i = 0; i < notes.length; i++) {
    if (
      typeof id === undefined ||
      typeof id === null ||
      typeof id !== "number"
    ) {
      console.log("There must be a mistake, It must be a number!");
    } else if (notes[i].id === id) {
      console.log(notes[i]);
    }
  }
}

const firstNote = getNote(2);

//3. Log out notes
function logOutNotesFormatted() {
  for (let i = 0; i < notes.length; i++) {
    console.log(
      "The note with id: " +
        notes[i].id +
        " has the following note text: " +
        notes[i].content
    );
  }
}

logOutNotesFormatted();
