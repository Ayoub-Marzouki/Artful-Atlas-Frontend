// // Storing first slider images
// var slider_images=document.getElementsByClassName("slider1-image");

// // Storing second slider images
// var slider_images2=document.getElementsByClassName("slider2-image");

// // An array of 2 counters to iterate the array of sliders, if we go for var counter1, var counter2, then pass it to function as argument, the original value won't be modified (in C programming this can be avoided by using a pointer, but there are no pointers in javascript)
// var counter=[0,0]

// // Hiding all slider images but the first image
// for (let i=1;i<=slider_images.length-1;i++) {
//     slider_images[i].style.display="none";
// }
// for (let i=1;i<=slider_images2.length-1;i++) {
//     slider_images2[i].style.display="none";
// }

// // Function that shows the next image of the slider
// function next(array_holder, current_counter) {
//     if (current_counter==array_holder.length-1) {
//         array_holder[current_counter].style.display="none";
//         current_counter=0;
//         array_holder[current_counter].style.display="block";
//     }
//     else {
//         array_holder[current_counter].style.display="none";
//         array_holder[current_counter+1].style.display="block";
//         current_counter++;
//     }
//     return current_counter;
// }

// // Function that shows the previous image of the slider
// function back(array_holder, current_counter) {
//     if (current_counter==0) {
//         array_holder[current_counter].style.display="none";
//         current_counter=array_holder.length-1;
//         array_holder[current_counter].style.display="block";
//     }
//     else {
//         array_holder[current_counter].style.display="none";
//         array_holder[current_counter-1].style.display="block";
//         current_counter--;
//     }
    
//     return current_counter;
    
// }
// var nextButtons=document.getElementsByClassName("next");
// var backButtons=document.getElementsByClassName("back");
// nextButtons[0].onclick=function() {
//     counter[0]=next(slider_images,counter[0]);
// }
// nextButtons[1].onclick=function() {
//     counter[1]=next(slider_images2,counter[1]);
// }
// backButtons[0].onclick=function() {
//     counter[0]=back(slider_images,counter[0]);
// }
// backButtons[1].onclick=function() {
//     counter[1]=back(slider_images2,counter[1]);
// }

const slider = document.querySelector('.slider');
const sliderImages = document.querySelector('.slider-images');

let slideIndex = 0;
let intervalID;

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
    intervalID = setInterval(nextSlide, 2000);
}

function pauseAutoSlide() {
    clearInterval(intervalID);
}

// Start the auto-slide initially
startAutoSlide();

// Add event listeners for hover and mouse out
slider.addEventListener('mouseover', pauseAutoSlide);
slider.addEventListener('mouseout', startAutoSlide);
