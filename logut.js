document.getElementById("logout-btn").addEventListener("click", function() {
    localStorage.removeItem("loggedInUser"); // Clear user session
    window.location.href = "login.html"; // Redirect to login page
});
