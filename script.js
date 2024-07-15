let slideIndex = 0;

function showSlides() {
  const slides = document.querySelectorAll('.slide');
  slides.forEach((slide) => {
    slide.style.display = 'none';
  });

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = 'block';

  setTimeout(showSlides, 5000); // Change slide every 5 seconds
}

function previousSlide() {
  const slides = document.querySelectorAll('.slide');
  slides.forEach((slide) => {
    slide.style.display = 'none';
  });

  slideIndex--;
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }
  slides[slideIndex - 1].style.display = 'block';
}

function nextSlide() {
  const slides = document.querySelectorAll('.slide');
  slides.forEach((slide) => {
    slide.style.display = 'none';
  });

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = 'block';
}

document.addEventListener('DOMContentLoaded', showSlides);

let lastScrollTop = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    header.style.top = '-80px'; // Hide header when scrolling down
  } else {
    header.style.top = '0'; // Show header when scrolling up
  }
  lastScrollTop = scrollTop;
});

function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('show');
}

// Smooth scroll to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});
