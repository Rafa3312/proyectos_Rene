const express = require ("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 4000;

const rutas = require("./rutas");

app.use("/", rutas);

app.listen(port,()=>{
    console.log("servidor en http://localhost:"+port);
});