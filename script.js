const nav = document.getElementById("nav");

const target = document.getElementById("menu");
target.addEventListener('click', () => {
  target.classList.toggle('open');
  nav.classList.toggle('in');
});

const nav1 = document.getElementById("nav");
nav1.addEventListener('click', () => {
  nav1.classList.remove('in');
  target.classList.toggle('open');
});



// スクロールトップボタン
scrollTop('js-scroll-top', 150); // 遅すぎるとガクガクになるので注意

function scrollTop(el, duration) {
  const target = document.getElementById(el);
  target.addEventListener('click', function() {
    let currentY = window.pageYOffset; // 現在のスクロール位置を取得
    let step = duration/currentY > 1 ? 10 : 100; // 三項演算子
    let timeStep = duration/currentY * step; // スクロール時間
    let intervalId = setInterval(scrollUp, timeStep);
    // timeStepの間隔でscrollUpを繰り返す。
    // clearItervalのために返り値intervalIdを定義する。

    function scrollUp(){
      currentY = window.pageYOffset;
      if(currentY === 0) {
          clearInterval(intervalId); // ページ最上部に来たら終了
      } else {
          scrollBy( 0, -step ); // step分上へスクロール
      }
    }
  });
}

// フェードイン
function showElementAnimation() {
    var element = document.getElementsByClassName('fade-in');
    if (!element) return;
    var showTiming = window.innerHeight > 768 ? 200 : 60;
    var scrollY = window.pageYOffset;
    var windowH = window.innerHeight;
    for (var i = 0; i < element.length; i++) {
        var elemClientRect = element[i].getBoundingClientRect(); var elemY = scrollY + elemClientRect.top; if (scrollY + windowH - showTiming > elemY) {
            element[i].classList.add('show');
        } else if (scrollY + windowH < elemY) {
        }
    }
}
showElementAnimation();
window.addEventListener('scroll', showElementAnimation);

var mySwiper = new Swiper('.swiper', {
  on: {
    slideChangeTransitionEnd: function () {
      $('.swiper-slide a').attr('tabindex', '-1');
      $('.swiper-slide-active a').attr('tabindex', '0');
    }
  }
});