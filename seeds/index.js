const seedComments = require("./comments-seeds");
const seedPost = require("./userPost-seeds");
const seedUser = require("./user-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");

  await seedUser();
  console.log("\n----- User SEEDED -----\n");

  await seedPost();
  console.log("\n----- UserPost SEEDED -----\n");

  await seedComments();
  console.log("\n----- Comments SEEDED -----\n");

  await seedLike();
  console.log("\n----- Like SEEDED -----\n");

  process.exit(0);
};

seedAll();
