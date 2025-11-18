# 🚀 Portfolio - Mathieu Vassal

Portfolio personnel moderne et interactif pour Data Scientist & AI Specialist.

## 📋 Structure du Projet

```
portfolio/
├── index.html              # Page d'accueil
├── about.html              # Page À propos (à venir)
├── projects.html           # Page Projets (à venir)
├── contact.html            # Page Contact (à venir)
├── styles.css              # Styles globaux
├── script.js               # JavaScript interactif
├── INSTRUCTIONS_DA.md      # Guide de direction artistique
└── README.md               # Ce fichier
```

## 🎨 Caractéristiques

### Animations & Effets
- ✨ Particules animées en arrière-plan
- 🖱️ Curseur personnalisé avec effet de traînée
- 💧 Effet ripple au clic
- 📊 Compteurs animés pour les statistiques
- 🎭 Animations de scroll reveal
- 🔄 Carousel de projets interactif
- ⌨️ Animation de typing pour le titre
- 🎮 Easter egg (code Konami: ↑↑↓↓←→←→BA)

### Interactions
- Hover states sur tous les éléments
- Effets sonores visuels sur certains clics
- Navigation smooth scroll
- Parallax sur les sphères 3D
- Feedback visuel instantané

### Design
- 🎨 Palette moderne (vert émeraude + violet)
- 🌙 Mode sombre par défaut
- 📱 100% Responsive
- ♿ Accessible
- ⚡ Performance optimisée

## 🚀 Déploiement sur GitHub Pages

### Méthode 1 : Via l'interface GitHub

1. Créez un repository sur GitHub
2. Uploadez tous les fichiers à la racine
3. Allez dans Settings → Pages
4. Source: Deploy from a branch
5. Branch: `main` / `master` - folder: `/root`
6. Cliquez sur "Save"
7. Votre site sera disponible à `https://[username].github.io/[repo-name]`

### Méthode 2 : En ligne de commande

```bash
# Initialisez un repo Git
git init

# Ajoutez tous les fichiers
git add .

# Commitez
git commit -m "Initial commit: Portfolio v1.0"

# Ajoutez votre repo distant
git remote add origin https://github.com/[username]/[repo-name].git

# Pushez
git branch -M main
git push -u origin main

# Activez GitHub Pages dans les settings
```

## 🛠️ Technologies Utilisées

- **HTML5** - Structure sémantique
- **CSS3** - Animations & Grid/Flexbox
- **JavaScript Vanilla** - Interactions (pas de framework !)
- **Canvas API** - Particules animées
- **Font Awesome** - Icônes
- **Google Fonts** - Typographie (Space Grotesk, JetBrains Mono, Inter)

## 📖 Utilisation des Styles

Pour maintenir la cohérence visuelle, consultez `INSTRUCTIONS_DA.md` avant toute modification.

### Couleurs Principales
```css
--accent: #10b981;      /* Vert émeraude */
--secondary: #8b5cf6;   /* Violet */
--darker: #020617;      /* Fond */
--light: #f8fafc;       /* Texte */
```

### Patterns de Code
```css
/* Carte interactive */
.card {
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 20px;
    padding: 2.5rem;
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 60px rgba(16, 185, 129, 0.3);
}
```

## 🎯 Personnalisation

### Modifier les Couleurs
Éditez les variables CSS dans `styles.css`:
```css
:root {
    --accent: #VOTRE_COULEUR;
    /* ... */
}
```

### Ajouter une Section
1. Copiez une section existante dans `index.html`
2. Changez l'ID et le contenu
3. Ajoutez le lien dans la navigation
4. Respectez les patterns du `INSTRUCTIONS_DA.md`

### Ajouter un Projet
Ajoutez une carte dans la section `#projects`:
```html
<div class="project-card">
    <div class="project-image">
        <i class="fas fa-icon"></i>
    </div>
    <div class="project-content">
        <h3>Titre Projet</h3>
        <p>Description...</p>
        <div class="timeline-tags">
            <span class="tag">Tag1</span>
        </div>
    </div>
</div>
```

## 📱 Responsive Breakpoints

- **Desktop**: > 1200px
- **Tablet Large**: 968px - 1200px
- **Tablet**: 768px - 968px
- **Mobile**: < 768px

## ⚡ Performance

- Pas de dépendances externes lourdes
- CSS & JS minifiables
- Animations GPU-accelerated
- Lazy loading des images (si ajoutées)

## 🐛 Debugging

### Le curseur ne marche pas
Le curseur custom est désactivé sur mobile (<640px). C'est normal.

### Les animations ne se déclenchent pas
Vérifiez que `script.js` est bien chargé avec les DevTools (F12).

### GitHub Pages ne met pas à jour
- Videz le cache navigateur (Ctrl+Shift+R)
- Attendez 1-2 minutes après le push
- Vérifiez que le build est terminé dans Actions

## 📄 Licence

© 2025 Mathieu Vassal - Tous droits réservés

---

## 🎓 Crédits

**Design & Développement**: Portfolio system optimisé pour Data Scientists  
**Inspirations**: Modern data visualization, code editors, cyberpunk aesthetics  
**Fonts**: Space Grotesk, JetBrains Mono, Inter (Google Fonts)  
**Icons**: Font Awesome 6.4.0

---

## 📞 Contact

- 💼 LinkedIn: [mathieu-vassal](https://www.linkedin.com/in/mathieu-vassal/)
- 🐙 GitHub: [MathAvecH](https://github.com/MathAvecH)
- 📧 Email: math.vassal@email.com
- 📍 Localisation: Toulouse, France

---

**Version**: 1.0  
**Dernière mise à jour**: Novembre 2025