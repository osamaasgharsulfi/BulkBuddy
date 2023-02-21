const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const signupSchema = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    gender: {
        type: String,
        enum: ["Male", "Female"],
    },
    mobileNumber: {
        type: Number
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    disableAccount: {
        type: Boolean
    },
    deleteAccount: {
        type: Boolean
    },
    role: {
        type: String
    }
})

var signup = mongoose.model('Users', signupSchema)
module.exports = signup;