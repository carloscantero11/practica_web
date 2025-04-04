"use strict";

// Definición de variables para seleccionar elementos del DOM
var div_usuarios = document.querySelector("#usuarios");
var div_janet = document.querySelector("#janet");
var div_profesor = document.querySelector('#profesor');

// Llamada inicial para obtener los usuarios
getUsuarios()
  // Convertir la respuesta de la API en un objeto JSON
  .then((data) => data.json()) 
  .then((users) => {
    // Llamar a la función para listar los usuarios en el DOM
    listadoUsuarios(users.data); 
    // Llamar a la función para obtener información adicional (profesor)
    return getInfo(); 

  })
  .then((data) => {
    div_profesor.innerHTML = data; 
    return getJanet(); 
  })
  .then((data) => data.json())
  .then((user) => {
    mostrarJanet(user.data); 

  })
  .catch(error => {
    // Manejo de errores en caso de que alguna promesa falle
    alert('Error en las peticiones'); 
  });

// Función para obtener la lista de usuarios desde una API
function getUsuarios() {
  return fetch("https://reqres.in/api/users"); 
}

// Función para obtener los datos del usuario Janet desde una API
function getJanet() {
  return fetch("https://reqres.in/api/users/2"); 
}

// Función para obtener información de un "profesor" simulada con una promesa
function getInfo() {
  var profesor = {
    nombre: "victor",
    apellido: "Robles",
    url: "https://www.realmadrid.com/es-ES", 
  };

  // Retorna una nueva promesa que simula una operación asíncrona
  return new Promise((resolve, reject) => {
    var profesor_string = "";

    setTimeout(() => {
      var profesor_string = JSON.stringify(profesor); 

      if (typeof profesor_string != "string" || profesor_string == "") return reject("error");

      return resolve(profesor_string); 
    }, 3000);
  });
}

// Función para listar los usuarios en el DOM
function listadoUsuarios(usuarios) {
  usuarios.map((user, i) => {
    let nombre = document.createElement("h5"); 
    nombre.innerHTML = i + ") " + user.first_name + " " + user.last_name; 

    div_usuarios.appendChild(nombre); 

    document.querySelector(".loading").style.display = "none"; 
  });
}

// Función para mostrar la información de Janet en el DOM
function mostrarJanet(user) {
  let nombre = document.createElement("h4"); 
  let avatar = document.createElement("img"); 

  nombre.innerHTML = user.first_name + " " + user.last_name;
  avatar.src = user.avatar;
  avatar.width = "100";

  div_janet.appendChild(nombre); 
  div_janet.appendChild(avatar); 

  // Oculta el mensaje de carga para Janet
  document.querySelector("#janet .loading").style.display = "none"; 
}