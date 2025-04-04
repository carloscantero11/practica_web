$(document).ready(function () {
  var caja = $("#caja");
  var cajita = $("#cajita");
  var ocultar = $("#ocultar");
  var mostrar = $("#mostrar");
  var todoenuno = $("#todoenuno");
 
  // Hide | Show | Fast | Normal | Slow
  // fadeOut | fadeIn | fadeTo
  mostrar.hide();

  $("#mostrar").click(function () {
    $(this).hide();
    ocultar.show(() => {
      console.log("Botón OCULTAR restaurado.")
    });
    caja.fadeIn('fast');
    cajita.fadeTo('fast', 1)
  });

  $("#ocultar").click(function () {
    $(this).hide();
    mostrar.show(() => {
      console.log('Botón MOSTRAR restaurado.')
    });
    caja.fadeOut('slow');
    cajita.fadeTo('slow',0)
  });

  // Toggle y Slide
  todoenuno.click(function () {
    caja.slideToggle('normal');
    cajita.toggle('normal');
  })
});
