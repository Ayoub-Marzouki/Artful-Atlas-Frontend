// Function to handle slider functionality
function createSlider(sliderId, intervalTime) {
    const slider = document.getElementById(sliderId);
    if (!slider) {
        console.error(`Slider with ID '${sliderId}' not found.`);
        return;
    }
    const sliderImages = slider.querySelector('.slider-images');
    const sliderArrows = slider.querySelector('.slider-arrows');
    const leftArrow = sliderArrows.querySelector('.left-arrow');
    const rightArrow = sliderArrows.querySelector('.right-arrow');

    let slideIndex = 0;
    let intervalID;
    let isPaused = false;

    function showSlide() {
        const slideWidth = slider.clientWidth;
        sliderImages.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
    }

    function nextSlide() {
        const numSlides = sliderImages.children.length;
        slideIndex = (slideIndex + 1) % numSlides;
        showSlide();
    }

    function previousSlide() {
        const numSlides = sliderImages.children.length;
        slideIndex = (slideIndex - 1 + numSlides) % numSlides;
        showSlide();
    }

    function startAutoSlide() {
        intervalID = setInterval(() => {
            if (!isPaused) {
                nextSlide();
            }
        }, intervalTime);
    }

    function pauseAutoSlide() {
        isPaused = true;
    }

    function resumeAutoSlide() {
        isPaused = false;
    }

    // Attach event listeners for navigation
    leftArrow.addEventListener('click', () => {
        pauseAutoSlide();
        previousSlide();
        resumeAutoSlide();
    });

    rightArrow.addEventListener('click', () => {
        pauseAutoSlide();
        nextSlide();
        resumeAutoSlide();
    });

    // Function to start the slider when it becomes visible
    function startSliderWhenVisible(entries, observer) {
        if (entries[0].isIntersecting) {
            startAutoSlide();
            observer.disconnect();
        }
    }

    // Create an Intersection Observer to trigger the slider when it becomes visible
    const observer = new IntersectionObserver(startSliderWhenVisible, {
        root: null,
        rootMargin: "0px",
        threshold: 0.3, // Adjust the threshold as needed
    });

    observer.observe(slider);

    // Pause the slider when hovering
    slider.addEventListener('mouseover', pauseAutoSlide);
    slider.addEventListener('mouseout', resumeAutoSlide);
}

// Call the function to create the sliders
createSlider('slider', 2000); // First slider
createSlider('slider2', 2000); // Second slider
