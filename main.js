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
  console.log("Stupid google errors below, sry")
  // Add smooth scrolling to all links (Not Made By Jacob)
  $("a").on('click', function(e) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      e.preventDefault();
      // Store hash
      var hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 500, function(){
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  $(window).bind('scroll', function() {
   navScroll()
	});
  navScroll()
})


var i = 0;
$('article').each(function(){
  i++;
  var head = $(this).find('h1').text().replace(/Rules/g,'');;
  $(this).attr('id', head.split(/[^a-zA-Z]/)[0] )
  $('.gs-toc ul:nth-child(1)').append(`<li class='head'><a href='#${head.split(/[^a-zA-Z]/)[0]}'>${head}</a></li>`)
})
