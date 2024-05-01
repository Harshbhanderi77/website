//  pre loder 

function hideLoader() {
  $("#loader").addClass("d-none");

  $("#whatsapp").removeClass("hide");
}
$(document).ready(function () {
  setTimeout(function () {
    hideLoader();
  }, 1500);
});


// aos animation 

AOS.init({
  // duration:1000,
});


// swiper slider 

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 1,
  centeredSlides: true,
  speed: 3000,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



// slick slider 

$(".items").slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 3000,
  pauseOnHover: false,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: false,
        speed: 3000,
        centerMode: true,
        centerPadding: "0px",
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 600,
      settings: {
        arrows: false,
        speed: 3000,
        centerMode: true,
        centerPadding: "0px",
        slidesToShow: 3,
      },
    },
  ],
});
