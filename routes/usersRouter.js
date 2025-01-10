// routes/usersRouter.js
const { Router } = require("express");
const usersController = require("../controllers/usersController");
const usersRouter = Router();

usersRouter.get("/", usersController.getUsernames);
usersRouter.get("/new", usersController.createUsernameGet);
usersRouter.get("/delete", usersController.deleteUsr);
usersRouter.post("/new", usersController.createUsernamePost);

module.exports = usersRouter;
