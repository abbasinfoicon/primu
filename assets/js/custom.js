(function ($) {
    "use strict";
    $(document).ready(function () {
        "use strict";

        //Scroll back to top

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
        var offset = 50;
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

        // Preloader
        var win = $(window);
        win.on('load', function () {
            $('#pre-loader').delay(350).fadeOut('slow');
            $('body').delay(350).css({
                'overflow': 'visible'
            });
        })

        if ($('.community_carousel').length > 0) {
            // community_carousel start
            $('.community_carousel').owlCarousel({
                loop: true,
                margin: 0,
                autoplay: false,
                nav: true,
                dots: false,
                navText: [
                    "<img src='assets/img/left-icon.png' class='left-icon'>",
                    "<img src='assets/img/right-icon.png' class='right-icon'>"
                ],
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 3
                    },
                    1000: {
                        items: 5
                    }
                }
            });
            // community_carousel end
        }

        if ($('.popup-youtube').length > 0) {
            // popup-video-section statt
            $(function () {
                $('.popup-youtube').magnificPopup({
                    disableOn: 700,
                    type: 'iframe',
                    mainClass: 'mfp-fade',
                    removalDelay: 160,
                    preloader: false,
                    fixedContentPos: false
                });
            });
            // popup-video-section end
        }

        // sticky start
        $(window).scroll(function () {
            if ($(this).scrollTop() > 1) {
                $('header').addClass("sticky");
            }
            else {
                $('header').removeClass("sticky");
            }
        });
        // sticky end

        if ($('.send-input').length > 0) {
            $('.send-input').focus(function () { $('.send-msg').addClass('open'); })
            $('.send-input').blur(function () { $('.send-msg').removeClass('open'); });

            $(".send-msg").click(function () { $('.send-input').value = '' })
        }

        if ($('.file-input').length > 0) {
            // upload profile img
            $('.file-input').change(function () {
                var curElement = $('.image');
                console.log(curElement);
                var reader = new FileReader();

                reader.onload = function (e) {
                    // get loaded data and render thumbnail.
                    curElement.attr('src', e.target.result);
                };

                // read the image file as a data URL.
                reader.readAsDataURL(this.files[0]);
            });
            // upload profile img ebd
        }

        if ($('.toggle-password').length > 0) {
            // show-password start
            $(".toggle-password").click(function () {

                $(this).toggleClass("fa-eye fa-eye-slash");
                var input = $($(this).attr("toggle"));
                if (input.attr("type") == "password") {
                    input.attr("type", "text");
                } else {
                    input.attr("type", "password");
                }
            });
            // show-password end
        }

        // input-drop-down start
        function readUrl(input) {

            if (input.files && input.files[0]) {
                let reader = new FileReader();
                reader.onload = (e) => {
                    let imgData = e.target.result;
                    let imgName = input.files[0].name;
                    input.setAttribute("data-title", imgName);
                    console.log(e.target.result);
                }
                reader.readAsDataURL(input.files[0]);
            }

        }
        // input-drop-down end

        // WOW active
        new WOW().init();
    });

})(jQuery);