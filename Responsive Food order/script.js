// --- 1. Food Database ---
const foodItems = [
  {
    id: 1,
    name: "Classic Cheeseburger",
    category: "burgers",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
    description: "Beef patty with melted cheddar cheese, fresh lettuce, and special sauce."
  },
  {
    id: 2,
    name: "Pepperoni Passion",
    category: "pizzas",
    price: 14.50,
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=600&q=80",
    description: "Loaded with double spicy pepperoni and rich mozzarella cheese."
  },
  {
    id: 3,
    name: "Smokey Bacon Burger",
    category: "burgers",
    price: 11.99,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80",
    description: "Smoky BBQ sauce, crispy bacon strips, and premium ground beef."
  },
  {
    id: 4,
    name: "Margherita Supreme",
    category: "pizzas",
    price: 12.00,
    image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=600&q=80",
    description: "Fresh tomato sauce, basil, extra virgin olive oil, and fresh mozzarella."
  },
  {
    id: 5,
    name: "Iced Berry Lemonade",
    category: "drinks",
    price: 4.50,
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80",
    description: "Refreshing lemon juice mixed with sweet berry puree over ice."
  },
  {
    id: 6,
    name: "Craft Cola",
    category: "drinks",
    price: 3.50,
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80",
    description: "Artisanal carbonated cola brewed with natural botanical extracts."
  }
];

// --- 2. State Management ---
let cart = [];

// --- 3. DOM Elements ---
const foodGrid = document.getElementById("food-grid");
const filterBtns = document.querySelectorAll(".filter-btn");
const searchInput = document.getElementById("search-input");

const cartBtn = document.getElementById("cart-btn");
const closeCartBtn = document.getElementById("close-cart");
const cartDrawer = document.getElementById("cart-drawer");
const cartOverlay = document.getElementById("cart-overlay");
const cartBody = document.getElementById("cart-body");
const cartCount = document.getElementById("cart-count");
const cartTotalPrice = document.getElementById("cart-total-price");
const checkoutBtn = document.getElementById("checkout-btn");

const orderModal = document.getElementById("order-modal");
const closeModalBtn = document.getElementById("close-modal");
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

// --- 4. Render Dishes Grid ---
function renderDishes(items) {
  foodGrid.innerHTML = "";
  if (items.length === 0) {
    foodGrid.innerHTML = `<p class="text-center" style="grid-column: 1/-1;">No dishes found matching your selection.</p>`;
    return;
  }

  items.forEach(dish => {
    const card = document.createElement("div");
    card.classList.add("food-card");
    card.innerHTML = `
      <img src="${dish.image}" alt="${dish.name}">
      <div class="food-card-content">
        <h3 class="food-card-title">${dish.name}</h3>
        <p class="food-card-desc">${dish.description}</p>
        <div class="food-card-footer">
          <span class="price">$${dish.price.toFixed(2)}</span>
          <button class="btn btn-primary" onclick="addToCart(${dish.id})">Add to Cart</button>
        </div>
      </div>
    `;
    foodGrid.appendChild(card);
  });
}

// --- 5. Cart Functions ---
function addToCart(id) {
  const existingItem = cart.find(item => item.id === id);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    const item = foodItems.find(f => f.id === id);
    cart.push({ ...item, quantity: 1 });
  }
  updateCartUI();
  openCartDrawer();
}

function updateQuantity(id, change) {
  const itemIndex = cart.findIndex(i => i.id === id);
  if (itemIndex > -1) {
    cart[itemIndex].quantity += change;
    if (cart[itemIndex].quantity <= 0) {
      cart.splice(itemIndex, 1);
    }
  }
  updateCartUI();
}

function updateCartUI() {
  // Update item count icon
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = totalCount;

  // Render items in drawer
  cartBody.innerHTML = "";
  if (cart.length === 0) {
    cartBody.innerHTML = `<p class="text-center" style="color: var(--muted-text);">Your cart is currently empty.</p>`;
  } else {
    cart.forEach(item => {
      const cartItem = document.createElement("div");
      cartItem.classList.add("cart-item");
      cartItem.innerHTML = `
        <div class="cart-item-info">
          <h4>${item.name}</h4>
          <span>$${(item.price * item.quantity).toFixed(2)}</span>
        </div>
        <div class="cart-controls">
          <button onclick="updateQuantity(${item.id}, -1)">-</button>
          <span>${item.quantity}</span>
          <button onclick="updateQuantity(${item.id}, 1)">+</button>
        </div>
      `;
      cartBody.appendChild(cartItem);
    });
  }

  // Update total price
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  cartTotalPrice.textContent = `$${total.toFixed(2)}`;
}

// --- 6. Drawer & Overlay Handlers ---
function openCartDrawer() {
  cartDrawer.classList.add("open");
  cartOverlay.classList.add("active");
}

function closeCartDrawer() {
  cartDrawer.classList.remove("open");
  cartOverlay.classList.remove("active");
}

// --- 7. Event Listeners ---
cartBtn.addEventListener("click", openCartDrawer);
closeCartBtn.addEventListener("click", closeCartDrawer);
cartOverlay.addEventListener("click", closeCartDrawer);

// Category Filter Handling
filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const category = btn.getAttribute("data-category");

    if (category === "all") {
      renderDishes(foodItems);
    } else {
      const filtered = foodItems.filter(item => item.category === category);
      renderDishes(filtered);
    }
  });
});

// Live Search Filter
searchInput.addEventListener("input", (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const filtered = foodItems.filter(item =>
    item.name.toLowerCase().includes(searchTerm) ||
    item.description.toLowerCase().includes(searchTerm)
  );
  renderDishes(filtered);
});

// Checkout Action
checkoutBtn.addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }
  closeCartDrawer();
  orderModal.classList.add("active");
  cart = [];
  updateCartUI();
});

closeModalBtn.addEventListener("click", () => {
  orderModal.classList.remove("active");
});

// Mobile Navigation Toggle
hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// --- Initialize Page ---
renderDishes(foodItems);