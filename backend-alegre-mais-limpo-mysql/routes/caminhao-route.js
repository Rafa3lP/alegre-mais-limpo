const express = require('express');
const router = express.Router();
const login = require('../middleware/login');

const caminhaoController = require('../controllers/caminhao-controller.js');

// criar caminhao
router.post('/', caminhaoController.create);

// obter  
router.get('/', caminhaoController.getCaminhoes);

// obter caminhoes por id
router.get('/:id', caminhaoController.getCaminhaoById);

// deletar caminhao
router.delete('/:id', caminhaoController.delete);

// atualizar admin
router.put('/:id', caminhaoController.update);

module.exports = router;