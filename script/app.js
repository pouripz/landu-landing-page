// hamburger menu | nav list

const hamburgerMenu = document.querySelector(".hamburger-menu");
const navList = document.querySelector(".nav-list");

hamburgerMenu.addEventListener("click", function () {
  hamburgerMenu.classList.toggle("hamburger-menu--active");
  navList.classList.toggle("nav-list--open");
});
