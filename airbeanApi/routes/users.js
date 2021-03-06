const { Router } = require("express");
const router = new Router();
const userController = require("../controllers/userController");

router
  .route("/")
  .post(userController.createUser)

router
  .route("/:id")
  .get(userController.getUser);
  
module.exports = router;
