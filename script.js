const products = [
    {name: "Laptop", price: 50000, rating: 4},
    {name: "Headphones", price: 2000, rating: 5},
    {name: "Phone", price: 20000, rating: 4},
    {name: "Shoes", price: 3000, rating: 3},
    {name: "Watch", price: 5000, rating: 4}
];

let cart = [];

// Display products
function displayProducts(list) {
    const container = document.getElementById("product-list");
    container.innerHTML = "";

    list.forEach((p, index) => {
        container.innerHTML += `
            <div class="product">
                <h3>${p.name}</h3>
                <p>₹${p.price}</p>
                <p>Rating: ${"⭐".repeat(p.rating)}</p>
                <button onclick="addToCart(${index})">Add to Cart</button>
            </div>
        `;
    });
}

displayProducts(products);

// Add to cart
function addToCart(index) {
    cart.push(products[index]);
    updateCart();
}

// Update cart
function updateCart() {
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach(item => {
        cartItems.innerHTML += `<li>${item.name} - ₹${item.price}</li>`;
        total += item.price;
    });

    document.getElementById("total").innerText = total;
}

// Checkout
function checkout() {
    alert("Order placed successfully!");
    cart = [];
    updateCart();
}

// Search
function searchProduct() {
    let value = document.getElementById("search").value.toLowerCase();

    let filtered = products.filter(p =>
        p.name.toLowerCase().includes(value)
    );

    displayProducts(filtered);
}