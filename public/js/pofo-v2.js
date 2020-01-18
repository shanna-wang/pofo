
const swup = new Swup({
  plugins: [
    new SwupScrollPlugin({
      doScrollingRightAway: false,
      animateScroll: false,
    })
  ]
});

function init() {

  $(function() {

    $(".input-group input").focus(function() {
      $(this).parent().removeClass("transition-shake");
      $(this).parent().addClass("input-focus");
    });
    $(".input-group input").blur(function() {
      if( !$(this).val() ) {
        $(this).parent().removeClass("input-focus");
      };
    });

    // $('.back-to-top').click(function() {
    //   window.scrollTo({top: 0, behavior: 'smooth'});
    //   $(this).addClass('hidden');
    // });

    // // $(window).scroll(function(){
    // //   if ($(this).scrollTop() > 500) {
    // //       $('.back-to-top').removeClass('hidden');
    // //   } else {
    // //       $('.back-to-top').addClass('hidden');
    // //   }
    // // });


    if ($('form.password').length){
      $("form.password").attr('action', window.location.pathname);
    }

  });


}

init();
document.addEventListener('swup:contentReplaced', init);