const express = require('express');
const router = express.Router();
const login = require('../middleware/login');

const userController = require('../controllers/user-controller.js');

//router.post('/', login.required, userController.create);
router.post('/', userController.create);
router.post('/login', userController.login);
//obter usuario pelo id ou token
router.get('/', login.required, userController.getUser);

module.exports = router;