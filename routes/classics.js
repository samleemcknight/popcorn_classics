const router = require("express").Router()
const axios = require("axios")
const db = require("../models")


// Routes

// GET - /classics
// show all 'classic' movies
router.get('/', (req, res) => {
    res.send("at classics index page")
})

// POST - /classics
// save a movie as a classic
router.post('/', (req ,res) => {
    // add to db 
    db.classic.findOrcreate({
        where: {
            imdbId: req.body.imdbId
        },
        default: {
            title: req.body.title
        }
    }).then(([movie, created]) =>  {
        res.redirect('/classics')
    })
})

module.exports = router