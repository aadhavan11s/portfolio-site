// Dark Mode Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
  const darkModeToggle = document.getElementById('darkModeToggle');
  const body = document.body;
  const moonIcon = darkModeToggle.querySelector('i');
  
  // Check for saved theme preference or default to light mode
  const currentTheme = localStorage.getItem('theme') || 'light';
  
  // Apply the saved theme
  if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    moonIcon.classList.remove('fa-moon');
    moonIcon.classList.add('fa-sun');
  }
  
  // Toggle dark mode
  darkModeToggle.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    
    // Update icon
    if (body.classList.contains('dark-mode')) {
      moonIcon.classList.remove('fa-moon');
      moonIcon.classList.add('fa-sun');
      localStorage.setItem('theme', 'dark');
    } else {
      moonIcon.classList.remove('fa-sun');
      moonIcon.classList.add('fa-moon');
      localStorage.setItem('theme', 'light');
    }
  });
  
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Only handle internal links
      if (href.startsWith('#')) {
        e.preventDefault();
        
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
  
  // Add scroll effect to header
  let lastScrollTop = 0;
  const header = document.querySelector('.header');
  
  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
      // Scrolling down
      header.style.transform = 'translateY(-100%)';
    } else {
      // Scrolling up
      header.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop;
  });
  
  // Add animation on scroll for elements
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  // Observe elements for animation
  const animatedElements = document.querySelectorAll('.left-section > *, .right-section');
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
  
  // Add hover effects to social links
  const socialLinks = document.querySelectorAll('.social-link');
  
  socialLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-3px) scale(1.1)';
    });
    
    link.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });
  
  // Add typing effect to greeting (optional enhancement)
  const greeting = document.querySelector('.greeting');
  const greetingText = greeting.textContent;
  
  // Uncomment the lines below if you want a typing effect
  /*
  greeting.textContent = '';
  let i = 0;
  
  function typeWriter() {
    if (i < greetingText.length) {
      greeting.textContent += greetingText.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  }
  
  // Start typing effect after a short delay
  setTimeout(typeWriter, 500);
  */
});

// Add some interactive features
function addParticleEffect() {
  const container = document.querySelector('.container');
  const particleCount = 50;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.cssText = `
      position: absolute;
      width: 2px;
      height: 2px;
      background: rgba(236, 72, 153, 0.3);
      border-radius: 50%;
      pointer-events: none;
      animation: float ${Math.random() * 3 + 2}s infinite linear;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
    `;
    
    container.appendChild(particle);
  }
  
  // Add CSS for particle animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes float {
      0% {
        transform: translateY(100vh) rotate(0deg);
        opacity: 0;
      }
      10% {
        opacity: 1;
      }
      90% {
        opacity: 1;
      }
      100% {
        transform: translateY(-100vh) rotate(360deg);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
}

// Uncomment the line below to enable particle effect
// addParticleEffect();