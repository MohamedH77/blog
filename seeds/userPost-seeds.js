const { Post } = require('../models');

const postData = [
  {
    title: "Post 1",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    user_id: 1,
  },
  {
    title: "Post 2",
    content: "Pellentesque ac urna vitae ipsum mattis rutrum.",
    user_id: 2,
  },
  {
    title: "Post 3",
    content:
      "Nulla facilisi. Donec eleifend mauris sed lacus egestas tincidunt.",
    user_id: 3,
  },
  {
    title: "Post 4",
    content: "Fusce nec maximus diam, a faucibus justo.",
    user_id: 4,
  },
  {
    title: "Post 5",
    content: "Etiam finibus purus quis dui ullamcorper bibendum.",
    user_id: 5,
  },
];

const seedPost = () =>
  Post.bulkCreate(postData, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedPost;
