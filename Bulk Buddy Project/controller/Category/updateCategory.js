const { responseMessage } = require("../../utils/responseMessage")
const categoryModel = require('../../Models/addCategory')

exports.updateCategory = async (req, res) => {
    try {

        let { categoryID ,categoryName } = req.body

        if(!categoryName) return responseMessage(res, 401, 0, 'Category field is required!', null)

        categoryName = categoryName.toLowerCase()


        // if(!req.file) return responseMessage(res, 401, 0, 'image field is required', null)

        if(req.file){
            
            var image = req.file.path
        }


        let update= { 
            ...req.body
        }

        const categoryCheck = await categoryModel.findByIdAndUpdate(categoryID, update)

        if (!categoryCheck) return responseMessage(res, 401, 0, 'No category found!.', null)


        return responseMessage(res, 200, 1, 'Category updated successfully', null)

    }
    catch (error) {
        //return res.status(400).send({Errormessage: 'Error Occured', error.message})
        console.log(error)
    }

}