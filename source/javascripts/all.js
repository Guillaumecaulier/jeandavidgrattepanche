//= require wow.min
//= require particle.min

(function($) {
    "use strict";

    $('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 40
                }, 900);
                return false;
            }
        }
    });

    $(window).bind('scroll', function() {
        var navHeight = $(window).height() - 650;
        if ($(window).scrollTop() > navHeight) {
            $('.navbar-default').addClass('on');
            $('.navbar-default').removeClass('shadow');
        } else {
            $('.navbar-default').removeClass('on');
            $('.navbar-default').addClass('shadow');
        }
    });

    $('body').scrollspy({
        target: '.navbar-default',
        offset: 80
    })

    new WOW().init();
})(jQuery);

particlesJS.load('particles-js', 'javascripts/particles.json', function() {
  console.log('callback - particles.js config loaded');
});
