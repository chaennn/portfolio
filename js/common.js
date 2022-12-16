//섹션마다 떨어지는 스크롤
const elm = document.querySelectorAll("section");
const elmCount = elm.length;
const elmHeight = elm.clientHeight;
console.log(elmHeight);

elm.forEach((item, idx) => {
  item.addEventListener("mousewheel", function (e) {
    e.preventDefault();
    let delta = 0;
    if (e.wheelDelta) {
      delta = e.wheelDelta;
    }
    let moveTop = window.scrollY;
    let elmSelector = elm[idx];

    if (delta < 0) {
      if (elmSelector !== elmCount - 1) {
        try {
          moveTop =
            window.pageYOffset +
            elmSelector.nextElementSibling.getBoundingClientRect().top;
        } catch (e) {}
      }
    } else {
      if (elmSelector !== 0) {
        try {
          moveTop =
            window.pageYOffset +
            elmSelector.previousElementSibling.getBoundingClientRect().top;
        } catch (e) {}
      }
    }
    window.scrollTo({ top: moveTop });
  });
});

//scroll event
window.addEventListener("scroll", function () {
  console.log(window.scrollY);
});

//toggle button
const $switch = document.querySelector(".switch");
const $btn = document.querySelector(".switch_btn");
const $light_p = document.querySelector(".light_p");
const $dark_p = document.querySelector(".dark_p");
const bg_g = document.querySelector(".banner_video");

$switch.addEventListener("click", function () {
  document.body.classList.toggle("light");
  $btn.classList.toggle("on");
  $dark_p.classList.toggle("on");
  $light_p.classList.toggle("on");
  bg_g.classList.toggle("on");
});

var swiper = new Swiper(".slide1", {
  slidesPerView: "auto",
  //   spaceBetween: 30,
  centeredSlides: true,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
