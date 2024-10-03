// Change background color of the navbar when scrolled
window.addEventListener("scroll", function() {
  const navbar = document.querySelector("header");
  navbar.classList.toggle("scrolled", window.scrollY > 0);
});
