$(".nav-icon").click(function (params) {
  let display = $("#responsive-nav").css("display");
  if (display === "none") {
    $("#responsive-nav").slideDown(400);
  } else {
    $("#responsive-nav").slideUp(400);
  }
});
