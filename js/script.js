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
                icon: "Good job!",
                title: "Genial!",
                text: "Mensaje enviado con exito!",
              });
            document.getElementById('contactForm').reset(); // Opcional: Reinicia el formulario
        }, function (error) {
            alert('Error al enviar el mensaje: ' + JSON.stringify(error));
        });
});