"use strict";

// Ejercicio 1

// Función para mostrar en pantalla
function mostrar(elementos) {
  document.write("<ul>");
  numeros.forEach((numeros, index) => {
    document.write("<li>" + numeros + "</li> <br/>");
  });
  document.write("</ul>")
}

// Pedir 6 números al usuario
var numeros = new Array(6);
for (var i = 0; i <= 5; i++) {
  numeros[i] = parseInt(prompt("Deme un número"));
}

// Mostrar en consola
console.log(numeros);

// Mostrar en el cuerpo de la página
document.write("<h1>" + "Contenido del Array" + "</h1>");
mostrar(numeros);

// Ordenar y mostrar
document.write("<h1>" + "Contenido del Array Ordenado" + "</h1>");
numeros.sort(function(a, b) {return a-b});
console.log("Lista ordenada:", numeros);
mostrar(numeros);

// Invertir y mostrar
document.write("<h1>" + "Contenido del Array Invertido" + "</h1>");
numeros.reverse();
mostrar(numeros);

// Mostrar cuantos elementos contiene el array
document.write("<h1>" + "El array tiene: " + numeros.length + " elmentos" + "</h1>");

// Busqueda de un valor introducido por el usuario
var busqueda = parseInt(prompt("Introduce el número que deseas buscar"));

var posicion = numeros.findIndex(numeros => numeros  == busqueda)

if (posicion && posicion != -1) { 
    document.write("<h1>" + "Encontrado:" + "</h1>");
    document.write("<h3>" + "Posición de busqueda: " + posicion + "</h3>");
}
else{
    document.write("<h1>" + "No Encontrado" + "</h1>");
}