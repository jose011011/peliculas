let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    const offset = -currentSlide * 100;
    document.querySelector('.carousel-track').style.transform = `translateX(${offset}%)`;
}