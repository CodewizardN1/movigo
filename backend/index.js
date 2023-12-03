const express = require('express')
const cors = require('cors')
const app = express()
const homeMoviesPost = require('./routes/movies')
const homeMoviesGet = require('./routes/movies')
const homeMoviesGetId = require('./routes/movies')
const cardMoviesPost = require('./routes/cardMovies')
const cardMoviesGet = require('./routes/cardMovies')
const cardMoviesGetId = require('./routes/cardMovies')
const cardCartoonsPost = require('./routes/cardCartoons')
const cardCartoonsGet = require('./routes/cardCartoons')
const cardCartoonsGetId = require('./routes/cardCartoons')

const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/movigo')
.then(() => {
    console.log("Mongo ishladi")
})
.catch((err) => {
    console.error("Mongoda xatolik bor" , err)
})
app.use(cors({
    origin: '*',
    credentials: true,
    methods: ["GET" , "POST" , "PUT" , "DELETE"]
}))
app.use(express.json())
// homeMovies
app.use('/api/create-movies/new', homeMoviesPost)
app.use('/api/get-movies', homeMoviesGet)
app.use('/api/getId-movies', homeMoviesGetId)
// cardMovies
app.use('/api/create-cardMovies/new', cardMoviesPost)
app.use('/api/get-cardMovies', cardMoviesGet)
app.use('/api/getId-cardMovies', cardMoviesGetId)
// cardCartoons
app.use('/api/create-cardCartoons/new', cardCartoonsPost)
app.use('/api/get-cardCartoons', cardCartoonsGet)
app.use('/api/getId-cardCartoons', cardCartoonsGetId)





const port = process.env.PORT || 5000
app.listen(port , () => {
    console.log(`${port} chi port ishga tushdi`)
})

