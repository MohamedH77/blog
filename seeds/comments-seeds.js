const { Comment } = require("../models");

const commentData = [
  {
    comment: "For help in HTML ask pTag",
    user_id: 1,
    userPost_id: 1,
  },
  {
    comment: "For CSS just make it look nice",
    user_id: 2,
    userPost_id: 1,
  },
  {
    comment: "For JS use functions",
    user_id: 3,
    userPost_id: 1,
  },
  {
    comment: "For NODE run npm install",
    user_id: 4,
    userPost_id: 1,
  },
  {
    comment: "Just order pizza",
    user_id: 5,
    userPost_id: 1,
  },
  
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
