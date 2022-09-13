$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
        $('.brandImg').attr('src', './assets/images/Navbar/logo2.png');
    } else {
        if($(window).width() > 991){
            $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
        $('.brandImg').attr('src', './assets/images/Navbar/logo.png');
        }
        else{
            $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
        $('.brandImg').attr('src', './assets/images/Navbar/logo2.png');
        }
    }
});
$(window).resize(function () {
    if ($(window).width() < 991) {
        $('.brandImg').attr('src', './assets/images/Navbar/logo2.png');
    }
    else {
        $('.brandImg').attr('src', './assets/images/Navbar/logo.png');
    }
});