const mongoose = require('mongoose')



const cardMoviesSchema = new mongoose.Schema({
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
        type: String,
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
const CardMovies = mongoose.model('CardMovies', cardMoviesSchema)
module.exports = CardMovies