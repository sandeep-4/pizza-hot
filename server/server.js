const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

const pizzaRoute = require("./router/pizzaRoute");
const orderRoute = require("./router/orderRoute");
const userRoute = require("./router/userRoute");

app.use(cors());
app.use(express.json());

const path = require("path");

const mongodb = "mongodb://localhost:27017/pizzadev";

app.use("/api/pizzas", pizzaRoute);
app.use("/api/orders", orderRoute);
app.use("/api/users", userRoute);

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static("../client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/build/index.html"));
  });
}

mongoose
  .connect(mongodb, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`connected to mongoDB`);
  })
  .catch(() => {
    console.log(`coludnt connect`);
  });

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
