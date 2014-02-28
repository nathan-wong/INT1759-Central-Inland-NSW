$(document).ready(function() {

    $(window).scroll(function(e) {
        var s = $(window).scrollTop(),
            d = $(document).height(),
            c = $(window).height(),
            opacityVal = (s / 350);

        $('.blurred-image').css('opacity', opacityVal);
    });
});
