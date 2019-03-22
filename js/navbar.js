// Store the navigation button and links sections
const navButton = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-menu");
// Run when the toggle button is clicked
navButton.onclick = function() {
    // Check if the links are currently being displayed or not
    if (navLinks.classList.contains("show")) {
        navLinks.classList.remove("show");
    } else {
        navLinks.classList.add("show");
    }
}