document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelector('.slides');
    const slideCount = document.querySelectorAll('.slide').length;
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    const slideInterval = 6000; // Interval for auto-slide in milliseconds (5 seconds)
    let startX, endX;
    let isDragging = false;

    function updateSlide() {
        const offset = -currentSlide * 100;
        slides.style.transform = `translateX(${offset}%)`;
        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentSlide].classList.add('active');
    }

    function goToNextSlide() {
        currentSlide = (currentSlide + 1) % slideCount;
        updateSlide();
    }

    function goToPreviousSlide() {
        currentSlide = (currentSlide - 1 + slideCount) % slideCount;
        updateSlide();
    }

    // Auto-slide functionality
    let autoSlide = setInterval(goToNextSlide, slideInterval);

    function handleTouchStart(event) {
        isDragging = true;
        startX = event.touches[0].clientX;
    }

    function handleTouchMove(event) {
        if (!isDragging) return;
        endX = event.touches[0].clientX;
    }

    function handleTouchEnd() {
        if (!isDragging) return;
        const distance = startX - endX;
        if (distance > 50) {
            goToNextSlide();
        } else if (distance < -50) {
            goToPreviousSlide();
        }
        isDragging = false;
    }

    function handleMouseDown(event) {
        isDragging = true;
        startX = event.clientX;
    }

    function handleMouseMove(event) {
        if (!isDragging) return;
        endX = event.clientX;
    }

    function handleMouseUp() {
        if (!isDragging) return;
        const distance = startX - endX;
        if (distance > 50) {
            goToNextSlide();
        } else if (distance < -50) {
            goToPreviousSlide();
        }
        isDragging = false;
    }

    // Add event listeners for touch and mouse drag
    slides.addEventListener('touchstart', handleTouchStart);
    slides.addEventListener('touchmove', handleTouchMove);
    slides.addEventListener('touchend', handleTouchEnd);

    slides.addEventListener('mousedown', handleMouseDown);
    slides.addEventListener('mousemove', handleMouseMove);
    slides.addEventListener('mouseup', handleMouseUp);
    slides.addEventListener('mouseleave', () => { isDragging = false; }); // To handle mouse leaving the slider area

    document.querySelector('.right-arrow').addEventListener('click', () => {
        clearInterval(autoSlide); // Stop auto-slide on manual navigation
        goToNextSlide();
        autoSlide = setInterval(goToNextSlide, slideInterval); // Restart auto-slide
    });

    document.querySelector('.left-arrow').addEventListener('click', () => {
        clearInterval(autoSlide); // Stop auto-slide on manual navigation
        goToPreviousSlide();
        autoSlide = setInterval(goToNextSlide, slideInterval); // Restart auto-slide
    });

    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            clearInterval(autoSlide); // Stop auto-slide on manual dot click
            currentSlide = parseInt(dot.getAttribute('data-slide'), 10);
            updateSlide();
            autoSlide = setInterval(goToNextSlide, slideInterval); // Restart auto-slide
        });
    });

    updateSlide();  // Initialize
});
