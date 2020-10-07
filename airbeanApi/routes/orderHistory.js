const { Router } = require("express");
const router = new Router();
const historyController = require("../controllers/historyController");

router
  .route("/")
 .post(historyController.sendOrder);
 router
  .route("/:email")
  .get(historyController.showOrderHistory)

module.exports = router;
