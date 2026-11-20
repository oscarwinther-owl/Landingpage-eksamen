"use strict"

const track = document.querySelector('.carousel-track');
const cards = document.querySelectorAll('.funktioner-tekst-billede');
const prevBtn = document.getElementById('pil-venstre');
const nextBtn = document.getElementById('pil-højre');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;

function updateCarousel() {
    // Bredden på ét kort + 24px gap
    const cardWidth = cards[0].offsetWidth + 24;
    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

    // Opdater den aktive prik
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % cards.length;
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    updateCarousel();
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
    });
});         