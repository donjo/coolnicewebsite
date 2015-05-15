$(document).ready(function(){

  // animated header

  $(function(){
      $(".animated-header").typed({
        strings: ["<h1>**cool**_nice_</h1>"],
        showCursor: false,
        typeSpeed: 100,
        onStringTyped: setTimeout(function(){
          $(".animated-header").html("<h1><strong>cool</strong><em>nice</em></h1>");
        }, 2750),
      });
  });

  // animated contact button

  $('.show').on('click', function(){
    $('.fade').hide();
    $(".center-content").css("top", "13%");
    $('#contact-form').fadeIn("slow");
  });

});
