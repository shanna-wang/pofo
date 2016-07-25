function whatIDo() {
  setTimeout( function(){ 
    $(".item").addClass("rotate");
    setTimeout( function(){ 
      $(".about-panel.animation").addClass("separate");
      $(".about-nav").addClass("visible");
    }, 1000);
  }, 1000);
}


$(function() {
  

  $(".details").each(function() {
    $(this).hide();
  });
  
  $(".button-play").on("click", function() {
    whatIDo();
    $(this).parent().fadeOut();
  });
  $(".animation .mobile .item").on("click", function() {
    var i = $(this).attr('id');
    console.log(i);
    $(".nav-dot").removeClass("active");
    $(".nav-dot:nth-child(" + i.slice(-1) + ")").addClass("active");
    
    $(".about-item").each(function(){
      $(this).removeClass("visible");
    });
    $(".about-item." + i).addClass("visible");

  });

  $(".nav-dot").on("click", function() {
    console.log($(this).index());
    var n = $(this).index() + 1;
    $(".nav-dot").removeClass("active");
    $(this).addClass("active");

    $(".about-item").each(function(){
      $(this).removeClass("visible");
    });
    $(".about-item.mobile-" + n).addClass("visible");
  });
  

  $(".item").on("click", function(){
    $(".about-panel").each(function() {
      $(this).addClass("expand");
    });
  });

  $(".works-item").on("click", function() {
    $(".detail-container").addClass("visible");
    $("body").addClass("modal-open");
    var i = $(this).attr('id');
    $(".details." + i).show();
  });

  $(".detail-bg, .detail-close").on("click", function() {
    $(".detail-container").removeClass("visible");
    $("body").removeClass("modal-open");
    $(".details").each(function() {
      $(this).hide();
    });
  });


  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

});

// transform: translate3D(-240px, 60px, 0) rotateY(-40deg);