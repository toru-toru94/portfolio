import Swiper from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

Swiper.use([Autoplay, Pagination]);

export function initWorksSlider() {
  const swiperWrapper = document.querySelector('.works__swiper .swiper-wrapper');
  if (!swiperWrapper) return;

  const slides = swiperWrapper.querySelectorAll('.swiper-slide');

  // 元のスライドを丸ごと複製して2倍にする
  slides.forEach(slide => {
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
      clickable: true
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
