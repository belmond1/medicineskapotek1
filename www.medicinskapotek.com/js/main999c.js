(function ($) {
    'use strict';
    jQuery(document).ready(function () {
        $('ul.nav.navbar-nav').slicknav({
            allowParentLinks: true
        });
        $('.MainSlider').owlCarousel({
            loop: true,
            margin: 0,
            dots: false,
            responsiveClass: true,
            items:1,
            nav:true,
            autoplay:true,
        });
        
        $('.Latestproduct').owlCarousel({
            loop: true,
            margin: 0,
            dots: false,
            responsiveClass: true,
            items:1,
            nav:true,
            autoplay:true,
        });
        
        $('.TestimonialSlider').owlCarousel({
            loop: true,
            margin: 0,
            dots: false,
            responsiveClass: true,
            items:1,
            nav:true,
        });
        
        $('.RelatedProduct').owlCarousel({
            loop: true,
            margin: 30,
            dots: false,
            responsiveClass: true,
            items:4,
            nav:true,
        });
        
        $('.doctor_carousel').owlCarousel({
            loop: true,
            margin: 29,
            dots: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                400: {
                    items: 2
                },
                600: {
                    items: 4
                },
                992: {
                    items: 6
                }
            }
        });

        $('.product_carousel').owlCarousel({
            loop: true,
            margin: 10,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                270: {
                    items: 1,
                    nav: true
                }
            }
        });

        $('.service_banner').owlCarousel({
            loop: true,
            margin: 0,
            dots: false,
            responsiveClass: true,
            items:1,
            nav:true,
            autoplay:false,
        });

        $(".back_top").click(function () {
            $("html, body").animate({scrollTop: 0}, 1000);
        });
    });

    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $('.back_top').fadeIn();
        } else {
            $('.back_top').fadeOut();
        }
    });
    
    
    
    $(document).ready(function(){
        $(".CartSlide").click(function(){
            $(".box").animate({
                width: "toggle"
            });
        });
    });
    
}(jQuery));