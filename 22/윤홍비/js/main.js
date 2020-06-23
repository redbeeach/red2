//     const mainNav = document.querySelector('.navbar');
//     //    const navList = document.querySelector('.nav-list');
//     const hamburgerMenu = document.querySelector('.hamburger-menu');
//
//
//     hamburgerMenu.addEventListener('click', function () {
//         mainNav.classList.toggle('open');
//     });
//   
   

   
     var slider = new Swiper(".swiper-container", {
         slidesPerView: 'auto',
         spaceBetween: 150,
         centeredSlides: true,
         mousewheel: true
     })

     slider.on('slideChange', function () {
         TweenMax.to('.slide-text span', .2, {
             y: '-100px',
         })
         TweenMax.to('.slide-number span', .2, {
             x: '-100px',
         })
         TweenMax.to('.swiper-slide-active', .5, {
             scale: .85
         })
     })

     slider.on('slideChangeTransitionEnd', function () {

         TweenMax.to('.slide-text span', .2, {
             y: 0,
             delay: .5
         })
         TweenMax.to('.slide-text span', 0, {
             y: '100px',
         })

         TweenMax.to('.slide-number span', .2, {
             x: 0,
             delay: .7
         })
         TweenMax.to('.slide-number span', 0, {
             x: '100px',
         })

         TweenMax.to('.swiper-slide-active', .5, {
             scale: 1,
             ease: Power4.easeOut,
         })

         TweenMax.to('.swiper-slide-active .slide-text', 0, {
             autoAlpha: 1
         })
         TweenMax.to('.swiper-slide-active .slide-number', 0, {
             autoAlpha: 1
         })

         TweenMax.to('.swiper-slide-next .slide-text', 0, {
             autoAlpha: 0
         })
         TweenMax.to('.swiper-slide-prev .slide-text', 0, {
             autoAlpha: 0
         })

         TweenMax.to('.swiper-slide-next .slide-number', 0, {
             autoAlpha: 0
         })
         TweenMax.to('.swiper-slide-prev .slide-number', 0, {
             autoAlpha: 0
         })
     })

     TweenMax.to('.swiper-slide-next .slide-text', 0, {
         autoAlpha: 0
     })
     TweenMax.to('.swiper-slide-prev .slide-text', 0, {
         autoAlpha: 0
     })

     TweenMax.to('.swiper-slide-next .slide-number', 0, {
         autoAlpha: 0
     })
     TweenMax.to('.swiper-slide-prev .slide-number', 0, {
         autoAlpha: 0
     })

     TweenMax.to('.swiper-slide', 0, {
         scale: .85,
     })

     TweenMax.to('.swiper-slide-active', 0, {
         scale: 1,
     })



//$(document).ready(function(){
//    $('.your-class').slick({
//      slidesToShow: 4,
//      slidesToScroll: 1,
//      autoplay: true,
//      autoplaySpeed: 2000,
//      responsive: [
//        {
//          breakpoint: 1024,
//          settings: {
//          settings: {
//            slidesToShow: 3,
//            slidesToScroll: 1
//          }
//        },
//        {
//          breakpoint: 600,
//          settings: {
//            slidesToShow: 2,
//            slidesToScroll: 1
//          }
//        },
//        {
//          breakpoint: 480,
//          settings: {
//            slidesToShow: 1,
//            slidesToScroll: 1
//          }
//        }
//      ]
//    });
//});
