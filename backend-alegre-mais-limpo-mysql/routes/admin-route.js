const express = require('express');
const router = express.Router();
const login = require('../middleware/login');

const adminController = require('../controllers/admin-controller.js');

// criar admin
router.post('/', login.required, adminController.create);

// obter admins
router.get('/', login.required, adminController.getAdministradores);

// obter admin por id
router.get('/:id', login.required, adminController.getAdministradorById);

// deletar admin
router.delete('/:id', login.required, adminController.delete);

// atualizar admin
router.put('/:id', login.required, adminController.update);

module.exports = router;