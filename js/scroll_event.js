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

//배경이미지
window.onscroll = function () {
  scrollRotate();
};

function scrollRotate() {
  let $bg1 = document.querySelector(".bg1");
  let $bg2 = document.querySelector(".bg2");
  $bg1.style.transform =
    " translate(-50%, -50%) rotate(" + window.pageYOffset / 10 + "deg)";
  $bg2.style.transform =
    " translate(-50%, -50%) rotate(" + window.pageYOffset / 10 + "deg)";
}
