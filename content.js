function dynamicClothingSection(ob) {
  let boxDiv = document.createElement("div");
  boxDiv.classList.add("product-item");

  let boxLink = document.createElement("a");
  boxLink.href = `/bedding/${ob.name.replace(/\s+/g, '-').toLowerCase()}.html?id=${ob.id}`;

  let imgTag = document.createElement("img");
  imgTag.src = ob.preview;

  let detailsDiv = document.createElement("div");
  detailsDiv.classList.add("details");

  let h3 = document.createElement("h3");
  h3.textContent = ob.name;

  let h4 = document.createElement("h4");
  h4.textContent = ob.brand;

  let h2 = document.createElement("h2");
  h2.textContent = "Rs " + ob.price;

  boxDiv.appendChild(boxLink);
  boxLink.appendChild(imgTag);
  boxLink.appendChild(detailsDiv);
  detailsDiv.appendChild(h3);
  detailsDiv.appendChild(h4);
  detailsDiv.appendChild(h2);

  return boxDiv;
}

// Fetch and Load Products from API
fetch("https://67acd88f3f5a4e1477dc0bdc.mockapi.io/api/v1/products")
  .then(response => response.json())
  .then(data => {
    const containerClothing = document.getElementById("containerClothing");
    data.forEach(item => {
      if (!item.isAccessory) {
        containerClothing.appendChild(dynamicClothingSection(item));
      }
    });
  })
  .catch(error => console.error("Error fetching products:", error));
