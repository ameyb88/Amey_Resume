var nav = $('.navigation');
    $('.nav-open').on("click", function () {

        if ( $(window).width() >= 991 ) {
            nav.toggleClass('nav-big-screen-close');
            nav.removeClass('nav-small-screen-open');

        } else {
            nav.toggleClass('nav-small-screen-open');
            nav.removeClass('nav-big-screen-close');
        }
    });

    // responsive nav when you resize the window
    $(window).on("resize", function () {
        if( $(this).width() >= 991 ) {
            nav.removeClass('nav-small-screen-open');

        } else {
            nav.removeClass('nav-big-screen-close');
        }
    });

    /* Scroll spy */
    $('body').scrollspy({ target: '#navigation' });

    /*--
     tooltip
    --*/
    $('[data-toggle="tooltip"]').tooltip();

    /*--
     Trigger MixitUp
     --*/
    $("#Container").mixItUp();

    /*--
     magnfic-popup
     --*/
    $('.gallery').each(function() { // the containers for all your galleries
        $(this).magnificPopup({
            delegate: '.portfolio-item-links > ul > li:first-of-type > a', // the selector for gallery item
            type: 'image',
            gallery: {
                enabled:true
            }
        });
    });