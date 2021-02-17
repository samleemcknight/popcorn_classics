require("dotenv").config()
const express = require("express")
const axios = require("axios")
const ejsLayouts = require("express-ejs-layouts")
const app = express()

// middleware
app.use(require('morgan')('dev'))
app.set('view engine', 'ejs')
app.use(ejsLayouts)

app.use(express.static(__dirname + './assets/'))
// Routes
app.get('/', (req, res) => {
    console.log(req.query.title)
    // base url to api
    const requestUrl = "http://www.omdbapi.com/"
    // make a request for a list of movies

    axios.get(requestUrl, {
        params: {
            apikey: process.env.API_KEY,
            s: req.query.title || "Rashomon",
            type: "movie"
        }
    }).then(response => {
        res.render('home', {movies: response.data.Search})
    })
})


app.listen(8000, () => {
    console.log("I'm listening... on 8000")
})