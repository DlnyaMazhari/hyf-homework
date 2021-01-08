"use strict";

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

//making canvas size same as window
let window_width = window.innerWidth;
let window_height = window.innerHeight;

canvas.width = window_width;
canvas.height = window_height;
let width = canvas.width;
let height = canvas.height;
setInterval(() => {
  function randomCircle() {
    let randomx = Math.random() * width;
    let randomy = Math.random() * height;
    let randomr = Math.random() * 100;
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;
    ctx.beginPath();
    ctx.arc(randomx, randomy, randomr, 0, 2 * Math.PI);
    ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
    ctx.fill();
  }
  randomCircle();
}, 100);
