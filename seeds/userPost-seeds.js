const { Post } = require('../models');

const postData = [
  {
    title: 'ABC',
    content: 'LLLLLLL',
    user_id: 1,
  },
  
];

const seedPost = () =>
  Post.bulkCreate(postData, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedPost;
