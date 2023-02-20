const express = require('express');

const router = express.Router()

const controller = require('../controller/loginController')

router.post('/login', controller.login)


module.exports = router;
