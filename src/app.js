const express = require("express");
const bodyParser = require("body-parser");
const app = express();

//rotas
const index = require("./routes/index");
const colaboradoras = require("./routes/colaboradorasRoute");
const livros = require("./routes/livrosRoute");

// configurar body parser

app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})

app.use("/", index);
app.use("/colaboradoras", colaboradoras);
app.use("/livros", livros);

module.exports = app;