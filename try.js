$(document).ready(function(){
    $('.carousel').slick({
      arrows: true, // Set to false if you don't want navigation arrows
      dots: true,   // Set to false if you don't want navigation dots
      autoplay: true, // Set to false if you don't want autoplay
      autoplaySpeed: 3000, // Time between slides during autoplay in milliseconds
      infinite: true, // Set to false if you don't want infinite loop
      speed: 500, // Transition speed in milliseconds
      slidesToShow: 1, // Number of slides to show at once
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2 // Adjust the number of slides on different screen sizes
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1 // Adjust the number of slides on different screen sizes
          }
        }
      ]
    });
  });
  
