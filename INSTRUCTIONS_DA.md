# 🎨 INSTRUCTIONS DE DIRECTION ARTISTIQUE (DA)
## Portfolio Mathieu Vassal - Data Scientist

---

## 📋 TABLE DES MATIÈRES
1. [Philosophie du Design](#philosophie-du-design)
2. [Palette de Couleurs](#palette-de-couleurs)
3. [Typographie](#typographie)
4. [Animations & Effets](#animations--effets)
5. [Composants & Patterns](#composants--patterns)
6. [Interactions](#interactions)
7. [Responsive Design](#responsive-design)
8. [Code d'Exemple](#code-dexemple)

---

## 🎯 PHILOSOPHIE DU DESIGN

### Concept Global
- **Style**: Tech moderne, épuré, futuriste sans être froid
- **Ambiance**: Professionnelle mais accessible, innovante et dynamique
- **Inspiration**: Data visualization, interfaces de code, cyberpunk subtil
- **Objectif**: Impressionner sans être pompeux, tech mais humain

### Principes Directeurs
1. **Minimalisme fonctionnel**: Chaque élément a un but
2. **Fluidité**: Transitions douces et naturelles (0.3s-0.5s)
3. **Réactivité**: Feedback visuel sur chaque interaction
4. **Hiérarchie claire**: Utilisation du contraste et de la taille
5. **Accessibilité**: Lisibilité et utilisabilité optimales

---

## 🎨 PALETTE DE COULEURS

### Couleurs Principales
```css
:root {
    /* Couleurs de base */
    --primary: #3b82f6;      /* Bleu vif - Pour CTA principaux */
    --secondary: #8b5cf6;    /* Violet - Pour accents secondaires */
    --accent: #10b981;       /* Vert émeraude - Couleur signature */
    --accent-2: #f59e0b;     /* Orange - Pour highlights */
    
    /* Teintes de fond */
    --dark: #0f172a;         /* Bleu nuit */
    --darker: #020617;       /* Presque noir - Fond principal */
    --light: #f8fafc;        /* Blanc cassé - Texte principal */
    --gray: #94a3b8;         /* Gris bleuté - Texte secondaire */
}
```

### Usage des Couleurs
- **Accent (#10b981)**: 
  - Éléments cliquables
  - Indicateurs de progression
  - Hover states
  - Icônes principales
  
- **Primary/Secondary**: 
  - Dégradés (toujours avec linear-gradient(135deg, ...))
  - Boutons CTA
  - Titres importants
  
- **Dark/Darker**: 
  - Arrière-plans
  - Cartes (avec opacity: 0.02-0.05)
  
- **Gray**: 
  - Texte descriptif
  - Labels
  - Métadonnées

### Règles de Dégradés
```css
/* TOUJOURS utiliser des dégradés pour les éléments importants */
background: linear-gradient(135deg, var(--accent), var(--secondary));
background: linear-gradient(135deg, var(--light), var(--accent));

/* Pour le texte */
background: linear-gradient(135deg, ...);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
```

---

## 📝 TYPOGRAPHIE

### Familles de Polices
```css
/* Titres et texte général */
font-family: 'Space Grotesk', 'Inter', sans-serif;

/* Code, données, stats */
font-family: 'JetBrains Mono', monospace;
```

### Hiérarchie des Tailles
```css
/* Hero Title (H1) */
font-size: 5rem;        /* Desktop */
font-size: 3rem;        /* Tablet */
font-size: 2rem;        /* Mobile */
font-weight: 900;

/* Section Headers (H2) */
font-size: 3.5rem;      /* Desktop */
font-size: 2.5rem;      /* Tablet */
font-size: 2rem;        /* Mobile */
font-weight: 900;

/* Subsections (H3) */
font-size: 1.75rem;
font-weight: 700;

/* Body Text */
font-size: 1.2rem;      /* Large paragraphs */
font-size: 1rem;        /* Normal text */
line-height: 1.6-1.8;   /* Toujours généreux */

/* Small Text */
font-size: 0.875rem;    /* Labels, tags */
```

### Règles Typographiques
- Toujours utiliser `letter-spacing: 1-2px` pour les petits textes en majuscules
- Line-height minimum: 1.6 pour le body, 1.1 pour les titres
- Ne jamais utiliser `text-transform: uppercase` sans augmenter le letter-spacing

---

## ⚡ ANIMATIONS & EFFETS

### Timing Functions Standardisées
```css
/* Utilisez TOUJOURS ces curves */
transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);  /* Standard */
transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);  /* Plus lent */
transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);  /* Entrées */
```

### Animations Clés
#### 1. FadeInUp (Apparitions)
```css
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```

#### 2. SlideInLeft (Timeline)
```css
@keyframes slideInLeft {
    from {
        opacity: 0;
        transform: translateX(-50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}
```

#### 3. Pulse (Attention)
```css
@keyframes pulse {
    0%, 100% { 
        transform: scale(1); 
        box-shadow: 0 0 20px rgba(16, 185, 129, 0.3); 
    }
    50% { 
        transform: scale(1.1); 
        box-shadow: 0 0 30px rgba(16, 185, 129, 0.6); 
    }
}
```

#### 4. Float (Élévation)
```css
@keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
}
```

### États Hover Standards
```css
.element:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 60px rgba(16, 185, 129, 0.3);
    border-color: var(--accent);
}

.element:active {
    transform: translateY(-3px) scale(0.98);
}
```

---

## 🧩 COMPOSANTS & PATTERNS

### 1. Cartes (Cards)
```css
.card {
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 20px;
    padding: 2.5rem;
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    position: relative;
    overflow: hidden;
}

.card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), transparent);
    opacity: 0;
    transition: opacity 0.3s;
}

.card:hover {
    background: rgba(255, 255, 255, 0.05);
    transform: translateY(-10px);
    border-color: var(--accent);
    box-shadow: 0 20px 60px rgba(16, 185, 129, 0.3);
}

.card:hover::before {
    opacity: 1;
}
```

### 2. Boutons
```css
.btn {
    padding: 1rem 2rem;
    border-radius: 50px;  /* TOUJOURS pills shape */
    font-weight: 600;
    position: relative;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.btn::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
}

.btn:hover::before {
    width: 300px;
    height: 300px;
}

.btn-primary {
    background: linear-gradient(135deg, var(--accent), var(--secondary));
    color: white;
    box-shadow: 0 10px 30px rgba(16, 185, 129, 0.4);
}
```

### 3. Tags
```css
.tag {
    background: rgba(16, 185, 129, 0.1);
    color: var(--accent);
    padding: 0.5rem 1rem;
    border-radius: 50px;
    font-size: 0.875rem;
    border: 1px solid rgba(16, 185, 129, 0.2);
    transition: all 0.3s;
}

.tag:hover {
    background: rgba(16, 185, 129, 0.2);
    border-color: var(--accent);
    transform: translateY(-2px) scale(1.05);
}
```

### 4. Headers de Section
```css
.section-header {
    text-align: center;
    margin-bottom: 5rem;
}

.section-number {
    font-size: 1rem;
    color: var(--accent);
    font-weight: 700;
    font-family: 'JetBrains Mono', monospace;
    margin-bottom: 0.5rem;
}

.section-header h2 {
    font-size: 3.5rem;
    font-weight: 900;
    background: linear-gradient(135deg, var(--light), var(--accent));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;
}

.section-header h2::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, transparent, var(--accent), transparent);
}
```

---

## 🖱️ INTERACTIONS

### Curseur Personnalisé
```css
/* Toujours inclure un curseur custom */
body {
    cursor: none;
}

.cursor {
    position: fixed;
    width: 20px;
    height: 20px;
    border: 2px solid var(--accent);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    mix-blend-mode: difference;
}
```

### Effet Ripple au Clic
- Créer un cercle qui s'étend à partir du point de clic
- Durée: 0.8s
- Couleur: rgba(16, 185, 129, 0.6)
- Rayon final: 4x la taille initiale

### Feedback Visuel
Chaque élément interactif DOIT avoir :
1. **Hover state**: Transform + shadow change
2. **Active state**: Scale légèrement réduit (0.95-0.98)
3. **Focus state**: Border glow pour accessibilité

---

## 📱 RESPONSIVE DESIGN

### Breakpoints Standards
```css
/* Desktop First Approach */
@media (max-width: 1200px) { /* Tablettes larges */ }
@media (max-width: 968px)  { /* Tablettes */ }
@media (max-width: 768px)  { /* Tablettes portrait */ }
@media (max-width: 640px)  { /* Mobiles */ }
```

### Règles Responsive
1. **Grids**: Utilisez `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))`
2. **Padding**: Réduire de 8rem → 4rem → 2rem → 1rem
3. **Font sizes**: Réduire les titres d'environ 30-40%
4. **Navigation**: Passer en hamburger menu sous 768px
5. **Curseur custom**: Désactiver sous 640px

---

## 💻 CODE D'EXEMPLE

### Structure HTML Type
```html
<section id="nom-section">
    <div class="section-header scroll-reveal">
        <div class="section-number">// 01</div>
        <h2>Titre Section</h2>
        <p>Description courte</p>
    </div>
    
    <div class="content-grid">
        <div class="card scroll-reveal">
            <!-- Contenu carte -->
        </div>
    </div>
</section>
```

### Nouvelle Carte Interactive
```html
<div class="card interactive-card">
    <div class="card-icon">
        <i class="fas fa-icon"></i>
    </div>
    <h3>Titre Carte</h3>
    <p>Description...</p>
    <div class="tags">
        <span class="tag">Tag 1</span>
        <span class="tag">Tag 2</span>
    </div>
</div>
```

```css
.interactive-card {
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 20px;
    padding: 2.5rem;
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    cursor: pointer;
}

.interactive-card:hover {
    background: rgba(255, 255, 255, 0.05);
    transform: translateY(-10px);
    border-color: var(--accent);
    box-shadow: 0 20px 60px rgba(16, 185, 129, 0.3);
}
```

---

## 🎯 CHECKLIST POUR NOUVELLES PAGES

Avant de créer une nouvelle page, vérifier :

- [ ] Fond: `background: var(--darker)`
- [ ] Curseur custom activé
- [ ] Particules canvas en arrière-plan
- [ ] Navigation fixe avec backdrop-filter
- [ ] Loading screen (1s)
- [ ] Scroll reveal animations
- [ ] Responsive (3 breakpoints minimum)
- [ ] Hover states sur tous les éléments interactifs
- [ ] Border-radius: 20px pour les cartes, 50px pour les boutons
- [ ] Transitions: cubic-bezier(0.16, 1, 0.3, 1)
- [ ] Dégradés sur les éléments importants
- [ ] Shadow glow sur hover: rgba(16, 185, 129, 0.3)

---

## 🚀 ÉLÉMENTS SIGNATURE

Ces éléments DOIVENT être présents sur chaque page :

1. **Particules animées en arrière-plan**
2. **Curseur personnalisé** (desktop)
3. **Effet ripple au clic**
4. **Navigation avec glitch subtil sur le logo**
5. **Numérotation des sections** (// 01, // 02)
6. **Scroll reveal animations**
7. **Dégradés verts (#10b981) sur les éléments clés**

---

## 📌 PROMPT DE RÉSUMÉ

Pour créer une nouvelle page en respectant cette DA, utiliser ce prompt :

```
Crée une page [TYPE] pour le portfolio de Mathieu Vassal en respectant cette DA :

COULEURS :
- Fond: #020617 (darker)
- Accent: #10b981 (vert émeraude)
- Texte: #f8fafc (light)
- Cartes: rgba(255,255,255,0.02) avec border rgba(255,255,255,0.05)

TYPOGRAPHIE :
- Titres: 'Space Grotesk', 900 weight, avec gradient (light → accent)
- Code/Stats: 'JetBrains Mono'
- Body: 1.2rem, line-height 1.8

ANIMATIONS :
- Transitions: cubic-bezier(0.16, 1, 0.3, 1)
- Hover: translateY(-10px) + shadow rgba(16,185,129,0.3)
- Border-radius: 20px cartes, 50px boutons

INTERACTIONS :
- Curseur custom
- Ripple effect au clic
- Scroll reveal animations
- Particules canvas background

STRUCTURE :
- Navigation fixe avec backdrop-filter
- Sections avec headers numérotés (// 01)
- Grid responsive: repeat(auto-fit, minmax(280px, 1fr))
- Footer avec liens

Garde un style tech moderne mais accessible, pas pompeux.
```

---

## 🎨 PALETTE ÉTENDUE (optionnel)

Pour des variations subtiles :
```css
--accent-light: #34d399;     /* Hover accent */
--accent-dark: #059669;      /* Active accent */
--gray-light: #cbd5e1;       /* Hover gray */
--gray-dark: #64748b;        /* Active gray */
--error: #ef4444;            /* Erreurs */
--success: #10b981;          /* Succès (same as accent) */
--warning: #f59e0b;          /* Avertissements */
```

---

**Version**: 1.0  
**Dernière mise à jour**: Novembre 2025  
**Auteur**: Portfolio System pour Mathieu Vassal