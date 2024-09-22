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