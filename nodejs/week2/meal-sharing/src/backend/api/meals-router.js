const express = require("express");
const router = express.Router();

const meals = require("./../data/meals.json");

router.get("/", async (request, response) => {
  try {
    if (Object.keys(request.query).length !== 0) {
      const maxPrice = request.query.maxPrice;
      const title = request.query.title;
      const createdAfter = request.query.createdAfter;
      const limit = request.query.limit;
      if (maxPrice) {
        const result = meals.filter((meal) => meal.price < maxPrice);
        response.send(result);
      } else if (title) {
        const result = meals.filter((meal) =>
          meal.title.toLocaleLowerCase().includes(title.toLocaleLowerCase())
        );
        response.send(result);
      } else if (createdAfter) {
        const result = meals.filter(
          (meal) => Date.parse(meal.createdAt) > Date.parse(createdAfter)
        );
        response.send(result);
      } else if (limit) {
        const result = meals.filter((meal) => meal.id <= limit);
        response.send(result);
      }
    } else {
      response.send(meals);
    }
  } catch (error) {
    throw error;
  }
});

router.get("/:id", async (request, response) => {
  try {
    const id = parseInt(request.params.id, 10);

    if (Number.isNaN(id)) {
      response.send("It is invalid!");
    }
    const result = meals.filter((meal) => meal.id === id);
    if (result.length === 0) {
      response.send("out of range!");
    } else {
      response.json(result);
    }
  } catch (error) {
    throw error;
  }
});

module.exports = router;
