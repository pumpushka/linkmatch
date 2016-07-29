var menu = document.querySelector('#menu');
var bar_menu = document.querySelector('.bar-menu');
var top_nav = document.querySelector('#share-nav');

var navigation = document.querySelector('.side-menu');
var side_menu_close = document.querySelector('.side-menu-close_btn');
var shadow = document.querySelector('.shadow');
var side_menu_items = document.querySelector('.side-menu-items')


function showMenu(e) {
  navigation.classList.toggle('visible');
  shadow.classList.toggle('shadow-visible');
  disableScroll();
}

function hideMenu(e) {
  navigation.classList.toggle('visible');
  shadow.classList.toggle('shadow-visible');
  enableScroll();
}

side_menu_close.addEventListener('click', hideMenu);
shadow.addEventListener('click', hideMenu);
side_menu_items.addEventListener('click', hideMenu);

menu.addEventListener('click', showMenu);
bar_menu.addEventListener('click', showMenu);



startTopNavManagement = (element, elHeight) => {
    var didScroll;
    window.onscroll = () => didScroll = true;
    (() => window.pageYOffset > elHeight ? element.classList.add('nav_down') : null)();
   
    setInterval(
        () => {
            didScroll && changeNavBarVisibility(window.pageYOffset, element, elHeight);
            didScroll = false;
        },
        250
    )
    changeNavBarVisibility = (scroll_height, el, nav_height) => {
        if(scroll_height > nav_height && !el.classList.contains('nav_down')) {
            el.classList.add('nav_down');
            el.classList.remove('nav_up')
        } 
        if (scroll_height < nav_height && !el.classList.contains('nav_up')){
            el.classList.remove('nav_down')
            el.classList.add('nav_up')
        }
    }
}

var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;  
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

function disableScroll() {
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null; 
    window.onwheel = null; 
    window.ontouchmove = null;  
    document.onkeydown = null;  
}


startTopNavManagement(top_nav, top_nav.offsetHeight);