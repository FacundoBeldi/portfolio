let menuBtn = document.querySelector('#menu-btn');
let closeBtn = document.querySelector('#close-btn');
let navbar = document.querySelector('.header .flex .navbar');

menuBtn.onclick = () => {
    navbar.classList.add('active');
    console.log('clicked');
}

closeBtn.onclick = () => {
    navbar.classList.remove('active');
    console.log('clicked');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}

//EmailJS

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Previene el comportamiento por defecto del formulario

    // Enviar el formulario usando EmailJS
    emailjs.sendForm('service_t261z8s', 'template_4qzw68c', this)
        .then(function () {
            Swal.fire({
                icon: "success", // Icono de éxito
                title: "Genial!",
                text: "Mensaje enviado con éxito!",
            });
            document.getElementById('contactForm').reset(); // Reinicia el formulario
        }, function (error) {
            Swal.fire({
                icon: "error", // Icono de error
                title: "Oops...",
                text: "Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.",
                footer: '<a href="mailto:facu.beldi@gmail.com">Contactame si el problema persiste</a>'
            });
        });
});

//Observer

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated', 'animate__fadeInUp'); // Agrega clases de Animate.css
            observer.unobserve(entry.target); // Deja de observar el elemento una vez animado (opcional)
        }
    });
});

// Selecciona todos los elementos que tienen la clase 'animate-on-scroll'
const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');

// Aplica el observer a cada uno de los elementos
elementsToAnimate.forEach(element => {
    observer.observe(element);
});