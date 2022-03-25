const express = require('express');
const router = express.Router();
const login = require('../middleware/login');

const ruaController = require('../controllers/rua-controller.js');

//cria um rua
router.post('/', login.required, ruaController.create);

//obter todas as ruas
router.get('/', login.optional, ruaController.getRuas);

//obter rua por id
router.get('/:id', login.required, ruaController.getRuaById);

//deletar uma rua
router.delete('/:id', login.required, ruaController.delete);

//atualizar um rua
router.put('/:id', login.required, ruaController.update);

module.exports = router;