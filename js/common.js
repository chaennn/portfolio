//우클릭 방지
document.oncontextmenu = function () {
  return false;
};

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

console.log(
  `
  :::    :::  ::::::::::  :::         :::          ::::::::  
  :+:    :+:  :+:         :+:         :+:         :+:    :+: 
  +:+    +:+  +:+         +:+         +:+         +:+    +:+ 
  +#++:++#++  +#++:++#    +#+         +#+         +#+    +:+ 
  +#+    +#+  +#+         +#+         +#+         +#+    +#+ 
  #+#    #+#  #+#         #+#         #+#         #+#    #+# 
  ###    ###  ##########  ##########  ##########   ########                                             
  
  https://github.com/chaennn
  `
);

console.log(`용건이 있으시면 연락주세요:) https://open.kakao.com/o/s0l9oyWe`);
