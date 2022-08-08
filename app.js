const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");

// import routes
const postRoute = require("./routes/posts");

app.use("/posts", postRoute);

// ROUTES
app.get("/", (req, res) => {
  res.send("We are on home");
});

// Connect to DB
/// URL + USERNAME + PASSWORD

mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log("connected to db!");
});

// App listen

app.listen(3000);
