// =========================================================
// NAVBAR
// =========================================================

const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const navbar = document.querySelector(".header .flex .navbar");
const navLinks = document.querySelectorAll(".nav-link");

menuBtn.addEventListener("click", () => {
    navbar.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    navbar.classList.remove("active");
});

// Cerrar menú al seleccionar una sección
navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
    });
});

// Cerrar menú al hacer scroll
window.addEventListener("scroll", () => {
    navbar.classList.remove("active");
});


// =========================================================
// CONTACT FORM — WHATSAPP
// =========================================================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const whatsappNumber = "5491123972860";

    const whatsappMessage =
        `Hola Facundo!%0A%0A` +
        `*Nombre:* ${name}%0A` +
        `*Email:* ${email}%0A%0A` +
        `*Mensaje:* ${message}`;

    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    window.open(whatsappURL, "_blank");

    contactForm.reset();
});


// =========================================================
// SCROLL ANIMATIONS
// =========================================================

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add(
                    "animate__animated",
                    "animate__fadeInUp"
                );

                observer.unobserve(entry.target);
            }

        });
    },
    {
        threshold: 0.15
    }
);

const elementsToAnimate = document.querySelectorAll(
    ".animate-on-scroll"
);

elementsToAnimate.forEach((element) => {
    observer.observe(element);
});