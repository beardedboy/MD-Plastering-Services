(function(){

	var menuBtn = document.getElementById("menu_btn"),
		menu = document.getElementById("menu"),
		backBtn = document.getElementById("back_btn");


	menuBtn.addEventListener('click', menuToggle, false);
	backBtn.addEventListener('click', menuToggle, false);



	function hasClass(elem, className) {
    	return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
	}



	function toggleClass(elem, className){
		var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';

		if (hasClass (elem, className)) {
			while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
				newClass = newClass.replace(' ' + className + ' ', ' ');
			}
		
			elem.className = newClass.replace(/^\s+|\s+$/g, '');
		}
		else if (!hasClass(elem, className)) {
			elem.className += " " + className;
		}
	}


	function menuToggle(){
		toggleClass(menu, "menu__visible");
	}

})();