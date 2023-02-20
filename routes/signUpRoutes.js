const express = require('express');

const router = express.Router()

const controller = require('../controller/signUpController')

router.post('/signup', controller.signup)


module.exports = router;
