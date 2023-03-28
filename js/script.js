/*==================================
=            AOS SCROLL            =
==================================*/

AOS.init();

/*=====  End of AOS SCROLL  ======*/

/*====================================
=            MENU            =
====================================*/

const menu = document.querySelector("#menu-icon");
const menunav = document.querySelector(".menu-nav");

menu.addEventListener("click", () => {
  menunav.classList.toggle("active")
})

menunav.addEventListener("click", () => {
  menunav.classList.remove("active")
})

/*=====  End of MENU ======*/

/*====================================
=    BOTON-ENVIAR SWEET ALERT            =
====================================*/

function enviar() {
	// body...
	Swal.fire(
  'Enviado!',
  'Su mensaje fue enviado!',
  'success'
  )
}

/*=====  End of BOTON-ENVIAR ======*/