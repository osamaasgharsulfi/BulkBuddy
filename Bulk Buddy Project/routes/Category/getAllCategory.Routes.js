const express = require('express');

const router = express.Router()
const { verifyjwt } = require('../../middleware/authMiddleware')


const {getAllCategory} = require('../../controller/Category/getAllCategory')

router.get('/getAllCategory', verifyjwt ,getAllCategory)


module.exports = router;
