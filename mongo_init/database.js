// db.js
db.restaurants.insert({
  _id :  ObjectId('603518dbb2131d41b9e71e8b'),
  name: "Bar Tolo",
  rate: 7,
  locality: "Palma",
  direccion: "Calle Cala Gran",
  price_index: 5.5,
  img: "BarTolo.jpg",
  phone: 684125874,
  terrace: true,
  capacity: 100,
  homeService: true,
  postalcode: 07002,
  email: "BarTolo@gmail.com",
  timetable: "6:00-10:00",
  web: "https://www.quay.com.au/",
  typeKitchen: [
    "Española","china"
  ],
  platos: [
   ObjectId('6034df4c99692eee14771690'), 
   ObjectId('6034df4c99692eee14771691'), 
   ObjectId('6034df4c99692eee14771692'), 
   ObjectId('6034df4c99692eee14771693'), 
  
  ],

})
db.restaurants.insert({
  _id :  ObjectId('603518dbb2131d41b9e71e8c'),
  name: "Bar Fuentes",
  rate: 4,
  locality: "Inca",
  direccion: "Calle Fernado Costa 1",
  price_index: 3.33,
  phone: 687123497,
  img: "BarFuente.jpg",
  terrace: false,
  capacity: 125,
  homeService: true,
  postalcode: 07005,
  email: "BarFunetes@gmail.com",
  timetable: "8:00-10:00",
  web: "https://www.quay.com.au/",
  typeKitchen: [
    "Española","Italiana"
  ],
  platos: [
    ObjectId('6034df4c99692eee14771690'), 
    ObjectId('6034df4c99692eee14771691'), 
    ObjectId('6034df4c99692eee14771692'), 
    ObjectId('6034df4c99692eee14771693'), 
   
   ]
})
db.restaurants.insert({
  _id :  ObjectId('603518dbb2131d41b9e71e8d'),
  name: "Bar Bocados",
  rate: 10,
  locality: "Palma",
  direccion: "Camino de la vida ",
  price_index: 6.2,
  img: "BarBocados.jpeg",
  phone: 658124879,
  Terrace: true,
  Capacity: 50,
  home_service: false,
  postalcode: 07001,
  email: "BarBocados@gmail.com",
  timetable: "8:00-10:00",
  web: "https://www.quay.com.au/",
  typeKitchen: [
    "Argentina","Uruguaya"
  ],
  platos: [
    ObjectId('6034df4c99692eee14771690'), 
    ObjectId('6034df4c99692eee14771691'), 
    ObjectId('6034df4c99692eee14771692'), 
    ObjectId('6034df4c99692eee14771693'), 
   
   ]
})
db.restaurants.insert({
  _id :  ObjectId('603518dbb2131d41b9e71e8e'),
  name: "Bar Frontera",
  rate: 6,
  locality: "Palma",
  direccion: "Calle belazquez",
  price_index: 10.95,
  img: "BarFrontera.jpg",
  phone: 658124982,
  Terrace: true,
  Capacity: 10,
  home_service: true,
  postalcode: 07005,
  email: "BarFrontera@gmail.com",
  timetable: "8:00-12:00",
  web: "https://www.quay.com.au/",
  typeKitchen: [
    "Española","Indu"
  ],
  platos: [
    ObjectId('6034df4c99692eee14771690'), 
    ObjectId('6034df4c99692eee14771691'), 
    ObjectId('6034df4c99692eee14771692'), 
    ObjectId('6034df4c99692eee14771693'), 
   
   ]

})
db.restaurants.insert({
  _id :  ObjectId('603518dbb2131d41b9e71e8f'),
  name: "Bar Toledo",
  rate: 5,
  locality: "Manacor",
  direccion: "Calle Toledillo",
  price_index: 8.94,
  img: "BarToledo.jpg",
  phone: 658412638,
  Terrace: true,
  Capacity: 500,
  home_service: true,
  postalcode: 07007,
  email: "BarToledo@gmail.com",
  timetable: "8:00-10:00",
  web: "https://www.quay.com.au/",
  typeKitchen: [
    "Española"
  ],
  platos: [
    ObjectId('6034df4c99692eee14771690'), 
    ObjectId('6034df4c99692eee14771691'), 
    ObjectId('6034df4c99692eee14771692'), 
    ObjectId('6034df4c99692eee14771693'), 
   
   ]
})
db.restaurants.insert({
  _id :  ObjectId('603518dbb2131d41b9e71e90'),
  name: "Bar Ruben",
  rate: 6.5,
  locality: "Consell",
  direccion: "Calle Del moro 2",
  price_index: 5,
  img: "BarRuben.jpg",
  phone: 648712985,
  Terrace: true,
  Capacity: 20,
  home_service: true,
  postalcode: 07023,
  email: "BarRuben@gmail.com",
  timetable: "8:00-10:00",
  web: "https://www.quay.com.au/",
  typeKitchen: [
    "Japonesa","China"
  ],
  platos: [
    ObjectId('6034df4c99692eee14771690'), 
    ObjectId('6034df4c99692eee14771691'), 
    ObjectId('6034df4c99692eee14771692'), 
    ObjectId('6034df4c99692eee14771693'), 
   
   ]

})
db.restaurants.insert({
  _id :  ObjectId('603518dbb2131d41b9e71e91'),
  name: "Bar Mizi",
  rate: 7,
  locality: "Palma",
  direccion: "Calle belazquez 12",
  price_index: 2.33,
  img: "BarMizi.jpg",
  phone: 648721698,
  Terrace: false,
  Capacity: 10,
  home_service: false,
  postalcode: 07001,
  timetable: "8:00-10:00",
  email: "BarMizi@gmail.com",
  web: "https://www.quay.com.au/",
  typeKitchen : [
    "Española","china","Japonesa","Mexicana"
  ],
  platos: [
    ObjectId('6034df4c99692eee14771690'), 
    ObjectId('6034df4c99692eee14771691'), 
    ObjectId('6034df4c99692eee14771692'), 
    ObjectId('6034df4c99692eee14771693'), 
   ]
})