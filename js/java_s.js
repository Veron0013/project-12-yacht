
var btnOpen = document.getElementById("open_form");
var btnClose = document.getElementById("close_form");
var myModalForm = document.getElementById("modal_form");

var btnOpenMenu = document.getElementById("open_menu");
var btnCloseMenu = document.getElementById("close_menu");
var myModalMenu = document.getElementById("modal_menu");

function toggleClass(objForm) {
	return function () {
		objForm.classList.toggle("is-open");
	};
}

btnOpen.addEventListener("click", toggleClass(myModalForm));
btnClose.addEventListener("click", toggleClass(myModalForm));

btnOpenMenu.addEventListener("click", toggleClass(myModalMenu));
btnCloseMenu.addEventListener("click", toggleClass(myModalMenu));