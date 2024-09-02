const express = require("express");
const rutas = express.Router();
const { logDateTime, logMessage } = require("./middlewares");

rutas.use(logDateTime);
rutas.get("/ruta1", (req, res) => {
  res.send("ruta1");
});

rutas.get("/ruta2", (req, res) => {
  res.send("ruta2");
});

rutas.get("/ruta3", (req, res) => {
  res.send("ruta3");
});

module.exports = rutas;