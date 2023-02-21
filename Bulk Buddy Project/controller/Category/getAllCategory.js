const { responseMessage } = require("../../utils/responseMessage")
const categoryModel = require('../../Models/addCategory')

exports.getAllCategory = async (req, res) => {
    try {

        const getAllCategories = await categoryModel.find()

        if(getAllCategories){

        // let data = {
        //     CategoryID: getAllCategories._id,
        //     categoryName : getAllCategories.categoryName,
        //     image : getAllCategories.image,
        //     createdAt : getAllCategories.createdAt,
        //     updatedAt : getAllCategories.updatedAt
        // }

        return responseMessage(res, 200, 1, 'success', getAllCategories)
    }


    }
    catch (error) {
        //return res.status(400).send({Errormessage: 'Error Occured', error.message})
        console.log(error)
    }

}