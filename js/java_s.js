
var myBurgerIcon = document.getElementById("burger-icon");
var btnOpenMenu = document.getElementById("open_menu");

var myModalMenu = document.getElementById("modal_menu");

function toggleClass(objForm) {
	console.log("pressed");

	return function () {
		objForm.classList.toggle("is-open");

		if (objForm.classList.contains("is-open")) {
			myBurgerIcon.setAttribute("href", "./images/icons.svg#btn-close");
		} else {
			myBurgerIcon.setAttribute("href", "./images/icons.svg#burger");
		}

	};
}

btnOpenMenu.addEventListener("click", toggleClass(myModalMenu));
