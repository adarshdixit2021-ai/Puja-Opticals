// ===== APPOINTMENT BOOKING via WHATSAPP =====

const WA_NUMBER = "919555860408";

// Set minimum date to today
document.addEventListener('DOMContentLoaded', () => {
    const dateInput = document.getElementById('date');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.min = today;
        dateInput.value = today;
    }
});

function bookAppointment(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value.trim();
    
    // Validate phone (10 digits)
    if (!/^[0-9]{10}$/.test(phone)) {
        alert('⚠️ Please enter a valid 10-digit phone number');
        return;
    }
    
    // Format date nicely
    const formattedDate = new Date(date).toLocaleDateString('en-IN', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    const waMessage = `Hello *Puja Opticals* 👓

I want to book an *Eye Test Appointment*:

👤 *Name:* ${name}
📞 *Phone:* +91 ${phone}
📅 *Date:* ${formattedDate}
🕐 *Time:* ${time}
🔬 *Service:* ${service}
${message ? `📝 *Note:* ${message}` : ''}

📍 *Shop:* Mohanlalganj, Lucknow

Please confirm my appointment. Thank you! 🙏`;
    
    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(waMessage)}`;
    
    // Show confirmation
    if (confirm(`✅ Confirm Booking:\n\nName: ${name}\nDate: ${formattedDate}\nTime: ${time}\nService: ${service}\n\nClick OK to send via WhatsApp.`)) {
        window.open(url, '_blank');
        
        // Reset form after sending
        setTimeout(() => {
            document.getElementById('appointmentForm').reset();
            const today = new Date().toISOString().split('T')[0];
            document.getElementById('date').value = today;
        }, 500);
    }
}
