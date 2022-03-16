const express = require('express');
const router = express.Router();
const login = require('../middleware/login');

const auxiliarController = require('../controllers/auxiliar-controller.js');

// criar auxiliar
router.post('/', auxiliarController.create);

// obter auxiliares
router.get('/', auxiliarController.getAuxiliares);

// obter auxiliar por id
router.get('/:id', auxiliarController.getAuxiliarById);

// deletar auxiliar
router.delete('/:id', auxiliarController.delete);

// atualizar auxiliar
router.put('/:id', auxiliarController.update);

module.exports = router;