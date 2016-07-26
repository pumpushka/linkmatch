
var menu = document.querySelector('#menu');
var navigation = document.querySelector('.side-menu');
var menu_close = document.querySelector('.menu-close_link');

menu.addEventListener('click', function(e) {
  navigation.classList.toggle('visible');
  e.stopPropagation();
});

menu_close.addEventListener('click', function(e) {
  navigation.classList.toggle('hidden');
});
