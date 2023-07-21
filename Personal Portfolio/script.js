// Add any JavaScript functionality you want here.
// For example, if you want to implement smooth scrolling for navigation links:

const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', smoothScroll);
});

function smoothScroll(e) {
  e.preventDefault();
  const target = e.target.getAttribute('href');
  const offset = document.querySelector(target).offsetTop;

  window.scroll({
    top: offset,
    behavior: 'smooth'
  });
}
