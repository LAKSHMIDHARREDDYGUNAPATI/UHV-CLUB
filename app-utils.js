/**
 * App Detection & Utils
 * Handles hiding the download button when viewed inside the Android app
 * and common UI interactions like the mobile menu.
 */
document.addEventListener('DOMContentLoaded', () => {
    // 1. Check for custom User-Agent set by Android App
    if (navigator.userAgent.includes("MyWebsiteAndroidApp")) {
        document.body.classList.add('is-app');
        console.log("App detected: MyWebsiteAndroidApp");
    }

    // 2. Mobile Menu Toggle Logic
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });

        // Close menu when clicking anywhere else
        document.addEventListener('click', (e) => {
            if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
                navLinks.classList.remove('active');
            }
        });
    }
    // 3. Auto-update Current Year
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});
