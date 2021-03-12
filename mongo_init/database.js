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
  platos: [{
    _id: ObjectId('6034df4c99692eee14771690'),
    allergens: [
      {
          name: "fruto seco",
          description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
          allergenEffects: "iritacion"
      },
      {
        name: "mariscos",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        allergenEffects : "bomitos"
      },
      {
        name: "carne",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        allergenEffects: "bomitos"
      }
 
 ],
 name: "Pato a la pequinesa",
 description: "Este plato tiene pato"
  }
   
  
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
  platos: [{
    _id: ObjectId('6034df4c99692eee14771692'),
    allergens: [
          {
            name: "fruto seco",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            allergenEffects: "iritacion"
          },
          {
            name: "mariscos",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            allergenEffects: "bomitos"
          },
          {
            name: "carne",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            allergenEffects: "bomitos"
          }
     
     ],
    nombre_del_plato: "Ensalada de garbanzos",
    description: "Este plato tiene garbanzos"
  },{
    _id: ObjectId('6034df4c99692eee14771690'),
    allergens: [
      {
          name: "fruto seco",
          description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
          allergenEffects: "iritacion"
      },
      {
        name: "mariscos",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        allergenEffects : "bomitos"
      },
      {
        name: "carne",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        allergenEffects: "bomitos"
      }
 
 ],
 name: "Pato a la pequinesa",
 description: "Este plato tiene pato" 
  }
    
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
  platos: [{
    _id: ObjectId('6034df4c99692eee14771693'),
    allergens : [
      {
        name: "fruto seco",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        allergenEffects: "iritacion"
      },
      {
        name: "mariscos",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        allergenEffects: "bomitos"
      },
      {
        name: "carne",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        allergenEffects: "bomitos"
      }
 
 ],
 name: "Patatas brabas",
 description: "Este plato tiene patatas"
  },{
    _id: ObjectId('6034df4c99692eee14771693'),
    allergens : [
      {
        name: "fruto seco",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        allergenEffects: "iritacion"
      },
      {
        name: "mariscos",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        allergenEffects: "bomitos"
      },
      {
        name: "carne",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        allergenEffects: "bomitos"
      }
 
 ],
 name: "Patatas con marisco fresco",
 description: "Este plato tiene marisco"
  }
    
   
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
  platos: [{
    _id: ObjectId('6034df4c99692eee14771693'),
    allergens : [
      {
        name: "pescado",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        allergenEffects: "iritacion"
      },
      {
        name: "lechuga",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        allergenEffects: "bomitos"
      },
      {
        name: "palitos de cangrejo",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        allergenEffects: "bomitos"
      }
 
 ],
 name: "Ensalada de pescado",
 description: "Este plato tiene pescado"
  },{
    _id: ObjectId('6034df4c99692eee14771693'),
    allergens : [
      {
        name: "lacteos",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        allergenEffects: "iritacion"
      },
      {
        name: "patata",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        allergenEffects: "bomitos"
      }
     
 
 ],
 name: "pure de patata",
 description: "Este plato tiene patatas"
  }
    
   
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
  platos: [{
    _id: ObjectId('6034df4c99692eee14771693'),
    allergens : [
      {
        name: "trigo",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        allergenEffects: "iritacion"
      },
      {
        name: "carne",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        allergenEffects: "bomitos"
      },
      {
        name: "frutos secos",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        allergenEffects: "bomitos"
      }
 
 ],
 name: "macarrones con frutos secos",
 description: "Este plato tiene trigo"
  },{
    _id: ObjectId('6034df4c99692eee14771693'),
    allergens : [
      {
        name: "lacteos",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        allergenEffects: "iritacion"
      },
      {
        name: "trigo",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        allergenEffects: "bomitos"
      },
      {
        name: "carne",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        allergenEffects: "bomitos"
      }
 
 ],
 name: "pizza boloñesa",
 description: "Este plato tiene lacteos"
  }
   
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
  platos: [{
    _id: ObjectId('6034df4c99692eee14771693'),
    allergens : [
      {
        name: "trigo",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        allergenEffects: "iritacion"
      },
      {
        name: "carne",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        allergenEffects: "bomitos"
      },
      {
        name: "frutos secos",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        allergenEffects: "bomitos"
      }
 
 ],
 name: "macarrones fustichini",
 description: "Este plato tiene trigo"
  },{
    _id: ObjectId('6034df4c99692eee14771693'),
    allergens : [
      {
        name: "lacteos",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        allergenEffects: "iritacion"
      },
      {
        name: "trigo",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        allergenEffects: "bomitos"
      },
      {
        name: "carne",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        allergenEffects: "bomitos"
      }
 
 ],
 name: "pizza bumisini",
 description: "Este plato tiene lacteos" 
  }
     
   
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
  platos: [{
    _id: ObjectId('6034df4c99692eee14771693'),
    allergens : [
      {
        name: "carne",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        allergenEffects: "iritacion"
      },
      {
        name: "patatas",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        allergenEffects: "bomitos"
      },
      {
        name: "frutos secos",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        allergenEffects: "bomitos"
      }
 
 ],
 name: "Filete a la unichi",
 description: "Este plato tiene carne"
  },{
    _id: ObjectId('6034df4c99692eee14771693'),
    allergens : [
      {
        name: "frutos secos",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        allergenEffects: "iritacion"
      },
      {
        name: "pescado",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        allergenEffects: "bomitos"
      }
      
 
 ],
 name: "ensalada de garbanzos",
 description: "Este plato tiene frutos secos" 
  }

   ]
})
