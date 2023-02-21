const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    categoryName: {
        type: String,
    },
    image: {
        type: String
    }

},{ timestamps: true});

const category = mongoose.model('category', categorySchema)
module.exports = category;

 