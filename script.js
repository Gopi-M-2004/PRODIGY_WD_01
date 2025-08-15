document.addEventListener("DOMContentLoaded", function () {

  /* -------------------------------
     1. Home Image Slideshow
  ---------------------------------*/
  const images = [
    "eduimage1.jpg",
    "eduimage2.jpg",
    "eduimage3.jpg",
    "eduimage4.jpg"
  ];
  let imgIndex = 0;
const homeImg = document.querySelector(".home-img img");

function changeHomeImage() {
  // Fade out
  homeImg.classList.add("fade-out");

  // Wait for fade-out, then change image
  setTimeout(() => {
    imgIndex = (imgIndex + 1) % images.length;
    homeImg.src = images[imgIndex];

    // Fade in
    homeImg.classList.remove("fade-out");
  }, 1000); // Matches the CSS transition duration
}

setInterval(changeHomeImage, 3000);


  /* -------------------------------
     2. Sticky Header on Scroll
  ---------------------------------*/
  const header = document.querySelector(".header");
  window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 50);
  });


  /* -------------------------------
     3. Active Nav Menu Highlight
  ---------------------------------*/
  const navLinks = document.querySelectorAll(".navbar a");
  const sections = document.querySelectorAll("section");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 80;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  });


  /* -------------------------------
     4. Mobile Menu Toggle
  ---------------------------------*/
  const menuIcon = document.getElementById("menu-icon");
  const navbar = document.querySelector(".navbar");

  menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("open");
    menuIcon.classList.toggle("bx-x");
  });

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navbar.classList.remove("open");
      menuIcon.classList.remove("bx-x");
    });
  });


  /* -------------------------------
     5. Fade-in Animations
  ---------------------------------*/
  const fadeElements = document.querySelectorAll("section, .services-content, .contact-item");

  function fadeInOnScroll() {
    fadeElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", fadeInOnScroll);
  fadeInOnScroll(); // Run on page load

});
