const form = document.querySelector('.tour-form');
const message = document.querySelector('.form-message');
const year = document.querySelector('#year');

year.textContent = new Date().getFullYear();

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  message.textContent = 'Thanks! Our admissions team will contact you within 2 business days.';
  form.reset();
});
