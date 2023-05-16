const router = require("express").Router();
const userRoutes = require("./userRoutes");
const commentsRouters = require("./commentsRouters");


router.use("/other", otherRoutes);
router.use("/user", userRoutes);
router.use("/comments", commentsRouters);

module.exports = router;
