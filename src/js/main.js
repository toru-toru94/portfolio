import { initWorksSlider } from './slider.js';
import { initContactForm } from './contact.js';

const scriptURL = 'https://script.google.com/macros/s/AKfycbwsSI8I6a-2pOw85QiYHkedQDKPNiE3_k62TFWtfoWBCpeELW1KMgypiQIDEetcFvvdNw/exec';

document.addEventListener('DOMContentLoaded', () => {
  initWorksSlider();
  initContactForm(scriptURL);
});
