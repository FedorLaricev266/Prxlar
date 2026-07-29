const modal = document.querySelector('#auth-modal');
const title = document.querySelector('#auth-title');
const note = document.querySelector('#auth-note');
const switchAuth = document.querySelector('#switch-auth');
const form = document.querySelector('#auth-form');
let registering = false;

function updateAuth() {
  title.textContent = registering ? 'Создай аккаунт.' : 'С возвращением.';
  note.textContent = registering ? 'Регистрация нужна для голосования и уведомлений о новых версиях.' : 'Войди, чтобы сохранять предложения и получать уведомления о релизах.';
  switchAuth.textContent = registering ? 'Уже есть аккаунт? Войти' : 'Нет аккаунта? Зарегистрироваться';
}
document.querySelectorAll('[data-modal="auth"]').forEach((button) => button.addEventListener('click', () => { modal.classList.add('open'); modal.setAttribute('aria-hidden', 'false'); }));
document.querySelector('[data-close]').addEventListener('click', () => { modal.classList.remove('open'); modal.setAttribute('aria-hidden', 'true'); });
modal.addEventListener('click', (event) => { if (event.target === modal) modal.classList.remove('open'); });
switchAuth.addEventListener('click', () => { registering = !registering; updateAuth(); });
form.addEventListener('submit', (event) => { event.preventDefault(); localStorage.setItem('prxlar-demo-user', form.querySelector('input[type=email]').value); alert(registering ? 'Аккаунт создан в демо-режиме.' : 'Вход выполнен в демо-режиме.'); modal.classList.remove('open'); });
document.querySelectorAll('a[href^="#"]').forEach((a) => a.addEventListener('click', (event) => { const el = document.querySelector(a.getAttribute('href')); if (el) { event.preventDefault(); el.scrollIntoView({ behavior: 'smooth' }); } }));
