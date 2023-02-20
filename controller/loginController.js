const express = require('express')
const signUp = require('../Models/signup')
const bcrypt = require("bcryptjs");
const { responseMessage } = require('../utils/responseMessage')
const jwt = require('jsonwebtoken');


exports.login = async (req, res) => {
    try {

        let { email, password, } = req.body

        email = email.toLowerCase()

        const emailCheck = await signUp.findOne({ 'email': email })

        if (!emailCheck) return responseMessage(res, 401, 0, 'Invalid Credientials', null)

        const passwordCheck = await bcrypt.compare(password, emailCheck.password)

        if (!passwordCheck) return responseMessage(res, 401, 0, 'Invalid Credientials', null)

        var token = jwt.sign({ role: emailCheck.role }, process.env.JWT_SECRET);

        let data = {
            ID: emailCheck._id,
            firstName: emailCheck.firstName,
            lastName: emailCheck.lastName,
            gender: emailCheck.gender,
            mobileNumber: emailCheck.mobileNumber,
            email: emailCheck.email,
            token: token
        }

        return responseMessage(res, 200, 1, 'User Logged in  Succesfully', data)

    }
    catch (error) {
        //return res.status(400).send({Errormessage: 'Error Occured', error.message})
        console.log(error)
    }

}