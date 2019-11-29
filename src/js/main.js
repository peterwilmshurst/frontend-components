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
    body.classList.toggle("nav-open")
});

// // Vanilla JavaScript Scroll to Anchor
// // @ https://perishablepress.com/vanilla-javascript-scroll-anchor/

// (function () {
//     scrollTo();
// })();

// function scrollTo() {
//     const links = document.querySelectorAll('.scroll');
//     links.forEach(each => (each.onclick = scrollAnchors));
// }

// function scrollAnchors(e, respond = null) {
//     const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);
//     e.preventDefault();
//     var targetID = (respond) ? respond.getAttribute('href') : this.getAttribute('href');
//     const targetAnchor = document.querySelector(targetID);
//     if (!targetAnchor) return;
//     const originalTop = distanceToTop(targetAnchor);
//     window.scrollBy({
//         top: originalTop,
//         left: 0,
//         behavior: 'smooth'
//     });
//     const checkIfDone = setInterval(function () {
//         const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
//         if (distanceToTop(targetAnchor) === 0 || atBottom) {
//             targetAnchor.tabIndex = '-1';
//             targetAnchor.focus();
//             window.history.pushState('', '', targetID);
//             clearInterval(checkIfDone);
//         }
//     }, 100);
// }

$("#menu li").find("a").each(function () {
    new RegExp($(this).attr("href")).test(document.location.href) && ($(this).addClass("active"))
})