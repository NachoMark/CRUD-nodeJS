const express = require("express");
const { envs } = require("./server/server.js");
const mongoose = require("mongoose");
const Product = require("./model/product.model.js");
const router = require("./router/product.routes.js")

const app = express();
const port = envs.PORT;

app.use(express.json())
app.use("/", router)

app.get("/", (req, res) => {
  res.send("HOLA");
});

mongoose
  .connect(
    "mongodb+srv://nacmarki:0BCaURNk6pt1WdL0@cluster0.nkhc3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to DB");
    app.listen(port, () => {
      console.log(`Connected to port ${port}`);
    });
  })
  .catch(() => {
    console.log("Connection failed");
  });
