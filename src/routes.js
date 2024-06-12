const User = require("./models/User");

const router = require("express").Router();

router.post("/users", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.status(200).send(user);
});
router.get("/users", async (req, res) => {
  const users = await User.find();
  res.status(200).send(users);
});
router.get("/users/active", async (req, res) => {
  const users = await User.find({ isActive: true });
  res.status(200).send(users);
});

router.put("/users/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!user) {
      return res.status(404).send();
    }
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.put("/users/:id/deactivate", async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req.params.id,
    { isActive: false },
    {
      new: true,
      runValidators: true,
    }
  );
  res.status(200).send(user);
});
router.delete("/users/:id", async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
  res.status(200).end();
});

module.exports = router;
