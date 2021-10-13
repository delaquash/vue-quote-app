const express = require('express');
const router = express.Router()
const Quotes = require('../Models/quotes');


// get all routes
router.get('/', (req, res) => {
    res.send('Hello World')
    
});

router.post('/new', async (req, res) => {
    const newQuote = new Quotes(req.body);
    const savedQuote = await newQuote.save();
    res.json(savedQuote);

});

module.exports = router;