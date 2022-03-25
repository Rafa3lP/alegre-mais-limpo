const express = require('express');
const router = express.Router();
const login = require('../middleware/login');

const userController = require('../controllers/user-controller.js');

// criar usuario
router.post('/', login.required, userController.create);

// logar
router.post('/login', userController.login);

//obter usuario pelo id ou token
router.get('/', userController.getUser);

module.exports = router;