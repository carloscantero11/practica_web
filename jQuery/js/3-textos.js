$(document).ready(function () {
  var button = $("#add_button");
  var link = $("#add_link");
  reloadLinks();

  button.click(function () {
    $("#menu").append('<li><a href="' + link.val() + '"></a></li>');
    reloadLinks();
    link.val("");
  });
});

function reloadLinks() {
  $("a").each(function (index) {
    that = $(this);
    var enlace = that.attr("href");
    that.text(enlace);
  });
}
