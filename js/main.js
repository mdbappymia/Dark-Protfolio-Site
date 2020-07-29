






$('#bar1,#bar3').barfiller({

    // color of bar
    barColor: '#16b597',

    // shows a tooltip
    tooltip: true,

    // duration in ms
    duration: 2000,

    // re-animate on resize
    animateOnResize: true,

    // custom symbol
    symbol: "%"

});
$('#bar2').barfiller({

    // color of bar
    barColor: '#16b597',

    // shows a tooltip
    tooltip: true,

    // duration in ms
    duration: 2000,

    // re-animate on resize
    animateOnResize: true,

    // custom symbol
    symbol: "%"

});
$('.test-popup-link').magnificPopup({
    type: 'image'
    // other options
});
$('.test-popup-link-2').magnificPopup({
    type: 'iframe'
    // other options
});

$(document).ready(function () {
    var mixer = mixitup('.mixit-sec')


    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
    });



    $(window).load(function () {
        $(".preloader").delay(500).slideUp("slow"); // set duration in brackets
    });
})

$('.js-waypoints').waypoint(function (direction) {
    if (direction == 'down') {
        $('.nav ').addClass('sticky');
        $('.up-btn').addClass('sticky-btn')
    }
    if (direction == 'up') {
        $('.nav').removeClass('sticky');
        $('.up-btn').removeClass('sticky-btn')
    }


})


function openNav() {
    document.getElementById('myNav').style.width = '300px';
}

function closeNav() {
    document.getElementById('myNav').style.width = '0';
}



$('.smooth-scroll a[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 750);
            return false;
        }
    }
});













/*This is pera */

$(window).scroll(function () { // Says this function is preformed continuisly while scrolling.
    var Scroll = $(window).scrollTop() + 1, // This variable finds the distance you have scrolled from the top.
        SectionOneOffset = $('#home').offset().top,
        SectionTwoOffset = $('#about').offset().top;
    SectionThreeOffset = $('#protfolio').offset().top;
    SectionFourOffset = $('#service').offset().top;
    SectionFiveOffset = $('#blog').offset().top;

    SectionSixOffset = $('#contact').offset().top;




    if (Scroll >= SectionOneOffset) {
        $(".home").addClass("active");
    } else {
        $(".home").removeClass("active");
    }
    if (Scroll >= SectionTwoOffset) {
        $(".about").addClass("active");

        $(".home").removeClass("active");

    } else {
        $(".about").removeClass("active");

    }
    if (Scroll >= SectionThreeOffset) {
        $(".protfolio").addClass("active");

        $(".home,.about,.service,.blog,.contact").removeClass("active");

    } else {
        $(".protfolio").removeClass("active");

    }
    if (Scroll >= SectionFourOffset) {
        $(".service").addClass("active");

        $(".home,.about,.protfolio,.blog,.contact").removeClass("active");

    } else {
        $(".service").removeClass("active");

    }
    if (Scroll >= SectionFiveOffset) {
        $(".blog").addClass("active");

        $(".home,.about,.protfolio,.service,.contact").removeClass("active");

    } else {
        $(".blog").removeClass("active");

    }
    if (Scroll >= SectionSixOffset) {
        $(".contact").addClass("active");

        $(".home,.about,.protfolio,.service,.blog").removeClass("active");

    } else {
        $(".contact").removeClass("active");

    }
});



/*Scroll Reveal Animation*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/**home*/
sr.reveal('.home-mt');
sr.reveal('.my-image', { delay: 400 });
sr.reveal('.about-section');
sr.reveal('.exprience-section');
sr.reveal('.protfolio-section');
sr.reveal('.myservice-section');
sr.reveal('.blog-section');
sr.reveal('.contact-section');
sr.reveal('.footer-section');
sr.reveal('.testmonial-section');
/**about*/
/**protfolio*/
/**service*/
/**blog*/
/**contact*/
