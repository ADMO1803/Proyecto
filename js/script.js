/*==================================
=            AOS SCROLL            =
==================================*/

AOS.init();

/*=====  End of AOS SCROLL  ======*/

/*====================================
=            HEADER-ABAJO            =
====================================*/

window.addEventListener("scroll", function() {
	// body...
	var header = document.querySelector("header");
	header.classList.toggle("abajo", window.scrollY>0);
})
/*=====  End of HEADER-ABAJO  ======*/

