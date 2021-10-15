const express = require('express');
const router = express.Router()
const Quotes = require('../Models/quotes');


// get all routes
router.get('/', async (req, res) => {
    const quote= await Quotes.find();
    res.json(quote);
    
});


// post to all route
router.post('/new', async (req, res) => {
    const newQuote = new Quotes(req.body);
    const savedQuote = await newQuote.save();
    res.json(newQuote);
});


// getting specific route
router.get('/get/:id', async (req, res) => {
    const q = await Quotes.findById({ _id: req.params.id });
    res.json(q)
});

// delete quote
router.delete('/delete/:id', async (req, res) => {
    const result = await Quotes.findByIdAndDelete({_id: req.params.id});
    res.json(result);
})

// update a quote
router.patch('/update/:id',async  (req, res) => {
    const updatedQuote = await Quotes.updateOne({ _id: req.params.id}, {$set: req.body});
    res.json(updatedQuote)
});

// getting random quote
router.get('/random', async (req, res) =>  {
    const count = await Quotes.countDocuments();
    const random = Math.floor(Math.random() * count);
    // To skip between diferent quote when requesting for a quote
    const q = await Quotes.findOne().skip(random)
    res.json(q);
})

module.exports = router;