//= require vendor/jquery-1.11.1.min
//= require vendor/jquery.easing.min
//= require vendor/stickyNavbar.min


// jQuery for page scrolling feature
$(function() {
    $('a.scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 110
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });
});


    //// jQuery for navbar links page scrolling, navbar stickying and active class spy
    $(function () {
        $('.top-menu').stickyNavbar({
            activeClass: "active", // Class to be added to highlight nav elements
            sectionSelector: "scrollto", // Class of the section that is interconnected with nav links
            animDuration: 1000, // Duration of jQuery animation as well as jQuery scrolling duration
            startAt: 0, // Stick the menu at XXXpx from the top of the this() (nav container)
            easing: "easeInOutExpo", // Easing type if jqueryEffects = true, use jQuery Easing plugin to extend easing types - gsgd.co.uk/sandbox/jquery/easing
            animateCSS: true, // AnimateCSS effect on/off
            animateCSSRepeat: false, // Repeat animation everytime user scrolls
            cssAnimation: "fadeInDown", // AnimateCSS class that will be added to selector
            jqueryEffects: false, // jQuery animation on/off
            jqueryAnim: "slideDown", // jQuery animation type: fadeIn, show or slideDown
            selector: "a", // Selector to which activeClass will be added, either "a" or "li"
            mobile: false, // If false, nav will not stick under viewport width of 480px (default) or user defined mobileWidth
            mobileWidth: 600, // The viewport width (without scrollbar) under which stickyNavbar will not be applied (due user usability on mobile)
            zindex: 9999, // The zindex value to apply to the element: default 9999, other option is "auto"
            stickyModeClass: "sticky", // Class that will be applied to 'this' in sticky mode
            unstickyModeClass: "unsticky" // Class that will be applied to 'this' in non-sticky mode
        });
    });
