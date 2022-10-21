const html = document.querySelector("html");
const home = document.querySelector(".home");
const welcomeText = document.querySelector(".home .welcome-text");
const navbar = document.querySelector(".navbar");
const nav_links = document.querySelectorAll(".navbar .menu li a");
const navbarMenu = document.querySelector(".navbar .menu");
const hamburger = document.querySelector(".navbar .hamburger.fas");

const atEndOfPage = () => {
   return (
      Math.abs(html.scrollHeight - html.scrollTop - html.clientHeight) <= 3.0
   );
};
const updateBurgerIcon = () => {
   document.querySelector(".navbar .hamburger.fas").className = burger_active
      ? "hamburger fas fa-times" // 'x' close button
      : "hamburger fas fa-bars"; // triple bar menu button
};

// on load
window.onload = (event) => {
   welcomeText.style.opacity = 1;
};

// hamburger on-click
let burger_active = false;
hamburger.addEventListener("click", (event) => {
   burger_active = !burger_active;
   navbar.classList.add("darken");
   navbarMenu.classList.toggle("dropdown");
   updateBurgerIcon();
});

// nav-links on-click when burger is active
for (let i = 0; i < nav_links.length; i++) {
   nav_links[i].addEventListener("click", (event) => {
      if (burger_active) {
         // retract the dropdown menu
         navbarMenu.classList.remove("dropdown");
         burger_active = false;
         updateBurgerIcon();
      }
   });
}

// on scroll
const navbarOnScroll = () => {
   if ((window.scrollY > 40 && !atEndOfPage()) || burger_active) {
      navbar.classList.add("darken");
   } else {
      navbar.classList.remove("darken");
   }
};
window.onscroll = navbarOnScroll;