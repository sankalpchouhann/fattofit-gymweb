$(window).on("scroll", function () {
    if ($(window).scrollTop()) {
      $("#navbar").addClass("scrolled");
    } else {
      $("#navbar").removeClass("scrolled");
    }
  });
  // Animate About Section on Scroll
$(window).on('scroll', function () {
    $('.animated').each(function () {
      const elementTop = $(this).offset().top;
      const scrollTop = $(window).scrollTop();
      const windowHeight = $(window).height();
  
      if (scrollTop + windowHeight > elementTop + 100) {
        $(this).addClass('visible');
      }
    });
  });