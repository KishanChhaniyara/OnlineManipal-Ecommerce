document.getElementById("signupForm").addEventListener("submit", async function(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    const apiUrl = "https://67acd88f3f5a4e1477dc0bdc.mockapi.io/api/v1/users";

    try {
        // Step 1: Check if the email already exists
        const checkResponse = await fetch(apiUrl);
        
        if (!checkResponse.ok) {
            throw new Error("Failed to fetch users. API might be down.");
        }

        const users = await checkResponse.json();
        console.log("Fetched users:", users); // Debugging Log

        const existingUser = users.find(user => user.email.toLowerCase() === email.toLowerCase());

        if (existingUser) {
            console.warn("User already exists:", existingUser);
            document.getElementById("error-message").innerHTML = 
                "User already exists. <a href='login.html'>Login here</a> or <a href='reset-password.html'>Reset Password</a>";
            return;
        }

        // Step 2: If email doesn't exist, proceed with signup
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, password }),
        });

        if (response.ok) {
            console.log("User created successfully!");
            alert("Signup successful!");
            window.location.href = "login.html"; // Redirect to login page
        } else {
            throw new Error("Signup failed. Server error.");
        }
    } catch (error) {
        console.error("Error:", error);
        document.getElementById("error-message").textContent = error.message || "An error occurred. Please try again.";
    }
});
