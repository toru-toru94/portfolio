// ハンバーガーメニューの操作
document.addEventListener("DOMContentLoaded", function () {
  const hamBtn = document.querySelector(".header__menu-btn");
  const nav = document.querySelector(".header__menu");

  hamBtn.addEventListener("click", function () {
    hamBtn.classList.toggle("is-open");
    if(nav.classList.contains('header__menu--close')){
      nav.classList.replace('header__menu--close', 'header__menu--open');
    } else {
      nav.classList.replace('header__menu--open', 'header__menu--close');
    }
  });
});


// ヒーローエリアのスライダー
document.addEventListener('DOMContentLoaded', function () {
  const heroSwiper = new Swiper('.hero__swiper', {
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    effect: 'slide',
  });

    // ボタンでオートプレイを停止
    document.addEventListener('click' , (e) => {
      const target = e.target;

      if (target.id === 'pauseBtn'){
        heroSwiper.autoplay.stop();
        target.id = 'startBtn';
        console.log('stop');
      }
      else if (target.id === 'startBtn'){
        heroSwiper.autoplay.start();
        target.id = 'pauseBtn';
        console.log('start');
      }
    })
});
