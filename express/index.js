"use strict";

var mongoose = require("mongoose");
var app = require('./app')
var port = 3700

mongoose
  .connect("mongodb://127.0.0.1:27017/portafolio")
  .then(() => {
    console.log("Conexion a la base de datos establecida");

    // Creación del Servidor
    app.listen(port, () => {
      console.log(`Servidor corriendo correctamente en la url: Localhost:${port}`);
    });

  })
  .catch((err) => console.log(err));
