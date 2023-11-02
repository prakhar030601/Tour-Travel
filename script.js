
// JavaScript code for your website

// Function to display a confirmation message when the contact form is submitted
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    alert('Thank you for your message. We will get back to you soon.');
    // Optionally, you can use AJAX to submit the form data to the server.
});

// Function to toggle the navigation menu on small screens
document.querySelector('.navbar-toggler').addEventListener('click', function() {
    const navbarNav = document.querySelector('#navbarNav');
    navbarNav.classList.toggle('show');
});

// Function to scroll smoothly to the target section when a navbar link is clicked
document.querySelectorAll('.nav-link').forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});

