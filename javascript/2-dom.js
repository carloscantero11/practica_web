'use strict'

// DOM - Document Object Model

function cambiaColor(color){
    caja.style.background = color;
}

//------------ Conseguir elementos con un ID concreto ------------

// var caja = document.getElementById("micaja");
var caja = document.querySelector("#micaja");

// Modificación de texto, estilos y clases
caja.innerHTML = "¡Texto modificado!";
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";

caja.className = "Hola";


//------------ Conseguir elementos por su etiqueta ------------

var todosLosDivs = document.getElementsByTagName('div');

var contenido_2 = todosLosDivs[2];
contenido_2.style.background = 'blue'
contenido_2.style.padding = '20px'
contenido_2.style.color = 'white'

console.log(todosLosDivs);

var valor;
for(valor in todosLosDivs){
    if(typeof todosLosDivs[valor].textContent =='string'){
        var parrafo = document.createElement('p');
        var texto = document.createTextNode(todosLosDivs[valor].textContent);
        parrafo.appendChild(texto);
        document.querySelector('#miseccion').appendChild(parrafo);
    }
}


//------------ Conseguir elementos por su clase ------------

var divsVerdes = document.getElementsByClassName('verde');
divsVerdes[2].style.background = 'green';
divsVerdes[2].style.padding = '20px';
divsVerdes[2].style.color = 'white';

console.log(divsVerdes);

// Query selector
var id = document.querySelector("#encabezado");
console.log(id);

// Query Selector All
var claseVerde= document.querySelectorAll("div.verde");
console.log(claseVerde);


