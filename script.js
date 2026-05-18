document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Gestion de la Navbar au défilement
    const navbar = document.getElementById("navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // 2. Menu mobile Hamburger
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinksList = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {
        navLinksList.classList.toggle("show");
        const icon = menuToggle.querySelector("i");
        if(navLinksList.classList.contains("show")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-times");
        } else {
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");
        }
    });

    // Fermer le menu si on clique sur un lien (sur mobile)
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinksList.classList.remove("show");
            menuToggle.querySelector("i").classList.remove("fa-times");
            menuToggle.querySelector("i").classList.add("fa-bars");
        });
    });

    // 3. Highlight du menu actif (Scroll Spy)
    const sections = document.querySelectorAll("section, header");
    const navLinks = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    });

    // 4. API Intersection Observer pour des animations fluides au scroll
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll(".reveal-up, .reveal-left, .reveal-right");
    revealElements.forEach(el => observer.observe(el));
});
