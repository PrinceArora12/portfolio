document.addEventListener('DOMContentLoaded', () => {

    // ================= NAVBAR (MOBILE TOGGLE) =================
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-link');

    if (hamburger) {
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
    }

    // Close menu on link click (mobile)
    navLinksItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = hamburger?.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });

    // ================= STICKY NAVBAR + ACTIVE LINK =================
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {

        // Sticky effect
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 10, 15, 0.9)';
            navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(10, 10, 15, 0.7)';
            navbar.style.boxShadow = 'none';
        }

        // Active section highlight
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;

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

    // ================= REVEAL ANIMATION =================
    const revealElements = document.querySelectorAll('.reveal');

    const reveal = () => {
        const windowHeight = window.innerHeight;

        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < windowHeight - 150) {
                element.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', reveal);
    reveal(); // trigger on load

    // ================= CONTACT FORM (DEMO) =================
    const form = document.querySelector('.contact-form form');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const btn = form.querySelector('button');
            const originalText = btn.textContent;

            btn.textContent = 'Message Sent!';
            btn.style.background = '#10b981';

            form.reset();

            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.background = '';
            }, 3000);
        });
    }

    // ================= TYPING ANIMATION =================
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

    let aboutIndex = 0;

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
        if (!aboutTitleEl || !aboutBioEl) return;

        while (true) {
            await typeText(aboutTitleEl, aboutTitles[aboutIndex], 70);
            await new Promise(r => setTimeout(r, 200));

            await typeText(aboutBioEl, aboutBios[aboutIndex], 20);

            await new Promise(r => setTimeout(r, 2500));

            aboutIndex = (aboutIndex + 1) % aboutTitles.length;
        }
    }

    startTyping();

    // ================= CERTIFICATE MODAL =================
    const modal = document.getElementById("certModal");
    const modalImg = document.getElementById("modalImg");
    const closeBtn = document.querySelector(".close-btn");

    const certImages = document.querySelectorAll(".cert-img img");

    if (modal && modalImg && closeBtn && certImages.length > 0) {

        certImages.forEach(img => {
            img.addEventListener("click", () => {
                modal.style.display = "block";
                modalImg.src = img.src;
            });
        });

        closeBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });

        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        });
    }

});