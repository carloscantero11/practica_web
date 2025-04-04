"use strict";

// JSON - JavaScript Object Notation

var pelicula = {
  titulo: "Interestelar",
  año: "2014",
  pais: "USA",
};

var peliculas = [{ titulo: "Fury", año: "2014", pais: "USA" }, pelicula];

var caja_peliculas = document.querySelector("#peliculas");

for (let index in peliculas) {
  var p = document.createElement("p");
  p.append(peliculas[index].titulo + " - " + peliculas[index].año);
  caja_peliculas.append(p);
}

console.log(peliculas);
