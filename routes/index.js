const express = require('express');
const router = express.Router();
const restaurant = require('../models/restaurant');
// Posible query mostrar todo: const restaurant = await restaurant.find({ }).lean()
// db.restaurant.find({"_id":ObjectId("6026b3662c792472219fbf6c")});
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

//  @desc    Show 
//  @route   GET /stories/:id
 router.get('/restaurant/:id', async (req, res) => {
     try {
        let restaurants = await restaurant.findById(req.params.id).lean();
        res.render('restaurant', {
            restaurants,
        })

  
      } catch (err) {
        console.error(err)
        res.render('error/404')
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
// @desc Post
// @route GET /agregar
router.post('/agregar', async (req, res) => {
    try{
        console.log(req)
       req.body.user = req.user
       
       await restaurant.create(req.body)
       res.redirect('admin')

   } catch (err) {
        console.error(err)
        res.render('error/500')

   }
})
module.exports = router;
