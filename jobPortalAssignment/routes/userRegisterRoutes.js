const UserController = require('../controller/userRegistercontroller');
const express = require('express');

const router = express.Router();

router.get('/jobportal/getuser', UserController.getData);

router.post('/jobportal/register', UserController.saveData);

router.post('/jobportal/login', UserController.userLogin);

module.exports = router;