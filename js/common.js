//mouse pointer
const $body = document.documentElement;
const $cursor = document.querySelector(".cursor");

$body.addEventListener("mousemove", function (e) {
  let x = e.pageX - 12;
  let y = e.pageY - 12;
  $cursor.style.cssText = `left:${x}px; top:${y}px`;
});

//a태그 hover 디자인 변경
const $elm = document.querySelectorAll("a");

$elm.forEach(function (item, idx) {
  item.addEventListener("mouseenter", function () {
    let style = item.getAttribute("data-style");
    $cursor.classList.add(style);
  });
  item.addEventListener("mouseleave", function () {
    let style = item.getAttribute("data-style");
    $cursor.classList.remove(style);
  });
});

//scroll event
window.addEventListener("scroll", function () {
  let scrollTop = window.scrollY;
  let ht = document.querySelector(".section1").clientHeight;
  let $pageCurrent = document.querySelector(".page-current");
  let $page_total = document.querySelector(".page-total");
  let $goTop_btn = document.querySelector(".goTop_btn");

  if (scrollTop >= 0 && scrollTop < ht * 1) {
    $pageCurrent.innerText = `01`;
    $pageCurrent.classList.remove("on");
    $page_total.classList.remove("on");
    $goTop_btn.classList.remove("on");
  }
  if (scrollTop >= ht * 1 && scrollTop < ht * 2) {
    $pageCurrent.innerText = `02`;
    $pageCurrent.classList.remove("on");
    $page_total.classList.remove("on");
    $goTop_btn.classList.remove("on");
  }
  if (scrollTop >= ht * 2 && scrollTop < ht * 3) {
    $pageCurrent.innerText = `03`;
    $pageCurrent.classList.remove("on");
    $page_total.classList.remove("on");
    $goTop_btn.classList.remove("on");
  }
  if (scrollTop >= ht * 3 && scrollTop < ht * 4) {
    $pageCurrent.innerText = `04`;
    $pageCurrent.classList.remove("on");
    $page_total.classList.remove("on");
    $goTop_btn.classList.remove("on");
  }
  if (scrollTop >= ht * 3 && scrollTop < ht * 4) {
    $pageCurrent.classList.add("on");
    $page_total.classList.add("on");
    $goTop_btn.classList.add("on");
  }
});

//toggle button
const $switch = document.querySelector(".switch");
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

//우클릭 방지
document.oncontextmenu = function () {
  return false;
};

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

AOS.init();
