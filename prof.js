$('.resum').hover(
    function(){
        $('.imageee').fadeIn('slow')
    },function(){
        $('.imageee').fadeOut('slow')
    }
);

$(document).ready(function() {
    $("#carousel").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev">Previous</button>',
        nextArrow: '<button type="button" class="slick-next">Next</button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});