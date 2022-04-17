let menu = document.querySelector('.button-menu');
let closeMenu = document.querySelector('#close-menu');
let openMenu = document.querySelector('.header-responsive');
let openForm = document.querySelector('#account-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');

menu.onclick = () => {
  openMenu.classList.add('active');
}

closeMenu.onclick = () => {
  openMenu.classList.remove('active');
}

openForm.onclick = () => {
  loginForm.classList.add('active');
}

formClose.onclick = () => {
  loginForm.classList.remove('active');
}
