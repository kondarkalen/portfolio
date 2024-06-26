// script.js

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Highlight active section in the navigation bar
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');
    
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 50) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === currentSection) {
            link.classList.add('active');
        }
    });
});

// Contact form validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let valid = true;
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const errorMessage = document.getElementById('error-message');

    errorMessage.innerHTML = '';

    if (name === '') {
        valid = false;
        errorMessage.innerHTML += '<p>Please enter your name.</p>';
    }

    if (email === '') {
        valid = false;
        errorMessage.innerHTML += '<p>Please enter your email.</p>';
    } else if (!validateEmail(email)) {
        valid = false;
        errorMessage.innerHTML += '<p>Please enter a valid email address.</p>';
    }

    if (message === '') {
        valid = false;
        errorMessage.innerHTML += '<p>Please enter a message.</p>';
    }

    if (valid) {
        // Here you would typically send the form data to your server
        alert('Form submitted successfully!');
        document.getElementById('contactForm').reset();
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Add a back-to-top button
const backToTopButton = document.createElement('button');
backToTopButton.innerHTML = '↑';
backToTopButton.classList.add('back-to-top');
document.body.appendChild(backToTopButton);

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});
// script.js

// WhatsApp link creation
const phoneNumber = '919989875128'; // Replace with your phone number in international format
const defaultMessage = 'Hello, I am interested in your profile and would like to get in touch.'; // Default message

document.querySelector('.whatsapp').setAttribute('href', `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`);

