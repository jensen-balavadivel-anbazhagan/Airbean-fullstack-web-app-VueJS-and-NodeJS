const { Router } = require("express");
const router = new Router();
const menuController = require("../controllers/menuController");

router
  .route("/")
  .get(menuController.getProducts)

router.route("/key").get(menuController.getKey);
module.exports = router;
