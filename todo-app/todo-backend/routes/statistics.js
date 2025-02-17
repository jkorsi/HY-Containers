const express = require("express");
const router = express.Router();

const redis = require("../redis");

/* GET redis data. */
router.get("/", async (req, res) => {
  raw_added_todos = await redis.getAsync("added_todos");

  added_todos = parseInt(raw_added_todos);

  if (!added_todos || isNaN(added_todos)) {
    added_todos = 0;
  }

  res.send({
    added_todos,
  });
});

module.exports = router;
