const router = require("express").Router();
const userRoutes = require("./userRoutes");
const commentRouters = require("./commentRouters");
const postRouts = require("./postRouts");



router.use("/user", userRoutes);
router.use("/comment", commentRouters);
router.use("/post", postRouts);

module.exports = router;
