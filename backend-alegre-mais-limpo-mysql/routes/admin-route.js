const express = require('express');
const router = express.Router();
const login = require('../middleware/login');

const adminController = require('../controllers/admin-controller.js');

// criar admin
router.post('/', adminController.create);

// obter admins
router.get('/', adminController.getAdministradores);

// obter admin por id
router.get('/:id', adminController.getAdministradorById);

// deletar admin
router.delete('/:id', adminController.delete);

// atualizar admin
router.put('/:id', adminController.update);

module.exports = router;