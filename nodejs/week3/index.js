const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("nodejs week3 homework"));

//addition
//with get
app.get("/numbers/add", (req, res) => {
  const first = parseInt(req.query.first);
  const second = req.query.second;
  let sum = first;
  if (Array.isArray(req.query.second)) {
    for (let i = 0; i < second.length; i++) {
      sum += parseInt(second[i]);
    }
  } else {
    sum += parseInt(second);
  }

  res.json({ sum });
});
// with post
app.post("/numbers/add", (req, res) => {
  const first = parseInt(req.query.first);
  const second = req.query.second;
  let sum = first;
  if (Array.isArray(req.query.second)) {
    for (let i = 0; i < second.length; i++) {
      sum += parseInt(second[i]);
    }
  } else {
    sum += parseInt(second);
  }

  res.json({ sum: sum });
});
/***************************/
//subtraction
//with using get
app.get("/numbers/subtraction", (req, res) => {
  const first = parseInt(req.query.first);
  const second = req.query.second;
  let sum = 0;
  let difference = 0;
  if (Array.isArray(req.query.second)) {
    for (let i = 0; i < second.length; i++) {
      sum += parseInt(second[i]);
    }
    difference = first - sum;
  } else {
    difference = first - parseInt(second);
  }

  res.json({ difference });
});

//with using get
app.post("/numbers/subtraction", (req, res) => {
  const first = parseInt(req.query.first);
  const second = req.query.second;
  let sum = 0;
  let difference = 0;
  if (Array.isArray(req.query.second)) {
    for (let i = 0; i < second.length; i++) {
      sum += parseInt(second[i]);
    }
    difference = first - sum;
  } else {
    difference = first - parseInt(second);
  }

  res.json({ difference });
});
/***************************************/
//multiplication
// with using get
app.get("/numbers/multiply", (req, res) => {
  const first = parseInt(req.query.first);
  const second = req.query.second;
  let totalSecondProducts = 1;
  let product = 1;
  if (Array.isArray(req.query.second)) {
    for (let i = 0; i < second.length; i++) {
      totalSecondProducts *= parseInt(second[i]);
    }
    product = first * totalSecondProducts;
  } else {
    product = first * parseInt(second);
  }

  res.json({ product: product });
});
// with using post
app.post("/numbers/multiply", (req, res) => {
  const first = parseInt(req.query.first);
  const second = req.query.second;
  let totalSecondProducts = 1;
  let product = 1;
  if (Array.isArray(req.query.second)) {
    for (let i = 0; i < second.length; i++) {
      totalSecondProducts *= parseInt(second[i]);
    }
    product = first * totalSecondProducts;
  } else {
    product = first * parseInt(second);
  }

  res.json({ product: product });
});
/*********************************/
//Division
// with using get
app.get("/numbers/division", (req, res) => {
  const first = parseInt(req.query.first);
  const second = req.query.second;
  let totalSecondProducts = 1;
  let div = 1;
  if (Array.isArray(req.query.second)) {
    for (let i = 0; i < second.length; i++) {
      totalSecondProducts *= parseInt(second[i]);
    }
    div = first / totalSecondProducts;
  } else {
    div = first / parseInt(second);
  }

  res.json({ div });
});
// with using post
app.post("/numbers/division", (req, res) => {
  const first = parseInt(req.query.first);
  const second = req.query.second;
  let totalSecondProducts = 1;
  let div = 1;
  if (Array.isArray(req.query.second)) {
    for (let i = 0; i < second.length; i++) {
      totalSecondProducts *= parseInt(second[i]);
    }
    div = first / totalSecondProducts;
  } else {
    div = first / parseInt(second);
  }

  res.json({ div });
});

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
