let slideIndex = 0;

function showSlides() {
  const slides = document.querySelectorAll('.slide');
  slides.forEach((slide, index) => {
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
  slides.forEach((slide, index) => {
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
  slides.forEach((slide, index) => {
    slide.style.display = 'none';
  });

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = 'block';
}

document.addEventListener('DOMContentLoaded', showSlides);
