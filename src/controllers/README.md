# Contrôleurs

Ce répertoire contient les contrôleurs de l'application.

Les contrôleurs sont responsables de:
- Recevoir les requêtes depuis les routes
- Interagir avec les services et les modèles
- Renvoyer les réponses appropriées

Exemple de structure de contrôleur:

```javascript
// userController.js
const UserService = require('../services/userService');

const getUser = async (req, res) => {
  try {
    const user = await UserService.getUserById(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getUser,
  // autres méthodes...
};
```