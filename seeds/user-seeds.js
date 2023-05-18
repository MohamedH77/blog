const { User } = require("../models");

const userData = [
  {
    fname: "",
    lname: "",
    email: "",
    password: "",
  },
  {
    fname: "",
    lname: "",
    email: "",
    password: "",
  },
  {
    fname: "",
    lname: "",
    email: "",
    password: "",
  },
  {
    fname: "",
    lname: "",
    email: "",
    password: "",
  },
  {
    fname: "",
    lname: "",
    email: "",
    password: "",
  },
];

async function seedUser(){

  return await User.bulkCreate(userData, {
    individualHooks: true
  });
}

module.exports = seedUser;
