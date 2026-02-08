console.log('La Dulcería de Marcela - Website Loaded');

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');

            // Optional: Toggle icon
            const icon = menuToggle.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
    // WhatsApp Order Functionality
    const orderButtons = document.querySelectorAll('.whatsapp-order');
    orderButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const card = e.target.closest('.product-card');
            const product = card.querySelector('h3').innerText;
            const price = card.querySelector('.price').innerText;
            const phone = '50376172548'; // Replace with actual number
            const message = `Hola, me gustaría pedir el ${product} (${price}).`;
            const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
            window.open(url, '_blank');
        });
    });

    // Contact Form Handler
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('contactName').value;
            const email = document.getElementById('contactEmail').value;
            const message = document.getElementById('contactMessage').value;

            const subject = `Nuevo mensaje de ${name} - Sitio Web`;
            const body = `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`;

            // Encode for mailto
            const mailtoLink = `mailto:ljosue.chavez@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

            window.location.href = mailtoLink;
        });
    }
});
