document.getElementById("login-form").addEventListener("submit", async function(event) {
    event.preventDefault(); // Prevent form from refreshing

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    const apiUrl = "https://67acd88f3f5a4e1477dc0bdc.mockapi.io/api/v1/users";

    try {
        // Fetch existing users
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
            throw new Error("Failed to fetch users.");
        }

        const users = await response.json();
        console.log("Users data:", users); // Debugging log

        // Check if email & password match any user
        const user = users.find(user => user.email === email && user.password === password);

        if (user) {
            console.log("Login successful:", user);
            // Store user session
            localStorage.setItem("loggedInUser", JSON.stringify(user));
            alert("Login successful!");
            window.location.href = "user.html"; // Redirect to user page
        } else {
            document.getElementById("error-message").textContent = "Invalid email or password.";
        }
    } catch (error) {
        console.error("Error:", error);
        document.getElementById("error-message").textContent = "An error occurred. Please try again.";
    }
});

// Check if user is already logged in and redirect
document.addEventListener("DOMContentLoaded", function() {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
        window.location.href = "user.html"; // Redirect to user dashboard if already logged in
    }
});
