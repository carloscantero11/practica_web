"use strict"; // Activa el modo estricto de JavaScript para mejor detección de errores

// Se espera a que se cargue completamente el documento
window.addEventListener("load", () => {

  // Se obtiene referencias a elementos del DOM
  var formulario = document.getElementById("formulario");
  var box_dashed = document.querySelector(".dashed");

  // Oculta inicialmente el contenedor con clase dashed
  box_dashed.style.display = "none";

  // Añade un evento al envío del formulario
  formulario.addEventListener("submit", function () {
    console.log("Evento capturado");

    // Obtiene los valores ingresados en el formulario
    var nombre = document.querySelector("#nombre").value;
    var apellido = document.querySelector("#apellido").value;
    var edad = parseInt(document.querySelector("#edad").value);

    if(nombre.trim() == null || nombre.trim().length == 0){
      alert('El nombre no es valido');
      return false;
    }
    if(apellido.trim() == null || apellido.trim().length == 0){
      alert('El apellido no es valido');
      return false;
    }
    if(edad == null || edad <= 0 || isNaN(edad)){
      alert('La edad no es valida');
      return false;
    }

    // Hace visible el contenedor que mostrará los datos
    box_dashed.style.display = "block";

    // Obtiene referencias a los elementos span donde se mostrarán los datos
    var p_nombre = document.querySelector("#p_nombre span");
    var p_apellido = document.querySelector("#p_apellido span");
    var p_edad = document.querySelector("#p_edad span");

    // Inserta los valores en los spans correspondientes
    p_nombre.innerHTML = nombre;
    p_apellido.innerHTML = apellido;
    p_edad.innerHTML = edad;

     /*
    --------METODO ORIGINAL----------

    var datos_usuario = [nombre,apellido,edad];
    for(var indice in datos_usuario){
      var parrafo = document.createElement("p");
      parrafo.append(datos_usuario[indice]);
      box_dashed.append(parrafo)
    }
   */ 
  });
});
