const router = require("express").Router();
const { User, Post } = require("../../models");

router.post("/", async (req, res) => {
  console.log(req.body);
  try {
    const newpostData = await Post.create({
      title: req.body.title,
      body: req.body.body,
      user_id: req.session.user_id,

      // include: [
      //   {
      //     model: User,
      //     where: req.session.user_id,
      //     attributes: { exclude: ["password"] },
      //     order: [["name", "ASC"]],
      //   },
      // ],
    });

    const newpost = newpostData.get({ plain: true });

  console.log(newpost);

    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: { exclude: ["password"] },
          order: [["name", "ASC"]],
        },
        {
          model: Comment,
          include: [
            {
              model: User,
               attributes: { exclude: ["password"] }
        }
      ]
        }
      ],
    });

    const posts = postData.map((post) => Post.get({ plain: true }));

    console.log(posts);

    res.render("homepage", {
      newpost,
      posts,
    });
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

module.exports = router;
