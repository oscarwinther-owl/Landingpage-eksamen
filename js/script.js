"use strict"


//karusel funktion

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









// Overlay på cta knappen

const ctaHero = document.getElementById('cta-hero');
const farveOverlay = document.getElementById('farve-overlay');

// Åbn/luk overlay når man klikker på "Buy now"
ctaHero.addEventListener('click', (event) => {
    farveOverlay.classList.toggle('aktiv');
});

// Luk overlayet hvis brugeren klikker udenfor boksen
document.addEventListener('click', (event) => {
    if (!farveOverlay.contains(event.target) && event.target !== ctaHero) {
        farveOverlay.classList.remove('aktiv');
    }
});




// Den valgte farve flyver op i kurven animation