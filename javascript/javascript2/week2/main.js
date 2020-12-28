"use strict";
console.log("Script loaded");

const products = getAvailableProducts();
function renderProducts(products) {
  removeOldList();
  //   select and create tags
  const ulTag = document.querySelector("ul");
  for (let i = 0; i < products.length; i++) {
    const liTag = document.createElement("li");
    const nameTag = document.createElement("h3");
    const pricetag = document.createElement("div");
    const ratingTag = document.createElement("div");

    // populate tags
    nameTag.innerHTML = products[i].name;
    pricetag.innerHTML = "price: " + products[i].price;
    ratingTag.innerHTML = "rating: " + products[i].rating;

    // append tags
    liTag.appendChild(nameTag);
    liTag.appendChild(pricetag);
    liTag.appendChild(ratingTag);
    ulTag.appendChild(liTag);
  }
}
renderProducts(products);

// filter search
const input = document.querySelector("input");
input.addEventListener("input", result);

function result() {
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(input.value.toLowerCase())
  );
  renderProducts(filteredProducts);
  console.log(filteredProducts);
}

// max price
const priceInput = document.querySelector("#price-input");
priceInput.addEventListener("keyup", priceResult);
function priceResult() {
  if (parseInt(priceInput.value) > 0) {
    const filteredProducts = products.filter(
      (product) => product.price < parseInt(priceInput.value)
    );

    renderProducts(filteredProducts);
    console.log(filteredProducts);
  } else renderProducts(products);
}

// function to remove old lists
function removeOldList() {
  const ulTag = document.querySelector("ul");
  while (ulTag.hasChildNodes()) {
    ulTag.removeChild(ulTag.firstChild);
  }
}
