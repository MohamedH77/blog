const { User } = require("../models");

const userData = [
  {
    fname: "mohamed",
    username: "mhohamed",
    lname: "mohamed",
    email: "mohamed@gmail.com",
    password: "bjbxsgxsygxysgxysg",
  },
  
];

async function seedUser(){
  console.log("seeding user...")
  return await User.bulkCreate(userData, {
    individualHooks: true
  });
}

module.exports = seedUser;
