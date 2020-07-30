$(document).ready(
    function () {
        $(window).scroll(
            function () {
                if ($(this).scrollTop() > 500) {
                    $('header').addClass(' animate__animated animate__fadeIn sticky-top')
                } else {
                    $('header').removeClass(' animate__animated animate__fadeIn sticky-top');
                }
            }
        )
    }
);