const express = require("express");
const router = express.Router();

const redis = require("../redis");

/* GET redis data. */
router.get("/", async (req, res) => {
  counter = await redis.getAsync("counter");

  res.send({
    counter,
  });
});

module.exports = router;
