const { Comment } = require("../models");

const commentData = [
  {
    comment: "",
    user_id: 1,
    userPost_id: 1,
  },
  {
    comment: "",
    user_id: 2,
    userPost_id: 1,
  },
  {
    comment: "",
    user_id: 3,
    userPost_id: 1,
  },
  {
    comment: "",
    user_id: 4,
    userPost_id: 1,
  },
  {
    comment: "",
    user_id: 5,
    userPost_id: 1,
  },
  
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
