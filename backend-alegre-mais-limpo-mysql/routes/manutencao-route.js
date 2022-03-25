const express = require('express');
const router = express.Router();
const login = require('../middleware/login');

const manutencaoController = require('../controllers/manutencao-controller.js');

// criar manutencao
router.post('/', login.required, manutencaoController.create);

// obter manutencaos
router.get('/', login.optional, manutencaoController.getManutencoes);

// obter abstecimento por id
router.get('/:id', login.required, manutencaoController.getManutencaoById);

// deletar manutencao
router.delete('/:id', login.required, manutencaoController.delete);

// atualizar manutencao
router.put('/:id', login.required, manutencaoController.update);

module.exports = router;