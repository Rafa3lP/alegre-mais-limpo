const express = require('express');
const router = express.Router();
const login = require('../middleware/login');

const abastecimentoController = require('../controllers/abastecimento-controller.js');

// criar abastecimento
router.post('/', abastecimentoController.create);

// obter abastecimentos
router.get('/', abastecimentoController.getAbastecimentos);

// obter abstecimento por id
router.get('/:id', abastecimentoController.getAbastecimentoById);

// deletar abastecimento
router.delete('/:id', abastecimentoController.delete);

// atualizar abastecimento
router.put('/:id', abastecimentoController.update);

module.exports = router;