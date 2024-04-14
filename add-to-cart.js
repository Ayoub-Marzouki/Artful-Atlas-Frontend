
const addToCartButtons = document.querySelectorAll(".cart-button");
const messageContainer = document.getElementById("message-container");


// Display the message and update the counter
function showMessage() {
  messageContainer.style.opacity = 1;
  setTimeout(function () {
    messageContainer.style.opacity = 0;
  }, 2000);
}

// Add click event listener to each "Add to Cart" button
addToCartButtons.forEach(button => {
  button.addEventListener("click", showMessage);
});


//  Ajax

$(".cart-button").on("click", function() {
    // Retrieve product details from the DOM relative to the clicked button
    let product_title = $(this).siblings(".product-title").val();
    let product_id = $(this).siblings(".product-id").val();
    let product_price;

    // Check if the button is within the main product or related products
    if ($(this).closest("#info").length > 0) {
        // For the main product
        product_price = $(this).closest("#info").find("#price-section .price").text();
    } else {
        // For related products
        product_price = $(this).closest("figure").find(".price").text();
    }
    let this_val = $(this);

    // Log product details to the console
    console.log("title", product_title);
    console.log("id", product_id);
    console.log("price", product_price);
    console.log("current element", this_val);

    // Send an AJAX request to add the product to the cart
    $.ajax({
        url: '/add-to-cart',
        data: {
            'id': product_id,
            'title': product_title,
            'price': product_price
        },
        dataType: 'json',
        // Log a message indicating that the artwork is being added to the cart
        beforeSend: function() {
            console.log("Adding artwork to cart...");
        },
        // If the request is successful, update the button text and log a success message
        success: function(response) {
            this_val.html("Artwork Added to cart");
            console.log("Artwork added to cart!");
            $("#cart-counter").text(response.totalCartItems)
        }
    });
});

