$( document ).ready(function() {

    var els = {
    	menu : $('#menu'),
	    bar_menu : $('.bar-menu'),
	    top_nav : $('#share-nav'),
	    navigation : $('.side-menu'),
	    side_menu_close : $('.side-menu-close_btn'),
	    shadow : $('.shadow'),
	    side_menu_items : $('.side-menu-items')
    }

    function showMenu(e) {
        els.navigation.toggleClass('visible');
        els.shadow.toggleClass('shadow-visible');
        disableScroll();
    }

    function hideMenu(e) {
        els.navigation.toggleClass('visible');
        els.shadow.toggleClass('shadow-visible');
        enableScroll();
    }

    els.side_menu_close.click(hideMenu);
    els.shadow.click(hideMenu);
    els.side_menu_items.click(hideMenu);

    els.menu.click(showMenu);
    els.bar_menu.click(showMenu);



    function startTopNavManagement (element, elHeight) {
        var didScroll;
        window.onscroll = function (){ didScroll = true;}
        window.pageYOffset > elHeight ? element.addClass('nav_down') : null;
    
        setInterval(
            function(){
                didScroll && changeNavBarVisibility($(window).scrollTop(), element, elHeight);
                didScroll = false;
            },
            250
        );
        function changeNavBarVisibility (scroll_height, el, nav_height) {
            if(scroll_height > nav_height && !el.hasClass('nav_down')) {
                el.addClass('nav_down');
                el.removeClass('nav_up');
            } 
            if (scroll_height < nav_height && !el.hasClass('nav_up')){
                el.removeClass('nav_down');
                el.addClass('nav_up');
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


    startTopNavManagement(els.top_nav, els.top_nav.height());
});

