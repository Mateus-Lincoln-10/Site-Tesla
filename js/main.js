let menu = document.querySelector('.button-menu');
let closeMenu = document.querySelector('#close-menu');
let openMenu = document.querySelector('.header-responsive');

menu.onclick = () => {
  openMenu.classList.add('active');
}

closeMenu.onclick = () => {
  openMenu.classList.remove('active');
}