$(window).scroll(function(event) {
    var scroll = $(window).scrollTop();
    document.getElementById("scroller").innerHTML = scroll;
});