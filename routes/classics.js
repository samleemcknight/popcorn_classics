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
            res.render('classics/index', {movies: foundMovies})
        })
})

// GET - classics/:id

router.get('/:id', (req, res) => {
    // use the :id get info about a classic movie in our DB
    db.classic.findByPk(req.params.id)
    .then((foundMovie) => {
        // call api to retrieve more data about found movie
        axios.get(process.env.API_URL, {
            params: {
                apikey: process.env.API_KEY,
                i: foundMovie.imdbId,
            }
        }).then((apiResponse) => {
            console.log(apiResponse)
            res.render('classics/show', {movieInfo: apiResponse.data})
        })
    })
    // set up an API URL
    
    // use imbdbId to make a request to the API
    // use data from API to render a page with all info
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