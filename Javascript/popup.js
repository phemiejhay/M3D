
document.addEventListener('DOMContentLoaded', function () {
    const openPopupButton = document.getElementById('openPopup6');
    const closePopupButton = document.getElementById('closePopup6');
    const popupOverlay = document.getElementById('popupOverlay6');

    // Open the popup menu
    openPopupButton.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default anchor behavior
        popupOverlay.style.display = 'block'; // Show the popup
    });

    // Close the popup menu
    closePopupButton.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default anchor behavior
        popupOverlay.style.display = 'none'; // Hide the popup
    });

    // Optional: Close the popup when clicking outside of it
    popupOverlay.addEventListener('click', function (event) {
        if (event.target === popupOverlay) {
            popupOverlay.style.display = 'none'; // Hide the popup
        }
    });
});