const pool = require("./pool");

async function getAllUsernames() {
  const { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
}

async function insertUsername(username) {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}
async function searchUsernames(search) {
  try {
    // Use parameterized query to prevent SQL injection
    const res = await pool.query(
      `SELECT * FROM usernames WHERE username LIKE $1`,
      [`%${search}%`] // Pass the search term with wildcards (%)
    );

    // Return the results
    return res.rows;
  } catch (error) {
    console.error("Error searching usernames:", error);
    throw error; // Rethrow the error to handle it in the caller
  }
}
async function deleteUsernames() {
  const res = await pool.query("DELETE FROM usernames;");
  return res;
}
module.exports = {
  getAllUsernames,
  insertUsername,
  searchUsernames,
  deleteUsernames,
};
