"use strict";

// ---------------- Timers ----------------

window.addEventListener("load", () => {

  var ejecutar;

  function intervalo() {
    var tiempo = setInterval(function () {
      var prueba = document.getElementById("tamaño");
      console.log("Set interval ejecutado");

      if (prueba.style.fontSize == "50px") {
        prueba.style.fontSize = "20px";
      } else {
        prueba.style.fontSize = "50px";
      }
    }, 1000);
    return tiempo;
  }
  
  var stop = document.getElementById("stop");
  var start = document.getElementById("start");
  stop.style.padding = "10px";
  start.style.padding = "10px";

  start.addEventListener("click", () => {
    alert("Se ha iniciado el tiempo");
    ejecutar = intervalo();
  });

  stop.addEventListener("click", () => {
    alert("Se ha detenido el tiempo");
    clearInterval(ejecutar);
  });

});
