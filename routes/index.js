const express = require('express');
const router = express.Router();
const restaurant = require('../models/restaurant');
// Posible query mostrar todo: const restaurants = await restaurant.find({ }).lean()
//desc Login/Landin page
//@route get /
router.get('/', async (req, res) => {
    try{
        const restaurants = await restaurant.find().sort( { rate: -1 } ).limit(5).lean();
        res.render('home', {
            restaurants,
        })


   } catch (err) {
        console.error(err)
        res.render('error/500')

   }

})
// @desc abaut
// @route GET /abaut
router.get('/about', (req, res) => {
    res.render('about')
})

// @desc contact
// @route GET /contact
router.get('/contact', (req, res) => {
    res.render('contact')
})

module.exports = router;
