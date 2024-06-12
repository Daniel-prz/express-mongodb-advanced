"use strict";
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./src/models/User");
require("dotenv").config();
const userRouter = require("./src/routes");

const PORT = process.env.PORT || 3001;
const uri = `mongodb+srv://dan84perez:${process.env.DB_USER_PASSWORD}@cluster0.23zswrn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
app.use(cors());

app.use(express.json());

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(uri);
  console.log("Connected to MongoDB");
}
app.use(userRouter);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
