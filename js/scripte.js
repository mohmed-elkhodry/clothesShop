/*global $, document, window*/
$(document).ready(function () {
    "use strict";
    $("html").niceScroll({
        cursorcolor: "#E53935",
        cursorwidth: "7px",
        cursoropacitymin: 0.4,
        cursorborder: "0px solid #fff",
        horizrailenabled: false
    });
    
    $(".owl-carousel").owlCarousel({
        center: true,
        items: 1,
        dots: true,
        nav: true,
        autoplay: true,
        autoplayHoverPause: true
    });
    
    function corausel_h() {
        var wh = $(window).height(),
            nh = $(".navbar").innerHeight();
        $(".carousel, .carousel-item").height(wh - nh);
    }
    
    corausel_h();
    $(window).resize(function () {
        corausel_h();
    });
    
    $(".catagories div div div").hover(function () {
        $(this).children("h5").css("opacity", 1);
        $(this).children("button").css("display", "block");
        $(this).children("button").animate({
            top : "60%"
        }, 1000);
    }, function () {
        $(this).children("h5").css("opacity", 0.5);
        $(this).children("button").css("display", "none");        
    });
    
});