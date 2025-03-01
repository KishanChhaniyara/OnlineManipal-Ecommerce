fetch("https://67acd88f3f5a4e1477dc0bdc.mockapi.io/api/v1/products?category=beddingsets")
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("beddingsetsContainer");
    container.innerHTML = "";

    data.forEach(item => {
        let productDiv = document.createElement("div");
        productDiv.classList.add("product-item");

        productDiv.innerHTML = `
            <a href="product.html?id=${item.id}">
                <img src="${item.images[0]}" alt="${item.name}">
            </a>
            <h3>${item.name}</h3>
            <p>Brand: ${item.brand}</p>
            <p class="price">Price: ₹${item.price}</p>
        `;

        container.appendChild(productDiv);
    });
  })
  .catch(error => console.error("Error fetching bedding sets:", error));
