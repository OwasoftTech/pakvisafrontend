$(function () {
    $(".futureCards").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        autoplay: true,
        navContainer: ".futureCardButtons",
        navText: ['<i class="fa-sharp fa-solid fa-angle-left"></i>', '<i class="fa-sharp fa-solid fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            992: {
                items: 3,
            },
        },
    });
    $(".brands").owlCarousel({
        loop: true,
        margin: 50,
        nav: false,
        dots: false,
        autoplay: true,
        responsive: {
            0: {
                items: 3,
            },
            576: {
                items: 6,
            },
            992: {
                items: 8,
            },
        },
    });
    $(".footerGallery").owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: false,
        autoplay: true,
        responsive: {
            0: {
                items: 3,
            },
            576: {
                items: 6,
            },
            992: {
                items: 8,
            },
        },
    });
});
