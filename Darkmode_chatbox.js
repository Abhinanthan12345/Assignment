// JavaScript code
document.addEventListener("DOMContentLoaded", function () {
    const lightModeStylesheet = document.getElementById("light-mode-chatsheet");
    const darkModeStylesheet = document.getElementById("dark-mode-chatsheet");
    const darkModeToggle = document.getElementById("dark-mode-toggle");

    // Check if the user has a preferred mode (e.g., based on system preferences)
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

    // Function to toggle between light and dark mode
    function toggleDarkMode() {
        if (lightModeStylesheet.getAttribute("media") === "screen") {
            lightModeStylesheet.setAttribute("media", "not screen");
            darkModeStylesheet.setAttribute("media", "screen");
        } else {
            lightModeStylesheet.setAttribute("media", "screen");
            darkModeStylesheet.setAttribute("media", "not screen");
        }
    }

    // Initialize the page with preferred mode or light mode
    if (prefersDarkMode) {
        toggleDarkMode();
    }

    // Toggle mode when the button is clicked
    darkModeToggle.addEventListener("click", toggleDarkMode);
});