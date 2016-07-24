
var menu = document.querySelector('#menu');
var navigation = document.querySelector('.nav');

menu.addEventListener('click', function(e) {
  navigation.classList.toggle('open');
  e.stopPropagation();
});
