const router = require("express").Router();
const controller = require("./orders.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");
const dishesRouter = require("../dishes/dishes.router");
router
  .route("/")
  .get(controller.list)
  .post(controller.create)
  .all(methodNotAllowed);

router
  .route("/:orderId")
  .get(controller.read)
  .delete(controller.destroy)
  .put(controller.update)
  .all(methodNotAllowed);
//router.use("/:orderId/dishes/:dishId", dishesRouter);
module.exports = router;
