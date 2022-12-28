window.onscroll = function () {
  scrollRotate();
};

function scrollRotate() {
  //   let bg1 = document.querySelector(".section3");
  let $bg1 = document.querySelector(".bg1");
  let $bg2 = document.querySelector(".bg2");
  $bg1.style.transform =
    " translate(-50%, -50%) rotate(" + window.pageYOffset / 10 + "deg)";
  $bg2.style.transform =
    " translate(-50%, -50%) rotate(" + window.pageYOffset / 10 + "deg)";
}
