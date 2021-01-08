"use strict";
//part 1
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  convertToCurrency(currency) {
    const url = "https://api.exchangeratesapi.io/latest?base=DKK";

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        const usd = data.rates.USD * this.price;
        const euro = data.rates.EUR * this.price;
        const pound = data.rates.GBP * this.price;

        if (currency == "usd" || currency == "dollars") {
          console.log(`The price for this product is $ ${usd}`);
        } else if (currency == "euro" || currency == "eur") {
          console.log(`The price for this product is € ${euro}`);
        } else if (currency == " pound" || currency == "GBP") {
          console.log(`The price for this product is £ ${pound}`);
        } else {
          console.log("Your currency is not available.");
        }
      });
  }
}

class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
    console.log(this.products);
  }

  removeProduct(product) {
    this.products = this.products.filter((item) => item !== product);
    console.log(this.products);
  }

  searchProduct(productName) {
    const searchedProduct = this.products.filter(
      (product) => product.name === productName
    );
    console.log(searchedProduct);
  }

  getTotal() {
    let total = 0;
    const totalPrice = this.products.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.price;
    }, total);
    console.log(`The total price is : ${totalPrice}`);
  }

  renderProducts() {
    const cartDiv = document.getElementById("demo");
    const cartUl = document.createElement("ul");
    cartDiv.appendChild(cartUl);
    cartUl.innerHTML = "Shopping cart";
    this.products.forEach((product) => {
      const li = document.createElement("li");
      li.innerHTML = `name : ${product.name} <br> price: ${product.price}`;
      cartUl.appendChild(li);
    });
  }

  getUser() {
    const url = "https://jsonplaceholder.typicode.com/users/1";
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => console.log(data.username))
      .catch((err) => console.log("error"));
  }
}

const shoppingCart = new ShoppingCart();
const flatscreen = new Product("flat-screen", 5000);
const mobile = new Product("Iphone 12 pro max", 9000);
const laptop = new Product("macbook air", 6000);
const plant = new Product("plant", 50);

shoppingCart.addProduct(flatscreen);
shoppingCart.addProduct(mobile);
shoppingCart.addProduct(laptop);
shoppingCart.addProduct(plant);

plant.convertToCurrency("dollars");
laptop.convertToCurrency("dollars");
mobile.convertToCurrency("GBP");
plant.convertToCurrency("SEK");

// shoppingCart.removeProduct(flatscreen);
// shoppingCart.removeProduct(mobile);
// shoppingCart.removeProduct(laptop);

shoppingCart.renderProducts();
shoppingCart.getTotal();
shoppingCart.getUser();

shoppingCart.searchProduct("macbook air");
shoppingCart.searchProduct("headphones");
