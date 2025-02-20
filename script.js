$(window).on('scroll', function() {
  if ($(window).scrollTop()) {
    $('header').addClass('nav-show');
  } else {
    $('header').removeClass('nav-show');
  }
})
const navSlide = () => {
  const hamburger = document.querySelector(".hamburger");
  const navbar = document.querySelector(".nav-bar");
  const navLinks = document.querySelectorAll(".nav-bar li");
  hamburger.onclick = () => {
    navbar.classList.toggle("nav-active");
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`;
      }
    }
    );
    hamburger.classList.toggle("toggle");
  }
}
window.onload = () => navSlide();
const updateVisitorCount = async () => {
  try {
    const response = await fetch('#');
    const result = await response.json();
    document.getElementById('visitor-count').innerHTML = result.value;
  } catch (error) {
    console.error(error);
  }

  var blockContextMenu = function(e) {
    // Prevent right-click context menu
    e.preventDefault();
  };

  
