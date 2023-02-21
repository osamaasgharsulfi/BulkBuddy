const express = require('express');
const router = express.Router()
const path = require('path')
const { verifyjwt } = require('../../middleware/authMiddleware')
const { addProduct,
    getAllProducts
} = require('../../controller/Product/ProductController')

const multer = require('multer')
// let upload = multer({ dest: 'uploads/ProductImage' })


//Configuration for Multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../uploads/ProductImage'))
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + file.originalname.match(/\..*$/)[0])
    }
});

const multi_upload = multer({
    storage,
    limits: { fileSize: 10 * 1024 * 1024 }, // 1MB
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            const err = new Error('Only .png, .jpg and .jpeg format allowed!')
            err.name = 'ExtensionError'
            return cb(err);
        }
    },
}).array('Images', 10)



router.post('/addProduct', verifyjwt, multi_upload, addProduct)

router.get('/getAllProducts', verifyjwt, getAllProducts)

module.exports = router;
