const router = require("express").Router();
const { User, Post, Comment } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: { exclude: ["password"] },
          order: [["name", "ASC"]],
        },
      ],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    console.log(posts);

    res.render("all-dash-post", {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/post/:id", withAuth, async (req, res) => {
  console.log("========        hitting this route at all");
  try {
    const selectedPostData = await Post.findByPk(req.params.id, {
      include: [
        User,
        {
          model: Comment,
          include: [User],
        },
      ],
    });

    const selectedPost = selectedPostData.get({ plain: true });

    console.log({ selectedPost });

    console.log("========        we got to this spot");

    res.render("singlepost", {
      selectedPost,

      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).send({ err });
  }
});

router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const userData = await User.findOne({
      where: { id: req.session.user_id },
    });

    if (!userData) {
      res
        .status(400)
        .json({ message: "No user data found, please log in and try again" });
      return;
    }

    const postData = await Post.findAll({
      where: { user_id: req.session.user_id },
      include: [
        {
          model: User,
          attributes: { exclude: ["password"] },
          order: [["name", "ASC"]],
        },
      ],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render("dashboard", {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      // where: {},
      include: [
        {
          model: User,
          attributes: { exclude: ["password"] },
          order: [["name", "ASC"]],
        },
      ],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    console.log(posts);

    res.render("homepage", {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/css", withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      // where: {},
      include: [
        {
          model: User,
          attributes: { exclude: ["password"] },
          order: [["name", "ASC"]],
        },
      ],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    console.log(posts);

    res.render("homepage", {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/javascript", withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      // where: {},
      include: [
        {
          model: User,
          attributes: { exclude: ["password"] },
          order: [["name", "ASC"]],
        },
      ],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    console.log(posts);

    res.render("homepage", {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/node", withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      // where: {},
      include: [
        {
          model: User,
          attributes: { exclude: ["password"] },
          order: [["name", "ASC"]],
        },
      ],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    console.log(posts);

    res.render("homepage", {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/dashboard/new", withAuth, async (req, res) => {
  res.render("newpost");
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("signup");
});

module.exports = router;
