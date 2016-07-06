function navigate(screen) {
  var current = "." + screen + "-container";
  console.log(current);
  if ($(current).hasClass("active")) {
    return;
  }

  $("section.active").addClass("exit");
  $(current).addClass("enter");

  setTimeout( function(){ 
    $("section").removeClass("active");
    $(current).addClass("active");
    $("section").removeClass("exit enter");
  }, 800);
}

$(function() {

  setTimeout( function(){ 
    $(".item").addClass("rotate");
    setTimeout( function(){ 
      $(".about-panel.animation").addClass("separate");
    }, 1000);
  }, 100);

  $(".item").on("click", function(){
    $(".about-panel").each(function() {
      $(this).addClass("expand");
    });

  });




});

// transform: translate3D(-240px, 60px, 0) rotateY(-40deg);