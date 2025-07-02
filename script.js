// Smooth scrolling to sections
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

// Fade-in animation when sections enter the viewport
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});

sections.forEach(section => {
  observer.observe(section);
});

// Show a toast message on clicking email
const emailLink = document.querySelector('a[href^="mailto:"]');

emailLink.addEventListener('click', function(e) {
  e.preventDefault();
  alert('Opening your email app to contact Neel Ahir...');
  window.location.href = this.href;
});

