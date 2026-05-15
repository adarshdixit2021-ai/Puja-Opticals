// ===== MAIN JS - Common across pages =====

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Mobile nav toggle (simple)
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.08)';
    }
});

// Welcome console message
console.log('%c👓 Welcome to Puja Opticals!', 'color: #1e3a8a; font-size: 20px; font-weight: bold;');
console.log('%cMohanlalganj, Lucknow | WhatsApp: +91 95558 60408', 'color: #f59e0b; font-size: 14px;');
