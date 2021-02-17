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
    res.redirect('/classics')
})

module.exports = router