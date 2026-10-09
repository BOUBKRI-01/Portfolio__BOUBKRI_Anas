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

    // 5. Basculement de langue FR / EN
    // Le français reste dans le HTML (source de vérité) ; seul l'anglais est défini ici.
    const DEFAULT_LANG = "fr";

    const cvFiles = {
        fr: { href: "CV_BOUBKRI_Anas.pdf",     download: "CV_PFE_Anas_BOUBKRI.pdf" },
        en: { href: "CV_Anas_BOUBKRI_EN.pdf",  download: "CV_Anas_BOUBKRI_EN.pdf" }
    };

    const en = {
        // Navigation
        "nav.home": "Home",
        "nav.about": "About",
        "nav.education": "Education",
        "nav.skills": "Skills",
        "nav.experience": "Experience",
        "nav.projects": "Projects",
        "nav.contact": "Contact",

        // Hero
        "hero.title": 'Hello, I\'m <span class="highlight">Anas Boubkri</span>',
        "hero.subtitle": "Work-Study Engineer at SEGULA Technologies | Automotive Engineer | Mechatronics & Embedded Systems",
        "hero.text": "Third-year engineering student at ENSA Berrechid, passionate about embedded technologies and industrial environments.",
        "hero.contact": "Contact me",
        "hero.cv": "Download CV",

        // About
        "about.title": "About Me",
        "about.text": "I am actively looking for a PFE (final-year project) internship to develop my technical and analytical skills. With a solid academic background in embedded systems and a passion for the automotive sector, I combine 3D design, programming and continuous improvement methods to deliver concrete solutions to industrial challenges.",

        // Education
        "edu.title": "Education",
        "edu.1.degree": "Engineering Degree",
        "edu.1.field": "Automotive and Digital Solutions",
        "edu.1.school": "National School of Applied Sciences (ENSA) - Berrechid",
        "edu.2.degree": "Professional Bachelor's Degree",
        "edu.2.field": "Electrotechnics, Instrumentation and Supervision of Intelligent Systems",
        "edu.2.school": "Higher School of Technology (EST) - Kenitra",
        "edu.3.degree": "University Diploma of Technology (DUT)",
        "edu.3.field": "Embedded Electronics for Automotive",
        "edu.3.school": "Higher School of Technology (EST) - Kenitra",
        "edu.4.degree": "Baccalaureate",
        "edu.4.field": "Physical Sciences",
        "edu.4.school": "ABDELLAH ALAROUI High School - Mohammedia",

        // Skills
        "skills.title": "My Skills",
        "skills.1.title": "Systems Engineering",
        "skills.1.text": "AUTOSAR architecture, SysML/UML modeling, MATLAB/Simulink, LabVIEW.",
        "skills.2.title": "Embedded Systems",
        "skills.2.text": "ESP32, STM32, Raspberry Pi, FPGA, C, Python, VHDL.",
        "skills.3.title": "Automation",
        "skills.3.text": "TIA Portal, Grafcet, Ladder, HMI, SCADA.",
        "skills.4.title": "Design & CAD",
        "skills.4.text": "Proteus, KiCad, EasyEDA, AutoCAD, DraftSight, CATIA V5, SolidWorks.",
        "skills.5.title": "Data Analysis",
        "skills.5.text": "Minitab, Excel, Power BI.",
        "skills.6.title": "Soft Skills",
        "skills.6.text": "Technical trainer (Udemy, YouTube), automotive content creator (Instagram, TikTok).",
        "skills.7.title": "Lean Management",
        "skills.7.text": "5S, VSM, Kaizen, PDCA, Poka-Yoke, visual management, WIP, Takt Time, continuous improvement.",

        // Experience
        "exp.title": "Professional Experience",
        "exp.segula": "SEGULA Technologies Casablanca",
        "exp.1.date": "September 2026 - Present",
        "exp.1.role": "Work-Study Design Release Engineer (DRE)",
        "exp.1.li1": "Analysis and management of automotive mechatronic components as part of the DRE / Component Owner – Serial Life track.",
        "exp.2.date": "July 2026 - August 2026",
        "exp.2.role": "PFA Intern: Development & Validation",
        "exp.2.li1": "Development of a multi-module ECU: schematic design, PCB routing, DRC validation, and 3D mechanical integration in CATIA V5.",
        "exp.3.date": "July 2025 - August 2025",
        "exp.3.role": "Manufacturing Engineering Intern",
        "exp.3.company": "NOVARES Kenitra",
        "exp.3.li1": "Factory layout optimization: 2D design, improvement proposals.",
        "exp.3.li2": "Preparation of work instruction sheets (continuous improvement).",
        "exp.3.li3": "3D design of a trim cutting machine in CATIA V5.",
        "exp.4.date": "April 2024 - June 2024",
        "exp.4.role": "PFE Intern (Automation Laboratory)",
        "exp.4.company": "EST Kenitra",
        "exp.4.li1": "Design and implementation of a SCADA system for managing electrical energy supplied by power meters.",
        "exp.5.date": "April 2023 - May 2023",
        "exp.5.role": "Intern at the Maintenance Technical Center",
        "exp.5.company": "ONCF Kenitra",
        "exp.5.li1": "Design and implementation of an embedded system for automatic locking of the tool store door.",
        "exp.6.date": "June 2022 - July 2022",
        "exp.6.role": "Maintenance Intern",
        "exp.6.company": "UNIVERS EMBALLAGES, Kenitra",
        "exp.6.li1": "Preventive and corrective maintenance of electric motors used for wire winding.",

        // Projects
        "proj.title": "Academic Projects",
        "proj.1.alt": "Obstacle detection",
        "proj.1.title": "AI Obstacle Detection",
        "proj.1.text": "Development of an automotive multi-class obstacle detection system using artificial intelligence.",
        "proj.2.alt": "AI chatbot",
        "proj.2.title": "Driver Assistance Chatbot",
        "proj.2.text": "Development of an intelligent AI chatbot designed specifically for real-time driver assistance.",
        "proj.3.alt": "BMS system",
        "proj.3.title": "BMS Design",
        "proj.3.text": "Hardware and software design and implementation of a Battery Management System (BMS) for electric vehicles.",
        "proj.4.alt": "PMSM motor",
        "proj.4.title": "PMSM Motor Control",
        "proj.4.text": "Implementation of an advanced control for a traction PMSM motor, simulated and validated in MATLAB/Simulink.",
        "proj.5.alt": "3D V4 engine",
        "proj.5.title": "3D Design: 4-Cylinder Engine",
        "proj.5.text": "Detailed 3D design and assembly of a four-cylinder engine using the industrial software CATIA V5.",
        "proj.6.alt": "ACC controller",
        "proj.6.title": "Adaptive Cruise Control (ACC)",
        "proj.6.text": "Implementation and tuning of an adaptive cruise control (ACC) system to improve safety and autonomous driving.",

        // Contact & footer
        "contact.title": "Contact Me",
        "contact.text": "I am looking for a PFE internship. Feel free to reach out via my social networks or by email:",
        "contact.phone": "Phone",
        "footer.text": "&copy; 2026 Anas Boubkri. All rights reserved."
    };

    const translations = { en };

    // Sauvegarde des textes français d'origine, lus directement dans le HTML
    const original = {};
    const textEls = document.querySelectorAll("[data-i18n]");
    const altEls = document.querySelectorAll("[data-i18n-alt]");
    const titleEls = document.querySelectorAll("[data-i18n-title]");

    textEls.forEach(el => { original[el.dataset.i18n] = el.innerHTML; });
    altEls.forEach(el => { original[el.dataset.i18nAlt] = el.getAttribute("alt"); });
    titleEls.forEach(el => { original[el.dataset.i18nTitle] = el.getAttribute("title"); });

    const langButtons = document.querySelectorAll(".lang-btn");
    const cvLink = document.getElementById("cv-link");

    function t(lang, key) {
        if (lang !== "fr" && translations[lang] && translations[lang][key] !== undefined) {
            return translations[lang][key];
        }
        return original[key];
    }

    function setLanguage(lang) {
        if (lang !== "fr" && !translations[lang]) lang = DEFAULT_LANG;

        textEls.forEach(el => { el.innerHTML = t(lang, el.dataset.i18n); });
        altEls.forEach(el => { el.setAttribute("alt", t(lang, el.dataset.i18nAlt)); });
        titleEls.forEach(el => { el.setAttribute("title", t(lang, el.dataset.i18nTitle)); });

        // CV correspondant à la langue
        if (cvLink) {
            cvLink.setAttribute("href", cvFiles[lang].href);
            cvLink.setAttribute("download", cvFiles[lang].download);
        }

        // État du sélecteur
        langButtons.forEach(btn => {
            const isActive = btn.dataset.lang === lang;
            btn.classList.toggle("active", isActive);
            btn.setAttribute("aria-pressed", isActive);
        });

        document.documentElement.lang = lang;

        try { localStorage.setItem("portfolio-lang", lang); } catch (e) { /* stockage indisponible */ }
    }

    langButtons.forEach(btn => {
        btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
    });

    // Langue au chargement : choix précédent, sinon français
    let savedLang = DEFAULT_LANG;
    try { savedLang = localStorage.getItem("portfolio-lang") || DEFAULT_LANG; } catch (e) { /* ignore */ }
    if (savedLang !== DEFAULT_LANG) setLanguage(savedLang);
});
