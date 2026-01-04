/**
 * App Detection & Utils
 * Handles hiding the download button when viewed inside the Android app
 */
document.addEventListener('DOMContentLoaded', () => {
    // Check for custom User-Agent set by Android App
    if (navigator.userAgent.includes("MyWebsiteAndroidApp")) {
        document.body.classList.add('is-app');
        console.log("App detected: MyWebsiteAndroidApp");
    }
});

// For mobile menu toggle (common across all pages)
const setupMobileMenu = () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
};

setupMobileMenu();
