// ===== FORM HANDLING SCRIPT =====
// Handles quote and contact form submissions

// Form submission handler
document.addEventListener('DOMContentLoaded', function() {
    // Quote Form Handler
    const quoteForm = document.getElementById('quoteForm');
    if (quoteForm) {
        quoteForm.addEventListener('submit', handleQuoteSubmit);
        
        // Color selection
        const colorOptions = document.querySelectorAll('.color-option');
        colorOptions.forEach(option => {
            option.addEventListener('click', function() {
                colorOptions.forEach(opt => opt.classList.remove('selected'));
                this.classList.add('selected');
                
                const selectedColor = this.getAttribute('data-color');
                document.getElementById('selectedColors').value = selectedColor;
            });
        });
    }
    
    // Contact Form Handler
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }
});

// Handle Quote Form Submission
function handleQuoteSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    
    // Validate required fields
    const requiredFields = ['fullName', 'phone', 'email', 'location', 'projectType', 'areaSize'];
    for (const field of requiredFields) {
        if (!formData.get(field)) {
            showFormError(`Please fill in the ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}`);
            return;
        }
    }
    
    // Collect data
    const quoteData = {
        type: 'quote_request',
        timestamp: new Date().toISOString(),
        fullName: formData.get('fullName'),
        phone: formData.get('phone'),
        email: formData.get('email'),
        location: formData.get('location'),
        projectType: formData.get('projectType'),
        areas: formData.getAll('areas'),
        areaSize: formData.get('areaSize'),
        budget: formData.get('budget'),
        tileTypes: formData.getAll('tileTypes'),
        colors: formData.get('selectedColors'),
        timeline: formData.get('timeline'),
        services: formData.getAll('services'),
        message: formData.get('message'),
        referenceImages: formData.get('referenceImages') ? 'attached' : 'none'
    };
    
    // Show loading state
    const submitBtn = form.querySelector('.submit-btn');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    
    // Simulate form submission (replace with actual backend)
    setTimeout(() => {
        // Save to localStorage (for demo)
        saveFormSubmission(quoteData);
        
        // Send via email/WhatsApp (implementation depends on backend)
        sendQuoteViaWhatsApp(quoteData);
        
        // Show success message
        showFormSuccess('Thank you! Your quote request has been submitted. We will contact you within 24 hours.');
        
        // Reset form
        form.reset();
        document.querySelectorAll('.color-option').forEach(opt => opt.classList.remove('selected'));
        document.getElementById('selectedColors').value = '';
        
        // Reset button
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
    }, 1500);
}

// Handle Contact Form Submission
function handleContactSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    
    // Validate required fields
    const requiredFields = ['contactName', 'contactPhone', 'contactEmail', 'subject', 'contactMessage'];
    for (const field of requiredFields) {
        if (!formData.get(field)) {
            showFormError(`Please fill in the ${field.replace('contact', '').toLowerCase()}`);
            return;
        }
    }
    
    // Collect data
    const contactData = {
        type: 'contact_request',
        timestamp: new Date().toISOString(),
        name: formData.get('contactName'),
        phone: formData.get('contactPhone'),
        email: formData.get('contactEmail'),
        subject: formData.get('subject'),
        message: formData.get('contactMessage'),
        newsletter: formData.get('newsletter') === 'on'
    };
    
    // Show loading state
    const submitBtn = form.querySelector('.submit-btn');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
        // Save to localStorage
        saveFormSubmission(contactData);
        
        // Send notification
        sendContactNotification(contactData);
        
        // Show success message
        showFormSuccess('Thank you for your message! We will get back to you soon.');
        
        // Reset form
        form.reset();
        
        // Reset button
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
    }, 1500);
}

// Save form submission to localStorage (for demo)
function saveFormSubmission(data) {
    const submissions = JSON.parse(localStorage.getItem('twyfordSubmissions')) || [];
    submissions.push(data);
    localStorage.setItem('twyfordSubmissions', JSON.stringify(submissions));
    
    // Log to console (for debugging)
    console.log('Form submission saved:', data);
}

// Send quote via WhatsApp
function sendQuoteViaWhatsApp(quoteData) {
    const phoneNumber = '254712345678'; // Your WhatsApp business number
    
    // Format message
    let message = `*New Quote Request - Twyford Tiles*%0A%0A`;
    message += `*Name:* ${quoteData.fullName}%0A`;
    message += `*Phone:* ${quoteData.phone}%0A`;
    message += `*Email:* ${quoteData.email}%0A`;
    message += `*Location:* ${quoteData.location}%0A`;
    message += `*Project Type:* ${quoteData.projectType}%0A`;
    message += `*Area Size:* ${quoteData.areaSize} sqm%0A`;
    message += `*Areas:* ${quoteData.areas.join(', ')}%0A`;
    message += `*Budget:* ${quoteData.budget || 'Not specified'}%0A`;
    message += `*Timeline:* ${quoteData.timeline || 'Not specified'}%0A`;
    
    if (quoteData.message) {
        message += `%0A*Additional Details:*%0A${quoteData.message}`;
    }
    
    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    
    // Open in new tab (optional)
    // window.open(whatsappURL, '_blank');
    
    return whatsappURL;
}

// Send contact notification
function sendContactNotification(contactData) {
    // This would typically connect to your backend
    // For demo, we'll just log it
    console.log('Contact notification:', contactData);
    
    // You could integrate with:
    // 1. Email service (SendGrid, Mailgun, etc.)
    // 2. CRM system
    // 3. Notification service
    // 4. Database
}

// Show form success message
function showFormSuccess(message) {
    const notification = document.createElement('div');
    notification.className = 'form-notification success';
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

// Show form error message
function showFormError(message) {
    const notification = document.createElement('div');
    notification.className = 'form-notification error';
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-exclamation-circle"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 30px;
        background: #e74c3c;
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

// Add CSS for form notifications
const formStyles = document.createElement('style');
formStyles.textContent = `
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
    
    /* Form specific styles */
    .form-container {
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 40px;
        max-width: 1400px;
        margin: 0 auto;
    }
    
    .form-header {
        grid-column: 1 / -1;
        text-align: center;
        margin-bottom: 30px;
    }
    
    .quote-form {
        background: white;
        padding: 30px;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.05);
    }
    
    .form-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
    }
    
    .form-group {
        margin-bottom: 25px;
    }
    
    .form-group label {
        display: block;
        margin-bottom: 8px;
        color: #2c3e50;
        font-weight: 500;
    }
    
    .form-group input,
    .form-group select,
    .form-group textarea {
        width: 100%;
        padding: 12px 15px;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-family: 'Inter', sans-serif;
        font-size: 1rem;
        transition: all 0.3s;
    }
    
    .form-group input:focus,
    .form-group select:focus,
    .form-group textarea:focus {
        outline: none;
        border-color: #2c3e50;
        box-shadow: 0 0 0 3px rgba(44, 62, 80, 0.1);
    }
    
    .checkbox-group {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 10px;
    }
    
    .checkbox-label {
        display: flex;
        align-items: center;
        gap: 10px;
        cursor: pointer;
        padding: 8px;
        border-radius: 4px;
        transition: background 0.3s;
    }
    
    .checkbox-label:hover {
        background: #f8f9fa;
    }
    
    .checkbox-label input {
        display: none;
    }
    
    .checkmark {
        width: 20px;
        height: 20px;
        border: 2px solid #ddd;
        border-radius: 3px;
        position: relative;
        transition: all 0.3s;
    }
    
    .checkbox-label input:checked ~ .checkmark {
        background: #27ae60;
        border-color: #27ae60;
    }
    
    .checkmark::after {
        content: '';
        position: absolute;
        display: none;
        left: 6px;
        top: 2px;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
    }
    
    .checkbox-label input:checked ~ .checkmark::after {
        display: block;
    }
    
    .color-selection {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
    }
    
    .color-option {
        width: 40px;
        height: 40px;
        border-radius: 4px;
        cursor: pointer;
        border: 2px solid transparent;
        transition: all 0.3s;
    }
    
    .color-option:hover {
        transform: scale(1.1);
    }
    
    .color-option.selected {
        border-color: #2c3e50;
        box-shadow: 0 0 0 2px rgba(44, 62, 80, 0.2);
    }
    
    .file-hint {
        display: block;
        margin-top: 5px;
        color: #7f8c8d;
        font-size: 0.9rem;
    }
    
    .form-submit {
        text-align: center;
        margin-top: 30px;
    }
    
    .submit-btn {
        background: #27ae60;
        color: white;
        border: none;
        padding: 15px 40px;
        border-radius: 30px;
        font-size: 1.1rem;
        font-weight: 600;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        gap: 10px;
        transition: all 0.3s;
    }
    
    .submit-btn:hover {
        background: #219653;
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(39, 174, 96, 0.3);
    }
    
    .submit-btn:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }
    
    .form-note {
        margin-top: 15px;
        color: #7f8c8d;
        font-size: 0.9rem;
    }
    
    .form-note a {
        color: #2c3e50;
        text-decoration: none;
    }
    
    .form-note a:hover {
        text-decoration: underline;
    }
    
    .form-sidebar {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    
    .sidebar-card {
        background: white;
        padding: 25px;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.05);
    }
    
    .sidebar-card h3 {
        color: #2c3e50;
        margin-bottom: 15px;
        display: flex;
        align-items: center;
        gap: 10px;
    }
    
    .sidebar-card ul {
        list-style: none;
    }
    
    .sidebar-card li {
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        gap: 10px;
        color: #555;
    }
    
    .sidebar-card li i {
        color: #27ae60;
    }
    
    /* Contact form specific */
    .contact-form {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    
    .team-contact {
        display: grid;
        gap: 20px;
    }
    
    .team-member {
        padding: 15px;
        background: #f8f9fa;
        border-radius: 8px;
    }
    
    .team-member h4 {
        color: #2c3e50;
        margin-bottom: 5px;
    }
    
    .team-member p {
        color: #7f8c8d;
        font-size: 0.9rem;
        margin-bottom: 5px;
    }
    
    .faq-item {
        margin-bottom: 20px;
        padding-bottom: 20px;
        border-bottom: 1px solid #eee;
    }
    
    .faq-item:last-child {
        border-bottom: none;
    }
    
    .faq-item h4 {
        color: #2c3e50;
        margin-bottom: 8px;
    }
    
    .faq-item p {
        color: #7f8c8d;
        font-size: 0.95rem;
    }
    
    .view-all-faq {
        display: inline-block;
        color: #2c3e50;
        text-decoration: none;
        font-weight: 500;
        margin-top: 10px;
    }
    
    @media (max-width: 992px) {
        .form-container {
            grid-template-columns: 1fr;
        }
        
        .form-row {
            grid-template-columns: 1fr;
        }
    }
`;
document.head.appendChild(formStyles);