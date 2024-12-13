// Mobile Menu Toggle
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Portfolio Details Popup
function openPopup(title, description) {
    const popup = document.getElementById('detailsPopup');
    const popupTitle = document.getElementById('popupTitle');
    const popupDescription = document.getElementById('popupDescription');

    popupTitle.textContent = title;
    popupDescription.textContent = description;
    popup.style.display = 'flex';
}

function closePopup() {
    const popup = document.getElementById('detailsPopup');
    popup.style.display = 'none';
}

// Form Validation
document.getElementById('portfolioContactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    let isValid = true;

    // Name validation
    if (name.value.trim() === '') {
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('nameError').style.display = 'none';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('emailError').style.display = 'none';
    }

    // Message validation
    if (message.value.trim() === '') {
        document.getElementById('messageError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('messageError').style.display = 'none';
    }

    // Local Storage Preservation
    if (isValid) {
        localStorage.setItem('contactFormName', name.value);
        localStorage.setItem('contactFormEmail', email.value);
        localStorage.setItem('contactFormMessage', message.value);

        alert('Message sent successfully!');
        this.reset();
    }
});

// Restore Form Data from Local Storage on Page Load
window.onload = function () {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    name.value = localStorage.getItem('contactFormName') || '';
    email.value = localStorage.getItem('contactFormEmail') || '';
    message.value = localStorage.getItem('contactFormMessage') || '';
}