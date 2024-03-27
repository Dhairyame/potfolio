// ============================= toggle icon navbar ================================================
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

// ================================ scroll section active link ====================================

let sections = document.querySelectorAll('section'); // Fixed typo
let navLinks = document.querySelectorAll('header nav a'); // Fixed typo

navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior
        let targetId = link.getAttribute('href').slice(1); // Get the target section id
        let targetSection = document.getElementById(targetId); // Get the target section element
        if (targetSection) {
            navbar.classList.remove('active'); // Close the navbar
            menuIcon.classList.remove('fa-xmark'); // Change the menu icon
            window.scrollTo({
                top: targetSection.offsetTop - 100, // Adjust offset if necessary
                behavior: 'smooth' // Smooth scrolling
            });
        }
    });
});

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top > offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header nav a[href="#' + id + '"]').classList.add('active');
        }
    });

    // ============================== sticky navbar =======================================
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
};

// ======================================== SCROLL REVEAL ====================================
ScrollReveal({
    distance: '80px',
    duration: 7000,
    delay: 200,
 });

ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.contact h3, .about-img', { origin: 'left' });
ScrollReveal().reveal('.contact p, .about-content, .contact-container', { origin: 'right' });