const express = require('express');
const router = express.Router();
const login = require('../middleware/login');

const motoristaController = require('../controllers/motorista-controller.js');

// criar motorista
router.post('/', login.required, motoristaController.create);

// obter motoristas
router.get('/', login.required, motoristaController.getMotoristas);

// obter motorista por id
router.get('/:id', login.required, motoristaController.getMotoristaById);

// deletar motorista
router.delete('/:id', login.required, motoristaController.delete);

// atualizar motorista
router.put('/:id', login.required, motoristaController.update);

module.exports = router;