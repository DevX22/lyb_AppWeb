$(function() {
    $(".nav-text li a").click(function() {
      $(".nav-text li a").removeClass("active");
      $(this).addClass("active");
    });
  });
 