const express = require('express');
const router = express.Router();
const login = require('../middleware/login');

const auxiliarController = require('../controllers/auxiliar-controller.js');

// criar auxiliar
router.post('/', login.required, auxiliarController.create);

// obter auxiliares
router.get('/', login.required, auxiliarController.getAuxiliares);

// obter auxiliar por id
router.get('/:id', login.required, auxiliarController.getAuxiliarById);

// deletar auxiliar
router.delete('/:id', login.required, auxiliarController.delete);

// atualizar auxiliar
router.put('/:id', login.required, auxiliarController.update);

module.exports = router;