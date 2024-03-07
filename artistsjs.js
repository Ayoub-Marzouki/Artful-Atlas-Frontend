// JavaScript to handle checkbox toggling
document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            // Toggle the 'selected' class on parent label
            this.parentNode.classList.toggle('selected');
        });
    });
});
