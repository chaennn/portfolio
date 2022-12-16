//섹션마다 떨어지는 스크롤
const elm = document.querySelectorAll(".section");
const elmCount = elm.length;

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
  let scrollTop = window.scrollY;
  let ht = document.querySelector(".section1").clientHeight;
  let $pageCurrent = document.querySelector(".page-current");
  if (scrollTop >= 0 && scrollTop < ht * 1) {
    $pageCurrent.innerText = `01`;
  }
  if (scrollTop >= ht * 1 && scrollTop < ht * 2) {
    $pageCurrent.innerText = `02`;
  }
  if (scrollTop >= ht * 2 && scrollTop < ht * 3) {
    $pageCurrent.innerText = `03`;
  }
  if (scrollTop >= ht * 3 && scrollTop < ht * 4) {
    $pageCurrent.innerText = `04`;
  }
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
