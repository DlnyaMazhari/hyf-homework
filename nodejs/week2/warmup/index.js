const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("nodejs week2 homework"));

app.get("/numbers/add", (req, res) => {
  const first = parseInt(req.query.first, 10);
  const second = parseInt(req.query.second, 10);
  const sum = first + second;

  res.send(JSON.stringify(sum));
});

app.get("/numbers/multiply/:first/:second", (req, res) => {
  const first = parseInt(req.params.first, 10);
  const second = parseInt(req.params.second, 10);
  const multiply = first * second;

  res.send(JSON.stringify(multiply));
});
app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
