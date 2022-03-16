const express = require('express');
const router = express.Router();
const login = require('../middleware/login');

const motoristaController = require('../controllers/motorista-controller.js');

// criar motorista
router.post('/', motoristaController.create);

// obter motoristas
router.get('/', motoristaController.getMotoristas);

// obter motorista por id
router.get('/:id', motoristaController.getMotoristaById);

// deletar motorista
router.delete('/:id', motoristaController.delete);

// atualizar motorista
router.put('/:id', motoristaController.update);

module.exports = router;