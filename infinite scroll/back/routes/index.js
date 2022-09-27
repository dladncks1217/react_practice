const { Op } = require("sequelize");
const { Post } = require("../models");

const router = require("express").Router();

router.post("/", async (req, res, next) => {
  const { nick, content } = req.body;
  const result = await Post.create({
    nick,
    content,
  });
  res.send(result);
});

router.post("/getposts", async (req, res, next) => {
  const { start, end } = req.body;

  const result = await Post.findAll({
    where: {
      id: {
        [Op.gt]: +start - 1,
        [Op.lt]: +end,
      },
    },
  });
  res.json(result);
});

module.exports = router;
