// ====================================
// LOADING SCREEN
// ====================================
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loadingScreen').classList.add('hidden');
    }, 1000);
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
    cursor.classList.add('click');
});

document.addEventListener('mouseup', () => {
    cursor.classList.remove('click');
});

// Hover effects for interactive elements
document.querySelectorAll('a, button, .btn, .skill-card, .project-card, .contact-card, .stat-card, .orbit-icon').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursorFollower.style.transform = 'translate(-50%, -50%) scale(1.5)';
    });
    el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
    });
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
console.log('%c💡 Try the Konami Code: ↑↑↓↓←→←→BA', 'color: #3b82f6; font-size: 14px;');
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
    fr: {
        home: 'Accueil',
        about: 'À propos',
        experience: 'Expérience',
        skills: 'Compétences',
        projects: 'Projets',
        contact: 'Contact',
        heroTagline1: 'Data Scientist',
        heroTagline2: 'AI Specialist',
        heroTagline3: 'ML Engineer',
        heroTagline4: 'Sports Analytics',
        heroDescription: "Passionné par l'IA et son application concrète dans le sport, la computer vision et l'analyse de données. Je transforme les données en insights qui font la différence.",
        contactMe: 'Me contacter',
        experienceTitle: 'Expérience',
        experienceSubtitle: 'Mon parcours en Data Science & Intelligence Artificielle',
        yearsExp: 'Années d\'expérience',
        companies: 'Entreprises',
        projectsDone: 'Projets réalisés',
        technologies: 'Technologies',
        skillsTitle: 'Compétences',
        skillsSubtitle: 'Technologies et outils que je maîtrise',
        projectsTitle: 'Projets',
        projectsSubtitle: 'Quelques réalisations qui me tiennent à cœur',
        contactTitle: 'Contact',
        contactSubtitle: 'Envie de collaborer ? Discutons !',
        location: 'Localisation',
        madeWith: 'Fait avec passion à Toulouse',
        aiChatTitle: 'Ask me anything',
        aiChatPlaceholder: 'Posez-moi une question...'
    },
    en: {
        home: 'Home',
        about: 'About',
        experience: 'Experience',
        skills: 'Skills',
        projects: 'Projects',
        contact: 'Contact',
        heroTagline1: 'Data Scientist',
        heroTagline2: 'AI Specialist',
        heroTagline3: 'ML Engineer',
        heroTagline4: 'Sports Analytics',
        heroDescription: "Passionate about AI and its practical application in sports, computer vision and data analysis. I transform data into actionable insights.",
        contactMe: 'Contact me',
        experienceTitle: 'Experience',
        experienceSubtitle: 'My journey in Data Science & Artificial Intelligence',
        yearsExp: 'Years of experience',
        companies: 'Companies',
        projectsDone: 'Projects completed',
        technologies: 'Technologies',
        skillsTitle: 'Skills',
        skillsSubtitle: 'Technologies and tools I master',
        projectsTitle: 'Projects',
        projectsSubtitle: 'Some achievements close to my heart',
        contactTitle: 'Contact',
        contactSubtitle: 'Want to collaborate? Let\'s talk!',
        location: 'Location',
        madeWith: 'Made with passion in Toulouse',
        aiChatTitle: 'Ask me anything',
        aiChatPlaceholder: 'Ask me a question...'
    },
    es: {
        home: 'Inicio',
        about: 'Acerca de',
        experience: 'Experiencia',
        skills: 'Habilidades',
        projects: 'Proyectos',
        contact: 'Contacto',
        heroTagline1: 'Data Scientist',
        heroTagline2: 'AI Specialist',
        heroTagline3: 'ML Engineer',
        heroTagline4: 'Sports Analytics',
        heroDescription: "Apasionado por la IA y su aplicación práctica en deportes, computer vision y análisis de datos. Transformo datos en insights accionables.",
        contactMe: 'Contáctame',
        experienceTitle: 'Experiencia',
        experienceSubtitle: 'Mi trayectoria en Data Science e Inteligencia Artificial',
        yearsExp: 'Años de experiencia',
        companies: 'Empresas',
        projectsDone: 'Proyectos realizados',
        technologies: 'Tecnologías',
        skillsTitle: 'Habilidades',
        skillsSubtitle: 'Tecnologías y herramientas que domino',
        projectsTitle: 'Proyectos',
        projectsSubtitle: 'Algunos logros que me importan',
        contactTitle: 'Contacto',
        contactSubtitle: '¿Quieres colaborar? ¡Hablemos!',
        location: 'Ubicación',
        madeWith: 'Hecho con pasión en Toulouse',
        aiChatTitle: 'Pregúntame lo que quieras',
        aiChatPlaceholder: 'Hazme una pregunta...'
    },
    it: {
        home: 'Home',
        about: 'Chi sono',
        experience: 'Esperienza',
        skills: 'Competenze',
        projects: 'Progetti',
        contact: 'Contatto',
        heroTagline1: 'Data Scientist',
        heroTagline2: 'AI Specialist',
        heroTagline3: 'ML Engineer',
        heroTagline4: 'Sports Analytics',
        heroDescription: "Appassionato di IA e della sua applicazione pratica nello sport, computer vision e analisi dati. Trasformo i dati in insights azionabili.",
        contactMe: 'Contattami',
        experienceTitle: 'Esperienza',
        experienceSubtitle: 'Il mio percorso in Data Science e Intelligenza Artificiale',
        yearsExp: 'Anni di esperienza',
        companies: 'Aziende',
        projectsDone: 'Progetti realizzati',
        technologies: 'Tecnologie',
        skillsTitle: 'Competenze',
        skillsSubtitle: 'Tecnologie e strumenti che padroneggio',
        projectsTitle: 'Progetti',
        projectsSubtitle: 'Alcune realizzazioni a cui tengo',
        contactTitle: 'Contatto',
        contactSubtitle: 'Vuoi collaborare? Parliamone!',
        location: 'Posizione',
        madeWith: 'Fatto con passione a Toulouse',
        aiChatTitle: 'Chiedimi qualsiasi cosa',
        aiChatPlaceholder: 'Fammi una domanda...'
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

function updateLanguage() {
    const t = translations[currentLang];
    
    // Update nav links
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            el.textContent = t[key];
        }
    });
    
    // Update typing texts
    texts[0] = t.heroTagline1;
    texts[1] = t.heroTagline2;
    texts[2] = t.heroTagline3;
    texts[3] = t.heroTagline4;
}

// ====================================
// AI CHAT BOX WITH STREAMING EFFECT
// ====================================
const aiChatData = {
    fr: {
        welcome: "Salut ! Je suis l'assistant virtuel de Mathieu. Que veux-tu savoir ?",
        suggestions: [
            "Parle-moi des hobbies de Mathieu",
            "Quelles sont ses compétences principales ?",
            "Décris son parcours professionnel",
            "Pourquoi la data science ?"
        ],
        responses: {
            "Parle-moi des hobbies de Mathieu": "Mathieu est un grand passionné de rugby, notamment supporter de l'ASM Clermont Auvergne. Cette passion pour le sport l'a naturellement orienté vers les sports analytics. Il aime aussi la randonnée et le vélo, profitant des Pyrénées proches de Toulouse pour se ressourcer. C'est également un mordu de tech et d'IA, passant son temps libre à expérimenter avec les derniers frameworks de machine learning et à suivre l'actualité des LLMs.",
            "Quelles sont ses compétences principales ?": "Mathieu excelle en Python (Pandas, NumPy, Scikit-learn), maîtrise le deep learning avec TensorFlow et PyTorch, et a une expertise solide en NLP grâce à Hugging Face et les Transformers. Il est également compétent en data engineering avec SQL, Elastic Stack et la création de pipelines de données. Côté développement, il utilise Kotlin et Spring AI. Son domaine de prédilection reste la computer vision et les sports analytics.",
            "Décris son parcours professionnel": "Mathieu a débuté chez FDTI Consulting où il a créé des dashboards KPI et fait de la modélisation prédictive. Il a ensuite rejoint MIPIH pour travailler sur l'IA appliquée à la santé avec du NLP avancé. À Toulouse Métropole, il a développé des solutions d'IA pour les services publics. Actuellement, il est Data Scientist à l'ASM Clermont Auvergne où il analyse la performance sportive, un rôle qui combine parfaitement sa passion pour le rugby et la data science. Il a également fait un stage chez Axione en tant qu'assistant administrateur de base de données.",
            "Pourquoi la data science ?": "Pour Mathieu, la data science n'est pas qu'une question de code et d'algorithmes. C'est avant tout une discipline au service de l'humain. Il est motivé par l'impact concret de ses analyses : améliorer la performance d'une équipe, optimiser des services pour les citoyens, ou aider des professionnels de santé. Il croit fermement que la valeur de la data science réside dans sa capacité à créer des insights actionnables et accessibles pour l'utilisateur final."
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

if (aiChatTrigger) {
    aiChatTrigger.addEventListener('click', () => {
        aiChatBox.classList.toggle('open');
        if (aiChatBox.classList.contains('open') && aiChatMessages.children.length === 0) {
            addAIMessage(aiChatData[currentLang].welcome);
            updateSuggestions();
        }
    });
}

if (aiChatClose) {
    aiChatClose.addEventListener('click', () => {
        aiChatBox.classList.remove('open');
    });
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
        }, 1000);
    } else {
        contentDiv.textContent = text;
        aiChatMessages.scrollTop = aiChatMessages.scrollHeight;
    }
}

function streamText(element, text, index = 0) {
    if (index < text.length) {
        element.textContent += text[index];
        aiChatMessages.scrollTop = aiChatMessages.scrollHeight;
        setTimeout(() => streamText(element, text, index + 1), 20);
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
