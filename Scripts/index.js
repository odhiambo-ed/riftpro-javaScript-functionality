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

