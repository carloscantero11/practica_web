$(document).ready(function () {
  var caja = $("#caja");

  // MouseOver y MouseOut

  /*
  caja.mouseover(function() {
    $(this).css('background','red');
  });

  caja.mouseout(function() {
    $(this).css("background", "green")
  })
  */

  // Hover
  function cambiaRojo() {
    $(this).css("background", "red");
  }
  function cambiaVerde() {
    $(this).css("background", "green");
  }
  caja.hover(cambiaRojo, cambiaVerde);

  // Click | Doble Click
  caja.click(function () {
    $(this).css("background", "blue").css("color", "white");
  });

  caja.dblclick(function () {
    $(this).css("background", "pink").css("color", "blue");
  });

  // Focus y Blur
  var nombre = $("#nombre");

  nombre.focus(function () {
    $(this).css("border", "3px solid green").css("border-radius", "20px");
  });
  nombre.blur(function () {
    $(this).css("border", "1px solid black").css("border-radius", "20px");

    $("#datos").text($(this).val()).show();
  });

  // Mousemove

  $(document).mousemove(function () {
    /*
    console.log("En X: " + event.clientX)
    console.log("En Y: " + event.clientY)
    */
    var sigueme = $("#sigueme");
    sigueme.css("left", event.clientX).css("top", event.clientY);
    $("body").css("cursor", "none");
  });
});
