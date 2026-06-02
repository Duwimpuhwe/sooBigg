let currentSlideIndex = 0;
const slides = document.querySelectorAll('.project-slide');
let autoSlideInterval = setInterval(() => changeSlide(1), 6000); // Rotates every 6 seconds

function changeSlide(direction) {
  // Clear the interval timer when user clicks so it doesn't jump rapidly
  clearInterval(autoSlideInterval);
  
  // Hide current slide
  slides[currentSlideIndex].classList.remove('active');
  
  // Calculate new slide index
  currentSlideIndex += direction;
  
  // Loop bounds checking
  if (currentSlideIndex >= slides.length) {
    currentSlideIndex = 0; // Go back to start
  } else if (currentSlideIndex < 0) {
    currentSlideIndex = slides.length - 1; // Go to last slide
  }
  
  // Show new slide
  slides[currentSlideIndex].classList.add('active');
  
  // Restart the automatic slideshow loop
  autoSlideInterval = setInterval(() => changeSlide(1), 6000);
}