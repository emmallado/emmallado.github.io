AOS.init();

$('.js-menu').on('click', function() {
    $('html').addClass('menu-open');
});

$('.js-closeMenu').on('click', function() {
    $('html').removeClass('menu-open');
});

var swiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
    },
});