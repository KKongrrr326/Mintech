/* main.js */


var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;


// pc & moblie 공통 
jQuery(document).ready(function ($) {

    /* a 태그 경로 제거 */
    $('a[href="#"]').click(function (e) {
        e.preventDefault();
    })


});

jQuery(document).ready(function ($) {
    // pc 감지
    if (!isMobile) {


        // header : fixed 
        var fixed_head = 85;
        $(window).scroll(function () {
            var window = $(this).scrollTop();
            if (fixed_head <= window) {
                $("#sub-visual header").addClass("fixed");
            } else {
                $("#sub-visual header").removeClass("fixed");
            }
        })


    }
});

// moblie 감지
jQuery(document).ready(function ($) {
    if (isMobile) {

        // header : fixed 
        var m_fixed_head = 65;
        $(window).scroll(function () {
            var window = $(this).scrollTop();
            if (m_fixed_head <= window) {
                $("#sub-visual header").addClass("fixed");
            } else {
                $("#sub-visual header").removeClass("fixed");
            }
        })


        $(function () {
            $("header .m-menu").click(function () {
                $("#open-menu").show();
            })
            $("#open-menu .hide-btn button").click(function () {
                $("#open-menu").hide();
            })
        });
    }
});