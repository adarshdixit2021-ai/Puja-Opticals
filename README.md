# 👓 Puja Opticals - Optical Store Website

A complete eyewear e-commerce website with WhatsApp ordering integration.

## 📍 Shop Details
- **Shop Name:** Puja Opticals
- **Address:** Mohanlalganj, Lucknow
- **WhatsApp Orders:** +91 95558 60408

---

## 📂 File Structure

```
puja-opticals/
│
├── index.html              # Home page (Hero, Categories, Brands, Services)
├── products.html           # Product listing with filters
├── product-detail.html     # Individual product page with prescription upload
├── appointment.html        # Eye test booking form
├── frame-guide.html        # Face shape based frame recommendations
│
├── css/
│   └── style.css           # All styles (responsive)
│
└── js/
    ├── products-data.js    # Product database (18 products)
    ├── products.js         # Filter & sort logic
    ├── product-detail.js   # Product detail page logic
    ├── appointment.js      # Appointment WhatsApp form
    ├── frame-guide.js      # Face shape recommendation engine
    └── main.js             # Common scripts
```

---

## ✨ Features Implemented

### ✅ Home Page (index.html)
- Hero section with attractive eyewear image
- 4 Category cards (Sunglasses, Eyeglasses, Contact Lenses, Kids)
- Top brand showcase (Ray-Ban, Oakley, Fastrack, etc.)
- Services section (Eye Test, Lens Fitting, Home Delivery, Warranty)

### ✅ Product Listing (products.html)
- 18 sample products across 4 categories
- **Filters:** Category, Gender, Color, Price Range
- **Sorting:** Low to High, High to Low
- URL-based pre-filtering (e.g., `products.html?cat=sunglasses`)
- Real-time filter using JavaScript `.filter()` method

### ✅ Product Detail (product-detail.html)
- Full specifications (size, material, color, warranty)
- **Lens Power/Prescription Upload** for eyeglasses & contact lenses
- WhatsApp order button with auto-generated message
- Direct call button

### ✅ Eye Test Appointment (appointment.html)
- Form with: Name, Phone, Date, Time, Service Type, Message
- Date picker (today onwards)
- 10 time slots from 10 AM to 8 PM
- 4 service types
- **All bookings sent directly to WhatsApp +91 95558 60408**

### ✅ Frame Guide (frame-guide.html)
- Interactive face shape selector (5 shapes)
- Frame recommendations for each face shape
- Frame size chart (Lens width, Bridge, Temple)

### ✅ WhatsApp Integration
- Floating WhatsApp button on every page
- All orders, queries, and appointments → WhatsApp
- Pre-formatted messages with product details
- Number: **+91 95558 60408**

### ✅ Responsive Design
- Works on Desktop, Tablet & Mobile
- Mobile-optimized navigation
- 2-column product grid on small screens

---

## 🚀 How to Use

### Run Locally:
1. Download/copy all files keeping the folder structure
2. Open `index.html` in any web browser
3. That's it! No server needed (pure HTML/CSS/JS)

### Host Online (Free):
- **GitHub Pages**: Upload to GitHub repo → Settings → Pages → Deploy
- **Netlify**: Drag & drop the `puja-opticals` folder to netlify.com
- **Vercel**: Connect GitHub repo to vercel.com

---

## 🔧 How to Customize

### Add/Edit Products:
Open `js/products-data.js` and modify the `products` array:
```javascript
{
    id: 19,
    name: "Your Product Name",
    brand: "Brand Name",
    category: "sunglasses",  // sunglasses/eyeglasses/contact/kids
    gender: "men",            // men/women/unisex/kids
    color: "black",
    price: 2000,
    oldPrice: 2500,
    image: "your-image-url.jpg",
    material: "Metal",
    size: "55-17-145",
    description: "Product description"
}
```

### Change WhatsApp Number:
Find and replace `919555860408` in all JS files.

### Change Shop Name/Address:
Edit `SHOP_NAME` and `SHOP_ADDRESS` in `js/products-data.js`.

---

## 📱 WhatsApp Order Flow

1. Customer clicks "Order Now" on any product
2. WhatsApp opens with pre-filled message containing:
   - Product name, brand, color, size, price
   - Shop name & address
   - Customer can add prescription file
3. Order goes directly to **+91 95558 60408**
4. You confirm availability & delivery on WhatsApp

---

## 🎨 Color Theme
- **Primary Blue:** #1e3a8a (Trust, Vision)
- **Gold/Orange:** #f59e0b (Premium feel)
- **Green:** #25d366 (WhatsApp)
- **Light:** #f9fafb (Clean background)

---

## 📞 Support
For any modifications or queries, contact: **+91 95558 60408**

---

**Made with ❤️ for Puja Opticals, Mohanlalganj, Lucknow**
