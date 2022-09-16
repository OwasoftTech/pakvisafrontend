$(function () {
    $(".detailsMainSlider").owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        nav: true,
        dots: true,
        autoplay: true,
        navContainer: ".detailsMainSliderNav",
        dotsContainer: ".detailsMainSliderDots",
        navText: ['<i class="fa-sharp fa-solid fa-angle-left"></i>', '<i class="fa-sharp fa-solid fa-angle-right"></i>'],
    });
    $(".futureCards").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        autoplay: true,
        navContainer: ".futureCardButtons",
        navText: ["<", ">"],
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
        margin: 20,
    });
});
