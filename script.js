// ====================================
// LOADING SCREEN
// ====================================
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loadingScreen').classList.add('hidden');
    }, 1000);
});

// ====================================
// SCROLL PROGRESS INDICATOR
// ====================================
document.addEventListener('DOMContentLoaded', () => {
    // Create scroll progress bar
    const scrollProgress = document.createElement('div');
    scrollProgress.className = 'scroll-progress';
    document.body.appendChild(scrollProgress);
    
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        scrollProgress.style.width = scrolled + '%';
    });
});

// ====================================
// NEURAL NETWORK BACKGROUND
// ====================================
document.addEventListener('DOMContentLoaded', () => {
    const neuralBg = document.createElement('div');
    neuralBg.className = 'neural-bg';
    document.body.appendChild(neuralBg);
});

// ====================================
// GLOW CARD MOUSE TRACKING
// ====================================
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.glow-card, .skill-card, .project-card, .timeline-content').forEach(card => {
        card.classList.add('glow-card');
        
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            card.style.setProperty('--mouse-x', x + '%');
            card.style.setProperty('--mouse-y', y + '%');
        });
    });
});

// ====================================
// PAGE TRANSITIONS
// ====================================
document.addEventListener('DOMContentLoaded', () => {
    // Create page transition element
    const pageTransition = document.createElement('div');
    pageTransition.className = 'page-transition';
    document.body.appendChild(pageTransition);
    
    // Add transition on internal links
    document.querySelectorAll('a[href^="index"], a[href^="about"], a[href^="projects"], a[href^="contact"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href && !href.startsWith('#') && !link.classList.contains('active')) {
                e.preventDefault();
                pageTransition.classList.add('active');
                setTimeout(() => {
                    window.location.href = href;
                }, 500);
            }
        });
    });
    
    // Remove transition on page load
    if (pageTransition.classList.contains('active')) {
        pageTransition.classList.remove('active');
        pageTransition.classList.add('leave');
        setTimeout(() => {
            pageTransition.classList.remove('leave');
        }, 500);
    }
});

// ====================================
// ENHANCED NAV GLASSMORPHISM
// ====================================
document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');
    if (nav) {
        nav.classList.add('glass-enhanced');
    }
});

// ====================================
// 3D TILT EFFECT FOR CARDS
// ====================================
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.skill-card, .project-card').forEach(card => {
        card.classList.add('tilt-card');
        
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const rotateX = (e.clientY - centerY) / 20;
            const rotateY = (centerX - e.clientX) / 20;
            
            card.style.setProperty('--tilt-x', rotateX + 'deg');
            card.style.setProperty('--tilt-y', rotateY + 'deg');
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.setProperty('--tilt-x', '0deg');
            card.style.setProperty('--tilt-y', '0deg');
        });
    });
});

// ====================================
// MOBILE MENU HAMBURGER
// ====================================
// Créer le bouton hamburger s'il n'existe pas
document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');
    const navLinks = document.querySelector('.nav-links');
    
    if (nav && navLinks && window.innerWidth <= 1024) {
        // Vérifier si le toggle n'existe pas déjà
        if (!document.querySelector('.mobile-menu-toggle')) {
            const toggle = document.createElement('div');
            toggle.className = 'mobile-menu-toggle';
            toggle.innerHTML = '<span></span><span></span><span></span>';
            
            // Insérer le toggle avant les links
            nav.insertBefore(toggle, navLinks);
            
            // Toggle menu
            toggle.addEventListener('click', (e) => {
                e.stopPropagation();
                toggle.classList.toggle('active');
                navLinks.classList.toggle('active');
            });
            
            // Fermer au clic sur un lien
            navLinks.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    toggle.classList.remove('active');
                    navLinks.classList.remove('active');
                });
            });
            
            // Fermer au clic en dehors
            document.addEventListener('click', (e) => {
                if (!nav.contains(e.target) && navLinks.classList.contains('active')) {
                    toggle.classList.remove('active');
                    navLinks.classList.remove('active');
                }
            });
        }
    }
});

// ====================================
// CUSTOM CURSOR
// ====================================
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
});

function animateCursor() {
    const dx = mouseX - cursorX;
    const dy = mouseY - cursorY;
    
    cursorX += dx * 0.2;
    cursorY += dy * 0.2;
    
    cursorFollower.style.left = cursorX + 'px';
    cursorFollower.style.top = cursorY + 'px';
    
    requestAnimationFrame(animateCursor);
}

animateCursor();

// Click effect on cursor
document.addEventListener('mousedown', () => {
    document.body.classList.add('cursor-click');
});

document.addEventListener('mouseup', () => {
    document.body.classList.remove('cursor-click');
});

// Hover effects for interactive elements
const interactiveElements = 'a, button, .btn, .skill-card, .project-card, .contact-card, .stat-card, .orbit-icon, .timeline-content, input, select';

document.body.addEventListener('mouseover', (e) => {
    if (e.target.closest(interactiveElements)) {
        document.body.classList.add('cursor-hover');
    }
});

document.body.addEventListener('mouseout', (e) => {
    if (e.target.closest(interactiveElements)) {
        document.body.classList.remove('cursor-hover');
    }
});

// ====================================
// CLICK RIPPLE EFFECT
// ====================================
document.addEventListener('click', (e) => {
    const ripple = document.createElement('div');
    ripple.className = 'ripple';
    ripple.style.left = e.clientX + 'px';
    ripple.style.top = e.clientY + 'px';
    ripple.style.width = '100px';
    ripple.style.height = '100px';
    document.body.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 800);
});

// ====================================
// SOUND WAVE EFFECT ON SPECIAL CLICKS
// ====================================
document.querySelectorAll('.orbit-icon, .stat-card, h1').forEach(el => {
    el.addEventListener('click', (e) => {
        const wave = document.createElement('div');
        wave.className = 'sound-wave';
        wave.style.left = e.clientX + 'px';
        wave.style.top = e.clientY + 'px';
        
        for (let i = 0; i < 3; i++) {
            setTimeout(() => {
                const circle = document.createElement('div');
                circle.className = 'wave-circle';
                wave.appendChild(circle);
            }, i * 200);
        }
        
        document.body.appendChild(wave);
        
        setTimeout(() => {
            wave.remove();
        }, 2000);
    });
});

// ====================================
// PARTICLES CANVAS ANIMATION
// ====================================
const canvas = document.getElementById('particlesCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const particleCount = 100;

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(16, 185, 129, 0.5)';
        ctx.fill();
    }
}

for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
}

function connectParticles() {
    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 150) {
                ctx.beginPath();
                ctx.strokeStyle = `rgba(16, 185, 129, ${0.2 * (1 - distance / 150)})`;
                ctx.lineWidth = 1;
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
            }
        }
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });
    
    connectParticles();
    requestAnimationFrame(animate);
}

animate();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// ====================================
// TYPING ANIMATION
// ====================================
const texts = ['Data Scientist', 'AI Specialist', 'ML Engineer', 'Sports Analytics'];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.getElementById('typingText');

function type() {
    if (!typingElement) return;
    
    const currentText = texts[textIndex];
    
    if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentText.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
}

if (typingElement) {
    type();
}

// ====================================
// SMOOTH SCROLLING
// ====================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ====================================
// SCROLL REVEAL ANIMATION
// ====================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            
            // Animate skill circles when in view
            if (entry.target.classList.contains('skill-card')) {
                entry.target.classList.add('in-view');
            }
        }
    });
}, observerOptions);

document.querySelectorAll('.scroll-reveal, .skill-card').forEach(el => {
    observer.observe(el);
});

// ====================================
// PROJECTS CAROUSEL
// ====================================
const track = document.getElementById('carouselTrack');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const indicatorsContainer = document.getElementById('indicators');

if (track) {
    const cards = document.querySelectorAll('.project-card');
    let currentIndex = 0;

    // Create indicators
    cards.forEach((_, index) => {
        const indicator = document.createElement('div');
        indicator.classList.add('indicator');
        if (index === 0) indicator.classList.add('active');
        indicator.addEventListener('click', () => goToSlide(index));
        indicatorsContainer.appendChild(indicator);
    });

    const indicators = document.querySelectorAll('.indicator');

    function updateCarousel() {
        const cardWidth = cards[0].offsetWidth;
        const gap = 32; // 2rem gap
        track.style.transform = `translateX(-${currentIndex * (cardWidth + gap)}px)`;
        
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
        });
    }

    function goToSlide(index) {
        currentIndex = index;
        updateCarousel();
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % cards.length;
        updateCarousel();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        updateCarousel();
    }

    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);

    // Auto-play carousel
    let autoplayInterval = setInterval(nextSlide, 5000);

    // Pause on hover
    track.addEventListener('mouseenter', () => {
        clearInterval(autoplayInterval);
    });

    track.addEventListener('mouseleave', () => {
        autoplayInterval = setInterval(nextSlide, 5000);
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') prevSlide();
        if (e.key === 'ArrowRight') nextSlide();
    });
}

// ====================================
// ACTIVE NAV LINK ON SCROLL
// ====================================
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') && link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ====================================
// PARALLAX EFFECT FOR 3D SPHERES
// ====================================
document.addEventListener('mousemove', (e) => {
    const spheres = document.querySelectorAll('.orbit');
    if (spheres.length === 0) return;
    
    const x = (window.innerWidth - e.pageX) / 50;
    const y = (window.innerHeight - e.pageY) / 50;
    
    spheres.forEach((sphere, index) => {
        const speed = (index + 1) * 0.5;
        sphere.style.transform = `rotateY(${x * speed}deg) rotateX(${y * speed}deg)`;
    });
});

// ====================================
// STATS COUNTER ANIMATION
// ====================================
function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        element.textContent = value + (element.dataset.suffix || '');
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target.querySelector('.stat-number');
            if (statNumber && !statNumber.dataset.animated) {
                const finalValue = parseInt(statNumber.textContent);
                statNumber.dataset.suffix = statNumber.textContent.replace(/[0-9]/g, '');
                statNumber.dataset.animated = 'true';
                animateValue(statNumber, 0, finalValue, 2000);
            }
            statsObserver.unobserve(entry.target);
        }
    });
});

document.querySelectorAll('.stat-card').forEach(card => {
    statsObserver.observe(card);
});

// ====================================
// ORBIT ICON CLICKS
// ====================================
document.querySelectorAll('.orbit-icon').forEach((icon, index) => {
    icon.addEventListener('click', () => {
        const messages = [
            'Machine Learning 🤖',
            'Data Analysis 📊',
            'Deep Learning 🧠',
            'Code & Dev 💻',
            'Databases 🗄️',
            'Sports Analytics ⚽'
        ];
        
        showTemporaryMessage(messages[index % messages.length]);
    });
});

function showTemporaryMessage(text) {
    const message = document.createElement('div');
    message.textContent = text;
    message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 2rem;
        font-weight: 700;
        color: var(--accent);
        background: rgba(2, 6, 23, 0.9);
        padding: 2rem 3rem;
        border-radius: 20px;
        border: 2px solid var(--accent);
        z-index: 10001;
        animation: fadeInUp 0.5s ease-out;
        backdrop-filter: blur(10px);
    `;
    
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.style.animation = 'fadeInUp 0.5s ease-out reverse';
        setTimeout(() => message.remove(), 500);
    }, 2000);
}

// ====================================
// EASTER EGG - KONAMI CODE
// ====================================
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join('') === konamiSequence.join('')) {
        triggerEasterEgg();
        konamiCode = [];
    }
});

function triggerEasterEgg() {
    const egg = document.createElement('div');
    egg.className = 'easter-egg';
    egg.textContent = '🚀';
    document.body.appendChild(egg);
    
    setTimeout(() => egg.remove(), 3000);
    
    showTemporaryMessage('Konami Code Activated! 🎮');
}

// ====================================
// TAG CLICK EFFECTS
// ====================================
document.querySelectorAll('.tag').forEach(tag => {
    tag.addEventListener('click', () => {
        tag.style.animation = 'none';
        setTimeout(() => {
            tag.style.animation = 'pulse 0.5s ease-out';
        }, 10);
    });
});

// ====================================
// LOGO CLICK EFFECT
// ====================================
const logo = document.querySelector('.logo');
if (logo) {
    let clickCount = 0;
    logo.addEventListener('click', () => {
        clickCount++;
        if (clickCount === 3) {
            showTemporaryMessage('Hello there! 👋 Keep exploring!');
            clickCount = 0;
        }
    });
}

// ====================================
// SECTION HEADER CLICK
// ====================================
document.querySelectorAll('.section-header h2').forEach(header => {
    header.addEventListener('click', () => {
        header.style.transform = 'scale(1.1) rotate(2deg)';
        setTimeout(() => {
            header.style.transform = '';
        }, 300);
    });
});

// ====================================
// MOBILE MENU (for small screens)
// ====================================
const createMobileMenu = () => {
    if (window.innerWidth <= 768) {
        const nav = document.querySelector('nav');
        const navLinks = document.querySelector('.nav-links');
        
        if (!document.querySelector('.mobile-menu-btn')) {
            const menuBtn = document.createElement('button');
            menuBtn.className = 'mobile-menu-btn';
            menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            menuBtn.style.cssText = `
                display: block;
                background: none;
                border: 2px solid var(--accent);
                color: var(--accent);
                font-size: 1.5rem;
                padding: 0.5rem 1rem;
                border-radius: 8px;
                cursor: pointer;
            `;
            
            menuBtn.addEventListener('click', () => {
                navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            });
            
            nav.appendChild(menuBtn);
        }
    }
};

window.addEventListener('resize', createMobileMenu);
createMobileMenu();

console.log('%c🚀 Portfolio loaded successfully!', 'color: #10b981; font-size: 20px; font-weight: bold;');
// ====================================
// EDUCATION MODAL LOGIC
// ====================================
const educationData = {
    fr: {
        keyPointsTitle: "Points Clés",
        clickHint: "Cliquez pour plus d'infos",
        "sigma": {
            title: "Mastère Spécialisé® Expert Data Science",
            subtitle: "SIGMA Clermont (Bac+6)",
            icon: "fa-graduation-cap",
            details: [
                { label: "Niveau", value: "Bac+6" },
                { label: "Durée", value: "12 Mois" },
                { label: "Enseignement", value: "400h" },
                { label: "Langage", value: "Python" }
            ],
            description: "Formation d'excellence accréditée CGE, situant la Data Science au carrefour des mathématiques, de l'informatique et de l'expertise métier. L'objectif est de former des experts capables de piloter la stratégie de données de bout en bout, de la collecte à la valorisation par l'IA.",
            points: [
                "Analyse Numérique, Optimisation & Probabilités",
                "Big Data & Architectures Distribuées (Hadoop, Spark)",
                "Machine Learning & Deep Learning Avancé",
                "Mission en entreprise de 22 semaines (Thèse professionnelle)"
            ]
        },
        "m2-miage": {
            title: "Master 2 MIAGE IDA",
            subtitle: "Université Toulouse Capitole (Bac+5)",
            icon: "fa-university",
            details: [
                { label: "Niveau", value: "Bac+5" },
                { label: "Mention", value: "Bien" },
                { label: "Classement", value: "2ème/Promo" },
                { label: "Rythme", value: "Alternance" }
            ],
            description: "Spécialisation en Ingénierie des Données et Apprentissage (IDA). Une formation qui vise à former des cadres capables d'accompagner la transformation des organisations en 'Data Driven Companies' en maîtrisant le cycle de vie complet de la donnée.",
            points: [
                "Deep Learning & Intelligence Artificielle",
                "Business Intelligence & Data Storytelling",
                "Gouvernance des Données, Éthique & Green IT",
                "Stratégie d'Entreprise & Gestion de Projet Agile"
            ]
        },
        "m1-miage": {
            title: "Master 1 MIAGE",
            subtitle: "Université Toulouse Capitole (Bac+4)",
            icon: "fa-code",
            details: [
                { label: "Niveau", value: "Bac+4" },
                { label: "Mention", value: "Excellence" },
                { label: "Classement", value: "Major" },
                { label: "Rythme", value: "Alternance" }
            ],
            description: "Année charnière qui consolide les fondamentaux de l'ingénierie logicielle tout en introduisant les concepts avancés de la science des données. Obtention du Prix de l'Excellence Universitaire.",
            points: [
                "Développement Logiciel Avancé (Java, Python)",
                "Conception de Bases de Données (SQL, NoSQL)",
                "Machine Learning Fondamental (Scikit-learn)",
                "Méthodes Agiles & Management des SI"
            ]
        },
        "l3-miage": {
            title: "Licence 3 MIAGE",
            subtitle: "Université Toulouse Capitole (Bac+3)",
            icon: "fa-laptop-code",
            details: [
                { label: "Niveau", value: "Bac+3" },
                { label: "Mention", value: "Assez Bien" },
                { label: "Focus", value: "Gestion & IT" },
                { label: "Rythme", value: "Alternance" }
            ],
            description: "Formation à double compétence alliant informatique et gestion des entreprises. Elle prépare à la conception et au pilotage de systèmes d'information alignés sur les besoins métiers.",
            points: [
                "Modélisation des Systèmes d'Information (UML, Merise)",
                "Algorithmique & Programmation Web",
                "Gestion Financière, Comptabilité & Droit",
                "Administration de Bases de Données"
            ]
        },
        "dut-stid": {
            title: "DUT STID",
            subtitle: "IUT des Pays de l'Adour (Bac+2)",
            icon: "fa-chart-pie",
            details: [
                { label: "Niveau", value: "Bac+2" },
                { label: "Domaine", value: "Data" },
                { label: "Outils", value: "SAS / R" },
                { label: "Focus", value: "Statistiques" }
            ],
            description: "Formation technique solide spécialisée dans la statistique et l'informatique décisionnelle (Business Intelligence). Elle permet d'acquérir les bases essentielles du traitement et de l'analyse de données.",
            points: [
                "Statistiques Descriptives & Inférentielles",
                "Programmation Statistique (SAS, R, Python)",
                "Requêtage de Bases de Données (SQL)",
                "Reporting & Visualisation de Données"
            ]
        }
    },
    en: {
        keyPointsTitle: "Key Points",
        clickHint: "Click for more info",
        "sigma": {
            title: "Advanced Master® Expert Data Science",
            subtitle: "SIGMA Clermont (MSc+1)",
            icon: "fa-graduation-cap",
            details: [
                { label: "Level", value: "MSc+1" },
                { label: "Duration", value: "12 Months" },
                { label: "Teaching", value: "400h" },
                { label: "Language", value: "Python" }
            ],
            description: "Excellence program accredited by CGE, positioning Data Science at the crossroads of mathematics, computer science and business expertise. The goal is to train experts capable of driving data strategy end-to-end, from collection to AI-powered value creation.",
            points: [
                "Numerical Analysis, Optimization & Probability",
                "Big Data & Distributed Architectures (Hadoop, Spark)",
                "Advanced Machine Learning & Deep Learning",
                "22-week company mission (Professional Thesis)"
            ]
        },
        "m2-miage": {
            title: "Master 2 MIAGE IDA",
            subtitle: "Toulouse Capitole University (MSc)",
            icon: "fa-university",
            details: [
                { label: "Level", value: "MSc" },
                { label: "Honors", value: "With Honors" },
                { label: "Ranking", value: "2nd/Class" },
                { label: "Format", value: "Apprenticeship" }
            ],
            description: "Specialization in Data Engineering and Learning (IDA). A program aimed at training managers capable of driving organizational transformation into 'Data Driven Companies' by mastering the complete data lifecycle.",
            points: [
                "Deep Learning & Artificial Intelligence",
                "Business Intelligence & Data Storytelling",
                "Data Governance, Ethics & Green IT",
                "Business Strategy & Agile Project Management"
            ]
        },
        "m1-miage": {
            title: "Master 1 MIAGE",
            subtitle: "Toulouse Capitole University (BSc+1)",
            icon: "fa-code",
            details: [
                { label: "Level", value: "BSc+1" },
                { label: "Honors", value: "Excellence" },
                { label: "Ranking", value: "Valedictorian" },
                { label: "Format", value: "Apprenticeship" }
            ],
            description: "Pivotal year consolidating software engineering fundamentals while introducing advanced data science concepts. Awarded the University Excellence Prize.",
            points: [
                "Advanced Software Development (Java, Python)",
                "Database Design (SQL, NoSQL)",
                "Fundamental Machine Learning (Scikit-learn)",
                "Agile Methods & IS Management"
            ]
        },
        "l3-miage": {
            title: "Bachelor 3 MIAGE",
            subtitle: "Toulouse Capitole University (BSc)",
            icon: "fa-laptop-code",
            details: [
                { label: "Level", value: "BSc" },
                { label: "Honors", value: "With Honors" },
                { label: "Focus", value: "Management & IT" },
                { label: "Format", value: "Apprenticeship" }
            ],
            description: "Dual-competency program combining computer science and business management. It prepares for the design and management of information systems aligned with business needs.",
            points: [
                "Information Systems Modeling (UML, Merise)",
                "Algorithms & Web Programming",
                "Financial Management, Accounting & Law",
                "Database Administration"
            ]
        },
        "dut-stid": {
            title: "DUT STID",
            subtitle: "IUT Pays de l'Adour (Associate Degree)",
            icon: "fa-chart-pie",
            details: [
                { label: "Level", value: "Associate" },
                { label: "Domain", value: "Data" },
                { label: "Tools", value: "SAS / R" },
                { label: "Focus", value: "Statistics" }
            ],
            description: "Solid technical training specialized in statistics and business intelligence. It provides the essential foundations of data processing and analysis.",
            points: [
                "Descriptive & Inferential Statistics",
                "Statistical Programming (SAS, R, Python)",
                "Database Querying (SQL)",
                "Reporting & Data Visualization"
            ]
        }
    },
    es: {
        keyPointsTitle: "Puntos Clave",
        clickHint: "Haz clic para más info",
        "sigma": {
            title: "Máster Especializado® Experto Data Science",
            subtitle: "SIGMA Clermont (Máster+1)",
            icon: "fa-graduation-cap",
            details: [
                { label: "Nivel", value: "Máster+1" },
                { label: "Duración", value: "12 Meses" },
                { label: "Enseñanza", value: "400h" },
                { label: "Lenguaje", value: "Python" }
            ],
            description: "Formación de excelencia acreditada por CGE, situando la Data Science en la encrucijada de las matemáticas, la informática y la experiencia empresarial. El objetivo es formar expertos capaces de pilotar la estrategia de datos de principio a fin.",
            points: [
                "Análisis Numérico, Optimización y Probabilidades",
                "Big Data y Arquitecturas Distribuidas (Hadoop, Spark)",
                "Machine Learning y Deep Learning Avanzado",
                "Misión en empresa de 22 semanas (Tesis profesional)"
            ]
        },
        "m2-miage": {
            title: "Máster 2 MIAGE IDA",
            subtitle: "Universidad Toulouse Capitole (Máster)",
            icon: "fa-university",
            details: [
                { label: "Nivel", value: "Máster" },
                { label: "Mención", value: "Bien" },
                { label: "Clasificación", value: "2º/Promoción" },
                { label: "Formato", value: "Alternancia" }
            ],
            description: "Especialización en Ingeniería de Datos y Aprendizaje (IDA). Una formación que busca formar directivos capaces de acompañar la transformación de las organizaciones en 'Data Driven Companies'.",
            points: [
                "Deep Learning e Inteligencia Artificial",
                "Business Intelligence y Data Storytelling",
                "Gobernanza de Datos, Ética y Green IT",
                "Estrategia Empresarial y Gestión de Proyectos Ágil"
            ]
        },
        "m1-miage": {
            title: "Máster 1 MIAGE",
            subtitle: "Universidad Toulouse Capitole (Grado+1)",
            icon: "fa-code",
            details: [
                { label: "Nivel", value: "Grado+1" },
                { label: "Mención", value: "Excelencia" },
                { label: "Clasificación", value: "Mejor" },
                { label: "Formato", value: "Alternancia" }
            ],
            description: "Año clave que consolida los fundamentos de la ingeniería de software mientras introduce conceptos avanzados de ciencia de datos. Premio a la Excelencia Universitaria.",
            points: [
                "Desarrollo de Software Avanzado (Java, Python)",
                "Diseño de Bases de Datos (SQL, NoSQL)",
                "Machine Learning Fundamental (Scikit-learn)",
                "Métodos Ágiles y Gestión de SI"
            ]
        },
        "l3-miage": {
            title: "Licenciatura 3 MIAGE",
            subtitle: "Universidad Toulouse Capitole (Grado)",
            icon: "fa-laptop-code",
            details: [
                { label: "Nivel", value: "Grado" },
                { label: "Mención", value: "Notable" },
                { label: "Enfoque", value: "Gestión e IT" },
                { label: "Formato", value: "Alternancia" }
            ],
            description: "Formación de doble competencia combinando informática y gestión empresarial. Prepara para el diseño y gestión de sistemas de información alineados con las necesidades del negocio.",
            points: [
                "Modelado de Sistemas de Información (UML, Merise)",
                "Algoritmia y Programación Web",
                "Gestión Financiera, Contabilidad y Derecho",
                "Administración de Bases de Datos"
            ]
        },
        "dut-stid": {
            title: "DUT STID",
            subtitle: "IUT Pays de l'Adour (Técnico Superior)",
            icon: "fa-chart-pie",
            details: [
                { label: "Nivel", value: "Técnico" },
                { label: "Dominio", value: "Data" },
                { label: "Herramientas", value: "SAS / R" },
                { label: "Enfoque", value: "Estadística" }
            ],
            description: "Formación técnica sólida especializada en estadística e informática decisional. Proporciona las bases esenciales del tratamiento y análisis de datos.",
            points: [
                "Estadística Descriptiva e Inferencial",
                "Programación Estadística (SAS, R, Python)",
                "Consultas de Bases de Datos (SQL)",
                "Reporting y Visualización de Datos"
            ]
        }
    },
    it: {
        keyPointsTitle: "Punti Chiave",
        clickHint: "Clicca per maggiori info",
        "sigma": {
            title: "Master Specializzato® Esperto Data Science",
            subtitle: "SIGMA Clermont (Master+1)",
            icon: "fa-graduation-cap",
            details: [
                { label: "Livello", value: "Master+1" },
                { label: "Durata", value: "12 Mesi" },
                { label: "Insegnamento", value: "400h" },
                { label: "Linguaggio", value: "Python" }
            ],
            description: "Formazione di eccellenza accreditata CGE, posizionando la Data Science all'incrocio tra matematica, informatica e competenza aziendale. L'obiettivo è formare esperti in grado di guidare la strategia dati dall'inizio alla fine.",
            points: [
                "Analisi Numerica, Ottimizzazione e Probabilità",
                "Big Data e Architetture Distribuite (Hadoop, Spark)",
                "Machine Learning e Deep Learning Avanzato",
                "Missione in azienda di 22 settimane (Tesi professionale)"
            ]
        },
        "m2-miage": {
            title: "Master 2 MIAGE IDA",
            subtitle: "Università Toulouse Capitole (Master)",
            icon: "fa-university",
            details: [
                { label: "Livello", value: "Master" },
                { label: "Menzione", value: "Bene" },
                { label: "Classifica", value: "2°/Corso" },
                { label: "Formato", value: "Apprendistato" }
            ],
            description: "Specializzazione in Ingegneria dei Dati e Apprendimento (IDA). Una formazione che mira a formare dirigenti capaci di accompagnare la trasformazione delle organizzazioni in 'Data Driven Companies'.",
            points: [
                "Deep Learning e Intelligenza Artificiale",
                "Business Intelligence e Data Storytelling",
                "Governance dei Dati, Etica e Green IT",
                "Strategia Aziendale e Gestione Progetti Agile"
            ]
        },
        "m1-miage": {
            title: "Master 1 MIAGE",
            subtitle: "Università Toulouse Capitole (Laurea+1)",
            icon: "fa-code",
            details: [
                { label: "Livello", value: "Laurea+1" },
                { label: "Menzione", value: "Eccellenza" },
                { label: "Classifica", value: "Migliore" },
                { label: "Formato", value: "Apprendistato" }
            ],
            description: "Anno chiave che consolida i fondamenti dell'ingegneria del software introducendo concetti avanzati di data science. Premio all'Eccellenza Universitaria.",
            points: [
                "Sviluppo Software Avanzato (Java, Python)",
                "Progettazione Database (SQL, NoSQL)",
                "Machine Learning Fondamentale (Scikit-learn)",
                "Metodi Agili e Gestione SI"
            ]
        },
        "l3-miage": {
            title: "Laurea 3 MIAGE",
            subtitle: "Università Toulouse Capitole (Laurea)",
            icon: "fa-laptop-code",
            details: [
                { label: "Livello", value: "Laurea" },
                { label: "Menzione", value: "Discreto" },
                { label: "Focus", value: "Gestione e IT" },
                { label: "Formato", value: "Apprendistato" }
            ],
            description: "Formazione a doppia competenza che combina informatica e gestione aziendale. Prepara alla progettazione e gestione di sistemi informativi allineati alle esigenze aziendali.",
            points: [
                "Modellazione Sistemi Informativi (UML, Merise)",
                "Algoritmi e Programmazione Web",
                "Gestione Finanziaria, Contabilità e Diritto",
                "Amministrazione Database"
            ]
        },
        "dut-stid": {
            title: "DUT STID",
            subtitle: "IUT Pays de l'Adour (Diploma)",
            icon: "fa-chart-pie",
            details: [
                { label: "Livello", value: "Diploma" },
                { label: "Dominio", value: "Data" },
                { label: "Strumenti", value: "SAS / R" },
                { label: "Focus", value: "Statistica" }
            ],
            description: "Formazione tecnica solida specializzata in statistica e informatica decisionale. Fornisce le basi essenziali del trattamento e analisi dei dati.",
            points: [
                "Statistica Descrittiva e Inferenziale",
                "Programmazione Statistica (SAS, R, Python)",
                "Query Database (SQL)",
                "Reporting e Visualizzazione Dati"
            ]
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('educationModal');
    if (!modal) return;

    const closeBtn = modal.querySelector('.modal-close');
    const modalContent = modal.querySelector('.modal-content');
    
    // Elements to populate
    const modalTitle = modal.querySelector('.modal-title');
    const modalSubtitle = modal.querySelector('.modal-subtitle');
    const modalIcon = modal.querySelector('.modal-icon i');
    const modalGrid = modal.querySelector('.modal-details-grid');
    const modalDesc = modal.querySelector('.modal-description');
    const modalPoints = modal.querySelector('.modal-points');
    const modalSectionTitle = modal.querySelector('.modal-section-title');

    // Open Modal Function
    function openModal(id) {
        // Get current language, fallback to 'fr'
        const lang = localStorage.getItem('language') || 'fr';
        const langData = educationData[lang] || educationData.fr;
        const data = langData[id];
        if (!data) return;

        // Populate Content
        modalTitle.textContent = data.title;
        modalSubtitle.textContent = data.subtitle;
        modalIcon.className = `fas ${data.icon || 'fa-graduation-cap'}`;
        modalDesc.textContent = data.description;
        
        // Update section title based on language
        if (modalSectionTitle) {
            modalSectionTitle.textContent = langData.keyPointsTitle || "Points Clés";
        }

        // Populate Details Grid
        modalGrid.innerHTML = data.details.map(item => `
            <div class="modal-detail-item">
                <span class="modal-detail-value">${item.value}</span>
                <span class="modal-detail-label">${item.label}</span>
            </div>
        `).join('');

        // Populate Points
        modalPoints.innerHTML = data.points.map(point => `
            <li>${point}</li>
        `).join('');

        // Show Modal
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    // Close Modal Function
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Event Listeners
    document.querySelectorAll('.timeline-content[data-id]').forEach(item => {
        item.addEventListener('click', () => {
            const id = item.getAttribute('data-id');
            openModal(id);
        });
    });

    closeBtn.addEventListener('click', closeModal);

    // Close on outside click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
});
// ====================================
// DARK / LIGHT MODE TOGGLE
// ====================================
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme') || 'dark';
if (savedTheme === 'light') {
    body.classList.add('light-mode');
    if (themeToggle) {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        const isLight = body.classList.contains('light-mode');
        themeToggle.innerHTML = isLight ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
        
        // Ripple effect
        const ripple = document.createElement('div');
        ripple.className = 'ripple';
        ripple.style.left = themeToggle.getBoundingClientRect().left + 30 + 'px';
        ripple.style.top = themeToggle.getBoundingClientRect().top + 30 + 'px';
        ripple.style.width = '100px';
        ripple.style.height = '100px';
        document.body.appendChild(ripple);
        setTimeout(() => ripple.remove(), 800);
    });
}

// ====================================
// MULTI-LANGUAGE SUPPORT
// ====================================
const translations = {
    "fr": {
        "nav.home": "Accueil",
        "nav.about": "À propos",
        "nav.experience": "Expérience",
        "nav.skills": "Compétences",
        "nav.projects": "Projets",
        "nav.contact": "Contact",
        "hero.description": "Passionné par l'IA et son application concrète dans le sport, la computer vision et l'analyse de données. Je transforme les données en insights qui font la différence.",
        "hero.contactMe": "Me contacter",
        "about.pageTitle": "À propos de moi",
        "about.pageSubtitle": "Passionné de data science depuis mes débuts, j'ai construit mon expertise à travers des expériences variées dans des secteurs innovants. Découvrez mon parcours et ma vision de l'intelligence artificielle.",
        "about.story.title": "Mon Histoire",
        "about.story.subtitle": "Comment je suis arrivé jusqu'ici",
        "about.story.p1": "Ma passion pour la data science est née d'une fascination pour les mathématiques et l'informatique. À 23 ans, j'ai déjà eu l'opportunité de travailler sur des projets passionnants dans des domaines variés : santé, services publics, et maintenant le sport.",
        "about.story.p2": "Ce qui me drive vraiment, c'est de voir l'impact concret de mes analyses. Que ce soit pour améliorer la performance d'une équipe de rugby, optimiser des services pour des citoyens, ou aider des professionnels de santé dans leurs décisions, je cherche toujours à créer de la valeur mesurable.",
        "about.story.p3": "Au-delà du code et des modèles, je crois fermement que la data science est avant tout une discipline au service de l'humain. C'est pourquoi je m'efforce de rendre mes analyses accessibles et actionnables, en gardant toujours en tête l'utilisateur final.",
        "about.expertise.title": "Domaines d'Expertise",
        "about.expertise.subtitle": "Mes spécialités techniques",
        "about.expertise.sports.title": "Sports Analytics",
        "about.expertise.sports.desc": "Analyse de performance sportive, tracking de joueurs, prédiction de résultats, et optimisation des stratégies d'équipe.",
        "about.expertise.vision.title": "Computer Vision",
        "about.expertise.vision.desc": "Détection d'objets, reconnaissance d'images, segmentation sémantique, et traitement vidéo en temps réel.",
        "about.expertise.nlp.title": "NLP & LLMs",
        "about.expertise.nlp.desc": "Traitement du langage naturel, chatbots intelligents, systèmes RAG, et fine-tuning de modèles de langage.",
        "about.expertise.predictive.title": "Predictive Analytics",
        "about.expertise.predictive.desc": "Modélisation prédictive, séries temporelles, forecasting, et optimisation de processus métier.",
        "about.expertise.dataeng.title": "Data Engineering",
        "about.expertise.dataeng.desc": "Architecture de données, ETL/ELT, data pipelines, et optimisation de requêtes SQL complexes.",
        "about.expertise.mlops.title": "MLOps",
        "about.expertise.mlops.desc": "Déploiement de modèles, CI/CD pour ML, monitoring de performance, et gestion du cycle de vie des modèles.",
        "about.values.title": "Valeurs & Approche",
        "about.values.subtitle": "Comment je travaille",
        "about.values.results.title": "Orienté Résultats",
        "about.values.results.desc": "Chaque projet doit avoir un impact mesurable. Je privilégie les solutions pragmatiques qui apportent une réelle valeur métier.",
        "about.values.collab.title": "Collaboration",
        "about.values.collab.desc": "La data science est un travail d'équipe. J'aime échanger avec les métiers pour comprendre leurs besoins et co-construire des solutions.",
        "about.values.learning.title": "Apprentissage Continu",
        "about.values.learning.desc": "L'IA évolue rapidement. Je consacre du temps à la veille technologique et à l'expérimentation de nouvelles approches.",
        "about.values.quality.title": "Qualité du Code",
        "about.values.quality.desc": "Code propre, documenté, testé. Je crois aux bonnes pratiques et à la maintenabilité du code sur le long terme.",
        "about.values.dataviz.title": "Data Viz",
        "about.values.dataviz.desc": "Les insights n'ont de valeur que s'ils sont compris. J'accorde une grande importance à la visualisation et à la communication des résultats.",
        "about.values.agile.title": "Agilité",
        "about.values.agile.desc": "Itération rapide, prototypage, feedback continu. Je m'adapte aux contraintes et j'ajuste mon approche selon les besoins.",
        "about.interests.title": "Au-delà du Code",
        "about.interests.subtitle": "Mes passions et centres d'intérêt",
        "about.interests.rugby.title": "Rugby",
        "about.interests.rugby.desc": "Grand fan de rugby (particulièrement l'ASM Clermont !). C'est d'ailleurs cette passion qui m'a naturellement orienté vers les sports analytics.",
        "about.interests.ai.title": "IA & Tech",
        "about.interests.ai.desc": "Veille constante sur les dernières avancées en IA, LLMs, et technologies émergentes. J'aime expérimenter avec de nouveaux outils et frameworks.",
        "about.interests.outdoor.title": "Outdoor",
        "about.interests.outdoor.desc": "Randonnée, trail, vélo. J'aime me déconnecter en explorant la nature, particulièrement les Pyrénées qui ne sont pas loin de Toulouse.",
        "about.interests.community.title": "Communauté",
        "about.interests.community.desc": "Participer à des meetups tech, partager mes connaissances, et apprendre des autres. La communauté data science est incroyablement enrichissante.",
        "about.cta.title": "Envie d'en discuter ?",
        "about.cta.desc": "Je suis toujours ouvert à de nouvelles opportunités et collaborations. N'hésitez pas à me contacter !",
        "about.cta.btn_contact": "Me contacter",
        "about.cta.btn_projects": "Voir mes projets",
        "experience.title": "Expérience",
        "experience.subtitle": "Mon parcours en Data Science & Intelligence Artificielle",
        "experience.stats.years": "Années d'expérience",
        "experience.stats.companies": "Entreprises",
        "experience.stats.projects": "Projets réalisés",
        "experience.stats.technologies": "Technologies",
        "jobs.asm.date": "Sept 2025 - Aujourd'hui",
        "jobs.asm.description": "Analyse de la performance sportive avec des techniques avancées de data science et machine learning. Développement d'outils d'aide à la décision pour le staff technique.",
        "jobs.toulouse.date": "Sept 2024 - Sept 2025",
        "jobs.toulouse.description": "Développement de solutions d'IA pour optimiser les services publics. Mise en place de chatbots intelligents et systèmes de recommandation pour améliorer l'expérience citoyenne.",
        "jobs.mipih.date": "Sept 2023 - Sept 2024",
        "jobs.mipih.description": "Création de solutions d'IA pour améliorer les processus de santé publique. Développement de systèmes NLP avancés et création de tableaux de bord d'analyse pour la direction.",
        "jobs.fdti.date": "Sept 2021 - Sept 2023",
        "jobs.fdti.description": "Création de tableaux de bord KPI et de prédictions ML. Automatisation de processus de nettoyage de données et implémentation de pipelines ETL.",
        "jobs.axione.date": "Juin 2021 - Août 2021",
        "jobs.axione.description": "Support aux équipes IT dans l'administration de bases de données. Migration de données et optimisation des requêtes SQL.",
        "education.title": "Formation",
        "education.subtitle": "Mon parcours académique",
        "education.sigma.date": "Sept 2025 - Sept 2026",
        "education.sigma.title": "Mastère Spécialisé® Expert Data Science",
        "education.sigma.description": "Expert en Science des Données, Data Science. Analyse numérique, Probabilités et statistique, Big data, Machine Learning.",
        "education.m2.date": "Sept 2024 - Sept 2025",
        "education.m2.title": "Master 2 MIAGE",
        "education.m2.description": "Ingénierie des Données et Apprentissage. Obtenu mention Bien (2ème de Promotion).",
        "education.m1.date": "Sept 2023 - Sept 2024",
        "education.m1.title": "Master 1 MIAGE",
        "education.m1.description": "Ingénierie des Données et Apprentissage. Prix de l'Excellence (Major de Promotion).",
        "education.l3.date": "Sept 2022 - Sept 2023",
        "education.l3.title": "Licence 3 MIAGE",
        "education.l3.description": "Mathématiques et informatique. Obtenu mention Assez Bien.",
        "education.dut.date": "2020 - 2022",
        "education.dut.title": "DUT STID",
        "education.dut.description": "Statistique et Informatique Décisionnelle.",
        "skills.title": "Compétences",
        "skills.subtitle": "Technologies et outils que je maîtrise",
        "projects.title": "Projets",
        "projects.subtitle": "Quelques réalisations qui me tiennent à cœur",
        "projects.sourceCode": "Code source",
        "projects.pageTitle": "Mes Projets",
        "projects.pageSubtitle": "Une sélection de projets qui illustrent ma passion pour la data science, l'intelligence artificielle et l'innovation technologique.",
        "projects.filterAll": "Tous",
        "projects.filterAI": "IA & ML",
        "projects.filterSports": "Sports",
        "projects.filterNLP": "NLP",
        "projects.filterVision": "Vision",
        "projects.viewCode": "Voir le code",
        "projects.status.completed": "Terminé",
        "projects.status.ongoing": "En cours",
        "projects.rag.description": "Système de Retrieval-Augmented Generation utilisant des LLMs pour améliorer la pertinence des réponses en s'appuyant sur une base de connaissances.",
        "projects.rugby.description": "Analyse approfondie des statistiques de rugby avec ML pour identifier les patterns de performance et prédire les résultats des matchs.",
        "projects.cv.description": "Application de deep learning pour la détection et classification d'objets en temps réel, avec applications dans le domaine sportif.",
        "projects.cta.title": "Un projet en tête ?",
        "projects.cta.description": "Je suis toujours à la recherche de nouveaux défis passionnants. N'hésitez pas à me contacter pour discuter de votre projet !",
        "projects.cta.contact": "Me contacter",
        "contact.title": "Contact",
        "contact.subtitle": "Envie de collaborer ? Discutons !",
        "contact.location": "Localisation",
        "contact.pageTitle": "Contactez-moi",
        "contact.pageSubtitle": "Une question, un projet, une opportunité ? Je serai ravi d'échanger avec vous. N'hésitez pas à me contacter via le moyen qui vous convient le mieux.",
        "contact.infoTitle": "Informations",
        "contact.connect": "Se connecter",
        "contact.viewProfile": "Voir le profil",
        "contact.emailText": "Envoyez-moi un message",
        "contact.sendEmail": "Envoyer un email",
        "contact.available": "Disponible pour du remote",
        "contact.formTitle": "Envoyez un message",
        "contact.form.name": "Nom complet",
        "contact.form.namePlaceholder": "Votre nom",
        "contact.form.email": "Email",
        "contact.form.emailPlaceholder": "votre@email.com",
        "contact.form.subject": "Sujet",
        "contact.form.selectSubject": "Sélectionnez un sujet",
        "contact.form.subjectProject": "Proposition de projet",
        "contact.form.subjectJob": "Opportunité professionnelle",
        "contact.form.subjectCollab": "Collaboration",
        "contact.form.subjectQuestion": "Question",
        "contact.form.subjectOther": "Autre",
        "contact.form.message": "Message",
        "contact.form.messagePlaceholder": "Décrivez votre projet ou votre question...",
        "contact.form.send": "Envoyer le message",
        "contact.form.successTitle": "Message envoyé !",
        "contact.form.successMessage": "Merci pour votre message. Je vous répondrai dans les plus brefs délais.",
        "contact.availableStatus": "Disponible pour de nouveaux projets",
        "contact.availableTitle": "Prêt pour le prochain défi",
        "contact.availableDescription": "Je suis actuellement ouvert à de nouvelles opportunités en data science, machine learning et intelligence artificielle, particulièrement dans le domaine du sport.",
        "ai.title": "Assistant IA",
        "ai.subtitle": "Posez-moi vos questions sur Mathieu",
        "ai.placeholder": "Tapez votre question...",
        "ai.chatTitle": "Discutez avec mon assistant IA",
        "footer.madeWith": "Made with ❤️ and ☕ using HTML, CSS, JS"
    },
    "en": {
        "nav.home": "Home",
        "nav.about": "About",
        "nav.experience": "Experience",
        "nav.skills": "Skills",
        "nav.projects": "Projects",
        "nav.contact": "Contact",
        "hero.description": "Passionate about AI and its practical application in sports, computer vision and data analysis. I transform data into insights that make a difference.",
        "hero.contactMe": "Contact Me",
        "about.pageTitle": "About Me",
        "about.pageSubtitle": "Passionate about data science from the start, I built my expertise through varied experiences in innovative sectors. Discover my journey and my vision of artificial intelligence.",
        "about.story.title": "My Story",
        "about.story.subtitle": "How I got here",
        "about.story.p1": "My passion for data science was born from a fascination for mathematics and computer science. At 23, I have already had the opportunity to work on exciting projects in various fields: health, public services, and now sports.",
        "about.story.p2": "What really drives me is seeing the concrete impact of my analyses. Whether it is to improve the performance of a rugby team, optimize services for citizens, or help health professionals in their decisions, I always seek to create measurable value.",
        "about.story.p3": "Beyond code and models, I firmly believe that data science is above all a discipline at the service of humans. That is why I strive to make my analyses accessible and actionable, always keeping the end user in mind.",
        "about.expertise.title": "Fields of Expertise",
        "about.expertise.subtitle": "My technical specialties",
        "about.expertise.sports.title": "Sports Analytics",
        "about.expertise.sports.desc": "Sports performance analysis, player tracking, result prediction, and team strategy optimization.",
        "about.expertise.vision.title": "Computer Vision",
        "about.expertise.vision.desc": "Object detection, image recognition, semantic segmentation, and real-time video processing.",
        "about.expertise.nlp.title": "NLP & LLMs",
        "about.expertise.nlp.desc": "Natural Language Processing, intelligent chatbots, RAG systems, and language model fine-tuning.",
        "about.expertise.predictive.title": "Predictive Analytics",
        "about.expertise.predictive.desc": "Predictive modeling, time series, forecasting, and business process optimization.",
        "about.expertise.dataeng.title": "Data Engineering",
        "about.expertise.dataeng.desc": "Data architecture, ETL/ELT, data pipelines, and complex SQL query optimization.",
        "about.expertise.mlops.title": "MLOps",
        "about.expertise.mlops.desc": "Model deployment, CI/CD for ML, performance monitoring, and model lifecycle management.",
        "about.values.title": "Values & Approach",
        "about.values.subtitle": "How I work",
        "about.values.results.title": "Result Oriented",
        "about.values.results.desc": "Every project must have a measurable impact. I favor pragmatic solutions that bring real business value.",
        "about.values.collab.title": "Collaboration",
        "about.values.collab.desc": "Data science is teamwork. I like to exchange with business stakeholders to understand their needs and co-construct solutions.",
        "about.values.learning.title": "Continuous Learning",
        "about.values.learning.desc": "AI evolves rapidly. I dedicate time to technological watch and experimenting with new approaches.",
        "about.values.quality.title": "Code Quality",
        "about.values.quality.desc": "Clean, documented, tested code. I believe in best practices and code maintainability over the long term.",
        "about.values.dataviz.title": "Data Viz",
        "about.values.dataviz.desc": "Insights only have value if they are understood. I place great importance on visualization and communication of results.",
        "about.values.agile.title": "Agility",
        "about.values.agile.desc": "Rapid iteration, prototyping, continuous feedback. I adapt to constraints and adjust my approach according to needs.",
        "about.interests.title": "Beyond Code",
        "about.interests.subtitle": "My passions and interests",
        "about.interests.rugby.title": "Rugby",
        "about.interests.rugby.desc": "Big rugby fan (especially ASM Clermont!). It is this passion that naturally guided me towards sports analytics.",
        "about.interests.ai.title": "AI & Tech",
        "about.interests.ai.desc": "Constant watch on the latest advances in AI, LLMs, and emerging technologies. I like experimenting with new tools and frameworks.",
        "about.interests.outdoor.title": "Outdoor",
        "about.interests.outdoor.desc": "Hiking, trail running, cycling. I like to disconnect by exploring nature, especially the Pyrenees which are not far from Toulouse.",
        "about.interests.community.title": "Community",
        "about.interests.community.desc": "Participating in tech meetups, sharing my knowledge, and learning from others. The data science community is incredibly enriching.",
        "about.cta.title": "Want to discuss?",
        "about.cta.desc": "I am always open to new opportunities and collaborations. Do not hesitate to contact me!",
        "about.cta.btn_contact": "Contact Me",
        "about.cta.btn_projects": "See my projects",
        "experience.title": "Experience",
        "experience.subtitle": "My journey in Data Science & Artificial Intelligence",
        "experience.stats.years": "Years of experience",
        "experience.stats.companies": "Companies",
        "experience.stats.projects": "Completed projects",
        "experience.stats.technologies": "Technologies",
        "jobs.asm.date": "Sept 2025 - Present",
        "jobs.asm.description": "Sports performance analysis with advanced data science and machine learning techniques. Development of decision support tools for the technical staff.",
        "jobs.toulouse.date": "Sept 2024 - Sept 2025",
        "jobs.toulouse.description": "Development of AI solutions to optimize public services. Implementation of intelligent chatbots and recommendation systems to improve citizen experience.",
        "jobs.mipih.date": "Sept 2023 - Sept 2024",
        "jobs.mipih.description": "Creation of AI solutions to improve public health processes. Development of advanced NLP systems and creation of analytical dashboards for management.",
        "jobs.fdti.date": "Sept 2021 - Sept 2023",
        "jobs.fdti.description": "Creation of KPI dashboards and ML predictions. Automation of data cleaning processes and implementation of ETL pipelines.",
        "jobs.axione.date": "June 2021 - August 2021",
        "jobs.axione.description": "Support for IT teams in database administration. Data migration and SQL query optimization.",
        "education.title": "Education",
        "education.subtitle": "My academic background",
        "education.sigma.date": "Sept 2025 - Sept 2026",
        "education.sigma.title": "Advanced Master® Expert Data Science",
        "education.sigma.description": "Data Science Expert. Numerical analysis, Probability and Statistics, Big Data, Machine Learning.",
        "education.m2.date": "Sept 2024 - Sept 2025",
        "education.m2.title": "Master 2 MIAGE",
        "education.m2.description": "Data Engineering and Learning. Obtained with Honors (2nd in Class).",
        "education.m1.date": "Sept 2023 - Sept 2024",
        "education.m1.title": "Master 1 MIAGE",
        "education.m1.description": "Data Engineering and Learning. Excellence Award (Valedictorian).",
        "education.l3.date": "Sept 2022 - Sept 2023",
        "education.l3.title": "Bachelor 3 MIAGE",
        "education.l3.description": "Mathematics and Computer Science. Obtained with Honors.",
        "education.dut.date": "2020 - 2022",
        "education.dut.title": "DUT STID",
        "education.dut.description": "Statistics and Business Intelligence.",
        "skills.title": "Skills",
        "skills.subtitle": "Technologies and tools I master",
        "projects.title": "Projects",
        "projects.subtitle": "Some achievements close to my heart",
        "projects.sourceCode": "Source Code",
        "projects.pageTitle": "My Projects",
        "projects.pageSubtitle": "A selection of projects that illustrate my passion for data science, artificial intelligence and technological innovation.",
        "projects.filterAll": "All",
        "projects.filterAI": "AI & ML",
        "projects.filterSports": "Sports",
        "projects.filterNLP": "NLP",
        "projects.filterVision": "Vision",
        "projects.viewCode": "View code",
        "projects.status.completed": "Completed",
        "projects.status.ongoing": "In progress",
        "projects.rag.description": "Retrieval-Augmented Generation system using LLMs to improve response relevance by leveraging a knowledge base.",
        "projects.rugby.description": "In-depth analysis of rugby statistics with ML to identify performance patterns and predict match outcomes.",
        "projects.cv.description": "Deep learning application for real-time object detection and classification, with applications in the sports domain.",
        "projects.cta.title": "Have a project in mind?",
        "projects.cta.description": "I'm always looking for new exciting challenges. Don't hesitate to contact me to discuss your project!",
        "projects.cta.contact": "Contact me",
        "contact.title": "Contact",
        "contact.subtitle": "Want to collaborate? Let's talk!",
        "contact.location": "Location",
        "contact.pageTitle": "Contact Me",
        "contact.pageSubtitle": "A question, a project, an opportunity? I'd be happy to discuss with you. Don't hesitate to contact me through your preferred channel.",
        "contact.infoTitle": "Information",
        "contact.connect": "Connect",
        "contact.viewProfile": "View profile",
        "contact.emailText": "Send me a message",
        "contact.sendEmail": "Send an email",
        "contact.available": "Available for remote work",
        "contact.formTitle": "Send a message",
        "contact.form.name": "Full name",
        "contact.form.namePlaceholder": "Your name",
        "contact.form.email": "Email",
        "contact.form.emailPlaceholder": "your@email.com",
        "contact.form.subject": "Subject",
        "contact.form.selectSubject": "Select a subject",
        "contact.form.subjectProject": "Project proposal",
        "contact.form.subjectJob": "Job opportunity",
        "contact.form.subjectCollab": "Collaboration",
        "contact.form.subjectQuestion": "Question",
        "contact.form.subjectOther": "Other",
        "contact.form.message": "Message",
        "contact.form.messagePlaceholder": "Describe your project or question...",
        "contact.form.send": "Send message",
        "contact.form.successTitle": "Message sent!",
        "contact.form.successMessage": "Thank you for your message. I will get back to you as soon as possible.",
        "contact.availableStatus": "Available for new projects",
        "contact.availableTitle": "Ready for the next challenge",
        "contact.availableDescription": "I'm currently open to new opportunities in data science, machine learning and artificial intelligence, particularly in the sports domain.",
        "ai.title": "AI Assistant",
        "ai.subtitle": "Ask me questions about Mathieu",
        "ai.placeholder": "Type your question...",
        "ai.chatTitle": "Chat with my AI assistant",
        "footer.madeWith": "Made with ❤️ and ☕ using HTML, CSS, JS"
    },
    "es": {
        "nav.home": "Inicio",
        "nav.about": "Sobre mí",
        "nav.experience": "Experiencia",
        "nav.skills": "Competencias",
        "nav.projects": "Proyectos",
        "nav.contact": "Contacto",
        "hero.description": "Apasionado por la IA y su aplicación práctica en el deporte, la visión por computadora y el análisis de datos. Transformo los datos en insights que marcan la diferencia.",
        "hero.contactMe": "Contáctame",
        "about.pageTitle": "Sobre mí",
        "about.pageSubtitle": "Apasionado por la ciencia de datos desde mis inicios, construí mi experiencia a través de experiencias variadas en sectores innovadores. Descubre mi trayectoria y mi visión de la inteligencia artificial.",
        "about.story.title": "Mi Historia",
        "about.story.subtitle": "Cómo llegué hasta aquí",
        "about.story.p1": "Mi pasión por la ciencia de datos nació de una fascinación por las matemáticas y la informática. A los 23 años, ya he tenido la oportunidad de trabajar en proyectos apasionantes en diversos campos: salud, servicios públicos y ahora deportes.",
        "about.story.p2": "Lo que realmente me impulsa es ver el impacto concreto de mis análisis. Ya sea para mejorar el rendimiento de un equipo de rugby, optimizar servicios para ciudadanos o ayudar a profesionales de la salud en sus decisiones, siempre busco crear valor medible.",
        "about.story.p3": "Más allá del código y los modelos, creo firmemente que la ciencia de datos es ante todo una disciplina al servicio del ser humano. Por eso me esfuerzo por hacer que mis análisis sean accesibles y accionables, teniendo siempre en mente al usuario final.",
        "about.expertise.title": "Áreas de Experiencia",
        "about.expertise.subtitle": "Mis especialidades técnicas",
        "about.expertise.sports.title": "Sports Analytics",
        "about.expertise.sports.desc": "Análisis de rendimiento deportivo, seguimiento de jugadores, predicción de resultados y optimización de estrategias de equipo.",
        "about.expertise.vision.title": "Computer Vision",
        "about.expertise.vision.desc": "Detección de objetos, reconocimiento de imágenes, segmentación semántica y procesamiento de video en tiempo real.",
        "about.expertise.nlp.title": "NLP & LLMs",
        "about.expertise.nlp.desc": "Procesamiento del lenguaje natural, chatbots inteligentes, sistemas RAG y ajuste fino de modelos de lenguaje.",
        "about.expertise.predictive.title": "Predictive Analytics",
        "about.expertise.predictive.desc": "Modelado predictivo, series temporales, pronósticos y optimización de procesos comerciales.",
        "about.expertise.dataeng.title": "Data Engineering",
        "about.expertise.dataeng.desc": "Arquitectura de datos, ETL/ELT, tuberías de datos y optimización de consultas SQL complejas.",
        "about.expertise.mlops.title": "MLOps",
        "about.expertise.mlops.desc": "Despliegue de modelos, CI/CD para ML, monitoreo de rendimiento y gestión del ciclo de vida de modelos.",
        "about.values.title": "Valores y Enfoque",
        "about.values.subtitle": "Cómo trabajo",
        "about.values.results.title": "Orientado a Resultados",
        "about.values.results.desc": "Cada proyecto debe tener un impacto medible. Privilegio las soluciones pragmáticas que aportan un valor real al negocio.",
        "about.values.collab.title": "Colaboración",
        "about.values.collab.desc": "La ciencia de datos es un trabajo en equipo. Me gusta intercambiar con los profesionales para entender sus necesidades y co-construir soluciones.",
        "about.values.learning.title": "Aprendizaje Continuo",
        "about.values.learning.desc": "La IA evoluciona rápidamente. Dedico tiempo a la vigilancia tecnológica y a la experimentación con nuevos enfoques.",
        "about.values.quality.title": "Calidad del Código",
        "about.values.quality.desc": "Código limpio, documentado y probado. Creo en las buenas prácticas y en la mantenibilidad del código a largo plazo.",
        "about.values.dataviz.title": "Data Viz",
        "about.values.dataviz.desc": "Los insights solo tienen valor si se entienden. Doy gran importancia a la visualización y comunicación de los resultados.",
        "about.values.agile.title": "Agilidad",
        "about.values.agile.desc": "Iteración rápida, creación de prototipos, retroalimentación continua. Me adapto a las limitaciones y ajusto mi enfoque según las necesidades.",
        "about.interests.title": "Más allá del Código",
        "about.interests.subtitle": "Mis pasiones e intereses",
        "about.interests.rugby.title": "Rugby",
        "about.interests.rugby.desc": "¡Gran fanático del rugby (especialmente del ASM Clermont!). Es esta pasión la que me guió naturalmente hacia el análisis deportivo.",
        "about.interests.ai.title": "IA y Tecnología",
        "about.interests.ai.desc": "Vigilancia constante sobre los últimos avances en IA, LLMs y tecnologías emergentes. Me gusta experimentar con nuevas herramientas y marcos.",
        "about.interests.outdoor.title": "Outdoor",
        "about.interests.outdoor.desc": "Senderismo, trail running, ciclismo. Me gusta desconectar explorando la naturaleza, especialmente los Pirineos que no están lejos de Toulouse.",
        "about.interests.community.title": "Comunidad",
        "about.interests.community.desc": "Participar en meetups tecnológicos, compartir mis conocimientos y aprender de los demás. La comunidad de ciencia de datos es increíblemente enriquecedora.",
        "about.cta.title": "¿Quieres hablar?",
        "about.cta.desc": "Siempre estoy abierto a nuevas oportunidades y colaboraciones. ¡No dudes en contactarme!",
        "about.cta.btn_contact": "Contáctame",
        "about.cta.btn_projects": "Ver mis proyectos",
        "experience.title": "Experiencia",
        "experience.subtitle": "Mi trayectoria en Data Science e Inteligencia Artificial",
        "experience.stats.years": "Años de experiencia",
        "experience.stats.companies": "Empresas",
        "experience.stats.projects": "Proyectos realizados",
        "experience.stats.technologies": "Tecnologías",
        "jobs.asm.date": "Sept 2025 - Presente",
        "jobs.asm.description": "Análisis del rendimiento deportivo con técnicas avanzadas de data science y machine learning. Desarrollo de herramientas de apoyo a la decisión para el personal técnico.",
        "jobs.toulouse.date": "Sept 2024 - Sept 2025",
        "jobs.toulouse.description": "Desarrollo de soluciones de IA para optimizar los servicios públicos. Implementación de chatbots inteligentes y sistemas de recomendación para mejorar la experiencia ciudadana.",
        "jobs.mipih.date": "Sept 2023 - Sept 2024",
        "jobs.mipih.description": "Creación de soluciones de IA para mejorar los procesos de salud pública. Desarrollo de sistemas NLP avanzados y creación de cuadros de mando analíticos para la dirección.",
        "jobs.fdti.date": "Sept 2021 - Sept 2023",
        "jobs.fdti.description": "Creación de cuadros de mando KPI y predicciones ML. Automatización de procesos de limpieza de datos e implementación de pipelines ETL.",
        "jobs.axione.date": "Junio 2021 - Agosto 2021",
        "jobs.axione.description": "Soporte a equipos IT en la administración de bases de datos. Migración de datos y optimización de consultas SQL.",
        "education.title": "Formación",
        "education.subtitle": "Mi trayectoria académica",
        "education.sigma.date": "Sept 2025 - Sept 2026",
        "education.sigma.title": "Máster Especializado® Experto Data Science",
        "education.sigma.description": "Experto en Ciencia de Datos. Análisis numérico, Probabilidades y estadística, Big Data, Machine Learning.",
        "education.m2.date": "Sept 2024 - Sept 2025",
        "education.m2.title": "Máster 2 MIAGE",
        "education.m2.description": "Ingeniería de Datos y Aprendizaje. Obtenido con Mención Bien (2º de Promoción).",
        "education.m1.date": "Sept 2023 - Sept 2024",
        "education.m1.title": "Máster 1 MIAGE",
        "education.m1.description": "Ingeniería de Datos y Aprendizaje. Premio a la Excelencia (Mejor de Promoción).",
        "education.l3.date": "Sept 2022 - Sept 2023",
        "education.l3.title": "Licenciatura 3 MIAGE",
        "education.l3.description": "Matemáticas e informática. Obtenido con Mención Bastante Bien.",
        "education.dut.date": "2020 - 2022",
        "education.dut.title": "DUT STID",
        "education.dut.description": "Estadística e Informática Decisional.",
        "skills.title": "Competencias",
        "skills.subtitle": "Tecnologías y herramientas que domino",
        "projects.title": "Proyectos",
        "projects.subtitle": "Algunos logros que me importan",
        "projects.sourceCode": "Código fuente",
        "projects.pageTitle": "Mis Proyectos",
        "projects.pageSubtitle": "Una selección de proyectos que ilustran mi pasión por la ciencia de datos, la inteligencia artificial y la innovación tecnológica.",
        "projects.filterAll": "Todos",
        "projects.filterAI": "IA & ML",
        "projects.filterSports": "Deportes",
        "projects.filterNLP": "NLP",
        "projects.filterVision": "Visión",
        "projects.viewCode": "Ver código",
        "projects.status.completed": "Terminado",
        "projects.status.ongoing": "En curso",
        "projects.rag.description": "Sistema de Retrieval-Augmented Generation que utiliza LLMs para mejorar la relevancia de las respuestas aprovechando una base de conocimientos.",
        "projects.rugby.description": "Análisis profundo de estadísticas de rugby con ML para identificar patrones de rendimiento y predecir resultados de partidos.",
        "projects.cv.description": "Aplicación de deep learning para la detección y clasificación de objetos en tiempo real, con aplicaciones en el ámbito deportivo.",
        "projects.cta.title": "¿Tienes un proyecto en mente?",
        "projects.cta.description": "Siempre estoy buscando nuevos desafíos emocionantes. ¡No dudes en contactarme para discutir tu proyecto!",
        "projects.cta.contact": "Contáctame",
        "contact.title": "Contacto",
        "contact.subtitle": "¿Quieres colaborar? ¡Hablemos!",
        "contact.location": "Ubicación",
        "contact.pageTitle": "Contáctame",
        "contact.pageSubtitle": "¿Una pregunta, un proyecto, una oportunidad? Estaré encantado de hablar contigo. No dudes en contactarme a través del medio que prefieras.",
        "contact.infoTitle": "Información",
        "contact.connect": "Conectar",
        "contact.viewProfile": "Ver perfil",
        "contact.emailText": "Envíame un mensaje",
        "contact.sendEmail": "Enviar email",
        "contact.available": "Disponible para trabajo remoto",
        "contact.formTitle": "Enviar un mensaje",
        "contact.form.name": "Nombre completo",
        "contact.form.namePlaceholder": "Tu nombre",
        "contact.form.email": "Email",
        "contact.form.emailPlaceholder": "tu@email.com",
        "contact.form.subject": "Asunto",
        "contact.form.selectSubject": "Selecciona un asunto",
        "contact.form.subjectProject": "Propuesta de proyecto",
        "contact.form.subjectJob": "Oportunidad profesional",
        "contact.form.subjectCollab": "Colaboración",
        "contact.form.subjectQuestion": "Pregunta",
        "contact.form.subjectOther": "Otro",
        "contact.form.message": "Mensaje",
        "contact.form.messagePlaceholder": "Describe tu proyecto o pregunta...",
        "contact.form.send": "Enviar mensaje",
        "contact.form.successTitle": "¡Mensaje enviado!",
        "contact.form.successMessage": "Gracias por tu mensaje. Te responderé lo antes posible.",
        "contact.availableStatus": "Disponible para nuevos proyectos",
        "contact.availableTitle": "Listo para el próximo desafío",
        "contact.availableDescription": "Actualmente estoy abierto a nuevas oportunidades en ciencia de datos, machine learning e inteligencia artificial, particularmente en el ámbito deportivo.",
        "ai.title": "Asistente IA",
        "ai.subtitle": "Hazme preguntas sobre Mathieu",
        "ai.placeholder": "Escribe tu pregunta...",
        "ai.chatTitle": "Chatea con mi asistente IA",
        "footer.madeWith": "Hecho con ❤️ y ☕ usando HTML, CSS, JS"
    },
    "it": {
        "nav.home": "Home",
        "nav.about": "Chi sono",
        "nav.experience": "Esperienza",
        "nav.skills": "Competenze",
        "nav.projects": "Progetti",
        "nav.contact": "Contatto",
        "hero.description": "Appassionato di IA e della sua applicazione pratica nello sport, nella computer vision e nell'analisi dei dati. Trasformo i dati in insights che fanno la differenza.",
        "hero.contactMe": "Contattami",
        "about.pageTitle": "Chi sono",
        "about.pageSubtitle": "Appassionato di data science fin dagli inizi, ho costruito la mia esperienza attraverso esperienze diverse in settori innovativi. Scopri il mio percorso e la mia visione dell'intelligenza artificiale.",
        "about.story.title": "La mia Storia",
        "about.story.subtitle": "Come sono arrivato fin qui",
        "about.story.p1": "La mia passione per la data science è nata da una fascinazione per la matematica e l'informatica. A 23 anni, ho già avuto l'opportunità di lavorare su progetti entusiasmanti in vari settori: salute, servizi pubblici e ora sport.",
        "about.story.p2": "Ciò che mi guida davvero è vedere l'impatto concreto delle mie analisi. Che si tratti di migliorare le prestazioni di una squadra di rugby, ottimizzare i servizi per i cittadini o aiutare i professionisti della salute nelle loro decisioni, cerco sempre di creare valore misurabile.",
        "about.story.p3": "Oltre al codice e ai modelli, credo fermamente che la data science sia prima di tutto una disciplina al servizio dell'essere umano. Ecco perché mi sforzo di rendere le mie analisi accessibili e utilizzabili, tenendo sempre a mente l'utente finale.",
        "about.expertise.title": "Aree di Competenza",
        "about.expertise.subtitle": "Le mie specialità tecniche",
        "about.expertise.sports.title": "Sports Analytics",
        "about.expertise.sports.desc": "Analisi delle prestazioni sportive, tracciamento dei giocatori, previsione dei risultati e ottimizzazione delle strategie di squadra.",
        "about.expertise.vision.title": "Computer Vision",
        "about.expertise.vision.desc": "Rilevamento oggetti, riconoscimento immagini, segmentazione semantica ed elaborazione video in tempo reale.",
        "about.expertise.nlp.title": "NLP & LLM",
        "about.expertise.nlp.desc": "Elaborazione del linguaggio naturale, chatbot intelligenti, sistemi RAG e fine-tuning di modelli linguistici.",
        "about.expertise.predictive.title": "Predictive Analytics",
        "about.expertise.predictive.desc": "Modellazione predittiva, serie temporali, previsioni e ottimizzazione dei processi aziendali.",
        "about.expertise.dataeng.title": "Data Engineering",
        "about.expertise.dataeng.desc": "Architettura dei dati, ETL/ELT, pipeline di dati e ottimizzazione di query SQL complesse.",
        "about.expertise.mlops.title": "MLOps",
        "about.expertise.mlops.desc": "Distribuzione di modelli, CI/CD per ML, monitoraggio delle prestazioni e gestione del ciclo di vita dei modelli.",
        "about.values.title": "Valori e Approccio",
        "about.values.subtitle": "Come lavoro",
        "about.values.results.title": "Orientato ai Risultati",
        "about.values.results.desc": "Ogni progetto deve avere un impatto misurabile. Privilegio soluzioni pragmatiche che portano reale valore aziendale.",
        "about.values.collab.title": "Collaborazione",
        "about.values.collab.desc": "La data science è un lavoro di squadra. Mi piace scambiare idee con i professionisti per capire le loro esigenze e co-costruire soluzioni.",
        "about.values.learning.title": "Apprendimento Continuo",
        "about.values.learning.desc": "L'IA si evolve rapidamente. Dedico tempo alla vigilanza tecnologica e alla sperimentazione di nuovi approcci.",
        "about.values.quality.title": "Qualità del Codice",
        "about.values.quality.desc": "Codice pulito, documentato e testato. Credo nelle migliori pratiche e nella manutenibilità del codice a lungo termine.",
        "about.values.dataviz.title": "Data Viz",
        "about.values.dataviz.desc": "Gli insight hanno valore solo se vengono compresi. Do grande importanza alla visualizzazione e alla comunicazione dei risultati.",
        "about.values.agile.title": "Agilità",
        "about.values.agile.desc": "Iterazione rapida, prototipazione, feedback continuo. Mi adatto ai vincoli e adeguo il mio approccio in base alle esigenze.",
        "about.interests.title": "Oltre il Codice",
        "about.interests.subtitle": "Le mie passioni e interessi",
        "about.interests.rugby.title": "Rugby",
        "about.interests.rugby.desc": "Grande fan del rugby (specialmente dell'ASM Clermont!). È questa passione che mi ha guidato naturalmente verso la sports analytics.",
        "about.interests.ai.title": "IA e Tech",
        "about.interests.ai.desc": "Vigilanza costante sugli ultimi progressi in IA, LLM e tecnologie emergenti. Mi piace sperimentare con nuovi strumenti e framework.",
        "about.interests.outdoor.title": "Outdoor",
        "about.interests.outdoor.desc": "Escursionismo, trail running, ciclismo. Mi piace staccare esplorando la natura, specialmente i Pirenei che non sono lontani da Tolosa.",
        "about.interests.community.title": "Comunità",
        "about.interests.community.desc": "Partecipare a meetup tecnologici, condividere le mie conoscenze e imparare dagli altri. La comunità di data science è incredibilmente arricchente.",
        "about.cta.title": "Vuoi parlarne?",
        "about.cta.desc": "Sono sempre aperto a nuove opportunità e collaborazioni. Non esitare a contattarmi!",
        "about.cta.btn_contact": "Contattami",
        "about.cta.btn_projects": "Vedi i miei progetti",
        "experience.title": "Esperienza",
        "experience.subtitle": "Il mio percorso nella Data Science e nell'Intelligenza Artificiale",
        "experience.stats.years": "Anni di esperienza",
        "experience.stats.companies": "Aziende",
        "experience.stats.projects": "Progetti realizzati",
        "experience.stats.technologies": "Tecnologie",
        "jobs.asm.date": "Sett 2025 - Presente",
        "jobs.asm.description": "Analisi delle prestazioni sportive con tecniche avanzate di data science e machine learning. Sviluppo di strumenti di supporto alle decisioni per lo staff tecnico.",
        "jobs.toulouse.date": "Sett 2024 - Sett 2025",
        "jobs.toulouse.description": "Sviluppo di soluzioni di IA per ottimizzare i servizi pubblici. Implementazione di chatbot intelligenti e sistemi di raccomandazione per migliorare l'esperienza dei cittadini.",
        "jobs.mipih.date": "Sett 2023 - Sett 2024",
        "jobs.mipih.description": "Creazione di soluzioni di IA per migliorare i processi di salute pubblica. Sviluppo di sistemi NLP avanzati e creazione di dashboard analitiche per la direzione.",
        "jobs.fdti.date": "Sett 2021 - Sett 2023",
        "jobs.fdti.description": "Creazione di dashboard KPI e previsioni ML. Automazione dei processi di pulizia dei dati e implementazione di pipeline ETL.",
        "jobs.axione.date": "Giugno 2021 - Agosto 2021",
        "jobs.axione.description": "Supporto ai team IT nell'amministrazione di database. Migrazione dati e ottimizzazione delle query SQL.",
        "education.title": "Formazione",
        "education.subtitle": "Il mio percorso accademico",
        "education.sigma.date": "Sett 2025 - Sett 2026",
        "education.sigma.title": "Master Specializzato® Esperto Data Science",
        "education.sigma.description": "Esperto in Data Science. Analisi numerica, Probabilità e statistica, Big Data, Machine Learning.",
        "education.m2.date": "Sett 2024 - Sett 2025",
        "education.m2.title": "Master 2 MIAGE",
        "education.m2.description": "Ingegneria dei Dati e Apprendimento. Ottenuto con Menzione Bene (2° del Corso).",
        "education.m1.date": "Sett 2023 - Sett 2024",
        "education.m1.title": "Master 1 MIAGE",
        "education.m1.description": "Ingegneria dei Dati e Apprendimento. Premio di Eccellenza (Migliore del Corso).",
        "education.l3.date": "Sett 2022 - Sett 2023",
        "education.l3.title": "Laurea 3 MIAGE",
        "education.l3.description": "Matematica e informatica. Ottenuto con Menzione Abbastanza Bene.",
        "education.dut.date": "2020 - 2022",
        "education.dut.title": "DUT STID",
        "education.dut.description": "Statistica e Informatica Decisionale.",
        "skills.title": "Competenze",
        "skills.subtitle": "Tecnologie e strumenti che padroneggio",
        "projects.title": "Progetti",
        "projects.subtitle": "Alcuni risultati che mi stanno a cuore",
        "projects.sourceCode": "Codice sorgente",
        "projects.pageTitle": "I miei Progetti",
        "projects.pageSubtitle": "Una selezione di progetti che illustrano la mia passione per la data science, l'intelligenza artificiale e l'innovazione tecnologica.",
        "projects.filterAll": "Tutti",
        "projects.filterAI": "IA & ML",
        "projects.filterSports": "Sport",
        "projects.filterNLP": "NLP",
        "projects.filterVision": "Visione",
        "projects.viewCode": "Vedi codice",
        "projects.status.completed": "Completato",
        "projects.status.ongoing": "In corso",
        "projects.rag.description": "Sistema di Retrieval-Augmented Generation che utilizza LLM per migliorare la pertinenza delle risposte basandosi su una base di conoscenze.",
        "projects.rugby.description": "Analisi approfondita delle statistiche del rugby con ML per identificare i pattern di prestazione e prevedere i risultati delle partite.",
        "projects.cv.description": "Applicazione di deep learning per il rilevamento e la classificazione di oggetti in tempo reale, con applicazioni nel campo sportivo.",
        "projects.cta.title": "Hai un progetto in mente?",
        "projects.cta.description": "Sono sempre alla ricerca di nuove sfide entusiasmanti. Non esitare a contattarmi per discutere del tuo progetto!",
        "projects.cta.contact": "Contattami",
        "contact.title": "Contatto",
        "contact.subtitle": "Vuoi collaborare? Parliamone!",
        "contact.location": "Posizione",
        "contact.pageTitle": "Contattami",
        "contact.pageSubtitle": "Una domanda, un progetto, un'opportunità? Sarò felice di parlare con te. Non esitare a contattarmi attraverso il canale che preferisci.",
        "contact.infoTitle": "Informazioni",
        "contact.connect": "Connetti",
        "contact.viewProfile": "Vedi profilo",
        "contact.emailText": "Inviami un messaggio",
        "contact.sendEmail": "Invia email",
        "contact.available": "Disponibile per lavoro remoto",
        "contact.formTitle": "Invia un messaggio",
        "contact.form.name": "Nome completo",
        "contact.form.namePlaceholder": "Il tuo nome",
        "contact.form.email": "Email",
        "contact.form.emailPlaceholder": "tua@email.com",
        "contact.form.subject": "Oggetto",
        "contact.form.selectSubject": "Seleziona un oggetto",
        "contact.form.subjectProject": "Proposta di progetto",
        "contact.form.subjectJob": "Opportunità professionale",
        "contact.form.subjectCollab": "Collaborazione",
        "contact.form.subjectQuestion": "Domanda",
        "contact.form.subjectOther": "Altro",
        "contact.form.message": "Messaggio",
        "contact.form.messagePlaceholder": "Descrivi il tuo progetto o la tua domanda...",
        "contact.form.send": "Invia messaggio",
        "contact.form.successTitle": "Messaggio inviato!",
        "contact.form.successMessage": "Grazie per il tuo messaggio. Ti risponderò il prima possibile.",
        "contact.availableStatus": "Disponibile per nuovi progetti",
        "contact.availableTitle": "Pronto per la prossima sfida",
        "contact.availableDescription": "Attualmente sono aperto a nuove opportunità in data science, machine learning e intelligenza artificiale, in particolare nel campo sportivo.",
        "ai.title": "Assistente IA",
        "ai.subtitle": "Fammi domande su Mathieu",
        "ai.placeholder": "Scrivi la tua domanda...",
        "ai.chatTitle": "Chatta con il mio assistente IA",
        "footer.madeWith": "Realizzato con ❤️ e ☕ usando HTML, CSS, JS"
    }
};



let currentLang = localStorage.getItem('language') || 'fr';
const langSelector = document.getElementById('langSelector');

if (langSelector) {
    langSelector.value = currentLang;
    langSelector.addEventListener('change', (e) => {
        currentLang = e.target.value;
        localStorage.setItem('language', currentLang);
        updateLanguage();
    });
}

// Apply translations on load
updateLanguage();

function updateLanguage() {
    const t = translations[currentLang];
    
    // Update elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            el.textContent = t[key];
        }
    });
    
    // Update placeholders with data-i18n-placeholder attribute
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (t[key]) {
            el.setAttribute('placeholder', t[key]);
        }
    });
    
    // Update titles with data-i18n-title attribute
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
        const key = el.getAttribute('data-i18n-title');
        if (t[key]) {
            el.setAttribute('title', t[key]);
        }
    });
    
    // Update typing texts if they exist
    if (typeof texts !== 'undefined') {
        if (t.hero && t.hero.tagline1) {
            texts[0] = t.hero.tagline1 || 'Data Scientist';
            texts[1] = t.hero.tagline2 || 'AI Specialist';
            texts[2] = t.hero.tagline3 || 'ML Engineer';
            texts[3] = t.hero.tagline4 || 'Sports Analytics';
        }
    }
    
    // Update AI Chat if it exists
    if (typeof aiChatSuggestions !== 'undefined' && aiChatData[currentLang]) {
        updateSuggestions();
    }
}

// ====================================
// AI CHAT BOX WITH STREAMING EFFECT
// ====================================
const aiChatData = {
    fr: {
        welcome: "Bonjour ! Je suis l'assistant virtuel de Mathieu. Posez-moi vos questions sur son parcours, ses compétences ou ses projets.",
        suggestions: [
            "Parle-moi des hobbies de Mathieu",
            "Quelles sont ses compétences principales ?",
            "Décris son parcours professionnel",
            "Pourquoi la data science ?"
        ],
        responses: {
            "Parle-moi des hobbies de Mathieu": "Mathieu est un grand passionné de sport, notamment supporter du Toulouse FC et du Stade Toulousain. Cette passion pour le sport l'a naturellement orienté vers les sports analytics. Il aime aussi la randonnée et la nature, profitant des Pyrénées proches de Toulouse pour se ressourcer. C'est aussi un passionné de tech et d'IA, passant son temps libre à expérimenter les derniers frameworks de machine learning et suivre l'actualité des LLMs.",
            "Quelles sont ses compétences principales ?": "Mathieu excelle en Python (Pandas, NumPy, Scikit-learn), maîtrise le deep learning avec TensorFlow et PyTorch, et possède une expertise solide en NLP grâce à Hugging Face, Langchain et Transformers. Il est également compétent en data engineering avec SQL, Elastic Stack et la création de pipelines de données (Dataiku). Côté développement, il utilise Vue.js, Kotlin et Spring Boot. Son domaine de prédilection reste la data science, la computer vision et les sports analytics.",
            "Décris son parcours professionnel": "Mathieu a débuté chez Axione en tant qu'Assistant Administrateur de Base de Données, sa première expérience professionnelle. Il a ensuite rejoint FDTI Consulting où il a créé des dashboards KPI et fait de la modélisation prédictive. Il a poursuivi chez MIPIH pour travailler sur l'IA appliquée à la santé avec du NLP avancé. À Toulouse Métropole, il a développé des solutions d'IA pour les services publics. Actuellement, il est Data Scientist à l'ASM Clermont Auvergne où il analyse la performance sportive, un rôle qui combine parfaitement sa passion pour le rugby et la data science.",
            "Pourquoi la data science ?": "Pour Mathieu, la data science n'est pas qu'une question de code et d'algorithmes. C'est avant tout une discipline au service de l'humain. Il est motivé par l'impact concret de ses analyses : améliorer la performance d'une équipe, optimiser des services pour les citoyens, ou aider des professionnels de santé. Il croit fermement que la valeur de la data science réside dans sa capacité à créer des insights actionnables et accessibles pour l'utilisateur final.",
            "qui est mathieu": "Mathieu Vassal est un Data Scientist et spécialiste en Intelligence Artificielle basé à Toulouse. Passionné par l'application concrète de l'IA dans le sport, la computer vision et l'analyse de données, il transforme les données en insights qui font la différence.",
            "formations": "Mathieu a suivi une formation solide en data science et intelligence artificielle. Son parcours académique lui a permis de développer une expertise technique complète, du machine learning au deep learning, en passant par le NLP et la computer vision.",
            "projets": "Mathieu a travaillé sur plusieurs projets passionnants : un système RAG avec des LLMs, des analyses statistiques avancées de rugby, et des applications de computer vision pour la détection d'objets en temps réel. Chaque projet reflète sa passion pour l'IA et son application pratique.",
            "contact": "Vous pouvez contacter Mathieu via LinkedIn (mathieu-vassal), GitHub (MathAvecH), ou par email. Il est basé à Toulouse et est toujours ouvert à de nouvelles opportunités passionnantes dans le domaine de la data science et de l'IA.",
            "hobbies": "Mathieu est un grand passionné de rugby, notamment supporter de l'ASM Clermont Auvergne. Cette passion pour le sport l'a naturellement orienté vers les sports analytics. Il aime aussi la randonnée et le vélo, profitant des Pyrénées proches de Toulouse pour se ressourcer.",
            "compétences": "Mathieu excelle en Python (Pandas, NumPy, Scikit-learn), maîtrise le deep learning avec TensorFlow et PyTorch, et possède une expertise solide en NLP grâce à Hugging Face et Transformers. Il est également compétent en data engineering avec SQL, Elastic Search et la création de pipelines de données.",
            "parcours": "Mathieu a débuté chez Axione en tant qu'Assistant Administrateur de Base de Données, sa première expérience professionnelle. Il a ensuite rejoint FDTI Consulting, puis MIPIH et Toulouse Métropole. Actuellement, il est Data Scientist à l'ASM Clermont Auvergne.",
            "rugby": "Le rugby est une passion centrale pour Mathieu. Fan inconditionnel du Stade Toulousain, il a naturellement orienté sa carrière vers les sports analytics. Son poste actuel à l'ASM lui permet de combiner sa passion pour le sport et son expertise en data science."
        }
    },
    en: {
        welcome: "Hi! I'm Mathieu's virtual assistant. What would you like to know?",
        suggestions: [
            "Tell me about Mathieu's hobbies",
            "What are his main skills?",
            "Describe his career path",
            "Why data science?"
        ],
        responses: {
            "Tell me about Mathieu's hobbies": "Mathieu is a huge rugby fan, especially supporting ASM Clermont Auvergne. This passion for sports naturally led him to sports analytics. He also enjoys hiking and cycling, taking advantage of the Pyrenees near Toulouse to recharge. He's also a tech and AI enthusiast, spending his free time experimenting with the latest machine learning frameworks and following LLM news.",
            "What are his main skills?": "Mathieu excels in Python (Pandas, NumPy, Scikit-learn), masters deep learning with TensorFlow and PyTorch, and has solid expertise in NLP through Hugging Face and Transformers. He's also skilled in data engineering with SQL, Elastic Stack, and building data pipelines. On the development side, he uses Kotlin and Spring AI. His favorite area remains computer vision and sports analytics.",
            "Describe his career path": "Mathieu started at FDTI Consulting creating KPI dashboards and predictive modeling. He then joined MIPIH to work on AI applied to healthcare with advanced NLP. At Toulouse Métropole, he developed AI solutions for public services. Currently, he's a Data Scientist at ASM Clermont Auvergne analyzing sports performance - a role that perfectly combines his passion for rugby and data science. He also interned at Axione as a database administrator assistant.",
            "Why data science?": "For Mathieu, data science isn't just about code and algorithms. It's primarily a discipline serving humans. He's driven by the concrete impact of his analyses: improving team performance, optimizing citizen services, or helping healthcare professionals. He firmly believes that data science's value lies in its ability to create actionable and accessible insights for end users."
        }
    },
    es: {
        welcome: "¡Hola! Soy el asistente virtual de Mathieu. ¿Qué quieres saber?",
        suggestions: [
            "Háblame de los hobbies de Mathieu",
            "¿Cuáles son sus principales habilidades?",
            "Describe su trayectoria profesional",
            "¿Por qué data science?"
        ],
        responses: {
            "Háblame de los hobbies de Mathieu": "Mathieu es un gran fan del rugby, especialmente seguidor del ASM Clermont Auvergne. Esta pasión por el deporte lo llevó naturalmente hacia los sports analytics. También le gusta el senderismo y el ciclismo, aprovechando los Pirineos cercanos a Toulouse para recargarse. Es también un apasionado de la tecnología y la IA, pasando su tiempo libre experimentando con los últimos frameworks de machine learning y siguiendo las noticias sobre LLMs.",
            "¿Cuáles son sus principales habilidades?": "Mathieu sobresale en Python (Pandas, NumPy, Scikit-learn), domina el deep learning con TensorFlow y PyTorch, y tiene experiencia sólida en NLP gracias a Hugging Face y Transformers. También es competente en data engineering con SQL, Elastic Stack y la creación de pipelines de datos. En desarrollo, utiliza Kotlin y Spring AI. Su área favorita sigue siendo computer vision y sports analytics.",
            "Describe su trayectoria profesional": "Mathieu comenzó en FDTI Consulting creando dashboards KPI y modelización predictiva. Luego se unió a MIPIH para trabajar en IA aplicada a la salud con NLP avanzado. En Toulouse Métropole, desarrolló soluciones de IA para servicios públicos. Actualmente, es Data Scientist en ASM Clermont Auvergne analizando rendimiento deportivo - un rol que combina perfectamente su pasión por el rugby y la data science. También hizo prácticas en Axione como asistente administrador de bases de datos.",
            "¿Por qué data science?": "Para Mathieu, la data science no es solo código y algoritmos. Es principalmente una disciplina al servicio del ser humano. Está motivado por el impacto concreto de sus análisis: mejorar el rendimiento de un equipo, optimizar servicios para ciudadanos, o ayudar a profesionales de la salud. Cree firmemente que el valor de la data science reside en su capacidad para crear insights accionables y accesibles para el usuario final."
        }
    },
    it: {
        welcome: "Ciao! Sono l'assistente virtuale di Mathieu. Cosa vorresti sapere?",
        suggestions: [
            "Parlami degli hobby di Mathieu",
            "Quali sono le sue competenze principali?",
            "Descrivi il suo percorso professionale",
            "Perché data science?"
        ],
        responses: {
            "Parlami degli hobby di Mathieu": "Mathieu è un grande appassionato di rugby, in particolare tifoso dell'ASM Clermont Auvergne. Questa passione per lo sport lo ha naturalmente orientato verso gli sports analytics. Gli piace anche fare escursioni e andare in bicicletta, approfittando dei Pirenei vicino a Toulouse per ricaricarsi. È anche un appassionato di tecnologia e IA, passando il tempo libero a sperimentare con gli ultimi framework di machine learning e seguendo le notizie sui LLM.",
            "Quali sono le sue competenze principali?": "Mathieu eccelle in Python (Pandas, NumPy, Scikit-learn), padroneggia il deep learning con TensorFlow e PyTorch, e ha una solida esperienza in NLP grazie a Hugging Face e Transformers. È anche competente in data engineering con SQL, Elastic Stack e la creazione di pipeline di dati. Lato sviluppo, utilizza Kotlin e Spring AI. La sua area preferita rimane computer vision e sports analytics.",
            "Descrivi il suo percorso professionale": "Mathieu ha iniziato in FDTI Consulting creando dashboard KPI e modellazione predittiva. Poi è entrato in MIPIH per lavorare sull'IA applicata alla sanità con NLP avanzato. A Toulouse Métropole, ha sviluppato soluzioni di IA per i servizi pubblici. Attualmente è Data Scientist all'ASM Clermont Auvergne analizzando le prestazioni sportive - un ruolo che combina perfettamente la sua passione per il rugby e la data science. Ha anche fatto uno stage in Axione come assistente amministratore di database.",
            "Perché data science?": "Per Mathieu, la data science non è solo codice e algoritmi. È principalmente una disciplina al servizio dell'essere umano. È motivato dall'impatto concreto delle sue analisi: migliorare le prestazioni di una squadra, ottimizzare i servizi per i cittadini, o aiutare i professionisti della sanità. Crede fermamente che il valore della data science risieda nella sua capacità di creare insights azionabili e accessibili per l'utente finale."
        }
    }
};

const aiChatTrigger = document.getElementById('aiChatTrigger');
const aiChatBox = document.getElementById('aiChatBox');
const aiChatClose = document.getElementById('aiChatClose');
const aiChatMessages = document.getElementById('aiChatMessages');
const aiChatSuggestions = document.getElementById('aiChatSuggestions');
const aiChatInput = document.getElementById('aiChatInput');
const aiChatSend = document.getElementById('aiChatSend');

if (aiChatTrigger) {
    aiChatTrigger.addEventListener('click', () => {
        aiChatBox.classList.toggle('open');
        if (aiChatBox.classList.contains('open') && aiChatMessages.children.length === 0) {
            addAIMessage(aiChatData[currentLang].welcome);
            updateSuggestions();
        }
        if (aiChatBox.classList.contains('open') && aiChatInput) {
            setTimeout(() => aiChatInput.focus(), 300);
        }
    });
}

if (aiChatClose) {
    aiChatClose.addEventListener('click', () => {
        aiChatBox.classList.remove('open');
    });
}

if (aiChatSend) {
    aiChatSend.addEventListener('click', () => {
        handleUserInput();
    });
}

if (aiChatInput) {
    aiChatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleUserInput();
        }
    });
}

function handleUserInput() {
    const input = aiChatInput.value.trim();
    if (!input) return;
    
    addUserMessage(input);
    aiChatInput.value = '';
    
    // Hide suggestions after first question
    if (aiChatSuggestions && aiChatSuggestions.style.display !== 'none') {
        aiChatSuggestions.style.display = 'none';
    }
    
    // Find best matching response
    const response = findBestResponse(input);
    if (response) {
        addAIMessage(response, true);
    } else {
        const defaultResponse = currentLang === 'fr' 
            ? "Je n'ai pas de réponse spécifique à cette question, mais je peux vous parler du parcours de Mathieu, de ses compétences, de ses hobbies ou de sa passion pour la data science. N'hésitez pas à me poser une autre question !"
            : currentLang === 'en'
            ? "I don't have a specific answer to that question, but I can tell you about Mathieu's career, his skills, his hobbies, or his passion for data science. Feel free to ask me another question!"
            : currentLang === 'es'
            ? "No tengo una respuesta específica a esa pregunta, pero puedo hablarle sobre la carrera de Mathieu, sus habilidades, sus hobbies o su pasión por la data science. ¡No dude en hacerme otra pregunta!"
            : "Non ho una risposta specifica a questa domanda, ma posso parlarti della carriera di Mathieu, delle sue competenze, dei suoi hobby o della sua passione per la data science. Non esitare a farmi un'altra domanda!";
        addAIMessage(defaultResponse, true);
    }
}

function findBestResponse(input) {
    const data = aiChatData[currentLang];
    const inputLower = input.toLowerCase();
    
    // Try exact match first
    for (const [question, response] of Object.entries(data.responses)) {
        if (question.toLowerCase() === inputLower) {
            return response;
        }
    }
    
    // Try partial match with keywords
    const keywords = {
        fr: {
            hobbies: ['hobby', 'hobbies', 'loisir', 'passion', 'rugby', 'sport'],
            skills: ['compétence', 'skill', 'technologie', 'python', 'ai', 'ia'],
            career: ['parcours', 'expérience', 'carrière', 'travail', 'job', 'poste'],
            why: ['pourquoi', 'motivation', 'raison'],
            contact: ['contact', 'email', 'linkedin', 'joindre'],
            projects: ['projet', 'réalisation', 'travaux'],
            formation: ['formation', 'étude', 'diplôme', 'école']
        },
        en: {
            hobbies: ['hobby', 'hobbies', 'leisure', 'passion', 'rugby', 'sport'],
            skills: ['skill', 'competence', 'technology', 'python', 'ai'],
            career: ['career', 'experience', 'work', 'job', 'position'],
            why: ['why', 'motivation', 'reason'],
            contact: ['contact', 'email', 'linkedin', 'reach'],
            projects: ['project', 'work', 'achievement'],
            formation: ['education', 'study', 'degree', 'school']
        }
    };
    
    const langKeywords = keywords[currentLang] || keywords.fr;
    
    for (const [category, terms] of Object.entries(langKeywords)) {
        for (const term of terms) {
            if (inputLower.includes(term)) {
                // Map category to response key
                const responseKeys = {
                    hobbies: currentLang === 'fr' ? 'hobbies' : 'Tell me about Mathieu\'s hobbies',
                    skills: currentLang === 'fr' ? 'compétences' : 'What are his main skills?',
                    career: currentLang === 'fr' ? 'parcours' : 'Describe his career path',
                    why: currentLang === 'fr' ? 'Pourquoi la data science ?' : 'Why data science?',
                    contact: currentLang === 'fr' ? 'contact' : 'contact',
                    projects: currentLang === 'fr' ? 'projets' : 'projects',
                    formation: currentLang === 'fr' ? 'formations' : 'formations'
                };
                
                const key = responseKeys[category];
                if (data.responses[key]) {
                    return data.responses[key];
                }
            }
        }
    }
    
    return null;
}

function addUserMessage(text) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'ai-message user';
    messageDiv.innerHTML = `<div class="ai-message-content">${text}</div>`;
    aiChatMessages.appendChild(messageDiv);
    aiChatMessages.scrollTop = aiChatMessages.scrollHeight;
}

function addAIMessage(text, stream = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'ai-message';
    const contentDiv = document.createElement('div');
    contentDiv.className = 'ai-message-content';
    messageDiv.appendChild(contentDiv);
    aiChatMessages.appendChild(messageDiv);
    
    if (stream) {
        // Show typing indicator
        const typingDiv = document.createElement('div');
        typingDiv.className = 'typing-indicator';
        typingDiv.innerHTML = '<div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div>';
        aiChatMessages.appendChild(typingDiv);
        aiChatMessages.scrollTop = aiChatMessages.scrollHeight;
        
        setTimeout(() => {
            typingDiv.remove();
            streamText(contentDiv, text);
        }, 800 + Math.random() * 400);
    } else {
        contentDiv.textContent = text;
        aiChatMessages.scrollTop = aiChatMessages.scrollHeight;
    }
}

function streamText(element, text, index = 0) {
    if (index < text.length) {
        element.textContent += text[index];
        aiChatMessages.scrollTop = aiChatMessages.scrollHeight;
        // Variable speed for more realistic streaming
        const delay = text[index] === '.' || text[index] === '!' || text[index] === '?' ? 150 : 
                     text[index] === ',' || text[index] === ';' ? 100 : 
                     text[index] === ' ' ? 30 : 
                     15 + Math.random() * 15;
        setTimeout(() => streamText(element, text, index + 1), delay);
    }
}

function updateSuggestions() {
    if (!aiChatSuggestions) return;
    
    aiChatSuggestions.innerHTML = '';
    const data = aiChatData[currentLang];
    
    data.suggestions.forEach(suggestion => {
        const btn = document.createElement('button');
        btn.className = 'ai-suggestion';
        btn.textContent = suggestion;
        btn.addEventListener('click', () => handleSuggestionClick(suggestion));
        aiChatSuggestions.appendChild(btn);
    });
}

function handleSuggestionClick(question) {
    addUserMessage(question);
    
    const data = aiChatData[currentLang];
    const response = data.responses[question];
    
    if (response) {
        addAIMessage(response, true);
    }
    
    // Hide suggestions after first question
    if (aiChatSuggestions) {
        aiChatSuggestions.style.display = 'none';
    }
}

console.log('%c✨ Enhanced features loaded!', 'color: #10b981; font-size: 16px; font-weight: bold;');
console.log('%c🌓 Dark/Light mode available', 'color: #3b82f6; font-size: 14px;');
console.log('%c🌍 Multi-language support: FR, EN, ES, IT', 'color: #8b5cf6; font-size: 14px;');
console.log('%c🤖 AI Chat assistant ready', 'color: #f59e0b; font-size: 14px;');
