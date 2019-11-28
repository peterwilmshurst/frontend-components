var body = document.querySelector("body");

window.addEventListener("scroll", function () {

    if (scrollY < 300) {
        body.classList.add("header-show")

    } else {
        body.classList.remove("header-show")
    }

});

var hamburger = document.querySelector('#hamburger');

hamburger.addEventListener('click', function () { 
    body.classList.toggle("nav-open")});
    

