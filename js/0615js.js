//bx slider
$(document).ready(function () {
    $('.posts_list').bxSlider({
        minSlides: 1,
        maxSlides: 3,
        moveSlides: 1,
        slideWidth: 370,
        slideMargin: 30,
        pager: false,
        nextSelector: '.recent_posts .controls .next',
        prevSelector: '.recent_posts .controls .prev'
    });
});

//grid


//const body = document.body,
//    scrollWrap = document.getElementsByClassName("wapppp")[0],
//    height = scrollWrap.getBoundingClientRect().height - 1,
//    speed = 0.04;
//
//var offset = 0;
//
//body.style.height = Math.floor(height) + "px";
//
//function smoothScroll() {
//    offset += (window.pageYOffset - offset) * speed;
//
//    var scroll = "translateY(-" + offset + "px) translateZ(0)";
//    scrollWrap.style.transform = scroll;
//
//    callScroll = requestAnimationFrame(smoothScroll);
//}
//
//smoothScroll();
