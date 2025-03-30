
document.addEventListener("DOMContentLoaded", function () {
  const hamBtn = document.querySelector(".header__menu-btn");
  const nav = document.querySelector(".header__menu");
  const menuLinks = document.querySelectorAll(".header__menu a, .header__menu button");

  // メニュー開閉
  hamBtn.addEventListener("click", function () {
    hamBtn.classList.toggle("is-open");
    const isMenuOpen = nav.classList.contains('header__menu--open');

    if (isMenuOpen) {
      nav.classList.replace('header__menu--open', 'header__menu--close');
      document.body.classList.remove('no-scroll');
    } else {
      nav.classList.replace('header__menu--close', 'header__menu--open');
      document.body.classList.add('no-scroll');
      setVh();
    }
  });
  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.replace("header__menu--open", "header__menu--close");
      document.body.classList.remove("no-scroll");
      hamBtn.classList.remove("is-open");
    });
  });
  //  実績カードフィルタリング
  const tagButtons = document.querySelectorAll(".search-box__tag");
  const cards = document.querySelectorAll(".card");

  tagButtons.forEach(button => {
    button.addEventListener("click", () => {
      const tag = button.dataset.tag;

      // 🔸カレント表示の処理（すべてのタグから削除 → 自分に追加）
      tagButtons.forEach(btn => btn.classList.remove("is-active"));
      button.classList.add("is-active");

      // フィルター処理（既にある内容）
      if (tag === "all") {
        cards.forEach(card => card.style.display = "block");
        return;
      }

      cards.forEach(card => {
        const cardTags = Array.from(card.querySelectorAll(".card__tag"))
                              .map(tagElem => tagElem.dataset.tag);

        if (cardTags.includes(tag)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});


// --vhを設定する関数
function setVh() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}
window.addEventListener('resize', setVh);



  // Swiper（heroエリア）
  const heroSwiper = new Swiper('.hero__swiper', {
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    effect: 'slide',
  });

  document.addEventListener('click', (e) => {
    const target = e.target;
    if (target.id === 'pauseBtn') {
      heroSwiper.autoplay.stop();
      target.id = 'startBtn';
    } else if (target.id === 'startBtn') {
      heroSwiper.autoplay.start();
      target.id = 'pauseBtn';
    }
  });
