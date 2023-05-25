const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");
const Like = require("./Like");

Post.belongsTo(User, {
  foreignKey: "user_id",
});

// User.hasMany(Post, {
//   foreignKey: "user_id",
//   onDelete: "CASCADE",
// });


// User.hasMany(Comment, {
//   foreignKey: "user_id",
//   onDelete: "CASCADE",
// });

// Post.hasMany(Comment, {
//   foreignKey: "userPost_id",
//   onDelete: "CASCADE",
// });

Comment.belongsTo(Post, {
  foreignKey: "userPost_id",
});
Comment.belongsTo(User, {
  foreignKey: "user_id",
});
// User.belongsToMany(Post, {
//   through: Like,
//   as: "liked_by",
// });

// Post.belongsToMany(User, {
//   through: Like,
//   as: "likes",
// });

module.exports = { User, Post, Comment, Like};
