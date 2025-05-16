// Define fruits array globally
let fruits = [
  { id: 1, name: "Strawberry", price: 150, img: "https://extension.colostate.edu/wp-content/uploads/2021/04/07000-fig1.jpg" },
  { id: 2, name: "Pineapple", price: 180, img: "https://static.vecteezy.com/system/resources/thumbnails/045/360/029/small_2x/healthy-pineapple-slice-fruit-isolated-on-a-transparent-background-png.png" },
  { id: 3, name: "Blueberry", price: 200, img: "https://www.jiomart.com/images/product/original/590000849/blue-berry-imported-100-g-product-images-o590000849-p590707111-0-202501031744.jpg?im=Resize=(1000,1000)" }
];

// Function to render fruits dynamically
const renderFruits = () => {
  const container = document.getElementById("fruit-container");
  container.innerHTML = ""; // Clear previous content

  fruits.forEach(({ id, name, price, img }) => {
    const card = document.createElement("div");
    card.className = "fruit-card";
    card.innerHTML = `
      <img src="${img}" alt="${name}">
      <h3>${name}</h3>
      <p>₹${price}</p>
      <button class="add-btn">Add to Cart</button>
      <button class="delete-btn" data-id="${id}">Delete</button>
    `;

    // Handle adding to cart
    card.querySelector(".add-btn").addEventListener("click", () => {
      console.log(`${name} added to cart.`);
    });

    // Handle deletion using correct fruit ID
    card.querySelector(".delete-btn").addEventListener("click", (event) => {
      const fruitId = parseInt(event.target.getAttribute("data-id"));

      fruits = fruits.filter(fruit => fruit.id !== fruitId); // Remove the correct fruit
      renderFruits(); // Update UI
    });

    container.appendChild(card);
  });
};

// Function to add a new fruit
const addFruit = () => {
  const id = parseInt(document.getElementById("fruit-id").value.trim()); // Ensure ID is numeric
  const name = document.getElementById("fruit-name").value.trim();
  const price = parseInt(document.getElementById("fruit-price").value.trim());
  const img = document.getElementById("fruit-image").value.trim();

  if (!isNaN(id) && name && !isNaN(price) && img) {
    fruits.push({ id, name, price, img }); // Add new fruit
    renderFruits(); // Update list

    // Clear input fields
    document.getElementById("fruit-id").value = "";
    document.getElementById("fruit-name").value = "";
    document.getElementById("fruit-price").value = "";
    document.getElementById("fruit-image").value = "";
  } else {
    alert("Please enter all valid fruit details!");
  }
};

// Event listener for adding fruits
document.getElementById("add-fruit-btn").addEventListener("click", addFruit);

// Initial render of fruit list
renderFruits();
