document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.querySelector(".nav-links");
  
    hamburger.addEventListener("click", function (event) {
      navLinks.classList.toggle("show"); 
      event.stopPropagation(); 
    });
  
    document.addEventListener("click", function (event) {
      if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
        navLinks.classList.remove("show"); 
      }
    });
  
    navLinks.addEventListener("click", function () {
      navLinks.classList.remove("show"); 
    });
  });
  