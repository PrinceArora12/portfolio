document.addEventListener('DOMContentLoaded', () => {

    // Navigation toggle for mobile
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = hamburger.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close mobile menu when a link is clicked
    navLinksItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = hamburger.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });

    // Sticky Navbar & Active link highlighting
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {

        // Sticky nav styling
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 10, 15, 0.9)';
            navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
            navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.05)';
        } else {
            navbar.style.background = 'rgba(10, 10, 15, 0.7)';
            navbar.style.boxShadow = 'none';
            navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.08)';
        }

        // Active link highlighting
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinksItems.forEach(link => {
            link.classList.remove('active');

            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Reveal elements on scroll
    const revealElements = document.querySelectorAll('.reveal');

    const reveal = () => {

        const windowHeight = window.innerHeight;
        const elementVisible = 150;

        revealElements.forEach(element => {

            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            }

        });

    };

    window.addEventListener('scroll', reveal);

    // Trigger once on load
    reveal();

    // Contact Form Demo
    const form = document.querySelector('.contact-form form');

    if (form) {

        form.addEventListener('submit', (e) => {

            e.preventDefault();

            const btn = form.querySelector('button');
            const originalText = btn.textContent;

            btn.textContent = 'Message Sent!';
            btn.style.background = '#10b981';
            btn.style.boxShadow = '0 4px 15px rgba(16, 185, 129, 0.4)';

            form.reset();

            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.background = '';
                btn.style.boxShadow = '';
            }, 3000);

        });

    }

    // =====================================================
    // Typing Animation for About Section
    // =====================================================

    // =====================================================
    // Typing Animation for About Section
    // =====================================================

    const aboutTitles = [
        "Computer Science Graduate",
        "Data Analytics Enthusiast",
        "AI & Business Intelligence Explorer"
    ];

    const aboutBios = [
        "I graduated from Lovely Professional University with a strong passion for data analytics, artificial intelligence, and business intelligence.",
        "I enjoy transforming raw datasets into meaningful insights using Python, data visualization, and analytical techniques.",
        "My experience includes AI-based applications, exploratory data analysis, and building dashboards that support data-driven decisions."
    ];

    const aboutTitleEl = document.getElementById("about-typing-title");
    const aboutBioEl = document.getElementById("about-typing-bio");

    let aboutTitleIndex = 0;

    function typeText(element, text, speed) {
        return new Promise(resolve => {
            let i = 0;
            element.textContent = "";

            const interval = setInterval(() => {
                element.textContent += text.charAt(i);
                i++;

                if (i >= text.length) {
                    clearInterval(interval);
                    resolve();
                }
            }, speed);
        });
    }

    async function startTyping() {

        // Safety check (important fix)
        if (!aboutTitleEl || !aboutBioEl) return;

        while (true) {

            await typeText(aboutTitleEl, aboutTitles[aboutTitleIndex], 70);
            await new Promise(r => setTimeout(r, 200));

            await typeText(aboutBioEl, aboutBios[aboutTitleIndex], 20);

            await new Promise(r => setTimeout(r, 2500));

            aboutTitleIndex++;
            if (aboutTitleIndex >= aboutTitles.length) {
                aboutTitleIndex = 0;
            }
        }
    }

    startTyping();

});