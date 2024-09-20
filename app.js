let slideIndex = 0;
let slides = document.querySelectorAll('.testimonial');
let startX = 0;

function showSlide(n) {
    slideIndex += n;
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    } else if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    document.querySelector('.testimonial-slide').style.transform = `translateX(-${slideIndex * 100}%)`;
}

function moveSlide(n) {
    showSlide(n);
}

function handleTouchStart(event) {
    startX = event.touches[0].clientX;
}

function handleTouchMove(event) {
    let x = event.touches[0].clientX;
    let deltaX = startX - x;
    if (deltaX > 50) {
        moveSlide(1);
    } else if (deltaX < -50) {
        moveSlide(-1);
    }
}

document.getElementById('testimonialSlide').addEventListener('touchstart', handleTouchStart);
document.getElementById('testimonialSlide').addEventListener('touchmove', handleTouchMove);

setInterval(() => {
    showSlide(1);
}, 1000); // Autoplay interval (adjust as needed)
