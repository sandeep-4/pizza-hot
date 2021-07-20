const express = require("express");
const {
  getAllPizzas,
  addPizza,
  getPizzaById,
  editPizza,
  deletePizza,
} = require("../contollers/pizza");

const router = express.Router();

router.get("/getallpizzas", getAllPizzas);
router.post("/addpizza", addPizza);
router.post("/getpizzabyid", getPizzaById);
router.post("/editpizza", editPizza);
router.post("/deletepizza", deletePizza);

module.exports = router;
