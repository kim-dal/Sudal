$(function () {
  const introSection = $("#load");
  const textMove = $("#load .textWrap");

  setTimeout(function () {
    textMove.addClass("on");
  }, 1000);

  setTimeout(function () {
    introSection.removeClass("on");
  }, 3000);
});

$(".goTop").on("click", function () {
  scroll.scrollTo(slider);
});
$(function () {
  $(".goTop").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 400);
  });
});

$(function () {
  let locoScroll;
  const $header = $("#header");
  const $page = $(".section2");
  let pageOffsetTop = $page.offset().top;

  locoScroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    smoothMobile: true,
  });

  new ResizeObserver(() => locoScroll.update()).observe(
    document.querySelector("[data-scroll-container]")
  );

  locoScroll.on("scroll", (instance) => {
    if (instance.scroll.y > pageOffsetTop) {
      $header.addClass("bk");
    } else {
      $header.removeClass("bk");
    }
  });
  locoScroll.on("resize", (instance) => {
    pageOffsetTop = $page.offset().top;
  });
});
