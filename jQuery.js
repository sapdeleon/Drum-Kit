$("h1").addClass("title");
$(document).on("keypress", function (event) {
  $("h1").text(event.key);
});
