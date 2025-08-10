# 🌱 GreenCart

**Plateforme éco-responsable de vente directe producteur-consommateur (Frontend)**

[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

> Favoriser le circuit court et lutter contre le gaspillage alimentaire grâce à une plateforme frontend moderne, sobre et accessible.

## 📋 Table des matières

- [🎯 À propos](#à-propos)
- [✨ Fonctionnalités](#fonctionnalités)
- [🛠️ Technologies](#technologies)
- [🚀 Installation](#installation)
- [📖 Utilisation](#utilisation)
- [📁 Structure du projet](#structure-du-projet)
- [🤝 Contribuer](#contribuer)
- [📄 Licence](#licence)

## 🎯 À propos

GreenCart est une plateforme web frontend développée en React avec JavaScript, visant à connecter directement les producteurs locaux aux consommateurs. Ce projet se concentre exclusivement sur l'interface utilisateur, avec une expérience moderne et éco-responsable. Nos objectifs sont :

- **Réduire le gaspillage alimentaire** en valorisant les produits à DLC courte
- **Soutenir l'économie locale** en favorisant les circuits courts
- **Promouvoir une consommation responsable** avec transparence sur l'origine des produits
- **Offrir une expérience utilisateur optimale** avec un design sobre et accessible

> **Note** : Ce projet couvre uniquement le frontend. La partie backend (authentification, gestion des données, paiements, etc.) est prévue mais non implémentée.

## ✨ Fonctionnalités

### 👥 Pour les consommateurs
- 🛒 **Catalogue intelligent** : Filtres par catégorie, région, prix et DLC
- 🛍️ **Panier persistant** : Gestion des quantités et persistance entre sessions
- 📱 **Interface responsive** : Optimisée pour mobile et desktop
- 🌍 **Traçabilité des produits** : Informations sur les produits et producteurs
- ⭐ **Système d'évaluation** : Avis et notes des clients
- 📊 **Tableau de bord personnel** : Historique des commandes et impact écologique

> **Note** : Les fonctionnalités liées au backend (comme les dashboards producteur et admin) ne sont pas incluses dans ce projet frontend.

## 🛠️ Technologies

### Frontend
- **[React 18](https://reactjs.org/)** : Bibliothèque JavaScript pour interfaces utilisateur
- **[Vite 5.0](https://vitejs.dev/)** : Outil de build rapide et moderne
- **[Tailwind CSS 3.4](https://tailwindcss.com/)** : Framework CSS utilitaire (intégré via Vite)
- **[shadcn/ui](https://ui.shadcn.com/)** : Composants UI modernes et accessibles
- **[Lucide React](https://lucide.dev/)** : Icônes SVG optimisées
- **[Recharts](https://recharts.org/)** : Graphiques et visualisations de données

### Outils de développement
- **[ESLint](https://eslint.org/)** : Linting pour JavaScript
- **[Prettier](https://prettier.io/)** : Formatage de code automatisé
- **[Husky](https://typicode.github.io/husky/)** : Git hooks pour automatisation
- **[Commitizen](https://commitizen.github.io/cz-cli/)** : Commits conventionnels

## 🚀 Installation

### Prérequis
- **Node.js 18+** : [Télécharger Node.js](https://nodejs.org/)
- **npm** ou **yarn** : Gestionnaire de paquets (npm est inclus avec Node.js)
- **Git** : Pour cloner le repository

### Étapes d'installation

1. **Cloner le repository**
   ```bash
   git clone https://github.com/dj2025-hub/green-cart.git
   cd green-cart
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Configurer Tailwind CSS avec Vite**
   Tailwind CSS est intégré via Vite sans `tailwind.config.js` ni PostCSS. Vérifiez les fichiers suivants :
   - **`src/index.css`** : Contient les directives Tailwind :
     ```css
     @import 'tailwindcss';
     ```
   - **`vite.config.js`** : Inclut le plugin Tailwind pour Vite :
     ```javascript
     import { defineConfig } from 'vite';
     import react from '@vitejs/plugin-react';
     import tailwindcss from '@tailwindcss/vite';

     export default defineConfig({
       plugins: [react(), tailwindcss()],
     });
     ```

4. **Lancer le serveur de développement**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

5. **Ouvrir l'application**
   Accédez à [http://localhost:5173](http://localhost:5173) (port par défaut de Vite).

### Scripts disponibles
```bash
npm run dev          # Lance le serveur de développement
npm run build        # Génère le build de production
npm run preview      # Prévisualise le build de production
npm run lint         # Vérifie le code avec ESLint
npm run lint:fix     # Corrige automatiquement les erreurs ESLint
```

## 📖 Utilisation

### Navigation principale
- **Accueil** (`/`) : Page de présentation du projet
- **Catalogue** (`/catalogue`) : Liste des produits avec filtres
- **Produit** (`/product/:id`) : Détails d’un produit spécifique
- **Mon compte** (`/account`) : Gestion du profil et connexion

### Fonctionnalités clés

#### Catalogue de produits
- Filtres par catégorie, région, prix et DLC
- Tri par pertinence, prix, note ou proximité de la DLC
- Recherche textuelle avancée
- Affichage en grille ou liste

#### Gestion du panier
- Ajout/suppression de produits
- Modification des quantités
- Calcul automatique du total
- Persistance via `context/cart.js`
- Estimation de l’impact écologique

## 📁 Structure du projet

```
green-cart/
   ├── public/  
   ├── src/                        # Code source
       ├── app/                         # Pages React.js (App Router)
       │   ├── (marketing)/             # Routes marketing
       │   ├── admin/                   # Dashboard administrateur
       │   │   ├── dashboard/           # Pages admin
       │   ├── catalogue/               # Catalogue produits
       │   │   └── page.jsx             # Page catalogue
       │   ├── compte/                  # Gestion compte utilisateur
       │   │   └── page.jsx             # Page connexion
       │   ├── produit/                 # Pages produit
       │   │   └── [id]/                # Produit dynamique
       │   │       └── page.jsx         # Détails produit
       │   ├── producteur/              # Dashboard producteur
       │   │   ├── dashboard/           # Pages producteur
       │   └── page.jsx                 # Page d'accueil
   │   ├── assets/                # Assets locaux
   │   │   ├── images/            # Images
   │   │   └── icons/             # Icônes
   │   ├── components/            # Composants réutilisables
   │   │   ├── ui/               # Composants shadcn/ui
   │   │   │   ├── button.jsx    # Composant bouton
   │   │   │   ├── card.jsx      # Composant carte
   │   │   │   ├── input.jsx     # Composant input
   │   │   │   └── ...           # Autres composants UI
   │   │   ├── app-sidebar.jsx   # Sidebar de navigation
   │   │   ├── cart-drawer.jsx   # Drawer du panier
   │   │   ├── theme-provider.jsx # Provider pour le thème
   │   │   └── topbar.jsx        # Barre de navigation
   │   ├── context/               # Contextes React
   │   │   └── cart.js           # Contexte pour le panier
   │   ├── data/                 # Données mock
   │   │   └── products.js       # Produits d’exemple
   │   ├── App.jsx               # Composant racine
   │   ├── App.css               # Styles spécifiques à App
   │   ├── main.jsx              # Point d’entrée React
   │   └── index.css             # Styles globaux (incluant Tailwind)
   ├── .gitignore                # Fichiers ignorés par Git
   ├── eslint.config.js          # Configuration ESLint
   ├── index.html                # Fichier HTML principal
   ├── package.json              # Dépendances et scripts
   ├── vite.config.js            # Configuration Vite
   └── README.md                 # Documentation
```

## 🤝 Contribuer

Les contributions sont les bienvenues ! Voici comment participer :

### 🐛 Signaler des bugs
1. Vérifiez si le bug est déjà signalé.
2. Ouvrez une [issue](https://github.com/dj2025-hub/green-cart/issues) avec :
   - Description détaillée
   - Étapes pour reproduire
   - Captures d’écran si pertinentes
   - Informations sur votre environnement

### ✨ Proposer des fonctionnalités
1. Ouvrez une [discussion](https://github.com/dj2025-hub/green-cart/discussions).
2. Décrivez la fonctionnalité souhaitée.
3. Expliquez son utilité.
4. Proposez une implémentation si possible.

### 🔧 Contribuer au code
1. Forkez le repository.
2. Créez une branche :
   ```bash
   git checkout -b feature/ma-nouvelle-fonctionnalite
   ```
3. Commitez vos changements :
   ```bash
   git commit -m "feat: ajouter nouvelle fonctionnalité"
   ```
4. Poussez vers votre branche :
   ```bash
   git push origin feature/ma-nouvelle-fonctionnalite
   ```
5. Ouvrez une Pull Request.

### 📝 Standards de code
- Utilisez JavaScript (pas de TypeScript).
- Suivez les règles ESLint définies dans `eslint.config.js`.
- Ajoutez des tests pour les nouvelles fonctionnalités.
- Documentez les fonctions complexes.
- Utilisez des commits conventionnels.

### 🧪 Tests
```bash
npm run test          # Lance les tests
npm run test:watch    # Tests en mode watch
npm run test:coverage # Génère un rapport de couverture
```

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

## 🙏 Remerciements

- **[Vite](https://vitejs.dev/)** : Outil de build rapide et moderne
- **[shadcn](https://twitter.com/shadcn)** : Composants UI exceptionnels
- **[Lucide](https://lucide.dev/)** : Icônes SVG optimisées
- **Communauté open source** : Pour les outils utilisés

## 📞 Contact

- **Email** : sih-tem.delavil-junelle-stercy.edu@groupe-gema.com

---

<div align="center">

**Fait avec 💚 pour un avenir plus durable**

[🌐 Site web](/) • [📱 Demo](/) • [📖 Documentation](/)

</div>