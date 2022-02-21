const express = require('express');
const router = express.Router();
const login = require('../middleware/login');

const zonaController = require('../controllers/zona-controller.js');

router.post('/', login.required, zonaController.create);

module.exports = router;