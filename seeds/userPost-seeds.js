const { Post } = require('../models');

const postData = [
  {
    title: "",
    body: "",
    user_id: 1,
  },
  {
    title: "",
    body: "",
    user_id: 2,
  },
  {
    title: "",
    body:
      "",
    user_id: 3,
  },
  {
    title: "",
    body: "",
    user_id: 4,
  },
  {
    title: "",
    body: "",
    user_id: 5,
  },
];

const seedPost = () =>
  Post.bulkCreate(postData, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedPost;
