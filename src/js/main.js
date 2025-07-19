import { initWorksSlider } from './slider.js';
import { initContactForm } from './contact.js';

const scriptURL = 'https://script.google.com/macros/s/AKfycbyQC6ftuISZlUmARB-xM9wW2-Sr9BG_d2fLNBuXRvhVavNY2nhWrxMBnQRXOSfcxStWQQ/exec';

document.addEventListener('DOMContentLoaded', () => {
  initWorksSlider();
  initContactForm(scriptURL);
});
