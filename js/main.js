(function ($) {
    "use strict";

    // Mobile Menu
    function clone_main_menu() {
        var _clone_menu = $('#header .clone-main-menu');
        var _target = $('#box-mobile-menu .clone-main-menu');
        var _data_width = $('#header .main-navigation').data('width');
        if ($(window).innerWidth() <= _data_width) {
            if (_clone_menu.length > 0) {
                _clone_menu.each(function () {
                    $(this).appendTo('#box-mobile-menu .box-inner');
                });
            }
        } else {
            if (_target.length > 0) {
                _target.each(function () {
                    $(this).appendTo('#header .main-navigation');
                });
            }
        }

        function action_addClass() {
            $('body').addClass('box-mobile-menu-open');
            return false;
        }

        function action_removeClass() {
            $('body').removeClass('box-mobile-menu-open');
            return false;
        }
        $(".mobile-navigation").on('click', action_addClass);
        $("#box-mobile-menu .close-menu, .body-overlay").on('click', action_removeClass);
    }
    function box_mobile_menu() {
        var _content = $('#box-mobile-menu .clone-main-menu');
        if ($(window).innerWidth() <= 1024) {
            _content.each(function () {
                var t = $(this);
                t.addClass('active');
                $(this).find('.toggle-submenu').on('click', function () {
                    t.removeClass('active');
                    var text_next = $(this).prev().text();
                    $('#box-mobile-menu .box-title').html(text_next);
                    t.find('li').removeClass('mobile-active');
                    $(this).parent().addClass('mobile-active');
                    $(this).parent().closest('.submenu').css({
                        'position': 'static',
                        'height': '0',
                    });
                    $('#box-mobile-menu #back-menu').css('display', 'block');
                })
            });
            $('#box-mobile-menu #back-menu').on('click', function () {
                _content.find('li.mobile-active').each(function () {
                    _content.find('li').removeClass('mobile-active');
                    if ($(this).parent().hasClass('main-menu')) {
                        _content.addClass('active');
                        $('#box-mobile-menu .box-title').html('MAIN MENU');
                        $('#box-mobile-menu #back-menu').css('display', 'none');
                    } else {
                        _content.removeClass('active');
                        $(this).parent().parent().addClass('mobile-active');
                        $(this).parent().css({
                            'position': 'absolute',
                            'height': 'auto',
                        });
                        var text_prev = $(this).parent().parent().children('a').text();
                        $('#box-mobile-menu .box-title').html(text_prev);
                    }
                })
            });
        }
        $('.mobile-navigation').on('click', function () {
            $('body').addClass('box-mobile-menu-open');
        });
        $('#box-mobile-menu .close-menu, .body-overlay').on('click', function () {
            $('body').removeClass('box-mobile-menu-open');
        });
    }
    $(window).on("resize", function () {
        clone_main_menu();
    });
    $(document).ready(function () {
        clone_main_menu();
        box_mobile_menu();
    });
    $(window).on("load", function () {
        clone_main_menu();
        box_mobile_menu();
    });
    var wind = $(window);
    
    // Scroll
    $.scrollIt({
        upKey: 38, // key code to navigate to the next section
        downKey: 40, // key code to navigate to the previous section
        easing: 'swing', // the easing function for animation
        scrollTime: 600, // how long (in ms) the animation takes
        activeClass: 'active', // class given to the active nav element
        onPageChange: null, // function(pageIndex) that is called when page is changed
        topOffset: -70 // offste (in px) for fixed top navigation
    });
    
    // Navbar scrolling background
    wind.on("scroll", function () {
        var bodyScroll = wind.scrollTop(),
            navbar = $(".navbar"),
            logo = $(".navbar .logo> img");
        if (bodyScroll > 100) {
            navbar.addClass("nav-scroll");
            logo.attr('src', 'img/logo.png');
        } else {
            navbar.removeClass("nav-scroll");
            logo.attr('src', 'img/logo.png');
        }
    });
    
    // Close navbar-collapse when a  clicked
    $(".navbar-nav a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });
    
    // Sections Background Image With Data 
    var pageSection = $(".bg-img, section");
    pageSection.each(function(indx){
        if ($(this).attr("data-background")){
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });
    
    // Clients Carousel
    $('#rudy-client-carousel').imagesLoaded(function () {
        $('#rudy-client-carousel').owlCarousel({
            loop: true
            , margin: 10
            , autoplay: true
            , smartSpeed: 1000
            , nav: false
            , dots: false
            , responsive: true
            , responsive: {
                0: {
                    items: 2
                }
                , 480: {
                    items: 2
                , }
                , 768: {
                    items: 5
                , }
            }
        });
    });
    
    // Blog owlCarousel
    $('.rudy-blog .owl-carousel').owlCarousel({
        loop: true
        , margin: 30
        , mouseDrag: true
        , autoplay: false
        , dots: true
        , responsiveClass: true
        , responsive: {
            0: {
                items: 1
            , }
            , 600: {
                items: 1
            }
            , 1000: {
                items: 2
            }
        }
    });
    
    // Testimonial owlCarousel
    $('.rudy-testimonial .owl-carousel').owlCarousel({
        loop: true
        , margin: 0
        , mouseDrag: true
        , dots: true
        , autoplay: false
        , responsiveClass:true
        , responsive: {
            0: {
                items: 1
            , }
            , 600: {
                items: 1
            }
            , 1000: {
                items: 1
            }
        }
    });
    
    // Smooth Scrolling
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
    
    // Button
    var buttons = document.querySelectorAll(".rudy-btn .rudy-btn2");
    for(var i = 0; i < buttons.length; i++) {
      var button = buttons[i];
      button.addEventListener("click", function() {
        if(!button.classList.contains("active"))
          button.classList.add("active");
        else
          button.classList.remove("active");
      });
    }
    
    // Portfolio 
    $(window).on("load", function () {
        var e = $(".portfolio-filter")
            , a = $("#menu-filter");
        e.isotope({
            filter: "*"
            , layoutMode: "masonry"
            , animationOptions: {
                duration: 750
                , easing: "linear"
            }
        }), a.find("a").on("click", function () {
            var o = $(this).attr("data-filter");
            return a.find("a").removeClass("active"), $(this).addClass("active"), e.isotope({
                filter: o
                , animationOptions: {
                    animationDuration: 750
                    , easing: "linear"
                    , queue: !1
                }
            }), !1
        })
    });
    
    // Magnific Popup
    $(".img-zoom").magnificPopup({
        type: "image"
        , closeOnContentClick: !0
        , mainClass: "mfp-fade"
        , gallery: {
            enabled: !0
            , navigateByImgClick: !0
            , preload: [0, 1]
        }
    });
    $(document).ready(function() {
        $('.popup-youtube, .popup-vimeo, .popup-gmaps, .popup-custom').magnificPopup({
          disableOn: 700,
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,
          fixedContentPos: false
        });

        $('.simple-ajax-popup-align-top').magnificPopup({
          type: 'ajax',
          alignTop: true,
          overflowY: 'scroll' // as we know that popup content is tall we set scroll overflow by default to avoid jump
        });
        $('.simple-ajax-popup').magnificPopup({
          type: 'ajax'
        });
        
      });
    
    //  Scroll back to top
    var progressPath = document.querySelector('.progress-wrap path');
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
    var updateProgress = function () {
        var scroll = $(window).scrollTop();
        var height = $(document).height() - $(window).height();
        var progress = pathLength - (scroll * pathLength / height);
        progressPath.style.strokeDashoffset = progress;
    }
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 150;
    var duration = 550;
    jQuery(window).on('scroll', function () {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.progress-wrap').addClass('active-progress');
        } else {
            jQuery('.progress-wrap').removeClass('active-progress');
        }
    });
    jQuery('.progress-wrap').on('click', function (event) {
        event.preventDefault();
        jQuery('html, body').animate({ scrollTop: 0 }, duration);
        return false;
    })
    
     
})(jQuery);

    // Mouse effect 
    function mousecursor() {
        if ($("body")) {
            const e = document.querySelector(".cursor-inner"),
                t = document.querySelector(".cursor-outer");
            let n, i = 0,
                o = !1;
            window.onmousemove = function (s) {
                o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX
            }, $("body").on("mouseenter", "a, .cursor-pointer", function () {
                e.classList.add("cursor-hover"), t.classList.add("cursor-hover")
            }), $("body").on("mouseleave", "a, .cursor-pointer", function () {
                $(this).is("a") && $(this).closest(".cursor-pointer").length || (e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover"))
            }), e.style.visibility = "visible", t.style.visibility = "visible"
        }
    };
    $(function () {
        mousecursor();
    });

    // Preloader page
    paceOptions = {
        ajax: true,
        document: true,
        eventLag: false
    };
    Pace.on('done', function() {
      $('#preloader').delay(600).fadeOut(900);
    });
