// ===== FRAME GUIDE - Recommendations by Face Shape =====

const frameGuide = {
    round: {
        title: "Best Frames for Round Face",
        description: "Round faces have soft curves with similar width and length. To add structure and definition, choose frames with angular and rectangular shapes. Avoid round frames as they can make your face appear rounder.",
        recommended: ["Rectangle", "Square", "Wayfarer", "Cat Eye", "Geometric"],
        avoid: ["Round", "Oval", "Small frames"],
        image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=500"
    },
    oval: {
        title: "Best Frames for Oval Face",
        description: "Oval faces are considered the most balanced face shape. Lucky you! Most frame styles work well with an oval face. Try frames that are as wide as the broadest part of your face.",
        recommended: ["Aviator", "Square", "Rectangle", "Round", "Cat Eye", "Wayfarer"],
        avoid: ["Oversized frames"],
        image: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=500"
    },
    square: {
        title: "Best Frames for Square Face",
        description: "Square faces have a strong jawline and broad forehead. Soften these features with round or oval frames. Curved frames will balance your strong angles beautifully.",
        recommended: ["Round", "Oval", "Aviator", "Cat Eye", "Browline"],
        avoid: ["Square", "Rectangular", "Geometric"],
        image: "https://images.unsplash.com/photo-1602699269437-cb288917b78d?w=500"
    },
    heart: {
        title: "Best Frames for Heart Face",
        description: "Heart-shaped faces are wider at the forehead and narrow at the chin. Balance with frames that are wider at the bottom. Light-colored or rimless frames work great.",
        recommended: ["Round", "Oval", "Aviator", "Bottom-heavy frames", "Rimless"],
        avoid: ["Cat Eye", "Top-heavy frames", "Decorative tops"],
        image: "https://images.unsplash.com/photo-1577803645773-f96470509666?w=500"
    },
    long: {
        title: "Best Frames for Long/Oblong Face",
        description: "Long faces are longer than they are wide. Add width with oversized or decorative frames. Tall frames with strong horizontal lines can make your face appear shorter.",
        recommended: ["Oversized", "Wayfarer", "Square", "Round", "Decorative temples"],
        avoid: ["Small frames", "Narrow frames", "Rectangular"],
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500"
    }
};

function showFaceShape(shape, btn) {
    // Update active button
    document.querySelectorAll('.face-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    const data = frameGuide[shape];
    const container = document.getElementById('recommendation');
    
    container.innerHTML = `
        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:30px; align-items:center;">
            <div>
                <h4>${data.title}</h4>
                <p>${data.description}</p>
                
                <div style="margin-top:20px;">
                    <strong style="color:#10b981;">✅ Recommended Styles:</strong>
                    <div class="frame-tags">
                        ${data.recommended.map(s => `<span>${s}</span>`).join('')}
                    </div>
                </div>
                
                <div style="margin-top:20px;">
                    <strong style="color:#ef4444;">❌ Avoid:</strong>
                    <div class="frame-tags">
                        ${data.avoid.map(s => `<span style="color:#ef4444; border-color:#ef4444;">${s}</span>`).join('')}
                    </div>
                </div>
                
                <a href="products.html" style="display:inline-block; margin-top:25px; padding:12px 25px; background:#1e3a8a; color:white; border-radius:8px; font-weight:600;">
                    Shop Recommended Frames →
                </a>
            </div>
            <div>
                <img src="${data.image}" alt="${shape}" style="width:100%; border-radius:12px; box-shadow:0 10px 30px rgba(0,0,0,0.1);">
            </div>
        </div>
    `;
    
    // Responsive fix
    if (window.innerWidth < 768) {
        container.querySelector('div').style.gridTemplateColumns = '1fr';
    }
}

// Show default (round) on load
document.addEventListener('DOMContentLoaded', () => {
    const firstBtn = document.querySelector('.face-btn');
    showFaceShape('round', firstBtn);
});
