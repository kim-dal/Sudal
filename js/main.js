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

$(function () {
  let locoScroll;
  const $header = $("#header");
  const $page = $(".section2");
  let pageOffsetTop = $page.offset().top;

  locoScroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    smartphone: {
      smooth: true,
    },
    tablet: {
      smooth: true,
    },
  });

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
