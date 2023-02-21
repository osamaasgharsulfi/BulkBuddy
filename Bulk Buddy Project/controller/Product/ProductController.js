const ProductModel = require('../../Models/ProductModel')
const express = require('express')
const { responseMessage } = require('../../utils/responseMessage')
const categoryModel = require('../../Models/addCategory')
const mongoose = require('mongoose')

exports.addProduct = async (req, res) => {
    try {

        let { Name, Description, Price, CategoryID } = req.body

        if (!Name || !Description || !Price || !CategoryID) return responseMessage(res, 401, 0, 'All fields are reuired', null)

        if (!mongoose.isValidObjectId(CategoryID)) return responseMessage(res, 401, 0, `Enter valid id`, null)


        if (!req.files) return responseMessage(res, 401, 0, 'image field is required', null)

        const categoryExist = await categoryModel.findById(CategoryID)
        if (!categoryExist) return responseMessage(res, 404, 0, `No Category found with ID:${CategoryID} `, null)

        var img = []
        let Imagedata = req.files
        for (let i = 0; i < Imagedata.length; i++) {
            // console.log(Imagedata[i].path)
            img.push(Imagedata[i].path)
        }

        ProductModel.create({
            Name: Name,
            Description: Description,
            Price: Price,
            CategoryID: CategoryID,
            Images: img
        })

        return responseMessage(res, 200, 1, 'Product addded Succesfully', null)

    }
    catch (error) {
        //return res.status(400).send({Errormessage: 'Error Occured', error.message})
        console.log(error)
    }

}


exports.getAllProducts = async (req, res) => {
   try{
    let getProducts = await ProductModel.find().populate('CategoryID')
    return responseMessage(res, 200, 1, 'success', getProducts)
   }
    catch (error) {
        //return res.status(400).send({Errormessage: 'Error Occured', error.message})
        console.log(error)
    }
}




