const express = require('express');
const router = express.Router();
const login = require('../middleware/login');

const adminController = require('../controllers/admin-controller.js');

router.post('/', adminController.create);
router.get('/', adminController.getAdministradores);
router.delete('/:id', adminController.delete);

module.exports = router;