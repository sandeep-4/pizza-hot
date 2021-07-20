const Pizza = require("../models/pizzaModel");

exports.getAllPizzas = async (req, res) => {
  try {
    const pizzas = await Pizza.find({});
    res.send(pizzas);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};

exports.addPizza = async (req, res) => {
  const pizza = req.body.pizza;
  try {
    const newpizza = new Pizza({
      name: pizza.name,
      image: pizza.image,
      varities: ["small", "medium", "large"],
      description: pizza.description,
      category: pizza.category,
      prices: [pizza.prices],
    });
    await newpizza.save();
    res.send("New pizza added");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};

exports.getPizzaById = async (req, res) => {
  const pizzaid = req.body.pizzaid;
  try {
    const pizza = await Pizza.findOne({ _id: pizzaid });
    res.send(pizza);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};

exports.editPizza = async (req, res) => {
  const editedpizza = req.body.editedpizza;
  try {
    const pizza = await Pizza.findOne({ _id: editedpizza });
    (pizza.name = editedpizza.name),
      (pizza.image = editedpizza.image),
      (pizza.description = editedpizza.description),
      (pizza.category = editedpizza.category),
      (pizza.prices = [editedpizza.prices]),
      await pizza.save();
    res.send("Pizza edited sucessfully");
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

exports.deletePizza = async (req, res) => {
  const pizzaid = req.body.pizzaid;
  try {
    await Pizza.findOneAndDelete({ _id: pizzaid });
    res.send("Pizza deleted");
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
