# Services

Ce répertoire contient la logique métier de l'application.

Les services sont responsables de:
- Implémenter la logique métier
- Coordonner l'accès aux données via les modèles
- Traiter les données pour les contrôleurs

Exemple de service:

```javascript
// userService.js
const User = require('../models/userModel');

const getUserById = async (userId) => {
  return await User.findById(userId);
};

const createUser = async (userData) => {
  const user = new User(userData);
  return await user.save();
};

module.exports = {
  getUserById,
  createUser,
  // autres méthodes...
};
```