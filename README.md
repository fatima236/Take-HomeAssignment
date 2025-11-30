# Take Home Assignment - Dashboard

Ce projet est un **dashboard développé avec Next.js** pour gérer des agences et leurs contacts avec authentification Clerk.

---

## Fonctionnalités principales

- Authentification des utilisateurs via Clerk
- Gestion des agences et des contacts
- Filtrage et recherche des agences
- Pagination des agences et contacts
- Interface responsive simple et claire
- Limitation quotidienne des consultations des contacts (50 par utilisateur)

---

## Architecture du projet

app/
├── agencies/ # Pages et composants liés aux agences
├── api/ # Routes API
├── contacts/ # Pages et composants pour gérer les contacts
├── dashboard/ # Composants et pages du dashboard
├── homePage/ # Page d'accueil et composants associés
├── Layout/ # Navbar et layout global
├── sign-in/ # Page de connexion
├── sign-up/ # Page d'inscription
├── globals.css # Styles globaux
├── layout.tsx # Layout principal
└── page.tsx # Page principale
data/ # Fichiers CSV ou données statiques

markdown
Copier le code

- **Layout** : Navbar et structure générale du site
- **Components** : Composants réutilisables pour les pages
- **Pages** : `app/*/page.tsx` pour chaque section
- **Data** : fichiers CSV pour agences et contacts

---

## Stack technique

- **Framework** : Next.js
- **Auth** : Clerk
- **UI** : TailwindCSS
- **Données** : fichiers CSV (agences et contacts)
- **Déploiement** : Vercel ou autre

---

## Installation

1. Cloner le projet :
```bash
git clone https://github.com/fatima236/Take-HomeAssignment.git
cd Take-HomeAssignment
Installer les dépendances :

bash
Copier le code
npm install
Configurer les variables d'environnement pour Clerk :

env
Copier le code
CLERK_FRONTEND_API=<ton-frontend-api>
CLERK_API_KEY=<ton-api-key>
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
Lancer le projet :

bash
Copier le code
npm run dev
Accéder à l'application sur http://localhost:3000

Structure des fichiers CSV
data/agencies.csv : liste des agences

data/contacts.csv : liste des contacts avec les colonnes :

id, first_name, last_name, email, phone, title

Améliorations possibles
Migration des données vers une base de données

Authentification avancée avec rôles

Statistiques graphiques pour les agences

Optimisation de la pagination et des filtres