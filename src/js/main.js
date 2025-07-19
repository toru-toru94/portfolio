import { initWorksSlider } from './slider.js';
import { initContactForm } from './contact.js';

const scriptURL = 'https://script.google.com/macros/s/AKfycbz-_d4OV_66rna2Y4Iy7C1GbM0RzbEREPoDYEBLG8OxpggyAVyLBXLljscEaeasV4AmRA/exec';

document.addEventListener('DOMContentLoaded', () => {
  initWorksSlider();
  initContactForm(scriptURL);
});
