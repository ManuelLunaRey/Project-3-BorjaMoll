const express = require('express');
const router = express.Router();
const restaurant = require('../models/restaurant');
// Posible query mostrar todo: const restaurants = await restaurant.find({ }).lean()
// db.restaurants.find({"_id":ObjectId("6026b3662c792472219fbf6c")});
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
//desc Login/Landin page
//@route get /
router.get('/admin', async (req, res) => {
    try{
        const restaurants = await restaurant.find().lean();
        res.render('admin', {
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

// @desc agregar
// @route GET /agregar
router.get('/agregar', (req, res) => {
    res.render('agregar')
})
module.exports = router;
