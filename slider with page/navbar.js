$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $("#menu").addClass("sticky");
    } else {
        $("#menu").removeClass("sticky");
    }
});


$(document).ready(function () {
    $('ul.navbar-nav > li').click(function (e) {
    $('ul.navbar-nav > li').removeClass('active');
    $(this).addClass('active');
});
});