"use strict";

//Doubling of number

let numbers = [1, 2, 3, 4];
let oddNumbers = numbers
  .filter((newNumbers) => {
    return newNumbers % 2 !== 0;
  })
  .map((newNumbers) => newNumbers * 2);
console.log(oddNumbers);

//************************************* */

//Working with movies

// Creating an array for short titled movies ( here I defined short title to be less than 10)
const shortTitledMovies = movies.filter((movie) => movie.title.length < 10);
console.log(shortTitledMovies);

// Creating an array for long titled movies ( here I defined long title to be more than and equal to 10)
const longTitledMovies = movies.filter((movie) => movie.title.length >= 10);
console.log(longTitledMovies);

// finding the number of movies between 1980-1989 using filter method
const eightyMovies = movies.filter(
  (movies) => movies.year >= 1980 && movies.year <= 1989
);
console.log(`We have ${eightyMovies.length} movies which are produced in 80s.`);

// finding the number of movies between 1980-1989 using foreach method
// let moviesCount = 0;
// movies.forEach((movie) => {
//   moviesCount =
//     movie.year >= 1980 && movie.year <= 1989 ? moviesCount + 1 : moviesCount;
// });
// console.log(moviesCount);

//according to the movie rating, they are categorized as good, average and bad and a key value is added to the array
const goodRatedMovies = movies
  .filter((movie) => movie.rating >= 7)
  .map((movie) => Object.assign(movie, { tag: "Good" }));
console.log(goodRatedMovies);
const averageRatedMovies = movies
  .filter((movie) => movie.rating < 7 && movie.rating >= 4)
  .map((movie) => Object.assign(movie, { tag: "Average" }));
console.log(averageRatedMovies);
const badRatedMovies = movies
  .filter((movie) => movie.rating < 4)
  .map((movie) => Object.assign(movie, { tag: "Bad" }));
console.log(badRatedMovies);
console.log(movies);

// Filtering movies who have ratings higher than 6 and creating the array with only one key-value of rating
const moviesHighRated = movies
  .filter((movie) => movie.rating > 6)
  .map((movie) => movie.rating);
console.log(moviesHighRated);

// counting the total number of movies which contains the keywords (surfer ,alien or Benjamin) and  it shouldn't be case sensitive

const moviesWithKeywords = movies.filter(
  (movie) =>
    movie.title.toLocaleLowerCase().includes("surfer".toLocaleLowerCase()) ||
    movie.title.toLocaleLowerCase().includes("alien".toLocaleLowerCase()) ||
    movie.title.toLocaleLowerCase().includes("benjamin".toLocaleLowerCase())
);
console.log(
  `The number of the movies which contain any of the keywords (Surfer, Alien and Benjamin) is ${moviesWithKeywords.length}`
);

//finding duplicated words

// let duplicateWords = new RegExp(/\b(\w+)\b.*\b\1\b/i);
// let duplicateWordMovies = movies
//   .filter((movie) => movie.title.match(duplicateWords))
//   .map((movie) => movie.title);
// console.log(duplicateWordMovies.length);

const duplicatedWord = movies.filter((currentMovie) => {
  const currentTitle = currentMovie.title.toLowerCase().split(" ");
  const sameWords = currentTitle.filter(
    (word, index) => currentTitle.indexOf(word) !== index
  );
  if (sameWords.length > 0) {
    return currentMovie;
  }
});
console.log(`The number of the duplicated words is ${duplicatedWord.length}`);

// finding the average rating

const moviesRateOnly = movies
  .filter((movie) => movie.rating)
  .map((movie) => movie.rating);
// console.log(moviesRateOnly);
const averageRate = moviesRateOnly.reduce(function (a, b) {
  const totalRate = a + b / moviesRateOnly.length;
  return totalRate;
}, 0);
console.log(`The average of the rating of all the movies is ${averageRate}`);

//Count the total number of Good, Average and Bad movies

//counting total of good movies
const goodMovies = goodRatedMovies.map((movie) => movie.rating >= 7);
const totalGoodMovies = goodMovies.reduce(function (c, d) {
  return c + d;
}, 0);
console.log(`Total number of Good movies are ${totalGoodMovies}`);

// counting total of average movies
const averageMovies = averageRatedMovies.map(
  (movie) => movie.rating < 7 && movie.rating >= 4
);
const totalAverageMovies = averageMovies.reduce(function (e, f) {
  return e + f;
}, 0);
console.log(`Total number of Average movies are ${totalAverageMovies}`);

// counting total of Bad movies
const badMovies = badRatedMovies.map((movie) => movie.rating < 4);
const totalBadMovies = badMovies.reduce(function (g, h) {
  return g + h;
}, 0);
console.log(`Total number of Bad movies are ${totalBadMovies}`);
