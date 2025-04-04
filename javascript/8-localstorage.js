'use strict'

// LocalStorage

// Comprobar si existe localstorage en el navegador web
if(typeof(Storage) !== 'undefined'){
  console.log("Localstorage disponible");
}
else{
  console.log("Incompatible con localstorage");
}
  
// Guardar datos
localStorage.setItem("titulo", "Hamburgesa");

// Recuperar elemento
console.log(localStorage.getItem("titulo"));
document.querySelector("#comida").innerHTML = localStorage.getItem("titulo");
document

// Guardar objeto
var otraComida = {
  comida1: 'Pizza',
  comida2: 'Ensalada Cesar',
  comida3: 'Pastelitos'
};

    // Convertir el objeto JSON en un String
localStorage.setItem("otraComida", JSON.stringify(otraComida));

// Recuperar Objeto
var comidas = JSON.parse(localStorage.getItem("otraComida"));

console.log(comidas);

document.querySelector("#comida").append(", ",comidas.comida2 + ", " + comidas.comida1 + ", " + comidas.comida3 + ".");