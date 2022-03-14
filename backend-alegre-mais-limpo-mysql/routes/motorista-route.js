const express = require('express');
const router = express.Router();
const login = require('../middleware/login');

const motoristaController = require('../controllers/motorista-controller.js');

router.post('/', motoristaController.create);
router.get('/', motoristaController.getMotoristas)

module.exports = router;