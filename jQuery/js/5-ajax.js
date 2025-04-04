$(document).ready(function () {
  var datos = $("#datos");

  // Load
  //datos.load('https://reqres.in/');

  // Get
  $.get("https://reqres.in/api/users", { page: 2 }, (response) => {
    response.data.forEach((element, index) => {
      datos.append(
        "<p>" + element.first_name + " " + element.last_name + "</p>"
      );
    });
  });

  // Post
  $("#formulario").submit(function (e) {
    // No permite redirigir con la acción predeterminada que tiene el usuario.
    e.preventDefault();

    var usuario = {
      name: $('input[name="name"]').val(),
      apellido: $('input[name="apellido"]').val(),
    };

    /*
    Método Post
    $.post($(this).attr('action'), usuario, (response) => {
      console.log(response)
    });
    */

    // Método Ajax
    $.ajax({
      type: "POST",
      url: $(this).attr("action"),
      data: usuario,
      beforeSend: function () {
        console.log("Enviando Usuario...");
      },
      success: function (response) {
        console.log(response);
      },
      error: function () {
        console.log("A ocurrido un error");
      },
      timeout: 3000,
    });
  });
});
