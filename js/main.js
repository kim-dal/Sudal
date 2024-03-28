document.addEventListener("DOMContentLoaded", function () {
  const introSection = document.getElementById("load");
  const introText = document.querySelector("#load .textroll");
  
  const $cursor = document.querySelector('.cursor');
  document.addEventListener('mousemove', function(e) {
    $cursor.style.left = e.clientX + 'px';
    $cursor.style.top = e.clientY + 'px';
  });
  
  setTimeout(function () {
    introText.classList.add("on");
  }, 1000);

  setTimeout(function () {
    introSection.classList.remove("on");
  }, 3000);

  const typingText = "EXCELLENT";
  const typingClass = document.querySelector(".text");
  let i = 0;

  let typing = () => {
    let txt = typingText[i++];
    typingClass.innerHTML += txt;
    if (i > typingText.length) {
      typingClass.textContent = "";
      i = 0;
    }
  };
  setInterval(typing, 300);

  const header = document.getElementById("header");
  const section = document.getElementById("section1");
  let changeY = section.offsetHeight;
  let positionY = window.scrollY;

  let headerState = (positionY, changeY) => {
    if (positionY > changeY) {
      header.classList.add("bk");
    } else {
      header.classList.remove("bk");
    }
  };

  document.addEventListener("scroll", () => {
    positionY = window.scrollY;
    changeY = section.offsetHeight;
    headerState(positionY, changeY);
  });

  document.addEventListener("resize", () => {
    positionY = window.scrollY;
    changeY = section.offsetHeight;
    headerState(positionY, changeY);
  });

  AOS.init();
});
