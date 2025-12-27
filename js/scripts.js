// ===== TWYFORD TILES - MAIN JAVASCRIPT =====
// All prices in KES (Kenyan Shillings)
// Products from Pioneer Hardware

// Product Database
const products = [
    {
        id: 1,
        name: "Porcelain Wood Tile - Natural Oak",
        price: 2850,
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        category: "floor",
        size: "600x600",
        country: "kenya",
        description: "Premium wood-effect porcelain floor tiles with natural oak finish. Perfect for living rooms, bedrooms, and hallways. Water-resistant and easy to clean.",
        stock: "In Stock",
        extraImages: [
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        ]
    },
    {
        id: 2,
        name: "Glossy White Wall Tile",
        price: 1650,
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        category: "wall",
        size: "300x600",
        country: "kenya",
        description: "Classic glossy white ceramic tiles perfect for bathroom and kitchen walls. Easy to clean and maintains brightness.",
        stock: "In Stock",
        extraImages: [
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        ]
    },
    {
        id: 3,
        name: "Carrara Marble Effect Tile",
        price: 3200,
        image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        category: "floor",
        size: "600x600",
        country: "kenya",
        description: "Luxurious Carrara marble-effect tiles for floors and feature walls. Elegant veining pattern for a premium look.",
        stock: "In Stock",
        extraImages: [
            "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        ]
    },
    {
        id: 4,
        name: "Glass Mosaic Tile - Blue Mix",
        price: 2150,
        image: "https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        category: "wall",
        size: "300x300",
        country: "kenya",
        description: "Vibrant glass mosaic tiles in blue mix colors. Perfect for shower areas, bathroom accents, and kitchen backsplashes.",
        stock: "Limited Stock",
        extraImages: [
            "https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        ]
    },
    {
        id: 5,
        name: "Natural Slate Effect Tile",
        price: 2950,
        image: "https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        category: "floor",
        size: "400x400",
        country: "kenya",
        description: "Natural slate-effect tiles with textured finish. Ideal for outdoor areas, patios, and indoor floors where slip-resistance is needed.",
        stock: "In Stock",
        extraImages: [
            "https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        ]
    },
    {
        id: 6,
        name: "Hexagon Pattern Tile - Grey",
        price: 2450,
        image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        category: "wall",
        size: "300x600",
        country: "kenya",
        description: "Modern hexagon geometric pattern tiles in elegant grey. Creates stunning feature walls in living rooms and bathrooms.",
        stock: "In Stock",
        extraImages: [
            "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        ]
    },
    {
        id: 7,
        name: "Matt Black Floor Tile",
        price: 2750,
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        category: "floor",
        size: "600x600",
        country: "kenya",
        description: "Sophisticated matt black floor tiles for modern interiors. Non-slip surface, perfect for kitchens and living areas.",
        stock: "In Stock",
        extraImages: []
    },
    {
        id: 8,
        name: "Subway Tile - White Gloss",
        price: 1850,
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        category: "wall",
        size: "200x300",
        country: "kenya",
        description: "Classic white subway tiles with glossy finish. Timeless design for kitchens and bathrooms. Easy to clean and maintain.",
        stock: "In Stock",
        extraImages: []
    },
    {
        id: 9,
        name: "Terracotta Floor Tile",
        price: 2350,
        image: "https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        category: "floor",
        size: "300x300",
        country: "kenya",
        description: "Warm terracotta floor tiles with natural clay look. Perfect for rustic and Mediterranean style interiors.",
        stock: "In Stock",
        extraImages: []
    },
    {
        id: 10,
        name: "Herringbone Pattern Tile",
        price: 3050,
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        category: "floor",
        size: "600x600",
        country: "kenya",
        description: "Elegant herringbone pattern wood-effect tiles. Creates visual interest in any room with a classic pattern.",
        stock: "In Stock",
        extraImages: []
    },
    {
        id: 11,
        name: "Textured Stone Tile",
        price: 3150,
        image: "https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        category: "wall",
        size: "300x600",
        country: "kenya",
        description: "Textured stone-effect tiles for feature walls. Adds depth and character to living spaces and bathrooms.",
        stock: "In Stock",
        extraImages: []
    },
    {
        id: 12,
        name: "Polished Porcelain Tile",
        price: 3550,
        image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        category: "floor",
        size: "600x600",
        country: "kenya",
        description: "High-gloss polished porcelain tiles with mirror-like finish. Perfect for creating a luxurious look in living areas.",
        stock: "In Stock",
        extraImages: []
    }
];

// Shopping Cart System
let cart = JSON.parse(localStorage.getItem('twyfordCart')) || [];

// Initialize cart display
function initCart() {
    updateCart();
}

// Add to Cart
function addToCart(productId, quantity = 1) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: quantity
        });
    }

    updateCart();
    showNotification(`${quantity}x ${product.name} added to cart!`);
}

// Update Cart UI
function updateCart() {
    const cartItems = document.getElementById('cartItems');
    const cartCount = document.querySelector('.cart-count');
    const cartTotal = document.getElementById('cartTotal');

    // Save to localStorage
    localStorage.setItem('twyfordCart', JSON.stringify(cart));

    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartCount) cartCount.textContent = totalItems;

    // Update cart items display
    if (cartItems) {
        if (cart.length === 0) {
            cartItems.innerHTML = '<p class="empty-cart-msg">Your cart is empty</p>';
            if (cartTotal) cartTotal.textContent = '0';
            return;
        }

        cartItems.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;

            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}" onerror="this.src='https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'">
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-price">KES ${item.price.toLocaleString()} × ${item.quantity}</div>
                    <div class="cart-item-quantity">
                        <button class="quantity-change" onclick="changeQuantity(${item.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-change" onclick="changeQuantity(${item.id}, 1)">+</button>
                    </div>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart(${item.id})">
                    <i class="fas fa-trash"></i>
                </button>
            `;
            cartItems.appendChild(cartItem);
        });

        if (cartTotal) cartTotal.textContent = total.toLocaleString();
    }
}

// Change Item Quantity
function changeQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity < 1) {
            removeFromCart(productId);
        } else {
            updateCart();
        }
    }
}

// Remove from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

// Toggle Cart Visibility
function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    const cartOverlay = document.getElementById('cartOverlay');

    if (cartSidebar && cartOverlay) {
        cartSidebar.classList.toggle('active');
        cartOverlay.classList.toggle('active');
    }
}

// Clear Cart
function clearCart() {
    if (cart.length === 0) {
        showNotification('Your cart is already empty!');
        return;
    }

    if (confirm('Are you sure you want to clear your cart?')) {
        cart = [];
        updateCart();
        showNotification('Cart cleared successfully!');
    }
}

// Checkout Process
function checkout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty! Add some items first.');
        toggleCart();
        return;
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const itemList = cart.map(item => 
        `• ${item.name} (${item.quantity} × KES ${item.price.toLocaleString()})`
    ).join('%0A');
    
    const message = `🛒 *Twyford Tiles Order* 🛒%0A%0AHello! I would like to order:%0A%0A${itemList}%0A%0A*Total: KES ${total.toLocaleString()}*%0A%0APlease contact me for delivery details.`;
    
    // Open WhatsApp with order summary
    const whatsappURL = `https://wa.me/254712345678?text=${message}`;
    window.open(whatsappURL, '_blank');
}

// Show Notification
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-check-circle"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 30px;
        background: #27ae60;
        color: white;
        padding: 15px 25px;
        border-radius: 5px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 2000;
        animation: slideIn 0.3s ease, fadeOut 0.3s ease 2.7s;
        animation-fill-mode: forwards;
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 3000);
}

// Add CSS for animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes fadeOut {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100%);
        }
    }
    .notification-content {
        display: flex;
        align-items: center;
        gap: 10px;
    }
`;
document.head.appendChild(style);

// Get Related Products
function getRelatedProducts(currentProductId) {
    const currentProduct = products.find(p => p.id === currentProductId);
    if (!currentProduct) return [];
    
    // Find products in same category, excluding current product
    return products
        .filter(p => p.id !== currentProductId && p.category === currentProduct.category)
        .slice(0, 4); // Return up to 4 related products
}

// Display Products on Homepage
function displayFeaturedProducts() {
    const container = document.getElementById('featuredProducts');
    if (!container) return;

    const featured = products.slice(0, 4); // First 4 products as featured
    container.innerHTML = '';

    featured.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" onerror="this.src='https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'">
            <h3>${product.name}</h3>
            <p class="price">KES ${product.price.toLocaleString()}</p>
            <p class="description">${product.description.substring(0, 80)}...</p>
            <button class="buy-btn" onclick="addToCart(${product.id})">
                <i class="fas fa-cart-plus"></i> Add to Cart
            </button>
            <a href="product.html?id=${product.id}" class="view-details">View Details →</a>
        `;
        container.appendChild(productCard);
    });
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    initCart();
    displayFeaturedProducts();
    
    // Make products available globally
    window.products = products;
    window.addToCart = addToCart;
    window.toggleCart = toggleCart;
    window.clearCart = clearCart;
    window.checkout = checkout;
    window.getRelatedProducts = getRelatedProducts;
});

// Enhanced Product Database with real tile business data
const products = [
    {
        id: 1,
        name: "Porcelain Wood Plank - Natural Oak",
        price: 2850,
        originalPrice: 3200,
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        category: "floor",
        size: "600x600",
        brand: "Pioneer Premium",
        finish: "Matt",
        thickness: "9mm",
        waterAbsorption: "< 0.5%",
        uses: ["Living Room", "Bedroom", "Hallway"],
        stock: 150,
        sku: "TWF-6006-NO",
        description: "Premium wood-effect porcelain tiles with realistic natural oak finish. High-density porcelain with excellent durability and stain resistance. Perfect for residential and commercial spaces.",
        features: ["Scratch Resistant", "Stain Proof", "Fade Resistant", "Easy Maintenance"],
        installation: "Full spread adhesive",
        maintenance: "Regular sweeping and damp mopping",
        warranty: "25 years residential, 10 years commercial",
        tags: ["wood", "porcelain", "floor", "modern", "living room"]
    },
    // Add more enhanced products following the same structure...
    {
        id: 2,
        name: "Glossy White Ceramic - Subway Pattern",
        price: 1650,
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        category: "wall",
        size: "300x600",
        brand: "Pioneer Classic",
        finish: "Glossy",
        thickness: "8mm",
        waterAbsorption: "< 3%",
        uses: ["Bathroom", "Kitchen", "Feature Wall"],
        stock: 200,
        sku: "TWW-3600-GW",
        description: "Classic glossy white subway tiles perfect for creating clean, bright spaces. Ideal for bathrooms, kitchens, and feature walls.",
        tags: ["white", "glossy", "wall", "bathroom", "kitchen"]
    },
    // Add 10 more products with similar detailed structure
];

// Add these new functions to your script.js:
function displayProductCategories() {
    const categories = {
        "Floor Tiles": products.filter(p => p.category === "floor"),
        "Wall Tiles": products.filter(p => p.category === "wall"),
        "Kitchen Tiles": products.filter(p => p.uses && p.uses.includes("Kitchen")),
        "Bathroom Tiles": products.filter(p => p.uses && p.uses.includes("Bathroom"))
    };
    
    return categories;
}

function getInstallationGuide(product) {
    const guides = {
        "floor": {
            steps: [
                "Prepare subfloor (clean, level, dry)",
                "Apply thin-set mortar",
                "Lay tiles with spacers",
                "Allow 24-48 hours curing",
                "Apply grout",
                "Seal (if natural stone)"
            ],
            tools: ["Tile cutter", "Notched trowel", "Spacers", "Level", "Grout float"],
            time: "2-3 days for average room",
            difficulty: "Intermediate"
        },
        "wall": {
            steps: [
                "Prepare wall surface",
                "Apply waterproofing (for wet areas)",
                "Start from center",
                "Use tile adhesive",
                "Cut tiles for edges",
                "Grout after 24 hours"
            ],
            tools: ["Tile cutter", "Tile adhesive", "Spacers", "Level"],
            time: "1-2 days for average bathroom",
            difficulty: "Beginner to Intermediate"
        }
    };
    
    return guides[product.category] || guides.floor;
}

function calculateTileQuantity(areaSqm, tileSize) {
    // Convert size to meters
    const [width, height] = tileSize.split('x').map(dim => parseInt(dim) / 1000);
    const tileArea = width * height;
    const tilesNeeded = Math.ceil(areaSqm / tileArea * 1.1); // +10% for cuts/waste
    
    return {
        tiles: tilesNeeded,
        boxes: Math.ceil(tilesNeeded / (tileSize === "600x600" ? 4 : 8)), // Assuming 4 tiles per box for 600x600
        area: areaSqm,
        tileSize: tileSize
    };
}