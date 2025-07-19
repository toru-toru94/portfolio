import { initWorksSlider } from './slider.js';
import { initContactForm } from './contact.js';

const scriptURL = 'https://script.google.com/macros/s/AKfycby4npXivEl_Y3W8zA8LIu55C8onqOw6TsFKGkmq6KJUiXLremYOvNb7DUWtlHTFg0Fc/exec';

document.addEventListener('DOMContentLoaded', () => {
  initWorksSlider();
  initContactForm(scriptURL);
});
