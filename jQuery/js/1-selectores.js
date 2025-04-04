// $ = Jquery
// $(selector).evento(funcion de callback)

$(document).ready(function () {
  console.log("JQuery cargado");

  // Selección de ID
  var rojo = $("#rojo").css("background", "red").css("color", "white");
  var amarillo = $("#amarillo").css("background", "yellow").css("color","blue");
  var verde = $("#verde").css("background", "green").css("color", "white");

  // Selectores de clases
  var mi_clase = $('.zebra')

  console.log(mi_clase.eq(1));  // Selecciona un elemento de un array en especifico

  mi_clase.css("padding", "5px");

  $('.sin_borde').click(function(){
    $(this).addClass('zebra');
  })

  // Selectores por etiqueta
  var parrafos = $('p').css("cursor", "pointer");

  parrafos.click(function() {
    var that = $(this);
    if(!that.hasClass('grande')){
      that.addClass("grande");
    }
    else{
      that.removeClass('grande')
    }    
  });

  // Selectores de atributo

  $('[title="Google"]').css('background', '#ccc');
  $('[title="Marca"]').css('background', 'red');

  // Otros
  //$('p,a').addClass('margen-superior')

  var  busqueda = $('#caja').find('.resaltado')

  busqueda.addClass('grande')

});
