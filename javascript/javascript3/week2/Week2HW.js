"use strict";

const url =
  "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json";
fetch(url)
  .then((resp) => resp.json())
  .then((movies) => {
    const badMovies = movies.filter((movie) => movie.rating < 4);
    const badMoviesArray = badMovies.map((movieTitle) => movieTitle.title);
    console.log(badMoviesArray);
    const badMoviesAfter2000 = badMovies.filter((movie) => movie.year > 2000);
    const badMoviesAfter2000Array = badMoviesAfter2000.map(
      (movie) => movie.title
    );
    console.log(badMoviesAfter2000Array);
  });

//Promise that resolves after set time

function promise(resolveAfter) {
  return new Promise((resolve) => {
    const delay = resolveAfter * 1000;
    setTimeout(() => {
      resolve();
    }, delay);
  });
}

async function result() {
  console.log("kindly wait");
  const result = await promise(4);
  console.log("Here you are");
}

result();

//Rewrite time

function setTimeoutPromise(resolveAfter) {
  return new Promise(() => {
    const seconds = resolveAfter / 1000;
    setTimeout(() => {
      console.log(`Called after ${seconds} seconds`);
    }, resolveAfter);
  });
}
setTimeoutPromise(3000).then(() => {
  //   console.log("Called after 3 seconds");
});

function getCurrentLocation() {
  return new Promise((resolve, rejects) => {
    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      resolve(`longitude :${longitude} and latitude: ${latitude}`);
    }
    function error() {
      rejects("Unable to retrieve your location!");
    }
    if (!navigator.geolocation) {
      rejects("Geolocation is not supported by your browser!");
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  });
}
getCurrentLocation()
  .then((position) => {
    // called when the users position is found
    console.log(position);
  })
  .catch((error) => {
    // called if there was an error getting the users location
    console.log(error);
  });

//Fetching and waiting

function waitingTime() {
  console.log("Kindly wait for 3 seconds...");
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve();
    }, 3000);
  });
}
//1. using promise and .then
waitingTime().then(() => {
  fetch(url)
    .then((resp) => resp.json())
    .then((movies) => console.log(movies))
    .catch((error) => console.log("error!!"));
});

//2. using async/await

async function getData() {
  try {
    await waitingTime();
    const result = await fetch(url);
    const movies = await result.json();
    console.log(movies);
  } catch (error) {
    console.log("error!");
  }
}
getData();
