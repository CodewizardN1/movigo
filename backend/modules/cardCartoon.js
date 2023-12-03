const mongoose = require('mongoose')



const cartoonsSchema = new mongoose.Schema({
    image: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    type: {
        type: String,
        require: true
    },
    genre: {
        type: String,
        require: true
    },
    year: {
        type: Number,
        require: true
    },
    country: {
        type: String,
        require: true
    },
    lang: {
        type: String,
        require: true
    },
    countinuous: {
        type: String,
        require: true
    },
    age: {
        type: String,
        require: true
    },
    video: {
        type: String,
        require: true
    },
    trailer: {
        type: String,
        require: true
    },
})
const CardCartoon = mongoose.model('CardCartoon', cartoonsSchema)
module.exports = CardCartoon