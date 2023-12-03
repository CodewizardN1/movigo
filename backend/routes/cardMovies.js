const CardMovies = require('../modules/cardMovie')
const express = require('express')
const router = express.Router()

router.post('/', async(req, res) => {
    const cardMovie = await CardMovies.findOne({name: req.body.name})
    if(cardMovie)
        return res.status(400).send('Bunday malumot mavjud')
    if(!req.body.image) 
        return res.status(400).send("Malumot to'liq emas")
    if(!req.body.name) 
        return res.status(400).send("Malumot to'liq emas")
    if(!req.body.description) 
        return res.status(400).send("Malumot to'liq emas")
    if(!req.body.type) 
        return res.status(400).send("Malumot to'liq emas")
    if(!req.body.genre) 
        return res.status(400).send("Malumot to'liq emas")
    if(!req.body.year) 
        return res.status(400).send("Malumot to'liq emas")
    if(!req.body.country) 
        return res.status(400).send("Malumot to'liq emas")
    if(!req.body.lang) 
        return res.status(400).send("Malumot to'liq emas")
    if(!req.body.countinuous) 
        return res.status(400).send("Malumot to'liq emas")
    if(!req.body.age) 
        return res.status(400).send("Malumot to'liq emas")
    if(!req.body.video) 
        return res.status(400).send("Malumot to'liq emas")
    if(!req.body.trailer) 
        return res.status(400).send("Malumot to'liq emas")




    let moviesSave = new CardMovies({
            image: req.body.image,
            name: req.body.name,
            description: req.body.description,
            type: req.body.type,
            year: req.body.year,
            genre: req.body.genre,
            country: req.body.country,
            lang: req.body.lang,
            countinuous: req.body.countinuous,
            age: req.body.age,
            video: req.body.video,
            trailer: req.body.trailer,
    })
    const save = await moviesSave.save()
    res.send(save)
})


router.get('/', async(req, res) => {
    const getData = await CardMovies.find()
    res.send(getData)
})



router.get('/:id' , async (req,res) => {
    CardMovies.findById(req.params.id)
    .then((response) => {
        res.status(200).json({
            project:response
        })
    })
})

module.exports = router