"use strict";
$(".owl-carousel").owlCarousel({
  items: 6,
  dots: false,
  mouseDrag: true,
  autoplay: true,
  margin: 10,
  responsiveClass: true,
  responsive: {
    0: {
      items: 2,
    },
    480: {
      items: 3,
    },
    769: {
      items: 4,
    },
    940: {
      items: 6,
    },
  },
});

//Background image
$(".img-wrap").each(function () {
  var img = $(this).find("img");
  var src = img.attr("src");
  $(this).css("background-image", "url( " + src + " )");
});
