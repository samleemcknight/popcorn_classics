const router = require("express").Router()
const axios = require("axios")
const db = require("../models")


// Routes

// GET - /classics
// show all 'classic' movies
router.get('/', (req, res) => {
    db.classic.findAll()
        .then((foundMovies) => {
            console.log(foundMovies)
            // render the view once the findall has been completed
            res.render('classics/index.ejs', {movies: foundMovies})
        })
})

// POST - /classics
// save a movie as a classic
router.post('/', (req ,res) => {
    // add to db 
    db.classic.findOrCreate({
        where: {
            imdbId: req.body.imdbId
        },
        defaults: {
            title: req.body.title
        }
    }).then(([movie, created]) =>  {
        res.redirect('/classics/')
    })
})

module.exports = router