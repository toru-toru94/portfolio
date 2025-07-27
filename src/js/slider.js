import Swiper from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

Swiper.use([Autoplay, Pagination]);

export function initWorksSlider() {
  const swiperWrapper = document.querySelector('.works__swiper .swiper-wrapper');
  if (!swiperWrapper) return;

  const originalSlides = swiperWrapper.querySelectorAll('.swiper-slide');

  // 元スライドを丸ごと複製して2倍にする
  originalSlides.forEach(slide => {
    const clone = slide.cloneNode(true);
    swiperWrapper.appendChild(clone);
  });

  const swiper = new Swiper('.works__swiper', {
    loop: true,
    slidesPerView: 1.2,
    spaceBetween: 16,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'bullets',
      renderBullet: (index, className) => {
        if (index < originalSlides.length) {
          return `<span class="${className}"></span>`;
        }
        return '';
      }
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    }
  });

  // カレントドットを元スライド数基準で同期
  swiper.on('slideChange', () => {
    const bullets = swiper.pagination.bullets;
    if (!bullets || bullets.length === 0) return;

    // SwiperのactiveIndexはクローンも含むので、元スライド数で割って正規化
    const realIndex = swiper.realIndex % originalSlides.length;

    bullets.forEach((bullet, idx) => {
      if (idx === realIndex) {
        bullet.classList.add('swiper-pagination-bullet-active');
      } else {
        bullet.classList.remove('swiper-pagination-bullet-active');
      }
    });
  });

  const pauseBtn = document.getElementById('pauseBtn');
  let isPaused = false;

  pauseBtn?.addEventListener('click', () => {
    if (isPaused) {
      swiper.autoplay.start();
      pauseBtn.classList.remove('is-paused');
    } else {
      swiper.autoplay.stop();
      pauseBtn.classList.add('is-paused');
    }
    isPaused = !isPaused;
  });
}
