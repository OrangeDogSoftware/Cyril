# Utilitaires

Ce répertoire contient des fonctions utilitaires réutilisables dans l'application.

Exemples d'utilitaires:
- Formatage de données
- Validations communes
- Gestion des dates
- Fonctions d'aide génériques

Exemple d'utilitaire:

```javascript
// dateUtils.js
const formatDate = (date) => {
  return new Date(date).toISOString().split('T')[0];
};

const getAgeFromBirthdate = (birthdate) => {
  const today = new Date();
  const birthDate = new Date(birthdate);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

module.exports = {
  formatDate,
  getAgeFromBirthdate
};
```