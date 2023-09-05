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
createSlider('slider', 2000); // First slider
createSlider('slider2', 2000); // Second slider


// Create function to add the animation for the logo
function startLogoAnimationWhenVisible(entries,observer) {
    entries.forEach(entry=> {
        if (entry.isIntersecting) {
            entry.target.classList.add('logo-animation');

            observer.unobserve(entry.target);
        }
    })
}

// Create function to add the animation for the Heart span element
function startHeartAnimationWhenVisible(entries,observer) {
    if (entries[0].isIntersecting) {
        entries[0].target.classList.add('heartgradient-animation');
        observer.unobserve(entries[0].target);
    }
}
// Define the visibility options that both functions will use
const observerOptions1 = {
    root: null,
    rootMargin: "0px",
    threshold: 1,
};
const observerOptions2 = {
    root:null,
    rootMargin:"-220px",
    threshold:1,
}

// Create a single Intersection Observer object for both functions
const logoObserver = new IntersectionObserver(startLogoAnimationWhenVisible, observerOptions1);
const heartObserver = new IntersectionObserver(startHeartAnimationWhenVisible,observerOptions2);

// Look for logo and call the function upon it
const logo=document.getElementsByClassName("logo");
logoObserver.observe(logo[0]);

// Look for the heart span and call the function upon it
const heartGradient=document.getElementById("heartgradient");
heartObserver.observe(heartGradient);