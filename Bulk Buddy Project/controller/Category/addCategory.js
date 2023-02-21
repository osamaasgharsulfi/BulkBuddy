const { responseMessage } = require("../../utils/responseMessage")
const categoryModel = require('../../Models/addCategory')

exports.addCategory = async (req, res) => {
    try {

        let { categoryName } = req.body

        if(!categoryName) return responseMessage(res, 401, 0, 'Category field is required!', null)

        categoryName = categoryName.toLowerCase()

        const categoryCheck = await categoryModel.findOne({ 'categoryName': categoryName })

        if (categoryCheck) return responseMessage(res, 401, 0, 'categoryName already exist.', null)

        if(!req.file) return responseMessage(res, 401, 0, 'image field is required', null)

        const image = req.file.path

        categoryModel.create({
            categoryName: categoryName,
            image : image,  
        })

        return responseMessage(res, 200, 1, 'Category added successfully', null)

    }
    catch (error) {
        //return res.status(400).send({Errormessage: 'Error Occured', error.message})
        console.log(error)
    }

}