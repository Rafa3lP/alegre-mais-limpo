const express = require('express');
const router = express.Router();
const login = require('../middleware/login');

const caminhaoController = require('../controllers/caminhao-controller.js');

// criar caminhao
router.post('/', login.required, caminhaoController.create);

// obter caminhoes
router.get('/', login.optional, caminhaoController.getCaminhoes);

// obter caminhoes por id
router.get('/:id', login.required, caminhaoController.getCaminhaoById);

// deletar caminhao
router.delete('/:id', login.required, caminhaoController.delete);

// atualizar admin
router.put('/:id', login.required, caminhaoController.update);

module.exports = router;
