// Select the target element
const scrollText = document.querySelector('.about');

// Function to check if element is in viewport
function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle scroll event
function handleScroll() {
  if (isElementInViewport(scrollText)) {
    scrollText.classList.add('visible');
    window.removeEventListener('scroll', handleScroll);
  }
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

function about() {
  window.scrollTo(0,750);
}
function qual() {
  window.scrollTo(0,1170);
}
function proj() {
  window.scrollTo(0,1570);
}
function skill() {
  window.scrollTo(0,2520);
}
function scrollToAbout(ID) {
    const about = document.getElementById(ID);
    about.scrollIntoView({
      behavior:'smooth',
      block: 'start',
      inline: 'nearest'
      
    })
}
window.addEventListener('scroll',revealOnScroll);
function revealOnScroll() {
  const sections = document.querySelectorAll('.about');

  sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight * 0.8) {
          section.classList.add('activ');
      }
  });
}
window.addEventListener('scroll',revealOnScroll2);
function revealOnScroll2() {
  const sections = document.querySelectorAll('.education,.projects,.skills');

  sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight * 0.8) {
          section.classList.add('act');
      }
      // setTimeout(() => {
      //   section.classList.remove('act');
      // }, 100000);
    
  });
}