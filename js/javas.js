var navbar = document.getElementById("navbar");
var header = document.getElementById("header");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
        header.classList.add("navbar-is-stuck")
    } else {
        navbar.classList.remove("sticky");
        header.classList.remove("navbar-is-stuck")
    }
}