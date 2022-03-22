const express = require('express');
const router = express.Router();
const login = require('../middleware/login');

const ruaController = require('../controllers/rua-controller.js');

//cria um rua
router.post('/', ruaController.create);

//obter todas as ruas
router.get('/', ruaController.getRuas);

//obter rua por id
router.get('/:id', ruaController.getRuaById);

//deletar uma rua
router.delete('/:id', ruaController.delete);

//atualizar um rua
router.put('/:id', ruaController.update);

module.exports = router;