const express = require("express");
const productsRouter = require("./routes/productsRoute.js");
const test = require('./models/productsModel.js')
// import mongoose from 'mongoose';
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use("/api/products", productsRouter);

const url =
  "mongodb+srv://$_USERNAME_$:$_PASSWORD_$@cluster0.zbr7exs.mongodb.net/$_DB_NAME_$?retryWrites=true&w=majority&appName=Cluster0";
const databseUser = "ravisuneel6565";
const databasePassword = "12345";
const databaseName = "Amazon-Backend";

let dbLink = url.replace("$_USERNAME_$", databseUser);
dbLink = dbLink.replace("$_PASSWORD_$", databasePassword);
dbLink = dbLink.replace("$_DB_NAME_$", databaseName);

mongoose.connect(dbLink).then(() => console.log("database connected"));

app.listen(3000, () => {
  console.log("server is runnig on port 3000");
});
