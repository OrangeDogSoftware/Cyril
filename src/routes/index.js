const express = require('express');
const router = express.Router();

// Importation des autres routeurs
// const usersRouter = require('./users');

// Définition des routes principales
router.get('/status', (req, res) => {
  res.json({ status: 'ok' });
});

// Utilisation des autres routeurs
// router.use('/users', usersRouter);

module.exports = router;