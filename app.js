const express = require("express");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  return res.render("index");
});

app.get("/login", (req, res) => {
  return res.render("login");
});

app.get("/signup", (req, res) => {
  return res.render("signup");
});
app.get("*", (req, res) => {
  return res.render("notfound");
});

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
