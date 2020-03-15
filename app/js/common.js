$(document).ready(function (){
   $(".owl-carousel").owlCarousel();
})
$(".owl-carousel").owlCarousel({
   items: 1,
   margin: 30,
   nav: true,
   dots: true,
   responsive:{
      500:{
         items: 2,
         margin: 30,
         nav: true,
         dots: true
      },
      768:{
         items: 3,
         margin: 30,
         nav: true,
         dots: true,
         loop: true
      }
   }
});

document.querySelector('.burger button').onclick = function () {
   document.querySelector('.menu').classList.toggle('hidden');
};