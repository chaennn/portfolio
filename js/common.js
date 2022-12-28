//scroll event
window.addEventListener("scroll", function () {
  let scrollTop = window.scrollY;
  let ht = document.querySelector(".section1").clientHeight;
  let $pageCurrent = document.querySelector(".page-current");
  let $page_total = document.querySelector(".page-total");
  let $goTop_btn = document.querySelector(".goTop_btn");
  let $bg1_1 = document.querySelector(".bg1");
  let $bg2_2 = document.querySelector(".bg2");

  if (scrollTop >= 0 && scrollTop < ht * 1) {
    $pageCurrent.innerText = `01`;
    removeOn();
    aniStop();
  }
  if (scrollTop >= ht * 1 && scrollTop < ht * 2) {
    $pageCurrent.innerText = `02`;
    removeOn();
    aniStop();
  }
  if (scrollTop >= ht * 2 && scrollTop < ht * 3) {
    $pageCurrent.innerText = `03`;
    removeOn();
    aniStop();
  }
  if (scrollTop >= ht * 3 && scrollTop < ht * 4) {
    addOn();
    aniPlay();
  }

  function removeOn() {
    $pageCurrent.classList.remove("on");
    $page_total.classList.remove("on");
    $goTop_btn.classList.remove("on");
  }

  function addOn() {
    $pageCurrent.classList.add("on");
    $page_total.classList.add("on");
    $goTop_btn.classList.add("on");
  }

  function aniPlay() {
    $bg1_1.classList.add("on");
    $bg2_2.classList.add("on");
  }

  function aniStop() {
    $bg1_1.classList.remove("on");
    $bg2_2.classList.remove("on");
  }
});

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

console.log(
  ` %c
  :::    ::: :::::::::: :::        :::         ::::::::  
  :+:    :+: :+:        :+:        :+:        :+:    :+: 
  +:+    +:+ +:+        +:+        +:+        +:+    +:+ 
  +#++:++#++ +#++:++#   +#+        +#+        +#+    +:+ 
  +#+    +#+ +#+        +#+        +#+        +#+    +#+ 
  #+#    #+# #+#        #+#        #+#        #+#    #+# 
  ###    ### ########## ########## ##########  ########                                             
`,
  `color:silver`
);

console.log(
  `%c카카오톡 ID입니다. 용건이 있으시면 연락주세요:) chaen_hhh`,
  `color:white`
);
