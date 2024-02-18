/* $(function () {
  const introSection = $("#load");
  const textMove = $("#load .textWrap");

  setTimeout(function () {
    textMove.addClass("on");
  }, 1000);

  setTimeout(function () {
    introSection.removeClass("on");
  }, 3000);
}); */
$(function () {
  const $header = $("#header");
  const $page = $(".section2");
  const $window = $(window);
  let pageOffsetTop = $page.offset().top;

  console.log(pageOffsetTop);

  $window.resize(function () {
    pageOffsetTop = $page.offset().top;
  });

  $window.on("scroll", function () {
    pageOffsetTop = $page.offset().top;
    if ($window.scrollTop() >= pageOffsetTop) {
      $header.addClass("bk");
    } else {
      $header.removeClass("bk");
    }
  });
});


$(function(){
  const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
   });
});