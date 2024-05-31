window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.getElementById("sidebar");
  const articles = document.getElementById("articles");
  const sidebarOffset = sidebar.offsetTop;
  const containerOffset = document.querySelector(".container").offsetTop;

  window.addEventListener("scroll", function () {
    if (window.scrollY >= containerOffset) {
      sidebar.classList.add("fixed");
    } else {
      sidebar.classList.remove("fixed");
    }
  });
});
