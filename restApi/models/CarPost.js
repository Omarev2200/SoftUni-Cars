const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const carPostSchema = new Schema({

    model: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    imgUrl: {
        type: String,
        required: true,
    },
    mileage: {
        type: String,
        required: true,
    },
    year: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    engine: {
        type: String,
        required: true,
    },
    contact: {
        type: String,
        required: true,
    },

    author: {
        type: ObjectId,
        ref: "User"
    },

});

module.exports = new Model('CarPost', carPostSchema);