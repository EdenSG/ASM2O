skrollr.init();

$(document).ready(function() {
    $('html').animate({
        scrollTop: '0'
    }, 100);
    $('body').animate({
        scrollTop: '0'
    }, 100);
    $('aside').css('bottom', '1px');
    $('.fixed').css('position', 'fixed');
    $("a#menu").mouseover(function() {
        $(this).css('opacity', '0');
        $("nav").addClass('shown');
    });
    $("nav").mouseleave(function(event) {
        $(this).removeClass('shown');
        $("a#menu").css('opacity', '1');
    });
    // for (var i = 0; i < $('section img').size(); i++) {

    //         $('section img').eq(i).attr('src', $('section img').eq(i).attr('data-background'));
    // };

    for (var i = 0; i <= $('section img').size(); i++) {
        $('section img').eq(i).attr('src', $('section img').eq(i).attr('data-background'));
    }
});

function ScrollTo(amount) {
    $('html').animate({
        scrollTop: $(window).height() * amount
    }, 1000);
    $('body').animate({
        scrollTop: $(window).height() * amount
    }, 1000);
}

function next() {
    $('html').animate({
        scrollTop: $(window).height() * 1.4 + window.pageYOffset
    }, 350);
    $('body').animate({
        scrollTop: $(window).height() * 1.4 + window.pageYOffset
    }, 350);
}

function prev() {
    $('html').animate({
        scrollTop: $(window).height() * -1.4 + window.pageYOffset
    }, 350);
    $('body').animate({
        scrollTop: $(window).height() * -1.4 + window.pageYOffset
    }, 350);
}
