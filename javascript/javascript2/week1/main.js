"use strict";
console.log("Script loaded");

const products = getAvailableProducts();
function renderProducts(products) {
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
