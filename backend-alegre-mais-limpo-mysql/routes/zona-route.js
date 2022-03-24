const express = require('express');
const router = express.Router();
const login = require('../middleware/login');

const zonaController = require('../controllers/zona-controller.js');

// criar zona
router.post('/', login.required, zonaController.create);

// obter zonas
router.get('/', login.optional, zonaController.getZonas);

// obter zona por id
router.get('/:id', login.required, zonaController.getZonaById);

// deletar zona
router.delete('/:id', login.required, zonaController.delete);

// atualizar zona
router.put('/:id', login.required, zonaController.update);

module.exports = router;