const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const productSchema = mongoose.Schema({
    Name: { type: String },

    Description: { type: String },

    Images: { type: Array },

    Price: {
        type: String
    },
    CategoryID: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'category'
        }
    ]

}, {
    timestamps: true,
}
) 

module.exports = mongoose.model("Products", productSchema);
