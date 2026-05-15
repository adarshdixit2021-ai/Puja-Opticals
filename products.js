// ===== PRODUCT LISTING & FILTER LOGIC =====

let filteredProducts = [...products];

// Get URL params for pre-filter
function getURLCategory() {
    const params = new URLSearchParams(window.location.search);
    return params.get('cat');
}

// Render Products
function renderProducts(list) {
    const grid = document.getElementById('product-grid');
    const count = document.getElementById('result-count');
    
    if (list.length === 0) {
        grid.innerHTML = '<p style="text-align:center; padding:40px; grid-column:1/-1; color:#666;">😔 No products match your filters. Try clearing some filters.</p>';
        count.textContent = '0 products found';
        return;
    }
    
    count.textContent = `Showing ${list.length} product${list.length > 1 ? 's' : ''}`;
    
    grid.innerHTML = list.map(p => `
        <div class="product-card">
            <div class="img-wrap">
                ${p.badge ? `<span class="badge">${p.badge}</span>` : ''}
                <img src="${p.image}" alt="${p.name}" loading="lazy">
            </div>
            <div class="info">
                <h4>${p.name}</h4>
                <p class="brand">${p.brand}</p>
                <p class="price">
                    ₹${p.price.toLocaleString()}
                    ${p.oldPrice ? `<span class="old">₹${p.oldPrice.toLocaleString()}</span>` : ''}
                </p>
                <div class="btns">
                    <a href="product-detail.html?id=${p.id}" class="view-btn">View</a>
                    <button class="order-btn" onclick="orderOnWhatsApp(${p.id})">
                        <i class="fab fa-whatsapp"></i> Order
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Apply Filters
function applyFilters() {
    const selectedCats = [...document.querySelectorAll('.filter-cat:checked')].map(c => c.value);
    const selectedGenders = [...document.querySelectorAll('.filter-gender:checked')].map(c => c.value);
    const selectedColors = [...document.querySelectorAll('.filter-color:checked')].map(c => c.value);
    const priceFilter = document.querySelector('.filter-price:checked')?.value || 'all';
    
    filteredProducts = products.filter(p => {
        // Category filter
        if (selectedCats.length > 0 && !selectedCats.includes(p.category)) return false;
        
        // Gender filter
        if (selectedGenders.length > 0 && !selectedGenders.includes(p.gender)) return false;
        
        // Color filter
        if (selectedColors.length > 0 && !selectedColors.includes(p.color)) return false;
        
        // Price filter
        if (priceFilter !== 'all') {
            const [min, max] = priceFilter.split('-').map(Number);
            if (p.price < min || p.price > max) return false;
        }
        
        return true;
    });
    
    sortProducts();
}

// Sort Products
function sortProducts() {
    const sortBy = document.getElementById('sort').value;
    
    if (sortBy === 'low-high') {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'high-low') {
        filteredProducts.sort((a, b) => b.price - a.price);
    }
    
    renderProducts(filteredProducts);
}

// Clear Filters
function clearFilters() {
    document.querySelectorAll('.filter-cat, .filter-gender, .filter-color').forEach(c => c.checked = false);
    document.querySelector('.filter-price[value="all"]').checked = true;
    document.getElementById('sort').value = 'default';
    filteredProducts = [...products];
    renderProducts(filteredProducts);
}

// WhatsApp Order
function orderOnWhatsApp(productId) {
    const p = products.find(x => x.id === productId);
    if (!p) return;
    
    const message = `Hello *${SHOP_NAME}* 👓
    
I want to order this product:

📦 *Product:* ${p.name}
🏷️ *Brand:* ${p.brand}
🎨 *Color:* ${p.color}
💰 *Price:* ₹${p.price.toLocaleString()}
📏 *Size:* ${p.size}

Please confirm availability & delivery details.

Thank you!`;
    
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// Initialize on Page Load
document.addEventListener('DOMContentLoaded', () => {
    // Check URL for pre-selected category
    const urlCat = getURLCategory();
    if (urlCat) {
        const checkbox = document.querySelector(`.filter-cat[value="${urlCat}"]`);
        if (checkbox) checkbox.checked = true;
    }
    
    // Attach event listeners
    document.querySelectorAll('.filter-cat, .filter-gender, .filter-color, .filter-price').forEach(input => {
        input.addEventListener('change', applyFilters);
    });
    
    // Initial render
    applyFilters();
});
