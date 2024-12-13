// Mobile toggle
function toggleMobileMenu() {
    const navLinks = document.getElementById('navLink');
    navLinks.classList.toggle('active');
}

// Open the Popup
function openPopup(title, description) {
    const popUp = document.getElementById('detailsPopup');
    const popTitle = document.getElementById('popupTitle');
    const popDescription = document.getElementById('popupDescription');

    popTitle.textContent = title;
    popDescription.textContent = description;
    popUp.style.display = 'flex';
}

function closePopup() {
    const close = document.getElementById('detailsPopup');
    close.style.display = 'none';
}

// Add event listeners
document.getElementById('portfolioContactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    const isValid = true;
    // Validate
    if (name.value.trim() === "") {
        const nameError = document.getElementById('nameError');
        nameError.style.display = 'block';
        isValid = false;
    } else { 
        nameError.style.display = 'none';
    }

    const emailRegex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;
    if (!emailRegex.test(email.value)) { 
        const emailError = document.getElementById('emailError');
        emailError.style.display = 'block';
        isValid = false;
    } else {
        emailError.style.display = 'none';
    }

    if (message.value.trim() === "") {
        const messageError = document.getElementById('messageError');
        messageError.style.display = 'block';
        isValid = false;
    } else { 
        messageError.style.display = 'none';
    }

    // Save to local storage
    if (isValid) { 
        localStorage.setItem('nameDetails', name.value);
        localStorage.setItem('emailDetails', email.value);
        localStorage.setItem('messageDetails', message.value);

        alert('Form submitted successfully!');

        name.value = "";
        email.value = "";
        message.value = "";

        updateData();
    }
});

function updateData() { 
    const nameDetails = localStorage.getItem('nameDetails');
    const emailDetails = localStorage.getItem('emailDetails');
    const messageDetails = localStorage.getItem('messageDetails');

    if (nameDetails && emailDetails && messageDetails) {
        const contactDetails = document.getElementById('storedDataContainer');
        contactDetails.innerHTML = `<p><strong>${nameDetails}</strong></p>
    <p><strong>${emailDetails}</strong></p>
    <p><strong>${messageDetails}</strong></p>`
    } else {
        contactDetails.innerHTML = `<p>No data submitted yet.</p>`
    }
}