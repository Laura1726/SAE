let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');

function showSlide(index) {
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }
    const carouselContainer = document.querySelector('.carousel-container');
    carouselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function moveSlide(step) {
    showSlide(currentIndex + step);
}

