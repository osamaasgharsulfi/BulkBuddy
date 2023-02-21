const express = require('express');
const router = express.Router()

const { verifyjwt } = require('../../middleware/authMiddleware')
const controller = require('../../controller/Category/addCategory')

const multer = require('multer')
let upload = multer({ dest: 'uploads/CategoryImage' })


//Configuration for Multer
const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/CategoryImage");
    },
    filename: (req, file, cb) => {
        const ext = file.mimetype.split("/")[1];
        cb(null, `/${file.fieldname}-${Date.now()}.${ext}`);
    },
});

const multerFilter = (req, file, cb) => {
    if (file.mimetype.split("/")[1] === "jpeg" || file.mimetype.split("/")[1] === "png" ||
        file.mimetype.split("/")[1] === "GIF") {
        cb(null, true);
    } else {
        cb(new Error("Not a jpg File!!"), false);
    }
};

upload = multer({
    storage: multerStorage,
    fileFilter: multerFilter,
});


router.post('/addCategory', verifyjwt, upload.single('image') ,controller.addCategory)


module.exports = router;
