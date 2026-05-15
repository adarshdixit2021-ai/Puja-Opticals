// ===== PRODUCT DETAIL PAGE =====

function getProductId() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get('id'));
}

function renderProductDetail() {
    const id = getProductId();
    const p = products.find(x => x.id === id);
    const container = document.getElementById('product-detail');
    
    if (!p) {
        container.innerHTML = '<h2 style="text-align:center; grid-column:1/-1;">Product not found. <a href="products.html">Go back to shop</a></h2>';
        return;
    }
    
    const savings = p.oldPrice ? p.oldPrice - p.price : 0;
    const savingsPercent = p.oldPrice ? Math.round((savings / p.oldPrice) * 100) : 0;
    
    container.innerHTML = `
        <div class="img-section">
            <img src="${p.image}" alt="${p.name}">
        </div>
        <div class="details">
            <h2>${p.name}</h2>
            <p class="brand-name">Brand: <strong>${p.brand}</strong></p>
            
            <div class="price-block">
                <span class="now">₹${p.price.toLocaleString()}</span>
                ${p.oldPrice ? `<span class="was">₹${p.oldPrice.toLocaleString()}</span>` : ''}
                ${savings > 0 ? `<span class="save">Save ${savingsPercent}%</span>` : ''}
            </div>
            
            <p style="color:#666; line-height:1.7;">${p.description}</p>
            
            <div class="specs">
                <h4><i class="fas fa-info-circle"></i> Specifications</h4>
                <ul>
                    <li><strong>Category:</strong> <span>${p.category.charAt(0).toUpperCase() + p.category.slice(1)}</span></li>
                    <li><strong>Frame Material:</strong> <span>${p.material}</span></li>
                    <li><strong>Frame Size:</strong> <span>${p.size}</span></li>
                    <li><strong>Color:</strong> <span>${p.color.charAt(0).toUpperCase() + p.color.slice(1)}</span></li>
                    <li><strong>Gender:</strong> <span>${p.gender.charAt(0).toUpperCase() + p.gender.slice(1)}</span></li>
                    <li><strong>Warranty:</strong> <span>1 Year</span></li>
                </ul>
            </div>
            
            ${p.category === 'eyeglasses' || p.category === 'contact' ? `
            <div class="prescription-upload">
                <label><i class="fas fa-prescription"></i> Upload Your Eye Prescription (Optional)</label>
                <input type="file" id="prescription" accept="image/*,.pdf">
                <small>📌 Upload your eye power prescription (Parcha). PDF, JPG, PNG accepted. You can also send it directly on WhatsApp.</small>
            </div>
            ` : ''}
            
            <div class="order-buttons">
                <button class="wa-order-btn" onclick="orderProductDetail(${p.id})">
                    <i class="fab fa-whatsapp"></i> Order on WhatsApp
                </button>
                <button class="call-btn" onclick="window.location.href='tel:+919555860408'">
                    <i class="fas fa-phone"></i> Call Shop
                </button>
            </div>
            
            <p style="margin-top:20px; padding:15px; background:#e0f2fe; border-radius:8px; color:#075985;">
                <i class="fas fa-truck"></i> <strong>Free Home Delivery</strong> across Mohanlalganj area<br>
                <i class="fas fa-shield-alt"></i> <strong>1 Year Warranty</strong> on brand & lens
            </p>
        </div>
    `;
}

function orderProductDetail(id) {
    const p = products.find(x => x.id === id);
    if (!p) return;
    
    // Check if prescription is uploaded
    const fileInput = document.getElementById('prescription');
    const hasPrescription = fileInput && fileInput.files.length > 0;
    const prescriptionName = hasPrescription ? fileInput.files[0].name : '';
    
    let message = `Hello *${SHOP_NAME}* 👓

I want to ORDER this product:

📦 *Product:* ${p.name}
🏷️ *Brand:* ${p.brand}
🎨 *Color:* ${p.color}
📏 *Size:* ${p.size}
🧱 *Material:* ${p.material}
💰 *Price:* ₹${p.price.toLocaleString()}`;

    if (hasPrescription) {
        message += `\n\n📋 *Prescription File:* ${prescriptionName}\n_(I will send the file in the next message)_`;
    }
    
    message += `\n\n📍 *Shop:* ${SHOP_ADDRESS}\n\nPlease confirm:\n✅ Stock availability\n🚚 Delivery time\n💳 Payment options\n\nThank you!`;
    
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    
    if (hasPrescription) {
        setTimeout(() => {
            alert('✅ WhatsApp opened! Please attach the prescription file in your WhatsApp chat as a separate message.');
        }, 1000);
    }
}

document.addEventListener('DOMContentLoaded', renderProductDetail);
