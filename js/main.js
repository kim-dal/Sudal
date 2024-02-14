$(function () {
  const introSection = $("#load");

  setTimeout(function () {
    introSection.removeClass("on");
  }, 2000);
});
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
