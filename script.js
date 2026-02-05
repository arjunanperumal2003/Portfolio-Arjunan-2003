// --------------------
// MOBILE MENU TOGGLE
// --------------------
const menuIcon = document.querySelector('.Navbar__menu-icon');
const navLinks = document.querySelector('.Navbar__s2');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = menuIcon.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-xmark');
});

// Close menu when a link is clicked
document.querySelectorAll('.Navbar__s2 a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = menuIcon.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-xmark');
    });
});

// --------------------
// CONTACT FORM & SOCIAL MAIL
// --------------------
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const inputs = contactForm.querySelectorAll('input');
    const message = contactForm.querySelector('textarea').value;
    
    const name = inputs[0].value;
    const email = inputs[1].value;
    const subject = inputs[2].value || "Portfolio Contact";

    const mailBody = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    
    window.location.href = `mailto:arjunan191003@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(mailBody)}`;
});

// Social Mail Icon Logic
document.querySelector('.social-mail').addEventListener('click', function(e) {
    e.preventDefault();
    const subject = "Connect with Arjunan";
    const body = "Hi Arjunan,\n\nI saw your portfolio and would like to get in touch regarding...";
    window.location.href = `mailto:arjunan191003@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});