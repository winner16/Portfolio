// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Initialize all components
    themeToggle();
    typedText();
    mobileMenu();
});

// Dark & Light Mode
function themeToggle() {
    const themeToggle = document.querySelector("#themeToggle");
    if (!themeToggle) return;

    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);

    themeToggle.addEventListener("click", function() {
        const newTheme = document.body.dataset.theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
    });
}

function setTheme(theme) {
    document.body.dataset.theme = theme;
    localStorage.setItem("theme", theme);
    particlesJavaScript();
}

// Mobile Menu
function mobileMenu() {
    const mobileMenu = document.querySelector("#mobileMenu");
    const nav = document.querySelector("nav");
    const navLinksItems = document.querySelectorAll(".nav-links a");

    mobileMenu.addEventListener("click", function (e) {
        nav.classList.toggle("active");
        mobileMenu.innerHTML = nav.classList.contains("active") ? '<i class="las la-times"></i>' : '<i class="las la-bars"></i>';
        e.stopPropagation();
    });

    navLinksItems.forEach(link => {
        link.addEventListener("click", function () {
            nav.classList.remove("active");
            mobileMenu.innerHTML = '<i class="las la-bars"></i>';
        });
    });

    document.addEventListener("click", function (e) {
        if (!nav.contains(e.target) && !mobileMenu.contains(e.target)) {
            nav.classList.remove("active");
            mobileMenu.innerHTML = '<i class="las la-bars"></i>';
        }
    });
}

// Typed.js
function typedText() {
    const typingElement = document.querySelector("#typing-text");
    if (!typingElement) return;

    if (typingElement && typeof Typed !== "undefined") {
        new Typed(typingElement, {
            strings: ['Full Stack Developer', 'UI UX Designer'],
            typeSpeed: 70,
            backSpeed: 40,
            backDelay: 1500,
            startDelay: 1000,
            loop: true,
        });
    } else {
        console.warn("Typed.js is not loaded or typing element not found");
    }
}

