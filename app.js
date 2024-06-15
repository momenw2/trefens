const express = require("express");

const app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.json());

app.get("/", (req, res) => res.render("home"));
app.get("/About-Us", (req, res) => res.render("aboutUs"));
app.get("/product", (req, res) => res.render("productPage"));
app.get("/item", (req, res) => res.render("itemPage"));

//Error Handler
app.use((req, res, next) => {
  const err = new Error("Not found");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

app.listen(3000, () => {
  console.log("server started on port 3000.....");
});
