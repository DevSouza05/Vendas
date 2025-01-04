// Testemunhos: Carrossel automático
const testimonials = document.querySelector('.carousel');
let index = 0;

function autoSlide() {
    index++;
    if (index >= testimonials.children.length) {
        index = 0;
    }
    testimonials.scrollLeft = testimonials.children[index].offsetLeft;
}

setInterval(autoSlide, 3000); // Alterar a cada 3 segundos
