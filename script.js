
function toggleNav() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('nav-open');
}

function closeNav() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.remove('nav-open');
}

// Close nav when clicking outside
document.addEventListener('click', function (event) {
    const nav = document.querySelector('nav');
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.getElementById('navLinks');

    if (!nav.contains(event.target) && !navToggle.contains(event.target)) {
        navLinks.classList.remove('nav-open');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
