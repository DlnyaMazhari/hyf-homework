"use strict";

// This part was for the first part using button , but I commented out because I preferred to use enter key
// const cityName = document.querySelector("#search-input");
// const button = document.getElementById("cityBtn");
// button.addEventListener("click", getWeather);
// const key = "4a2394810a0cf4d5b9aabf00885e0a91";
// function getWeather() {
//   const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=${key}&unit=Metric`;
//   fetch(url)
//     .then((resp) => resp.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.log("error"));
// }

// a function to make the search respond to the enter key
const getCity = (event) => {
  if (event.keyCode === 13) {
    console.log(cityName.value);
    getWeather();
  }
};
const cityName = document.querySelector("#search-input");
cityName.addEventListener("keydown", getCity);

// Here we fetch the api
const key = "4a2394810a0cf4d5b9aabf00885e0a91";
function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=${key}&units=Metric`;
  fetch(url)
    .then((resp) => resp.json())
    .then(displayWeather);
}

// creating a function to display required information
function displayWeather(weather) {
  console.log(weather);
  let location = document.querySelector("#loc");
  location.textContent = `${weather.name} , ${weather.sys.country}`;

  let today = new Date();
  let date = document.querySelector("#date");
  date.textContent = dateCreator(today);

  let temperature = document.querySelector("#temp");
  temperature.textContent = `${Math.round(weather.main.temp)} °C `;

  // let temp = document.querySelector("#celcius");
  // temp.textContent = "°C";

  let sky = document.querySelector("#sky");
  sky.textContent = `${weather.weather[0].main}`;

  let maxmin = document.querySelector("#max-min");
  maxmin.textContent = `${Math.round(weather.main.temp_max)} °C / ${Math.round(
    weather.main.temp_min
  )} °C `;
}

// creating a function to show date
function dateCreator(d) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = [
    "Sunday",
    "Monsday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();
  return `${day} ${date} ${month} ,${year}`;
}
