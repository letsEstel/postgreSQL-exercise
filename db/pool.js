const { Pool } = require("pg");

// All of the following properties should be read from environment variables
// We're hardcoding them here for simplicity
module.exports = new Pool({
  host: "localhost", // or wherever the db is hosted
  user: process.env.USER,
  database: "top_users",
  password: process.env.USER_PWD,
  port: 5432, // The default port
});
