const root = document.getElementById("root");


const products = [
    { id: 1, name: "Product 1", price: 34 },
    { id: 2, name: "Product 2", price: 50 },
    { id: 3, name: "Product 3", price: 75 },
];

const cart = {};


const addToCart = (id) => {
    cart[id] = (cart[id] || 0) + 1;
    const product = products.find(p => p.id === id);
    const messageDiv = document.createElement("div");
    messageDiv.textContent = `${product.name} added to cart!`;
    messageDiv.style.position = "fixed";
    messageDiv.style.bottom = "20px";
    messageDiv.style.right = "20px";
    messageDiv.style.background = "#4caf50";
    messageDiv.style.color = "#fff";
    messageDiv.style.padding = "10px 20px";
    messageDiv.style.borderRadius = "5px";
    messageDiv.style.zIndex = "1000";
    document.body.appendChild(messageDiv);
    setTimeout(() => {
        document.body.removeChild(messageDiv);
    }, 1500);
};


const increment = (id) => {
    cart[id]++;
    displayCart();
};


const decrement = (id) => {
    if (cart[id] > 1) {
        cart[id]--;
    } else {
        delete cart[id];
    }
    displayCart();
};


const displayCart = () => {
    let str = "<h2>Cart</h2>";
    let total = 0;

    if (Object.keys(cart).length === 0) {
        str += "<p>Your cart is empty.</p>";
    } else {
        str += '<div class="cart-list">';
        products.forEach((product) => {
            if (cart[product.id]) {
                let itemTotal = product.price * cart[product.id];
                total += itemTotal;
                str += `<div class="cart-item">
                    ${product.name} - $${product.price}
                    <button onclick='decrement(${product.id})'>-</button>
                    ${cart[product.id]}
                    <button onclick='increment(${product.id})'>+</button>
                    = $${itemTotal}
                </div>`;
            }
        });
        str += "</div>";

        str += `<h3>Total Cost: $${total}</h3>`;
    }
    root.innerHTML = str;
};



const showProducts = () => {
    let str = "<h2>Available Products</h2><div class='row'>";
    products.forEach((product) => {
        str += `<div class="product-card">
            <h3>${product.name}</h3>
            <h4>$${product.price}</h4>
            <button onclick='addToCart(${product.id})'>Add to Cart</button>
        </div>`;
    });
    root.innerHTML = str + "</div>";
};

showProducts();


