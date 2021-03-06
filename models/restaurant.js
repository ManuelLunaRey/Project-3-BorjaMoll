const mongoose = require('mongoose')

const restaurantSchema = new mongoose.Schema({
  
  name: {
    type: String,
    required: true,
  },
  rate: {
    type: Number,
    default: 1,
    enum: [1,2,3,4,5,6,7],
  },
  locality: {
    type: String,
  },
  price_index: {
    type: Number,
  },
  phone: {
    type: Number,
  },
  img: {
    type: String,
  },
  Terrace: {
    type: Boolean,
  },
  Capacity: {
    type: Number,
  },
  home_service: {
    type: Boolean,
  },
  direccion: {
    type: String,
  },
  postalcode: {
    type: Number,
  },
  email: {
    type: String,
  },
  timetable: {
    type: String,
  },
  web: {
    type: String,
  },
  typeKitchen: {
    type: String,
    default: "Española",
    enum: [ "Española","china","Italiana","Argentina","Uruguaya","Indu","Japonesa","Mexicana"],
  },
})

module.exports = mongoose.model('restaurant', restaurantSchema)