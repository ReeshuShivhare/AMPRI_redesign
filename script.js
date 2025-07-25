// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// Carousel Initialization
$(document).ready(function() {
    $('#researchCarousel').carousel({ interval: 4000 });
});

// Form Submission Alert (Placeholder)
$('#contactModal form').on('submit', function(e) {
    e.preventDefault();
    alert('Form submitted! (Placeholder for backend integration)');
});