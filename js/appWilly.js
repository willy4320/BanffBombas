const navToggle = document.querySelector(".burguer");
const navMenu = document.querySelector(".nav-menu");
const barraBurguer = document.querySelector(".barra-burguer");
const colorBurguer = document.querySelector(".burguer");
const barraPrincipal = document.querySelector(".barra-principal");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    barraBurguer.classList.add("barra-burguer_visible");
    colorBurguer.classList.add("burguerBlanco");
    barraPrincipal.classList.add("barra-principal_visible");
  } else {
    barraBurguer.classList.remove("barra-burguer_visible");
    colorBurguer.classList.remove("burguerBlanco");
    navMenu.classList.remove("nav-menu_visible");
    barraPrincipal.classList.remove("barra-principal_visible");
  }
}

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");

  if (
    (!barraBurguer.classList.toggle("barra-burguer_visible") &&
      document.body.scrollTop > 20) ||
    document.documentElement.scrollTop > 20
  ) {
    barraBurguer.classList.toggle("barra-burguer_visible");
  }

  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("arial-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("arial-label", "Abrir menú");
  }

  if (
    navMenu.classList.contains("nav-menu_visible") ||
    barraBurguer.classList.contains("barra-burguer_visible")
  ) {
    colorBurguer.classList.add("burguerBlanco");
  } else {
    colorBurguer.classList.remove("burguerBlanco");
  }
});