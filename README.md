# Projet Cyril

Structure de base d'un projet Node.js.

## Structure du projet

```
├── config/              # Configuration de l'application
├── src/                 # Code source
│   ├── controllers/     # Contrôleurs
│   ├── middleware/      # Middleware
│   ├── models/          # Modèles de données
│   ├── routes/          # Définition des routes
│   ├── services/        # Logique métier
│   ├── utils/           # Fonctions utilitaires
│   └── index.js         # Point d'entrée de l'application
├── tests/               # Tests
│   ├── integration/     # Tests d'intégration
│   └── unit/            # Tests unitaires
├── .env.example         # Exemple de variables d'environnement
├── .gitignore           # Fichiers à ignorer par Git
└── package.json         # Dépendances et scripts
```

## Installation

```bash
npm install
```

## Configuration

Copiez le fichier `.env.example` vers `.env` et ajustez les variables selon vos besoins :

```bash
cp .env.example .env
```

## Démarrage

```bash
# Mode développement
npm run dev

# Mode production
npm start
```

## Tests

```bash
npm test
```

## Licence

ISC