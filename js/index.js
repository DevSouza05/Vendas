// Funcionalidade do Menu Hamburguer
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');  // Adiciona/Remove a animação do hambúrguer
});
