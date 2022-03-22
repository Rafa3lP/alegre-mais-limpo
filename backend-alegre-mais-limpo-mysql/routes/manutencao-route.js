const express = require('express');
const router = express.Router();
const login = require('../middleware/login');

const manutencaoController = require('../controllers/manutencao-controller.js');

// criar manutencao
router.post('/', manutencaoController.create);

// obter manutencaos
router.get('/', manutencaoController.getManutencoes);

// obter abstecimento por id
router.get('/:id', manutencaoController.getmanutencaoById);

// deletar manutencao
router.delete('/:id', manutencaoController.delete);

// atualizar manutencao
router.put('/:id', manutencaoController.update);

module.exports = router;