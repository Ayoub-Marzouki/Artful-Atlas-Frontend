function createLightbox(imageUrl) {
    // Create a lightbox overlay
    const lightbox = document.createElement('div');
    lightbox.classList.add('lightbox');
    
    // Create an image element for the background image
    const image = document.createElement('img');
    image.src = imageUrl;
    
    // Append the image to the lightbox
    lightbox.appendChild(image);
    
    // Append the lightbox to the document body
    document.body.appendChild(lightbox);
    
    // Close the lightbox when clicking outside of it
    lightbox.addEventListener('click', function() {
        document.body.removeChild(lightbox);
    });
}

const artworkImage = document.getElementById('artwork-image');
artworkImage.addEventListener('click', function(event) {
    // Prevent the click event from bubbling up to the profile artwork
    event.stopPropagation();

    const imageUrl = this.src;
    createLightbox(imageUrl);
});