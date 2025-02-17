const express = require("express");
const { Todo } = require("../mongo");
const router = express.Router();
const redis = require("../redis");

/* GET todos listing. */
router.get("/", async (_, res) => {
  console.log("Finding todos");
  const todos = await Todo.find({});
  console.log("Todos found", todos);
  res.send(todos);
});

/* POST todo to listing. */
router.post("/", async (req, res) => {
  const todo = await Todo.create({
    text: req.body.text,
    done: req.body.done,
  });

  rawRedisCounter = await redis.getAsync("counter");
  parsedRedisCounter = parseInt(rawRedisCounter);

  if (isNaN(parsedRedisCounter)) {
    parsedRedisCounter = 0;
  }

  redis.setAsync("counter", parsedRedisCounter + 1);

  res.send(todo);
});

const singleRouter = express.Router();

const findByIdMiddleware = async (req, res, next) => {
  console.log("In Middleware");

  const { id } = req.params;
  req.todo = await Todo.findById(id);
  if (!req.todo) return res.sendStatus(404);

  next();
};

/* DELETE todo. */
singleRouter.delete("/", async (req, res) => {
  await req.todo.delete();
  res.sendStatus(200);
});

/* GET todo. */
singleRouter.get("/", async (req, res) => {
  console.log("Getting single todo...");
  console.log(req.todo);
  res.send(req.todo);
});

/* PUT todo. */
singleRouter.put("/", async (req, res) => {
  //await req.todo.
  console.log("Updating todo...");
  console.log(req.todo);
  console.log(req.body);
  await Todo.findByIdAndUpdate(
    { _id: req.todo.id },
    { text: req.body.text, done: req.body.done }
  );
  res.sendStatus(200);
  //res.sendStatus(405); // Implement this
});

router.use("/:id", findByIdMiddleware, singleRouter);

module.exports = router;
