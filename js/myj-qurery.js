$(document).ready(function () {
  $("#toggle").click(function () {
    $("nav").slideToggle();
  });

  $(".back-to-top").hide();

  $(".back-to-top").click(function () {
    $("html").animate({ scrollTop: "0" });
  });
});

$(window).on("load", function () {
  $(".overlay").fadeOut(2000);
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 0) {
    $("header").addClass("active-header");
    $(".back-to-top").fadeIn();
  } else {
    $("header").removeClass("active-header");
    $(".back-to-top").fadeOut();
  }
});

$(document).ready(function () {

  $("#toggle").click(function (e) {
    $(this).parent(".navbar").find("#toggle i").toggleClass("fa-solid fa-bars fa-solid fa-xmark toggle-rotate");

  });
});

$(document).ready(function () {

  $("nav ul li a").click(function (e) {
    $(this).parent("nav ul li").find(".drop-down").slideToggle();
    $(this).parent("nav ul li").prevAll("nav ul li").find(".drop-down").slideUp();
    $(this).parent("nav ul li").nextAll("nav ul li").find(".drop-down").slideUp();
  });
});
$(document).ready(function () {
  $("#header-link").click(function (e) {
    $(this).parent("#header-items").find("#header-link i").toggleClass("icon-rotate");
    $(this).parent("#header-items").prevAll("#header-items").find("#header-link i").toggleClass("icon-rotate");
    $(this).parent("#header-items").nextAll("#header-items").find("#header-link i").toggleClass("icon-rotate");
  });
});
// gallray
$('[data-fancybox]').fancybox({
  // Options will go here
  buttons: [
    'close'
  ],
  wheel: false,
  transitionEffect: "slide",
  // thumbs          : false,
  // hash            : false,
  loop: true,
  // keyboard        : true,
  toolbar: false,
  // animationEffect : false,
  // arrows          : true,
  clickContent: false
});

// slider

$(".owl-carousel-1").owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 2500,
  margin: 20,
  stagePadding: 15,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

$(document).ready(function () {
  $(".owl-carousel-2").owlCarousel({
    loop: true,
    margin: 20,
    stagePadding: 15,
    autoplayTimeout: 2000,
    autoplay: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
});

// counter js

var a = 0;
$(window).scroll(function () {
  var oTop = $("#counter").offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $(".counter-value").each(function () {
      var $this = $(this),
        countTo = $this.attr("data-count");
      $({
        countNum: $this.text(),
      }).animate(
        {
          countNum: countTo,
        },

        {
          duration: 2000,
          easing: "swing",
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
            //alert('finished');
          },
        }
      );
    });
    a = 1;
  }
});
