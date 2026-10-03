Responsive Food Ordering Website

A modern, responsive, and interactive food ordering website built with HTML, CSS, and JavaScript.

This project provides a complete frontend experience for browsing food items, filtering categories, adding products to a shopping cart, managing quantities, and placing a demo order.

✨ Features
📱 Fully responsive design
🍔 Modern food ordering UI
🏠 Attractive hero section
🍕 Food category filtering
🔍 Search food items
🛒 Add to cart functionality
➕ Increase/decrease quantity
🗑️ Remove cart items
💰 Automatic total calculation
💾 LocalStorage cart persistence
❤️ Favorite food items
🧾 Order summary
📦 Demo checkout system
🌙 Dark/light mode
✨ Smooth animations
📜 Scroll reveal effects
⬆️ Back-to-top button
📱 Mobile navigation
📞 Contact section
🛠️ Technologies
HTML5
CSS3
JavaScript
Font Awesome
Google Fonts
CSS Grid
Flexbox
JavaScript DOM
LocalStorage API
📂 Project Structure
responsive-food-order/
│
├── index.html
├── menu.html
├── about.html
├── contact.html
│
├── css/
│   ├── style.css
│   ├── menu.css
│   ├── responsive.css
│   └── animations.css
│
├── js/
│   ├── main.js
│   ├── menu.js
│   ├── cart.js
│   └── checkout.js
│
├── images/
│   ├── hero/
│   ├── foods/
│   ├── categories/
│   └── banners/
│
├── screenshots/
│   ├── home.png
│   ├── menu.png
│   ├── cart.png
│   └── checkout.png
│
├── README.md
└── LICENSE
🏠 Homepage

The homepage includes:

Food delivery hero section
Search bar
Popular food categories
Featured foods
Special offers
Why choose us section
Customer reviews
App promotion
Newsletter section
Footer
🍕 Food Menu

Customers can browse different food categories:

🍔 Burgers
🍕 Pizza
🍗 Chicken
🌮 Fast Food
🍜 Noodles
🥗 Salads
🍰 Desserts
🥤 Drinks

Each food card contains:

Food Image
Food Name
Category
Rating
Price
Add to Cart
Favorite Button
🔎 Search & Filtering

Users can search for food using the search bar.

The menu can also be filtered by category:

All
Burgers
Pizza
Chicken
Fast Food
Desserts
Drinks
🛒 Shopping Cart

The shopping cart allows users to:

Add products
Remove products
Increase quantity
Decrease quantity
View subtotal
Calculate delivery fee
Calculate total
Save cart data

Example:

------------------------------
Your Cart
------------------------------

🍔 Classic Burger     $8.99
    [-]  2  [+]

🍕 Pepperoni Pizza   $12.99
    [-]  1  [+]

------------------------------
Subtotal             $30.97
Delivery              $2.00
------------------------------
Total                $32.97
------------------------------

       [ Checkout ]
💾 LocalStorage

The cart uses JavaScript LocalStorage so that cart items remain available after refreshing the page.

Example:

localStorage.setItem(
    "cart",
    JSON.stringify(cart)
);
📦 Checkout

The checkout page includes:

Customer name
Phone number
Email
Delivery address
Payment method
Order summary
Total price
Place Order button

Example payment options:

○ Cash on Delivery
○ Card Payment
○ Mobile Payment
