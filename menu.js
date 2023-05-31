function toggleMenu() {
  var menu = document.getElementById("menu");
  menu.classList.toggle("active");
}
/* Hamburger Menu */

window.onload = function (){
  const menuBtn = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-nav-links');
  window.addEventListener('click', function(){
      menuBtn.classList.toggle('is-active')
      mobileMenu.classList.toggle('is-active')
  });
}