const express = require('express');
const router = express.Router();
const login = require('../middleware/login');

const auxiliarController = require('../controllers/auxiliar-controller.js');

router.post('/', auxiliarController.create);
router.get('/', auxiliarController.getAuxiliares)

module.exports = router;