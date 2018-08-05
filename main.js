function navScroll() {
  var navHeight = $( window ).height() - 40;
  if ($(window).scrollTop() > navHeight) {
    $('.scrolling-nav').addClass('shown');
  }
  else {
    $('.scrolling-nav').removeClass('shown');
  }
}

$(function(){
  $('.joinServer').hide();

  console.log("Stupid google errors below, sry")
  // Add smooth scrolling to all links (Not Made By Jacob)
  $("a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  $(window).bind('scroll', function() {
   navScroll()
	});
  navScroll()

  $('.vid-hide').on('click',function() {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active')
      $('.vid-inner').show()
      $(this).text('Hide Video')
    }
    else {
      $(this).addClass('active')
      $('.vid-inner').hide()
      $(this).text('Show Video')
    }
  })

  $('.joinButton').on('click', function() {
    if (!$('.joinServer').hasClass('active')) {
      $('.joinServer').fadeIn()
    }
  })

  $('.joinServer').on('click', function(e) {
    if (e.target !== this)
      return;
    $('.joinServer').fadeOut('fast');
  })
})
