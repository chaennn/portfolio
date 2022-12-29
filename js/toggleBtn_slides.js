//toggle button
const $switch = document.querySelector(".toggle_btn");
const $btn = document.querySelector(".switch_btn");
const $light_p = document.querySelector(".light_p");
const $dark_p = document.querySelector(".dark_p");
const bg_g = document.querySelector(".banner_video");
const git_icon1 = document.querySelector(".gitLogo.darkV");
const git_icon2 = document.querySelector(".gitLogo.lightV");

$switch.addEventListener("click", function () {
  document.body.classList.toggle("light");
  $btn.classList.toggle("on");
  $dark_p.classList.toggle("on");
  $light_p.classList.toggle("on");
  bg_g.classList.toggle("on");
  git_icon1.classList.toggle("on");
  git_icon2.classList.toggle("on");
});

//sec2 슬라이드
var swiper = new Swiper(".slide1", {
  slidesPerView: "auto",
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
