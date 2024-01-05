const express = require("express");

require("dotenv").config();

const app = express();
const port = 5100;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/king", (req, res) => {
  res.send("KING ANSHU BABU RAJPUT..!");
});

app.get("/login", (req, res) => {
  res.send("<h1>LOGIN SUCCESSFULLY...!</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
