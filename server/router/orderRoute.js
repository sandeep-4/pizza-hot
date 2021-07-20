const express = require("express");
const {
  placeHolder,
  getUserOrders,
  getAllOrders,
  deleveredOrder,
} = require("../contollers/order");

const router = express.Router();

router.post("/placeholder", placeHolder);
router.post("/getuserorders", getUserOrders);
router.get("/getallorders", getAllOrders);
router.post("/deliverorder", deleveredOrder);

module.exports = router;
