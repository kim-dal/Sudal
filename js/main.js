
$(document).ready(function() {
  $(function () {
    const introSection = $("#load");
    const textMove = $("#load .textroll");

    setTimeout(function () {
      textMove.addClass("on");
    }, 1000);

    setTimeout(function () {
      introSection.removeClass("on");
    }, 3000);
  });
  
  let $header = $('#header');
  let $section = $('#section1');
  let changeY = $section.outerHeight();
  let positionY = $(document).scrollTop();

  function headerState(positionY){
    if ( positionY > changeY ) {
      $header.addClass("bk");
    } else {
      $header.removeClass("bk");
    }
    console.log(changeY);
  };

  $(window).on('scroll', function(){
    positionY = $(document).scrollTop();
    headerState(positionY);
  });
    
  $(window).on('resize', function(){
    positionY = $(document).scrollTop();
    headerState(positionY);
  });

  const content = "EXCELLENT";
  const text = document.querySelector(".text");
  let i = 0;

  function typing(){
      let txt = content[i++];
      text.innerHTML += txt=== "\n" ? "<br/>": txt;
      if (i > content.length) {
          text.textContent = "";
          i = 0;
      }
  }
  setInterval(typing, 300)

  AOS.init();
});
