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