// Products Data
const products = [
    // Flash Deals
    { id: 1, name: "Noise Cancelling Wireless Headphones Pro", brand: "Sony", price: 299, oldPrice: 399, rating: 4.8, reviews: 120, category: "Electronics", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=80", deal: true, discount: "25% OFF" },
    { id: 2, name: "Smart Fitness Watch Series 7 Titanium", brand: "Apple", price: 349, oldPrice: 449, rating: 4.9, reviews: 340, category: "Electronics", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=80", deal: true, discount: "22% OFF" },
    { id: 3, name: "Ergonomic Office Chair with Lumbar Support", brand: "Herman Miller", price: 599, oldPrice: 799, rating: 4.7, reviews: 85, category: "Furniture", image: "https://images.unsplash.com/photo-1505797149-43b0069ec26b?w=500&auto=format&fit=crop&q=80", deal: true, discount: "25% OFF" },
    { id: 4, name: "Designer Leather Crossbody Handbag", brand: "Gucci", price: 850, oldPrice: 1200, rating: 4.9, reviews: 62, category: "Fashion", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&auto=format&fit=crop&q=80", deal: true, discount: "30% OFF" },
    { id: 5, name: "Modernist Matte Ceramic Vase Set", brand: "Zara Home", price: 45, oldPrice: 75, rating: 4.5, reviews: 110, category: "Home & Kitchen", image: "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=500&auto=format&fit=crop&q=80", deal: true, discount: "40% OFF" },

    // Electronics Floor
    { id: 6, name: "OLED Ultra-Thin Smart TV 65\"", brand: "LG", price: 1899, rating: 4.9, reviews: 215, category: "Electronics", image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=500&auto=format&fit=crop&q=80" },
    { id: 7, name: "Mechanical Gaming Keyboard RGB", brand: "Razer", price: 129, rating: 4.7, reviews: 180, category: "Electronics", image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format&fit=crop&q=80" },
    { id: 8, name: "Compact Vlog Mirrorless Camera", brand: "Sony", price: 799, rating: 4.6, reviews: 94, category: "Electronics", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&auto=format&fit=crop&q=80" },
    { id: 9, name: "Smart Voice Assistant Speaker", brand: "Amazon", price: 49, rating: 4.5, reviews: 520, category: "Electronics", image: "https://images.unsplash.com/photo-1543512214-318c7553f230?w=500&auto=format&fit=crop&q=80" },

    // Fashion Floor
    { id: 10, name: "Premium Wool Blend Double-Breasted Trench Coat", brand: "Zalando", price: 189, rating: 4.8, reviews: 48, category: "Fashion", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=80" },
    { id: 11, name: "Minimalist Leather Court Sneakers", brand: "Nike", price: 110, rating: 4.7, reviews: 290, category: "Fashion", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&auto=format&fit=crop&q=80" },
    { id: 12, name: "Aviation Style Gold-Rim Sunglasses", brand: "Ray-Ban", price: 165, rating: 4.6, reviews: 143, category: "Fashion", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&auto=format&fit=crop&q=80" },
    { id: 13, name: "Casual Soft Canvas Backpack", brand: "Herschel", price: 75, rating: 4.5, reviews: 88, category: "Fashion", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=80" },

    // Home Living Floor
    { id: 14, name: "Velvet Emerald Green Accent Armchair", brand: "West Elm", price: 450, rating: 4.8, reviews: 36, category: "Home & Kitchen", image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500&auto=format&fit=crop&q=80" },
    { id: 15, name: "Minimalist Brass Arch Floor Lamp", brand: "IKEA", price: 89, rating: 4.4, reviews: 74, category: "Home & Kitchen", image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&auto=format&fit=crop&q=80" },
    { id: 16, name: "Aromatic Soy Scented Candle Trio", brand: "Jo Malone", price: 65, rating: 4.9, reviews: 105, category: "Home & Kitchen", image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=500&auto=format&fit=crop&q=80" },
    { id: 17, name: "French Press Double-Walled Coffee Maker", brand: "Bodum", price: 35, rating: 4.7, reviews: 210, category: "Home & Kitchen", image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=500&auto=format&fit=crop&q=80" }
];

// App State
let cart = [];
let wishlist = [];

// Initialize DOM Elements
document.addEventListener("DOMContentLoaded", () => {
    initApp();
});

function initApp() {
    renderFlashDeals();
    renderFloors();
    setupEventListeners();
    startCountdown();
}

// Render Flash Deals
function renderFlashDeals() {
    const dealsContainer = document.getElementById("deals-carousel");
    if (!dealsContainer) return;

    const dealProducts = products.filter(p => p.deal);
    dealsContainer.innerHTML = dealProducts.map(p => createProductCardHTML(p)).join("");
}

// Render Showcase Floors
function renderFloors() {
    const electronicsGrid = document.getElementById("electronics-grid");
    const fashionGrid = document.getElementById("fashion-grid");
    const homeGrid = document.getElementById("home-grid");

    if (electronicsGrid) {
        const elecProducts = products.filter(p => p.category === "Electronics" && !p.deal);
        electronicsGrid.innerHTML = elecProducts.map(p => createProductCardHTML(p)).join("");
    }
    if (fashionGrid) {
        const fashProducts = products.filter(p => p.category === "Fashion" && !p.deal);
        fashionGrid.innerHTML = fashProducts.map(p => createProductCardHTML(p)).join("");
    }
    if (homeGrid) {
        const homeProducts = products.filter(p => p.category === "Home & Kitchen" && !p.deal);
        homeGrid.innerHTML = homeProducts.map(p => createProductCardHTML(p)).join("");
    }
}

// Generate Product Card HTML template
function createProductCardHTML(p) {
    const starsHTML = Array(5).fill(0).map((_, i) => 
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${i < Math.floor(p.rating) ? 'currentColor' : 'none'}" stroke="currentColor" width="14" height="14"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>`
    ).join("");

    return `
        <div class="carousel-item">
            <div class="product-card" data-id="${p.id}">
                ${p.discount ? `<div class="card-badge">${p.discount}</div>` : ''}
                <div class="card-actions">
                    <button class="card-action-btn btn-wishlist" onclick="toggleWishlist(${p.id})">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="18" height="18"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
                    </button>
                    <button class="card-action-btn btn-quick-view" onclick="openQuickView(${p.id})">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="18" height="18"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                    </button>
                </div>
                <div class="card-img-wrapper" onclick="openQuickView(${p.id})">
                    <img src="${p.image}" alt="${p.name}" class="card-img" loading="lazy">
                </div>
                <div class="card-body">
                    <span class="card-brand">${p.brand}</span>
                    <h3 class="card-title">${p.name}</h3>
                    <div class="card-rating">
                        <div class="stars">${starsHTML}</div>
                        <span>(${p.reviews})</span>
                    </div>
                    <div class="card-price-row">
                        <div class="price-wrapper">
                            <span class="current-price">$${p.price}</span>
                            ${p.oldPrice ? `<span class="old-price">$${p.oldPrice}</span>` : ''}
                        </div>
                        <button class="btn-add-cart" onclick="addToCart(${p.id})">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="16" height="16"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
                            Add
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// App event listener setups
function setupEventListeners() {
    // Cart drawer controls
    const btnCart = document.getElementById("btn-cart");
    const drawerCart = document.getElementById("drawer-cart");
    const btnCloseCart = document.getElementById("btn-close-cart");

    if (btnCart && drawerCart) {
        btnCart.addEventListener("click", () => drawerCart.classList.add("open"));
    }
    if (btnCloseCart && drawerCart) {
        btnCloseCart.addEventListener("click", () => drawerCart.classList.remove("open"));
    }

    // Modal quick-view close
    const modalOverlay = document.getElementById("modal-overlay");
    const btnCloseModal = document.getElementById("btn-close-modal");
    if (btnCloseModal && modalOverlay) {
        btnCloseModal.addEventListener("click", () => modalOverlay.classList.remove("open"));
    }

    // Carousel scrolling
    window.scrollCarousel = function(id, direction) {
        const container = document.getElementById(id);
        if (container) {
            const scrollAmount = direction === 'next' ? 320 : -320;
            container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    }
}

// Timer for Flash Deals
function startCountdown() {
    let hours = 4;
    let minutes = 59;
    let seconds = 59;

    const timerVal = document.getElementById("timer-value");
    if (!timerVal) return;

    setInterval(() => {
        seconds--;
        if (seconds < 0) {
            seconds = 59;
            minutes--;
            if (minutes < 0) {
                minutes = 59;
                hours--;
                if (hours < 0) {
                    hours = 5; // Reset loop
                }
            }
        }
        timerVal.textContent = 
            `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }, 1000);
}

// Shopping Cart Actions
window.addToCart = function(productId) {
    const item = products.find(p => p.id === productId);
    if (!item) return;

    const existingItem = cart.find(i => i.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...item, quantity: 1 });
    }

    showToast(`Added "${item.name}" to cart!`);
    updateCartDOM();
};

window.removeFromCart = function(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartDOM();
};

window.adjustQuantity = function(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        updateCartDOM();
    }
};

function updateCartDOM() {
    const cartCountBadge = document.getElementById("cart-count-badge");
    const cartItemsList = document.getElementById("cart-items-list");
    const cartSubtotal = document.getElementById("cart-subtotal");

    // Total Count
    const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
    if (cartCountBadge) {
        cartCountBadge.textContent = totalCount;
        cartCountBadge.style.display = totalCount > 0 ? "flex" : "none";
    }

    // List rendering
    if (cartItemsList) {
        if (cart.length === 0) {
            cartItemsList.innerHTML = `<div class="empty-cart-msg">Your shopping cart is empty.</div>`;
        } else {
            cartItemsList.innerHTML = cart.map(item => `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                    <div class="cart-item-info">
                        <h4 class="cart-item-title">${item.name}</h4>
                        <div class="cart-item-price">$${item.price}</div>
                        <div class="cart-item-qty">
                            <button class="qty-btn" onclick="adjustQuantity(${item.id}, -1)">-</button>
                            <span>${item.quantity}</span>
                            <button class="qty-btn" onclick="adjustQuantity(${item.id}, 1)">+</button>
                        </div>
                    </div>
                    <button class="qty-btn" style="border:none; color: #E11D48;" onclick="removeFromCart(${item.id})">&times;</button>
                </div>
            `).join("");
        }
    }

    // Subtotal
    const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    if (cartSubtotal) {
        cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
    }
}

// Open Quick View Modal
window.openQuickView = function(productId) {
    const item = products.find(p => p.id === productId);
    if (!item) return;

    const modalOverlay = document.getElementById("modal-overlay");
    const modalContent = document.getElementById("modal-dynamic-content");

    if (modalOverlay && modalContent) {
        modalContent.innerHTML = `
            <div class="modal-content-grid">
                <div class="modal-gallery">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="modal-details">
                    <span class="card-brand">${item.brand}</span>
                    <h2>${item.name}</h2>
                    <div class="modal-price-row">
                        <span class="current-price" style="font-size: 1.8rem; color: var(--accent);">$${item.price}</span>
                        ${item.oldPrice ? `<span class="old-price" style="font-size: 1.2rem;">$${item.oldPrice}</span>` : ''}
                    </div>
                    <p class="modal-desc">
                        Experience high premium luxury goods from the digital shopping mall department. Handcrafted, curated layouts built for immersive user experiences. Get free delivery above $50.
                    </p>
                    <button class="btn-premium" style="width: 100%; justify-content: center; background-color: var(--primary); color: var(--secondary);" onclick="addToCart(${item.id})">
                        Add to Cart
                    </button>
                </div>
            </div>
        `;
        modalOverlay.classList.add("open");
    }
};

// Info Pages Data
const infoPages = {
    about: {
        title: "About Atrium Mall",
        content: `
            <div style="font-family: var(--font-body); line-height: 1.8;">
                <p style="font-size: 1.1rem; margin-bottom: 16px; font-weight: 600; color: var(--primary);">Welcome to the future of digital retail curation.</p>
                <p style="margin-bottom: 16px;">Atrium Mall is a premium online shopping destination, designed to replicate the immersive, department-by-department browsing experience of luxury physical shopping galleries within a lightning-fast digital storefront.</p>
                <p style="margin-bottom: 16px;">Founded in 2026, our mission is to unite global design aesthetics, certified electronics, home concepts, and niche collections under a single digital roof, removing the visual fatigue of standard spreadsheet-like online grids.</p>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 24px;">
                    <div style="background: var(--bg-main); padding: 16px; border-radius: 8px;">
                        <h4 style="font-family: var(--font-heading); color: var(--accent); margin-bottom: 8px;">Curated Brands</h4>
                        <p style="font-size: 0.85rem;">Only authorized luxury boutiques and verified labels are selected for our department floors.</p>
                    </div>
                    <div style="background: var(--bg-main); padding: 16px; border-radius: 8px;">
                        <h4 style="font-family: var(--font-heading); color: var(--accent); margin-bottom: 8px;">Seamless Logistics</h4>
                        <p style="font-size: 0.85rem;">Integrated floor packages and white-glove courier dispatch options.</p>
                    </div>
                </div>
            </div>
        `
    },
    contact: {
        title: "Contact & Concierge Support",
        content: `
            <div style="font-family: var(--font-body); line-height: 1.8;">
                <p style="margin-bottom: 16px;">Our digital concierge desk is available 24/7 to assist with order status, floor styling consultations, boutique inquiries, and package tracking.</p>
                <form onsubmit="event.preventDefault(); showToast('Your inquiry has been submitted to Atrium Concierge.'); document.getElementById('btn-close-modal').click();" style="display: flex; flex-direction: column; gap: 12px; margin-top: 16px;">
                    <div>
                        <label style="display: block; font-size: 0.8rem; font-weight: 700; margin-bottom: 4px;">YOUR NAME</label>
                        <input type="text" required style="width: 100%; padding: 10px; border: 1px solid var(--border-color); border-radius: 6px;">
                    </div>
                    <div>
                        <label style="display: block; font-size: 0.8rem; font-weight: 700; margin-bottom: 4px;">EMAIL ADDRESS</label>
                        <input type="email" required style="width: 100%; padding: 10px; border: 1px solid var(--border-color); border-radius: 6px;">
                    </div>
                    <div>
                        <label style="display: block; font-size: 0.8rem; font-weight: 700; margin-bottom: 4px;">HOW CAN WE HELP?</label>
                        <textarea required rows="4" style="width: 100%; padding: 10px; border: 1px solid var(--border-color); border-radius: 6px; resize: none;"></textarea>
                    </div>
                    <button type="submit" class="btn-checkout" style="margin-top: 8px;">Submit Message</button>
                </form>
            </div>
        `
    },
    returns: {
        title: "Refund & Return Policy",
        content: `
            <div style="font-family: var(--font-body); line-height: 1.8;">
                <p style="font-weight: 600; margin-bottom: 16px; color: var(--primary);">At Atrium Mall, we stand behind the design and quality of all showcased floor goods.</p>
                <h4 style="font-family: var(--font-heading); font-size: 1rem; margin-top: 16px; margin-bottom: 8px;">30-Day Online Return Guarantee</h4>
                <p style="margin-bottom: 16px;">You can request a full refund or exchange for any item within 30 days of shipment delivery. Items must remain in their original packaging, unused, with designer security tags attached.</p>
                <h4 style="font-family: var(--font-heading); font-size: 1rem; margin-top: 16px; margin-bottom: 8px;">Simple Refund Processing</h4>
                <p style="margin-bottom: 16px;">Once our central receiving hub reviews and approves your return package, your refund is instantly dispatched back to your original payment method (Visa, Mastercard, Amex, Apple Pay) within 3-5 business days.</p>
                <p style="background: rgba(255, 107, 0, 0.05); padding: 12px; border-left: 3px solid var(--accent); font-size: 0.85rem; border-radius: 4px;"><strong>Note:</strong> Flash deal items marked as "Special Boutique Clearance" are eligible for exchange or store credit only.</p>
            </div>
        `
    },
    privacy: {
        title: "Privacy & Terms of Service",
        content: `
            <div style="font-family: var(--font-body); line-height: 1.8; max-height: 400px; overflow-y: auto; padding-right: 8px;">
                <p style="font-weight: 600; margin-bottom: 16px; color: var(--primary);">Your digital security and privacy are of utmost importance at Atrium Mall.</p>
                <h4 style="font-family: var(--font-heading); font-size: 1rem; margin-top: 16px; margin-bottom: 8px;">1. Terms of Service</h4>
                <p style="margin-bottom: 16px; font-size: 0.85rem; color: var(--text-muted);">By visiting and browsing our virtual mall floors, you agree to access products for personal use and mock-transaction tests only. All graphics, product assets, and design concepts are protected intellectual property.</p>
                <h4 style="font-family: var(--font-heading); font-size: 1rem; margin-top: 16px; margin-bottom: 8px;">2. Privacy Policy & Cookie Preferences</h4>
                <p style="margin-bottom: 16px; font-size: 0.85rem; color: var(--text-muted);">We collect necessary details (billing, cart listings, and checkout contact entries) strictly to fulfill and optimize your online shopping experience. We never sell your database registries to third parties.</p>
                <h4 style="font-family: var(--font-heading); font-size: 1rem; margin-top: 16px; margin-bottom: 8px;">3. Data Encryption Standards</h4>
                <p style="margin-bottom: 16px; font-size: 0.85rem; color: var(--text-muted);">Payment portals are protected by 256-bit Secure Socket Layer (SSL) setups to ensure maximum fraud mitigation.</p>
            </div>
        `
    }
};

window.openInfoPage = function(pageKey) {
    const page = infoPages[pageKey];
    if (!page) return;

    const modalOverlay = document.getElementById("modal-overlay");
    const modalContent = document.getElementById("modal-dynamic-content");

    if (modalOverlay && modalContent) {
        modalContent.innerHTML = `
            <div style="padding: 8px;">
                <h2 style="font-family: var(--font-heading); font-size: 1.8rem; margin-bottom: 20px; border-bottom: 2px solid var(--accent); padding-bottom: 12px; color: var(--primary);">${page.title}</h2>
                <div>${page.content}</div>
            </div>
        `;
        modalOverlay.classList.add("open");
    }
};

// Wishlist interaction
window.toggleWishlist = function(productId) {

    const item = products.find(p => p.id === productId);
    if (!item) return;

    const index = wishlist.indexOf(productId);
    if (index > -1) {
        wishlist.splice(index, 1);
        showToast(`Removed "${item.name}" from wishlist.`);
    } else {
        wishlist.push(productId);
        showToast(`Saved "${item.name}" to wishlist.`);
    }
};

// Show system interactive notifications toast
function showToast(message) {
    const container = document.getElementById("toast-container");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="18" height="18"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
        <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = "slideOut 0.3s forwards";
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}
