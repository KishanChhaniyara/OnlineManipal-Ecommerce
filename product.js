// Get Product ID from URL
function getProductId() {
    const params = new URLSearchParams(window.location.search);
    return params.get("id");
}

// Load Product Details
async function loadProductDetails() {
    let productId = getProductId();
    if (!productId) {
        alert("Product not found!");
        return;
    }

    try {
        let response = await fetch(`https://67acd88f3f5a4e1477dc0bdc.mockapi.io/api/v1/products/${productId}`);
        let product = await response.json();

        document.getElementById("mainImage").src = product.images[0];
        document.getElementById("productName").innerText = product.name;
        document.getElementById("productBrand").innerText = "Brand: " + product.brand;
        document.getElementById("productPrice").innerText = "Price: ₹" + product.price;
        document.getElementById("productDescription").innerText = product.description || "No description available.";

        let gallery = document.getElementById("imageGallery");
        gallery.innerHTML = "";
        product.images.forEach(imgSrc => {
            let imgElement = document.createElement("img");
            imgElement.src = imgSrc;
            imgElement.onclick = () => document.getElementById("mainImage").src = imgSrc;
            gallery.appendChild(imgElement);
        });

    } catch (error) {
        console.error("Error loading product details:", error);
    }
}
// Increase Quantity
function increaseQuantity() {
    let qty = document.getElementById("quantity");
    let value = parseInt(qty.value);
    qty.value = value + 1;
}

// Decrease Quantity
function decreaseQuantity() {
    let qty = document.getElementById("quantity");
    let value = parseInt(qty.value);
    if (value > 1) {
        qty.value = value - 1;
    }
}

// Add to Cart Function
function addToCart() {
    let product = {
        id: 1,  // Change this dynamically based on the product
        name: "Luxury Cotton Cushion Cover",
        price: 4000,
        image: "https://media.istockphoto.com/id/1191685303/photo/stylish-bedroom-interior-in-trendy-blue.jpg?s=612x612&w=0&k=20&c=mYOgUHAZoHQFpngkDNXExg9bLrEENlu7FrIv_EcQ7b4=",
        quantity: parseInt(document.getElementById("quantity").value)
    };

    // Retrieve existing cart data or create new array
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if product already in cart
    let existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
        existingProduct.quantity += product.quantity; // Update quantity
    } else {
        cart.push(product); // Add new product
    }

    // Save updated cart back to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Product added to cart!");
}

// Load product when page loads
window.onload = loadProductDetails;
