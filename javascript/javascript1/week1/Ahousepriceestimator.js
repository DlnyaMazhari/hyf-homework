// Project 3
//A house price estimator
let houseprice;
let volumeinMeters;

// 1-peter's house price calculation
let gardenSizeInM2 = 100;
let width = 8;
let depth = 10;
let height = 10;
let actualhouseprice = 2500000;

volumeinMeters = width * depth * height;
houseprice = volumeinMeters * 2.5 * 1000 + gardenSizeInM2 * 300;

if (actualhouseprice > houseprice) {
  console.log("NO Peter, you are paying too much");
} else {
  console.log("Go for it Peter , it is reasonable;)");
}

// 2- Julia's house price calculation

gardenSizeInM2 = 70;
width = 5;
depth = 11;
height = 8;
actualhouseprice = 1000000;

volumeinMeters = width * depth * height;
houseprice = volumeinMeters * 2.5 * 1000 + gardenSizeInM2 * 300;

if (actualhouseprice > houseprice) {
  console.log("NO Julia, you are paying too much");
} else {
  console.log("Go for it Julia, it is reasonable;)");
}
