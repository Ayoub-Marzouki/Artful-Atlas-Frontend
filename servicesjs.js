var slider_holder=document.getElementsByClassName("slider-image");
var counter=0;
for (let i=2;i<=slider_holder.length-1;i++) {
    slider_holder[i].style.display="none";
}
function auto_slider(array_holder, current_counter) {
    array_holder[current_counter].style.display="none";
    array_holder[current_counter+1].style.display="none";
    if (current_counter+2>=array_holder.length) {
        current_counter=0;
    }
    else {
        current_counter=current_counter+2;
    }
    array_holder[current_counter].style.display="block";
    array_holder[current_counter+1].style.display="block";
    return current_counter;
}
setInterval(function() {
    counter=auto_slider(slider_holder,counter);
}, 5000);