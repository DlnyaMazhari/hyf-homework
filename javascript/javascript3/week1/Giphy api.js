"use strict";
/* Steps to break the problem into smaller ones:
1. create html,css and js file.
2. create  an input and a button in the html file.
3. checking the website and getting the url to fetch it in the js file
4. check if it needs signing up to get the key for the url
5. after fetching the url, creating a function where it displays a certain gif related to the searched word.
6. styling the page in css.  */

const key = "xqp6W3VtKgpQ3BlfimA85Eg0sl3LxMhW";

const button = document
  .getElementById("giphy-button")
  .addEventListener("click", getGiphy);

const gifInput = document.getElementById("giphy-input");
const gifNumber = document.getElementById("giphy-number");

function getGiphy() {
  //   e.preventDefault();
  let input = gifInput.value;
  let number = gifNumber.value;
  let url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${input}&limit=${number}&offset=0&rating=g&lang=en`;
  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((content) => {
      content.data.forEach((element) => {
        // console.log(content.data);
        // console.log(content.meta);
        if (number === "") {
          console.log("Please specify a number");
          // I tried below code but it gave me error!
          // const newDiv = document.createElement("div");
          // const text = document.createTextNode("Please specify a number");
          // newDiv.appendChild(text);
          // const oldDiv = document.querySelector("#inputs-button");
          // document.body.insertBefore(newDiv, oldDiv);
        } else {
          let fig = document.createElement("figure");
          let img = document.createElement("img");
          let fc = document.createElement("figcaption");
          img.src = element.images.downsized.url;
          img.alt = element.title;
          fc.textContent = element.title;
          fig.appendChild(img);
          fig.appendChild(fc);
          let out = document.querySelector(".out");
          out.insertAdjacentElement("afterbegin", fig);
          document.querySelector("#giphy-input").value = "";
          document.querySelector("#giphy-number").value = "";
        }
      });
    })
    .catch((err) => {
      console.log("error!");
    });
}
