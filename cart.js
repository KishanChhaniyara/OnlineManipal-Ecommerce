// Display Cart Items
function displayCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartContainer = document.getElementById("cart-items");
    let totalPrice = 0;

    cartContainer.innerHTML = ""; // Clear previous content

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Your cart is empty.</p>";
        document.getElementById("cart-total").textContent = "0";
        updateCartCount();
        return;
    }

    cart.forEach((item, index) => {
        let itemTotal = item.price * item.quantity;
        totalPrice += itemTotal;

        let cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");

        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div>
                <h4>${item.name}</h4>
                <p>Price: ₹${item.price}</p>
                <div class="quantity-box">
                    <button class="quantity-btn" onclick="changeQuantity(${item.id}, -1)">−</button>
                    <input type="text" class="quantity-input" value="${item.quantity}" readonly>
                    <button class="quantity-btn" onclick="changeQuantity(${item.id}, 1)">+</button>
                </div>
                <p>Total: ₹${itemTotal}</p>
            </div>
            <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
        `;

        cartContainer.appendChild(cartItem);
    });

    document.getElementById("cart-total").textContent = totalPrice;
}

// Change Quantity
function changeQuantity(productId, change) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let product = cart.find(item => item.id === productId);
    if (!product) return;

    if (product.quantity + change > 0) {
        product.quantity += change;
    } else {
        removeFromCart(productId);
        return;
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
    updateCartCount();
}

// Remove Product from Cart
function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter(item => item.id !== productId);

    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
    updateCartCount();
}

// Update Cart Count in Header
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartCount = cart.reduce((total, item) => total + item.quantity, 0);

    let cartBadge = document.getElementById("cart-count");
    if (cartCount > 0) {
        cartBadge.textContent = cartCount;
        cartBadge.style.display = "inline-block";
    } else {
        cartBadge.style.display = "none"; // Hide when empty
    }
}

// Checkout Process (Require Login)
document.addEventListener("DOMContentLoaded", async function () {
    const checkoutBtn = document.querySelector(".checkout-btn");
    const modal = document.getElementById("checkout-modal");
    const closeModal = document.getElementById("close-modal");
    const signInBtn = document.getElementById("sign-in-btn");
    const addressSection = document.getElementById("addressSection");

    let user = JSON.parse(localStorage.getItem("loggedInUser"));

    if (!user) {
        // If user is not logged in, redirect to login page
        window.location.href = "login.html";
        return;
    }

    // Fetch user addresses from MockAPI
    const response = await fetch(`https://67acd88f3f5a4e1477dc0bdc.mockapi.io/api/v1/users/${user.id}`);
    const userData = await response.json();

    if (userData.addresses && userData.addresses.length > 0) {
        displayAddressOptions(userData.addresses);
    } else {
        showAddressForm();
    }

    // Open Modal on "Proceed to Checkout" Click
    checkoutBtn.addEventListener("click", function () {
        modal.style.display = "flex";
    });

    // Close Modal
    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Close Modal on Outside Click
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});

// Display Saved Addresses
function displayAddressOptions(addresses) {
    let addressSection = document.getElementById("addressSection");
    addressSection.innerHTML = "<h3>Select Delivery Address:</h3>";

    addresses.forEach((address, index) => {
        addressSection.innerHTML += `
            <div class="address-option">
                <input type="radio" name="deliveryAddress" id="address${index}" value="${index}">
                <label for="address${index}">${address.houseNo}, ${address.street}, ${address.city}, ${address.state} - ${address.pinCode}</label>
            </div>`;
    });

    addressSection.innerHTML += `<button onclick="proceedToPayment()">Proceed to Payment</button>`;
}

// Show Address Form (For New Users Without an Address)
function showAddressForm() {
    let addressSection = document.getElementById("addressSection");
    addressSection.innerHTML = `
        <h3>Enter Delivery Address:</h3>
        <form id="addressForm">
            <input type="text" id="houseNo" placeholder="House No" required>
            <input type="text" id="street" placeholder="Street Address" required>
            <input type="text" id="landmark" placeholder="Landmark">
            <input type="text" id="pinCode" placeholder="Pin Code" required>
            <input type="text" id="city" placeholder="City" required>
            <input type="text" id="state" placeholder="State" required>
            <input type="text" id="mobile" placeholder="Mobile Number" required>
            <button type="submit">Save & Proceed to Payment</button>
        </form>
    `;

    document.getElementById("addressForm").addEventListener("submit", function (event) {
        event.preventDefault();
        proceedToPayment();
    });
}

// Proceed to Payment
function proceedToPayment() {
    alert("Proceeding to payment...");
    window.location.href = "payment.html";
}

// Load cart when page loads
document.addEventListener("DOMContentLoaded", () => {
    displayCart();
    updateCartCount();
});
