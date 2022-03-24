const express = require('express');
const router = express.Router();
const login = require('../middleware/login');

const abastecimentoController = require('../controllers/abastecimento-controller.js');

// criar abastecimento
router.post('/', login.required, abastecimentoController.create);

// obter abastecimentos
router.get('/', login.required, abastecimentoController.getAbastecimentos);

// obter abstecimento por id
router.get('/:id', login.required, abastecimentoController.getAbastecimentoById);

// deletar abastecimento
router.delete('/:id', login.required, abastecimentoController.delete);

// atualizar abastecimento
router.put('/:id', login.required, abastecimentoController.update);

module.exports = router;