document.addEventListener("DOMContentLoaded", async function () {
    const userData = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!userData) {
        window.location.href = "login.html"; // Redirect if not logged in
        return;
    }

    document.getElementById("username").textContent = userData.name;
    const apiUrl = `https://67acd88f3f5a4e1477dc0bdc.mockapi.io/api/v1/users/${userData.id}`;

    async function fetchUserData() {
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) throw new Error("Failed to fetch user data.");
            const user = await response.json();
            displayAddresses(user.addresses || []);
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    }

    function displayAddresses(addresses) {
        const addressList = document.getElementById("addressList");
        addressList.innerHTML = "";

        addresses.forEach((addr, index) => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <strong>${addr.type}:</strong> <br>
                House No: ${addr.houseNo}, ${addr.street}, ${addr.landmark} <br>
                ${addr.city}, ${addr.state} - ${addr.pinCode} <br>
                Mobile: ${addr.mobile} <br>
                <button onclick="deleteAddress(${index})">Delete</button>
            `;
            addressList.appendChild(listItem);
        });
    }

    document.getElementById("addressForm").addEventListener("submit", async function (event) {
        event.preventDefault();
        
        const addressType = document.getElementById("addressType").value;
        const houseNo = document.getElementById("houseNo").value.trim();
        const street = document.getElementById("street").value.trim();
        const landmark = document.getElementById("landmark").value.trim();
        const pinCode = document.getElementById("pinCode").value.trim();
        const city = document.getElementById("city").value.trim();
        const state = document.getElementById("state").value.trim();
        const mobile = document.getElementById("mobile").value.trim();

        try {
            const response = await fetch(apiUrl);
            if (!response.ok) throw new Error("Failed to fetch user data.");
            
            const user = await response.json();
            const updatedAddresses = user.addresses || [];
            updatedAddresses.push({
                type: addressType,
                houseNo,
                street,
                landmark,
                pinCode,
                city,
                state,
                mobile
            });

            const updateResponse = await fetch(apiUrl, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ addresses: updatedAddresses }),
            });

            if (!updateResponse.ok) throw new Error("Failed to update address.");
            document.getElementById("message").textContent = "Address saved!";
            fetchUserData();
        } catch (error) {
            console.error("Error updating address:", error);
            document.getElementById("message").textContent = "Failed to update address.";
        }
    });

    window.deleteAddress = async function(index) {
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) throw new Error("Failed to fetch user data.");
            
            const user = await response.json();
            const updatedAddresses = user.addresses || [];
            updatedAddresses.splice(index, 1); // Remove selected address

            const updateResponse = await fetch(apiUrl, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ addresses: updatedAddresses }),
            });

            if (!updateResponse.ok) throw new Error("Failed to delete address.");
            fetchUserData();
        } catch (error) {
            console.error("Error deleting address:", error);
        }
    };

    document.getElementById("logout-btn").addEventListener("click", function () {
        localStorage.removeItem("loggedInUser");
        window.location.href = "login.html";
    });

    fetchUserData();
});
