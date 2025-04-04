"use strict";

// Eventos

// load
window.addEventListener("load", () => {

  //------------- Eventos de Ratón -------------
  var boton = document.querySelector("#boton");

  function cambiarColor() {
    console.log("Me has dado Click");

    var bg = boton.style.background;

    if (bg == "green") {
      boton.style.background = "red";
    } else {
      boton.style.background = "green";
    }

    boton.style.padding = "10px";
    boton.style.border = "1px solid #ccc";

    return true;
  }

  // Evento click
  boton.addEventListener("click", function () {
    cambiarColor();
  });

  //Mouse over

  boton.addEventListener("mouseover", function () {
    boton.style.background = "#ccc";
  });

  // Mouseout

  boton.addEventListener("mouseout", function () {
    boton.style.background = "cyan";
  });

  //------------- Eventos de Teclado y Foco -------------

  var input = document.querySelector("#campo_nombre");

  // Focus

  input.addEventListener("focus", function () {
    console.log("Estas DENTRO del input");
  });

  // Blur

  input.addEventListener("blur", function () {
    console.log("Estas FUERA del input");
  });

  // Keydown

  input.addEventListener("keydown", function (event) {
    console.log("Estas pulsando la tecla:", String.fromCharCode(event.keyCode));
  });

  // Keypress

  input.addEventListener("keypress", function (event) {
    console.log("Tecla presionada:", String.fromCharCode(event.keyCode));
  });

  // Keyup

  input.addEventListener("keyup", function (event) {
    console.log("Tecla soltada:", String.fromCharCode(event.keyCode));
  });

});
