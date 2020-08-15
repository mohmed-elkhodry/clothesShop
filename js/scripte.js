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
    
    
});