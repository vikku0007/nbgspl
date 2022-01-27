$('.testimonial-slider').owlCarousel({
         loop: true,
         nav: true,
         navText: [
         "<i class='fa fa-long-arrow-left'></i>",
         "<i class='fa fa-long-arrow-right'></i>"
         ],
         autoplay: true,
         autoplayHoverPause: true,
         responsive: {
         0: {
         items: 1
         },
         600: {
         items: 2
         },
         1000: {
         items: 3
         }
         }
         })

         $('.client-slider').owlCarousel({
         loop: true,
         nav: true,
         navText: [
         "<i class='fa fa-long-arrow-left'></i>",
         "<i class='fa fa-long-arrow-right'></i>"
         ],
         autoplay: true,
         autoplayTimeout:1000,
         autoplayHoverPause: true,
         responsive: {
         0: {
         items: 2
         },
         600: {
         items: 3
         },
         1000: {
         items: 5
         }
         }
         })



         // ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#scrollUp').fadeIn(500);    // Fade in the arrow
    } else {
        $('#scrollUp').fadeOut(500);   // Else fade out the arrow
    }
});
$('#scrollUp').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 2000);
});


// Prevent closing from click inside dropdown
$(document).on('click', '.dropdown-menu', function (e) {
  e.stopPropagation();
});

// make it as accordion for smaller screens
if ($(window).width() < 992) {
  $('.dropdown-menu a').click(function(e){
    e.preventDefault();
      if($(this).next('.submenu').length){
        $(this).next('.submenu').toggle();
      }
      $('.dropdown').on('hide.bs.dropdown', function () {
     $(this).find('.submenu').hide();
  })
  });
}

//scroll to top end