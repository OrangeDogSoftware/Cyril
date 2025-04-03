# Modèles

Ce répertoire contient les modèles de données de l'application.

Les modèles représentent les structures de données et peuvent inclure:
- Schémas de base de données
- Méthodes de validation
- Utilitaires liés aux données

Exemple avec Mongoose (pour MongoDB):

```javascript
// userModel.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
```