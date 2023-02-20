const express = require('express')
const signUp = require('../Models/signup')
const bcrypt = require("bcryptjs");
const { responseMessage } = require('../utils/responseMessage')

exports.signup = async (req, res) => {
    try {

        let { firstName, lastName, mobileNumber, gender, email, password, } = req.body

        email = email.toLowerCase()

        let hashPassword = await bcrypt.hash(password, 10)

        let emailCheck = await signUp.find({ 'email': email })

        if (emailCheck) return responseMessage(res, 401, 0, 'Email already exists', null)

        let response = await signUp.create({
            firstName: firstName,
            lastName: lastName,
            mobileNumber: mobileNumber,
            gender: gender,
            email: email,
            password: hashPassword,
            disableAccount: false,
            deleteAccount: true,
            role: 'user'
        })

        if (!response) return responseMessage(res, 400, 0, 'Error Occcured', null)

        return responseMessage(res, 200, 1, 'User Register Succesfully', null)

    }
    catch (error) {
        //return res.status(400).send({Errormessage: 'Error Occured', error.message})
        console.log(error)
    }

}