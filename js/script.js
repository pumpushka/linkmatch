
var menu = document.querySelector('#menu');
var bar_menu = document.querySelector('.bar-menu');
var navigation = document.querySelector('.side-menu');
var menu_close = document.querySelector('.menu-close_btn');

function showMenu(e) {
  navigation.classList.toggle('visible');
}

function hideMenu(e) {
  navigation.classList.toggle('hidden');
}

menu.addEventListener('click', showMenu);

bar_menu.addEventListener('click', showMenu);

menu_close.addEventListener('click', hideMenu);
