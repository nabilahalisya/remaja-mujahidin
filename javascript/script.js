// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
//When hamburger-menu on click
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};


//To close the hamburger-menu
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) {
  if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});