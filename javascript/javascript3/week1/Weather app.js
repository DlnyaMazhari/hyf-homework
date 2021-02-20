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
  // displaying place name and country
  console.log(weather);
  let location = document.querySelector("#loc");
  location.textContent = `${weather.name} , ${weather.sys.country}`;

  // displaying date
  let today = new Date();
  let date = document.querySelector("#date");
  date.textContent = dateCreator(today);

  // displaying temperature
  let temperature = document.querySelector("#temp");
  temperature.textContent = `${Math.round(weather.main.temp)} °C `;

  //displaying sky weather
  let sky = document.querySelector("#sky");
  sky.textContent = `${weather.weather[0].description}`;

  // displaying max-min temperature
  let maxmin = document.querySelector("#max-min");
  maxmin.textContent = `${Math.round(weather.main.temp_max)} °C / ${Math.round(
    weather.main.temp_min
  )} °C `;

  // displaying wind speed
  let windSpeed = document.querySelector("#wind-speed");
  windSpeed.textContent = `wind speed ${weather.wind.speed}`;

  //displaying sunrise and sunset time
  const sunrise = gethumanreadbleTime(weather.sys.sunrise);
  document.getElementById("sunrise-time").textContent = sunrise;
  const sunset = gethumanreadbleTime(weather.sys.sunset);
  document.getElementById("sunset-time").textContent = sunset;
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
    "Monday",
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

// creating a function for converting the time into a readable format
function gethumanreadbleTime(timeInSeconds) {
  // multiplied by 1000 so that the argument is in milliseconds, not seconds.
  const date = new Date(timeInSeconds * 1000);
  // Hours part from the timestamp
  const hours = date.getHours();
  // Minutes part from the timestamp
  const minutes = "0" + date.getMinutes();
  // Seconds part from the timestamp
  const seconds = "0" + date.getSeconds();
  // Will display time in 10:30:23 format
  const formattedTime =
    hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);

  return formattedTime;
}
