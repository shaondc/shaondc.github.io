// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Scroll to About section when "Learn More" button is clicked
document.getElementById('scrollToAbout').addEventListener('click', () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});

// Read More button functionality
function readMore() {
    alert("Redirecting to the full blog post...");
}

// Form submission handler
document.getElementById('contactForm').addEventListener('submit', e => {
    e.preventDefault();
    alert("Thank you for your message! I'll get back to you soon.");
});