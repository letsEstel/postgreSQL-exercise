// controllers/usersController.js
const db = require("../db/queries");

async function getUsernames(req, res) {
  const usernames = await db.getAllUsernames();
  const searchedUser = req.query.search;
  if (!searchedUser) {
    //if no parameters has been passed, show all
    console.log("Usernames: ", usernames);
    res.send("Usernames: " + usernames.map((user) => user.username).join(", "));
  } else {
    //if passed "/?search=sup", do the search
    const searchRes = await db.searchUsernames(searchedUser);
    console.log("Searched:", searchRes);
    res.send(
      "Searched result: " + searchRes.map((user) => user.username).join(", ")
    );
  }
}

async function createUsernameGet(req, res) {
  // render the form
  res.render("createUser", {
    title: "Create user",
  });
}

async function createUsernamePost(req, res) {
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect("/");
}

async function deleteUsr(req, res) {
  const message = await db.deleteUsernames();
  console.log(message);
  res.send(message);
}
module.exports = {
  getUsernames,
  createUsernameGet,
  createUsernamePost,
  deleteUsr,
};
