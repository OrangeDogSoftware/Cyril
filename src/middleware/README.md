# Middleware

Ce répertoire contient les middlewares de l'application.

Les middlewares permettent de:
- Valider les requêtes
- Gérer l'authentification
- Traiter les erreurs
- Logger les activités

Exemple de middleware d'authentification:

```javascript
// authMiddleware.js
const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Authentification requise' });
  }
};

module.exports = {
  authenticate
};
```