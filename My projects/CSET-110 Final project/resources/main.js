$(document).ready(function(){
    $('.slide').slick({
        infinite: true, slidesToShow: 4, slidesToScroll: 1, prevArrow: $('.slide-left'), nextArrow: $('.slide-right')
    });
  
    $('.slide-2').slick({
        infinite: true, slidesToShow: 1, slidesToScroll: 1, prevArrow: $('.arr-left'), nextArrow: $('.arr-right')
    });

window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})
});