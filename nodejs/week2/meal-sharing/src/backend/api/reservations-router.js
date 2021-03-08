const express = require("express");
const router = express.Router();

const reservations = require("./../data/reservations.json");

router.get("/", async (request, response) => {
  try {
    response.send(reservations);
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
    const result = reservations.filter((reservation) => reservation.id === id);
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
