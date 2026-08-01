const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const path = require('path');

const uploadRoutes = require("./routes/uploadRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// app.use("/uploads", express.static("uploads"));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch(console.error);

app.use("/api", uploadRoutes);

app.get('/',(req,res)=>{
  res.status(200).send('<h1>Welcome to Home Page</h1>');
});

app.listen(process.env.PORT, () => {
  console.log(
    `Server Running on ${process.env.PORT}`
  );
});