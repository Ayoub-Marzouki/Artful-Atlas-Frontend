// Scroll down to the first slider
const scrollToFirstButton = document.getElementById('down0');
    const moroccanSlider = document.getElementById('moroccan-slider');

    scrollToFirstButton.addEventListener('click', function() {
        const offset = moroccanSlider.offsetTop;

        window.scrollTo({
            top: offset,
            behavior: 'smooth'
        });
    });


// Scroll down to the second slider
const scrollToSecondButton = document.getElementById('down1');
    const paintingsSlider = document.getElementById('home-main');

    scrollToSecondButton.addEventListener('click', function() {
        const offset = paintingsSlider.offsetTop;

        window.scrollTo({
            top: offset,
            behavior: 'smooth'
        });
    });

// Function to handle slider functionality
function createSlider(sliderId, intervalTime) {
    const slider = document.getElementById(sliderId);
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
        slider.focus();
    });

    rightArrow.addEventListener('click', () => {
        pauseAutoSlide();
        nextSlide();
        slider.focus();
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
createSlider('slider1', 2500); // First slider
createSlider('slider2', 2500); // Second slider





const slider0Images = document.querySelectorAll('.slider0-image');
let currentIndex0 = 0;
let intervalId0 = null;

function changeImage() {
    slider0Images[currentIndex0].style.opacity = 0;
    currentIndex0 = (currentIndex0 + 1) % slider0Images.length;
    slider0Images[currentIndex0].style.opacity = 1;
}

function startSlider0() {
    if (!intervalId0) {
        intervalId0 = setInterval(changeImage, 3000);
    }
}

function stopSlider0() {
    clearInterval(intervalId0);
    intervalId0 = null;
}

window.addEventListener('scroll', () => {
    const slider0Container = document.getElementById('moroccan-slider');
    const slider0Rect = slider0Container.getBoundingClientRect();

    if (slider0Rect.top <= window.innerHeight && slider0Rect.bottom >= 0) {
        startSlider0();
    } else {
        stopSlider0();
    }
});



// Creating the slider of the featured paintings

const sliderContainer = document.querySelector('.slider-container');
const sliderObjects = sliderContainer.querySelectorAll('.slider-object');

let currentIndex = 0;

const fadeSlide = (nextIndex) => {
  sliderObjects[currentIndex].classList.remove('active');
  sliderObjects[nextIndex].classList.add('active');
  currentIndex = nextIndex;
};

sliderObjects.forEach((slide, index) => {
  slide.style.transitionDelay = `${(index + 1) * 0.1}s`; // Adjust the delay as needed
});

setInterval(() => {
  const nextIndex = (currentIndex + 1) % sliderObjects.length;
  fadeSlide(nextIndex);
}, 4000); // interval time to adjust the slide duration